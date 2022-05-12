import fs from 'node:fs/promises';
import crypto from 'crypto';

import createFsCache from '@/utils/createFsCache.js';

async function md5(data) {
	return crypto.createHash('md5').update(data).digest('hex');
}

async function fileExist(path) {
	try {
		await fs.access(path);
	} catch {
		return false;
	}
	return true;
}

export default async function createFileMapCache(name) {
	const cache = await createFsCache(name);

	async function _getPathHash(path) {
		return md5(path);
	}

	async function _getCacheKey(path) {
		const { mtimeMs } = await fs.stat(path);
		const pathHash = await _getPathHash(path);
		return `${pathHash}_${mtimeMs}`;
	}

	async function set(path, data) {
		if (await fileExist(path)) {
			const pathHash = await _getPathHash(path);
			await cache.cleanKeyStartsWith(pathHash);
			const cacheKey = await _getCacheKey(path);
			await cache.set(cacheKey, data);
		}
	}

	async function has(path) {
		const cacheKey = await _getCacheKey(path);
		return await cache.has(cacheKey);
	}

	async function get(path) {
		const cacheKey = await _getCacheKey(path);
		return await cache.get(cacheKey);
	}

	return {
		set,
		get,
		has,
	};
}
