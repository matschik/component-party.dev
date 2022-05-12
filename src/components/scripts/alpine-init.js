import Alpine from 'alpinejs';

Alpine.store('frameworksSelected', {
	frameworksSelectedProxy: createLocaleStorageProxy('frameworks_display'),
	selectedIds: [],
	init() {
		// set default value of frameworksSelectedProxy
		if (!Object.values(this.frameworksSelectedProxy).length) {
			const initialFrameworkIds = ['react', 'svelte'];
			for (let i = 0; i < initialFrameworkIds.length; i++) {
				this.frameworksSelectedProxy[i] = initialFrameworkIds[i];
			}
		}
		this.selectedIds = [...this.frameworksSelectedProxy];
	},
	has(fmwId) {
		return this.selectedIds.includes(fmwId);
	},
	toggle(fmwId) {
		this.has(fmwId) ? this.hide(fmwId) : this.show(fmwId);
	},
	hide(fmwId) {
		if (this.has(fmwId)) {
			const frameworkIndex = this.frameworksSelectedProxy.indexOf(fmwId);
			delete this.frameworksSelectedProxy[frameworkIndex];
		}
		this.selectedIds = [...this.frameworksSelectedProxy];
	},
	show(fmwId) {
		if (!this.has(fmwId)) {
			this.frameworksSelectedProxy.push(fmwId);
		}

		this.selectedIds = [...this.frameworksSelectedProxy];
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
