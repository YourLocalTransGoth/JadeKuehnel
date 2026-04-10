    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        const main = document.getElementById("main");
        if (main) {
            main.style.marginLeft = "250px";
        }
        const openButtons = document.querySelectorAll(".openbtn");
        openButtons.forEach((button) => {
            button.style.display = "none";
        });
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        const main = document.getElementById("main");
        if (main) {
            main.style.marginLeft = "0";
        }
        const openButtons = document.querySelectorAll(".openbtn");
        openButtons.forEach((button) => {
            button.style.display = "";
        });
    }