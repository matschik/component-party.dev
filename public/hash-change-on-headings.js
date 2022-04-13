window.addEventListener('DOMContentLoaded', () => {
	const anchorObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				const { target } = entry;
				window.history.pushState({}, '', `#${target.id}`);
			}
		}
	});
	for (const heading of document.querySelectorAll('#main-content h1, #main-content h2')) {
		anchorObserver.observe(heading);
	}

	for(const fmwButton of document.querySelectorAll("[data-framework-button]")){
		const framework = fmwButton.getAttribute("data-framework-button")
		fmwButton.addEventListener("click", () => {
			for(const fmwContent of document.querySelectorAll(`[data-framework-content=${framework}]`)){
				console.log(fmwContent.style.display, "éazzeeza")
				if(!fmwContent.style.display || fmwContent.style.display === "block"){
					fmwContent.style.display = "none"
				} else {
					fmwContent.style.display = "block"
				}
			}
		})
	}
});
