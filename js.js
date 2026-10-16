    function openNav() {
        const sidenav = document.getElementById("mySidenav");
        if (sidenav) {
            sidenav.style.width = "250px";
        }
        document.body.classList.add("nav-open");
    }

    function closeNav() {
        return;
    }

    document.addEventListener("DOMContentLoaded", function () {
        openNav();
    });