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

// For Search Bar -------------------------------------------------------- (NOT WORKING LAPTOP RETURN FUNCTION)
document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchItems();
            }
        });
    }
});

function searchItems() {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let categories = document.querySelectorAll(".category");
    let cards = document.querySelectorAll(".card");
    let noResults = document.getElementById("noResults");
    let hasResults = false;

    if (input === "") {
        categories.forEach(category => category.style.display = "block");
        cards.forEach(card => card.style.display = "block");
        noResults.style.display = "none";
        return;
    }

    categories.forEach(category => {
        let categoryTitle = category.querySelector("h2").textContent.toLowerCase();
        let cardContainer = category.querySelector(".card-container");
        let categoryHasMatch = false;

        let categoryCards = cardContainer.querySelectorAll(".card");
        categoryCards.forEach(card => {
            let cardText = card.textContent.toLowerCase();
            if (cardText.includes(input) || categoryTitle.includes(input)) {
                card.style.display = "block";
                categoryHasMatch = true;
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });

        category.style.display = categoryHasMatch ? "block" : "none";
    });

    noResults.style.display = hasResults ? "none" : "block";
}
// End Search Bar --------------------------------------------------------

// ALL picked series list for every figure --------------------------------------------------------
const categories = {
    "PUCKY": ["Home Time Series", "The Feast Series", "Poko's Adventure Series", "Roly-Poly kitty Series", "Roly-Poly Kitty Series Vinyl Plush"],
    "Nyota": ["Fluffy Life Series", "Growing Up by Your Way Series"],
    "HIRONO": ["City of Mercy Series", "Mime Series", "Reshape Series", "Shelter Series", "Hirono x Le Petit Prince Series"],
    "CRYBABY": ["Sad Club Series", "Crybaby x Powerpuff Girls Series", "Crybaby x Powerpuff Girls Vinyl Face Plush Series", "Crying Again Series", "Crying Again Vinyl Face Plush Series"],
    "PINO JELLY": ["Taste & Personality Quiz Series", "Make a Wish Series", "In Your Life Series Series", "Star Project Series", "Hard & Shiny Series"],
    "SKULLPANDA": ["Everyday Wonderland Series", "Image of Reality Series", "The Sound Series", "Tell Me What You Want Series", "Winter Symphony Series Plush"],
    "Peach Riot": ["Rise Up Series", "Punk Fairy Series", "Lil Peach Riot, Loading! Series", "Rush Hour Series"],
    "Sweet Bean": ["Spooky Tales Series", "Frozen Time Dessert Box Series", "Fruit World Adventure Series", "Afternoon Tea Series Figures", "I Want a Hug Series Figures"],
    "Chaka": ["Light Sprite Series"],
    "DIMOO": ["No One's Gonna Sleep Tonight Series", "Animal Kingdom Series", "By Your Side Series", "My Cloud Companion Series-Cotton Doll Blind Box", "Weaving Wonders Series"],
    "KUBO": ["Walks of Life Series", "Select Your Character Series", "Breathing In Series", "24/7 YOU Series"],
    "MOLLY": ["Anniversary Statues Classical Retro Series 2", "My Instant Superpower Series", "Baby Molly When I Was Three! Series", "Carb-Lover Series", "Castle Miracle Box Series"],
    "Labubu": ["Tasty Macarons Vinyl Face", "COCA-COLA Series", "Have a Seat Vinyl Plush", "Party Series Reversible Plush Series", "Playing Games Series Scene Sets"],
    "Azura": ["Warm Christmas Series Figures", "Spring Fantasy Series", "Y2K Series", "Fantasy Nature Series", "A Dream About Stars Series"],
    "LuLu the Piggy": ["Joyful Time Series PVC Plush Keychain Blindbox", "Vintage Teddy Shop Vinyl Face Blind Box", "Pigchelin Restaurant Blind Box Series", "Travel Blind Box Series", "Stay with You Series Blind Box"],
    "Azukisan": [">Nobeko Azukisan's Daily Life Series Blind Box", "Nobeko Azukisan's Daily Life Series 2 Blind Box", "Nobeko Heartwarming Azukisan's Daily Life 3rd Version Blind Box", "Nobeko Moe Azukisan Bean Series Blind Box", "Nobeko Azukisan Plush Doll Blind Box"],
    "Wuhuang & Bazahey": ["Daily Series 3 Blind Box", "Daily Series 4 Blind Box", "Novice On The Road Series Blind Box", "Black League Main House Series Music Blind Box", "Park Acrobatics Series Blind Box"],
    "Smiski": ["Moving Series", "Work Series", "Dressing Series", "Sunday Series", "Yoga Series"],
};
// ALL picked series list for every figure --------------------------------------------------------


// Main Script --------------------------------------------------------
const container = document.getElementById("categories");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCategory(name, items) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const title = document.createElement("h2");
    title.textContent = name;
    categoryDiv.appendChild(title);

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    function renderCards() {

        cardContainer.innerHTML = ""; // script to clear/refresh, something like that

        const shuffledItems = [...items]; // copy n shuffle
        shuffleArray(shuffledItems);

        shuffledItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.textContent = "Flip";
            card.addEventListener("click", () => {
                if (!card.classList.contains("flipped")) {
                    card.classList.add("flipped");
                    card.textContent = item;
                }
            });
            cardContainer.appendChild(card);
        });
    }

    renderCards();
    categoryDiv.appendChild(cardContainer);

    // this one to refresh the cards
    const refreshButton = document.createElement("button");
    refreshButton.classList.add("refresh-button");
    refreshButton.textContent = "Refresh";
    refreshButton.addEventListener("click", () => {
        renderCards(); // only for each container
    });

    categoryDiv.appendChild(refreshButton);
    container.appendChild(categoryDiv);
}


let categoriesArray = Object.entries(categories);

categoriesArray.forEach(([name, items]) => {
    createCategory(name, items);
});

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