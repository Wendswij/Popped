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

    if (logo) { 
        logo.addEventListener("mouseenter", function () {
            logo.src = "Images/boxopen.png"; 
        });

        logo.addEventListener("mouseleave", function () {
            logo.src = "Images/boxclose.png"; 
        });
    }
});
// End Footer Logo --------------------------------------------------------

// Card modal functions --------------------------------------------------------FIXED
let originalImgSrc = "";
let artistImgSrc = "";

function openModal(title, modalImg, artistImg, details, artist, archive) {
    let modal = document.getElementById('modal');
    let modalImage = document.getElementById('modal-img');

    modal.style.display = 'flex';
    originalImgSrc = modalImg;
    artistImgSrc = artistImg;
    modalImage.src = originalImgSrc;

    document.getElementById('modal-title').textContent = title;
    document.getElementById('details-content').innerHTML = details;
    document.getElementById('artist-content').innerHTML = artist;
    document.getElementById('archive-content').innerHTML = archive;

    document.querySelectorAll('.tabcontent').forEach(content => content.style.display = "none");
    document.getElementById('Details').style.display = "block";
    document.querySelectorAll('.tablinks').forEach(link => link.classList.remove('active'));
    document.querySelector('.tablinks').classList.add('active');
}

function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName("tabcontent");
    let tabLinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    let selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
        evt.currentTarget.classList.add("active");
    }

    let modalImage = document.getElementById('modal-img');
    modalImage.src = (tabName === "Artist") ? artistImgSrc : originalImgSrc;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener("click", function (event) {
    let modal = document.getElementById('modal');
    let modalContent = document.querySelector(".modal-content");

    if (event.target === modal && !modalContent.contains(event.target)) {
        closeModal();
    }
});
// ----------------------------------------------------------


// For Search Bar -------------------------------------------------------- FIXED!!!! (NOT WORKING LAPTOP RETURN FUNCTION)
document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { // listen to return when pressed on laptop.
            event.preventDefault();
            searchItems();
        }
    });
});

function searchItems() {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let cards = document.querySelectorAll(".card");
    let noResults = document.getElementById("noResults");
    let hasResults = false;

    if (input === "") {
        cards.forEach(card => card.style.display = "block");
        noResults.style.display = "none"; // for empty results
        return;
    }

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase(); // to filter/find the figure
        if (title.includes(input)) {
            card.style.display = "block";
            hasResults = true;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = hasResults ? "none" : "block";
}
// End Search Bar --------------------------------------------------------

// EXTRA: Back to top button --------------------------------------------------------
window.addEventListener("scroll", function () {
    let backToTopBtn = document.getElementById("backToTop");

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
