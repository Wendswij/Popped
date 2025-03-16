// Burger Button --------------------------------------------------------
function toggleMenu() {
    let menu = document.getElementById("sideMenu");
    let main = document.getElementById("main");

    if (menu.style.width === "250px") {
        menu.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        menu.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

window.onclick = function (event) {
    let menu = document.getElementById("sideMenu");
    if (event.target !== menu && !menu.contains(event.target) && event.target.className !== "hamburger") {
        menu.style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
};
// End of Burger Button --------------------------------------------------------

// Footer Logo -------------------------------------------------------- FIXED YESSSSS!!!!!!!!!
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById('logo');

    if (logo) { // Ensure the image exists before adding event listeners
        logo.addEventListener("mouseenter", function () {
            logo.src = "Images/boxopen.png"; // Change to open box
        });

        logo.addEventListener("mouseleave", function () {
            logo.src = "Images/boxclose.png"; // Change back to closed box
        });
    }
});
// End Footer Logo --------------------------------------------------------