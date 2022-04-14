codeViewerModule();

function codeViewerModule() {
	function applyFileSelected(codeViewerId) {
		for (const $fileSelected of document.querySelectorAll(`[data-codeviewer=${codeViewerId}][data-file-selected]`)) {
			const filenameSelected = $fileSelected.getAttribute('data-file-selected');
			for (const $file of $fileSelected.querySelectorAll('[data-file]')) {
				const filename = $file.getAttribute('data-file');
				$file.style.display = filename === filenameSelected ? 'block' : 'none';
			}

			for (const $fileButton of document.querySelectorAll(`[data-codeviewer=${codeViewerId}][data-file-button]`)) {
				const filename = $fileButton.getAttribute('data-file-button');
				$fileButton.style.opacity = filename === filenameSelected ? 1 : 0.6;
			}
		}
	}

	for (const $fileButton of document.querySelectorAll('[data-file-button]')) {
		$fileButton.addEventListener('click', () => {
			const filename = $fileButton.getAttribute('data-file-button');
			const codeViewerId = $fileButton.getAttribute('data-codeviewer');
			const target = document.querySelector(`[data-codeviewer=${codeViewerId}][data-file-selected]`);
			target.setAttribute('data-file-selected', filename);
			applyFileSelected(codeViewerId);
		});
	}
}
