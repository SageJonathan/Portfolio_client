
export function handleScroll(navbarId, scrollThreshold = 50) {
    const navbar = document.getElementById(navbarId);

    if (!navbar) {
        console.warn(`Navbar with ID ${navbarId} not found.`);
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
