import Alpine from 'alpinejs';
//import FRAMEWORKS from '@/frameworks.mjs';

const frameworksSelectedProxy = createLocaleStorageProxy('frameworks_display');

// set default value of frameworksSelectedProxy
if (!Object.values(frameworksSelectedProxy).length) {
	const initialFrameworkIds = ['react', 'svelte'];
	for (let i = 0; i < initialFrameworkIds.length; i++) {
		frameworksSelectedProxy[i] = initialFrameworkIds[i];
	}
}

Alpine.store('framework', {
	selectedIds: frameworksSelectedProxy,
	// get items(){
	//     return this.selectedIds.map(fmwId => FRAMEWORKS.find((f) => f.id === fmwId))
	// },
	hide(fmwId) {
		if (frameworksSelectedProxy.includes(fmwId)) {
			const frameworkIndex = frameworksSelectedProxy.indexOf(fmwId);
			delete frameworksSelectedProxy[frameworkIndex];
		}
		this.selectedIds = [...frameworksSelectedProxy];
	},
	show(fmwId) {
		if (!frameworksSelectedProxy.includes(fmwId)) {
			frameworksSelectedProxy.push(fmwId);
		}

		this.selectedIds = [...frameworksSelectedProxy];
	},
});
Alpine.start();

function createLocaleStorageProxy(key) {
	const storage = createLocaleStorage(key);

	return new Proxy(storage.getJSON() || [], {
		get(target, prop) {
			return target[prop];
		},
		set(target, prop, value, receiver) {
			target[prop] = value;
			storage.setJSON(receiver);
			return true;
		},
		deleteProperty(target, prop) {
			target.splice(prop, 1);
			storage.setJSON(target);
			return true;
		},
	});
}

function createLocaleStorage(k) {
	function get() {
		return localStorage.getItem(k);
	}
	return {
		get,
		getJSON() {
			var value = get();
			if (value) {
				try {
					return JSON.parse(value);
				} catch (err) {
					console.error({ getJSONErr: err });
					return undefined;
				}
			}
		},
		setJSON(o) {
			this.set(JSON.stringify(o));
		},
		set(v) {
			localStorage.setItem(k, v);
		},
		remove() {
			localStorage.removeItem(k);
		},
	};
}
