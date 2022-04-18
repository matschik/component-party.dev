import fs from 'node:fs/promises';
import { packageDirectory } from 'pkg-dir';

async function ensureDir(path) {
	try {
		await fs.access(path);
	} catch {
		await fs.mkdir(path);
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

	async function setKey(key, data) {
		await fs.writeFile(getPath(key), data);
	}

	async function getKey(key) {
		if (await hasKey(key)) {
			return await fs.readFile(getPath(key), 'utf8');
		}
	}

	async function hasKey(key) {
		try {
			await fs.access(getPath(key));
		} catch {
			return false;
		}
		return true;
	}

	async function deleteKey(key) {
		if (await hasKey(key)) {
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
		set: setKey,
		get: getKey,
		has: hasKey,
		delete: deleteKey,
		cleanKeyStartsWith,
	};
}
