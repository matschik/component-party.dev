import FRAMEWORKS from '../../frameworks.mjs';

frameworkDisplayModule();

function frameworkDisplayModule() {
	const frameworkIds = FRAMEWORKS.map((f) => f.id);

	const $ = {
		fmwButtonHide: (framework) => document.querySelectorAll(framework ? `[data-framework-button-hide=${framework}]` : '[data-framework-button-hide]'),
		fmwButtonShow: (framework) => document.querySelectorAll(framework ? `[data-framework-button-show=${framework}]` : '[data-framework-button-show]'),
		fmwContent: (framework) => document.querySelectorAll(`[data-framework-content=${framework}]`),
		fmwContentContainer: () => document.querySelectorAll(`[data-framework-content-container]`),
	};

	const frameworksProxy = createLocaleStorageProxy('frameworks_display');

	function onFramework(framework) {
		return {
			show() {
				if (!frameworksProxy.includes(framework)) {
					frameworksProxy.push(framework);
				}

				apply();
			},
			hide() {
				if (frameworksProxy.includes(framework)) {
					const frameworkIndex = frameworksProxy.indexOf(framework);
					delete frameworksProxy[frameworkIndex];
				}
				apply();
			},
		};
	}

	function apply() {
		const $$fmwContentContainers = $.fmwContentContainer();
		for (const $fmwContentContainer of [...$$fmwContentContainers]) {
			const $$sortedFmwContent = [...$fmwContentContainer.children].sort(($fmwA, $fmwB) => {
				function getIndex($fmw) {
					const fmwId = $fmw.getAttribute('data-framework-content');
					return Object.values(frameworksProxy).indexOf(fmwId);
				}
				const fmwAIndex = getIndex($fmwA);
				const fmwBIndex = getIndex($fmwB);
				return fmwAIndex === fmwBIndex ? 0 : fmwAIndex > fmwBIndex ? 1 : -1;
			});
			const list = document.createDocumentFragment();
			for (const $fmw of $$sortedFmwContent) {
				list.appendChild($fmw);
			}
			$fmwContentContainer.appendChild(list);
		}

		for (const frameworkToShow of Object.values(frameworksProxy)) {
			for (const $el of $.fmwContent(frameworkToShow)) {
				$el.style.display = 'block';
			}
			for (const $el of $.fmwButtonShow(frameworkToShow)) {
				$el.style.opacity = '1';
			}
		}

		for (const frameworkToHide of arrayDiff(Object.values(frameworksProxy), frameworkIds)) {
			for (const $el of $.fmwContent(frameworkToHide)) {
				$el.style.display = 'none';
			}
			for (const $el of $.fmwButtonShow(frameworkToHide)) {
				$el.style.opacity = '0.5';
			}
		}
	}

	(function init() {
		if (!Object.values(frameworksProxy).length) {
			const initialFrameworkIds = ['react', 'svelte'];
			for (let i = 0; i < initialFrameworkIds.length; i++) {
				frameworksProxy[i] = initialFrameworkIds[i];
			}
		}

		apply();
	})();

	for (const $fmwButton of $.fmwButtonHide()) {
		const framework = $fmwButton.getAttribute('data-framework-button-hide');
		$fmwButton.addEventListener('click', () => {
			onFramework(framework).hide();
		});
	}

	for (const $fmwButton of $.fmwButtonShow()) {
		const framework = $fmwButton.getAttribute('data-framework-button-show');
		$fmwButton.addEventListener('click', () => {
			if (frameworksProxy.includes(framework)) {
				onFramework(framework).hide();
			} else {
				onFramework(framework).show();
			}
		});
	}
}

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

function arrayDiff(a1, a2) {
	var diff = {};

	for (var i = 0; i < a1.length; i++) {
		diff[a1[i]] = true;
	}

	for (var i = 0; i < a2.length; i++) {
		if (diff[a2[i]]) {
			delete diff[a2[i]];
		} else {
			diff[a2[i]] = true;
		}
	}

	return Object.keys(diff);
}
