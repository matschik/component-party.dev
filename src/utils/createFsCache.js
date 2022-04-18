import fs from 'node:fs/promises';
import { packageDirectory } from 'pkg-dir';

async function ensureDir(path) {
	try {
		await fs.access(path);
	} catch (err) {
		if (err.code === 'ENOENT') {
			await fs.mkdir(path).catch(() => {});
		}
	}
}

export default async function createFsCache(name) {
	const pkgDir = await packageDirectory();
	const fsCacheDir = `${pkgDir}/node_modules/.fs-cache`;
	const cacheDir = `${fsCacheDir}/${name}`;
	await ensureDir(fsCacheDir);
	await ensureDir(cacheDir);

	function getPath(key) {
		return `${cacheDir}/${key}`;
	}

	async function set(key, data) {
		await fs.writeFile(getPath(key), data);
	}

	async function get(key) {
		if (await has(key)) {
			return await fs.readFile(getPath(key), 'utf8');
		}
	}

	async function has(key) {
		try {
			await fs.access(getPath(key));
		} catch {
			return false;
		}
		return true;
	}

	async function deleteKey(key) {
		if (await has(key)) {
			return await fs.deleteFile(getPath(key));
		}
	}

	async function cleanKeyStartsWith(keyStart, except) {
		const files = await fs.readdir(cacheDir);
		for (const file of files) {
			if (file.startsWith(keyStart) && except && key !== except) {
				deleteKey(file);
			}
		}
	}

	return {
		set,
		get,
		has,
		delete: deleteKey,
		cleanKeyStartsWith,
	};
}
