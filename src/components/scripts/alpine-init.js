import Alpine from 'alpinejs';

Alpine.store('frameworksSelected', {
	_frameworksSelectedProxy: createLocaleStorageProxy('frameworks_display'),
	_urlStorage: createUrlStorage('f'),
	_selectedIds: [],
	init() {
		// set default value of frameworksSelectedProxy
		if (!Object.values(this._frameworksSelectedProxy).length) {
			const initialFrameworkIds = ['react', 'svelte'];
			for (let i = 0; i < initialFrameworkIds.length; i++) {
				this._frameworksSelectedProxy[i] = initialFrameworkIds[i];
			}
		}
		const frameworksFromUrl = this._urlStorage.get();
		this._selectedIds = frameworksFromUrl.length ? [...frameworksFromUrl] : [...this._frameworksSelectedProxy];
	},
	has(fmwId) {
		return this._selectedIds.includes(fmwId);
	},
	toggle(fmwId) {
		this.has(fmwId) ? this.hide(fmwId) : this.show(fmwId);
	},
	hide(fmwId) {
		if (this.has(fmwId)) {
			const frameworkIndex = this._frameworksSelectedProxy.indexOf(fmwId);
			delete this._frameworksSelectedProxy[frameworkIndex];
		}

		this._urlStorage.set(this._frameworksSelectedProxy);
		this._selectedIds = [...this._frameworksSelectedProxy];
	},
	show(fmwId) {
		if (!this.has(fmwId)) {
			this._frameworksSelectedProxy.push(fmwId);
		}

		this._urlStorage.set(this._frameworksSelectedProxy);
		this._selectedIds = [...this._frameworksSelectedProxy];
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

function createUrlStorage(k) {
	return {
		get() {
			const url = new URL(window.location.href);
			const frameworkQuery = url.searchParams.get(k);
			return frameworkQuery ? frameworkQuery.split('-') : [];
		},
		set(ids) {
			const url = new URL(window.location.href);
			url.searchParams.set(k, ids.join('-'));
			window.history.replaceState(null, document.title, url.toString());
		},
	};
}
