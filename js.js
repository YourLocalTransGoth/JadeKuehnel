function setNavState(isOpen) {
    const sidenav = document.getElementById("mySidenav");
    const toggle = document.querySelector(".mobile-nav-toggle");

    if (!sidenav) {
        return;
    }

    sidenav.classList.toggle("is-open", isOpen);
    sidenav.classList.toggle("is-collapsed", !isOpen);
    document.body.classList.toggle("nav-open", isOpen);

    if (toggle) {
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        toggle.textContent = isOpen ? "X" : "O";
    }
}

function openNav() {
    setNavState(true);
}

function closeNav() {
    setNavState(false);
}

document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.getElementById("mySidenav");

    if (!sidenav) {
        return;
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "mobile-nav-toggle";
    toggle.setAttribute("aria-controls", "mySidenav");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.textContent = "O";
    toggle.addEventListener("click", function () {
        setNavState(!sidenav.classList.contains("is-open"));
    });
    sidenav.parentNode.insertBefore(toggle, sidenav);

    const mobileQuery = window.matchMedia("(max-width: 700px)");
    const updateNavForViewport = function () {
        setNavState(!mobileQuery.matches);
    };

    updateNavForViewport();
    mobileQuery.addEventListener("change", updateNavForViewport);
});