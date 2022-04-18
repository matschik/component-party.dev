export default function createCache({ expireSec } = {}) {
	const cache = {};

	function setCache(key, data) {
		cache[key] = {
			created: new Date().getTime(),
			expireSec,
			data,
		};
	}

	function getCache(key) {
		if (cache[key] && cache[key].expireSec && new Date().getTime() - cache[key].created >= cache[key].expireSec * 1000) {
			deleteKey(key);
		}

		return cache[key]?.data;
	}

	function hasKey(key) {
		return cache.hasOwnProperty(key);
	}

	function deleteKey(key) {
		// Remove the reference to the object on object `cache`.
		// The v8 garbage collector will pick up any objects with zero references for garbage collection.
		delete cache[key];
	}

	function cleanKeyStartsWith(keyStart, except) {
		for (const key in cache) {
			if (key.startsWith(keyStart) && except && key !== except) {
				deleteKey(key);
			}
		}
	}

	return {
		set: setCache,
		get: getCache,
		has: hasKey,
		delete: deleteKey,
		cleanKeyStartsWith,
	};
}
