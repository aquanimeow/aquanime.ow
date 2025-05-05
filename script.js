document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");

    function showPage(page) {
        document.querySelectorAll('.content').forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(page).classList.add('active');

        if (window.innerWidth <= 768) {
            menu.style.display = "none";
        }
    }

    function toggleMenu() {
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.innerWidth <= 768) {
        menu.style.display = "none";
    }

    window.showPage = showPage;
    window.toggleMenu = toggleMenu;
});
