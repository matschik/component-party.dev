setTimeout(() => {
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
}, 300);