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


// Full List from 2023-2025 (present/recent) --------------------------------------------------------
const collection = {
    "Pucky":
        ["Rabbit Cafe Series", "Relax Beanie Series", "Sleeping Forest Series", "Forest Party Series", "Home Time Series", "The Feast Series", "Poko's Adventure Series", "Roly-Poly Kitty Series", "Roly-Poly Kitty Series Vinyl Plush"],

    "Nyota":
        ["Fluffy Life Series", "Growing Up by Your Way Series"],

    "Hirono":
        ["Mime Series", "Reshape Series", "Shelter Series", "Hirono x Le Petit Prince Series"],

    "Crybaby":
        ["Monster's Tears Series", "Sad Club Series", "Crybaby x Powerpuff Girls Series", "Crybaby x Powerpuff Girls Vinyl Face Plush Series", "Crying Again Series", "Crying Again Vinyl Face Plush Series"],

    "Pino Jelly":
        ["Taste & Personality Quiz Series", "Make a Wish Series", "In Your Life Series", "Star Project Series", "Hard & Shiny Series"],

    "Skullpanda":
        ["Laid Back Tomorrow Series", "Everyday Wonderland Series", "The Ink Plum Blossom Series", "Image of Reality Series", "The Sound Series", "Tell Me What You Want Series", "Winter Symphony Series Plush"],

    "Peach Riot":
        ["Rise Up Series", "Punk Fairy Series", "Lil Peach Riot, Loading! Series", "Rush Hour Series"],

    "Sweet Bean":
        ["Sweet Bean x Instinctoy Sweet Together Series", "Growth Illustration Series", "Spooky Tales Series", "Frozen Time Dessert Box Series", "Fruit World Adventure Series", "Afternoon Tea Series Figures", "I Want a Hug Series Figures"],

    "Chaka":
        ["Light Sprite Series"],

    "Dimoo":
        ["Dating Series", "Retro Series", "No One's Gonna Sleep Tonight Series", "Letters from Snowman Series Figures", "Animal Kingdom Series", "By Your Side Series", "My Cloud Companion Series-Cotton Doll Blind Box", "Weaving Wonders Series"],

    "Kubo":
        ["Walks of Life Series", "Select Your Character Series", "Breathing In Series", "24/7 YOU Series"],

    "Molly":
        ["Imaginary Wandering Series", "Molly x Warner Bros. 100th Anniversary Series", "Mega Space Molly 100% Blind Box Series 2", "Anniversary Statues Classical Retro Series", "Mega Space Molly 400% Planet Series", "Mega Space Molly 100% Blind Box Series 3", "Anniversary Statues Classical Retro Series 2", "My Instant Superpower Series", "Baby Molly When I Was Three! Series", "Carb-Lover Series", "Castle Miracle Box Series"],

    "The Monsters (Labubu)":
        ["Home of the Elves Series", "The Monsters x Kow Yokoyama Ma.k. Series", "Naughty Plants Vinyl Face Series", "Constellation Series Figure", "Tasty Macarons Vinyl Face", "COCA-COLA Series", "Mischief Diary Series", "Almost Hidden Series", "Have a Seat Vinyl Plush", "Party Series Reversible Plush Series", "Lazy Yoga Series", "Let's Have Fun Together Series Night Light", "Playing Games Series Scene Sets"],

    "Azura":
        ["Spring Fantasy Series", "Y2K Series", "Fantasy Nature Series", "A Dream About Stars Series", "Warm Christmas Series Figures"],

    "LuLu The Piggy":
        ["The Original Blind Box", "My Little Rainbow Sheep", "LuLu Rainbow Sheep Plush Blind Box", "LuLu The Piggy Farm Garden Blind Box", "LuLu The Piggy Blind Bag-Lunch Box Beans", "LuLu The Piggy The Original 3rd Caturday Blind Box", "Sakura Series Limited Premium Set", "Pigchelin Restaurant Blind Box Series", "LuLu The Piggy Sheep & Bear-Acrylic Keychain (Random)", "LuLu Beach Party Acrylic Blind Box Series", "The Original 2nd Series Box Set", "LuLu The Piggy Ocean-Tinplate Badge (Random)", "Sakura 2 Blind Box Series", "The Original 2nd Series (Can Set)", "Fitness Club Blind Box Series", "Beach Party Blind Box Series", "Christmasland Series (Blind Box)", "Journey to the West Blind Box Series", "Travel Blind Box Series", "Celebration Blind Box", "Stay with You Series Blind Box", "Ocean Series Blind Box", "Joyful Time Series PVC Plush Keychain Blindbox", "Vintage Teddy Shop Vinyl Face Blind Box", "Teddy MINI Blind Bag", "LuLu The Piggy Generic-Professional Cosplayer LuLu Tumbler", "Lucky Fortune Piggy Blind Box"],

    "Azukisan":
        ["Nobeko Azukisan's Daily Life Series Blind Box", "Nobeko Azukisan's Daily Life Series 2 Blind Box", "Nobeko Heartwarming Azukisan's Daily Life 3rd Version Blind Box", "Nobeko Moe Azukisan Bean Series Blind Box", "Nobeko Azukisan Plush Doll Blind Box", "Nobeko Magical Azukisan-Magnetic Plush Pendant Series Blind Box", "Nobeko Azukisan Valley Series Plush Brooches Blind Box"],

    "Wuhuang & Bazahey":
        ["Mystery Cable Blind Box Series", "Daily Series 3 Blind Box", "Daily Series 4 Blind Box", "Novice On The Road Series Blind Box", "Black League Main House Series Music Blind Box", "Black Cat Claw Cup Blind Box", "Park Acrobatics Series Blind Box"],

    "Smiski":
        ["Series 1", "Series 2", "Series 3", "Series 4", "Toilet Series", "Bath Series", "Living Series", "Bed Series", "Yoga Series", "Cheer Series", "Museum Series", "Work Series", "Dressing Series", "Exercising Series", "Moving Series", "Hippers", "Sunday Series"]
};


// Main script --------------------------------------------------------
let additionalFigures = JSON.parse(localStorage.getItem("additionalFigures")) || {};

const checklistContainer = document.getElementById("checklist");

function loadChecklist() {
    const savedChecklist = JSON.parse(localStorage.getItem("figurineChecklist")) || {};

    for (const [category, series] of Object.entries(collection)) {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category;
        categoryContainer.appendChild(categoryTitle);

        const seriesContainer = document.createElement("div");
        seriesContainer.classList.add("container");
        series.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            const label = document.createElement("label");
            label.textContent = item;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = savedChecklist[`${category}-${item}`] || false;
            checkbox.addEventListener("change", () => {
                savedChecklist[`${category}-${item}`] = checkbox.checked;
                localStorage.setItem("figurineChecklist", JSON.stringify(savedChecklist));
            });

            card.appendChild(label);
            card.appendChild(checkbox);
            seriesContainer.appendChild(card);
        });
        categoryContainer.appendChild(seriesContainer);


// Additional list in case want to add just figures and not series' (notebook type layout) --------------------------------------------------------
        // Header
        const additionalHeader = document.createElement("h4");
        additionalHeader.textContent = "Additional Figures";
        additionalHeader.style.marginTop = "20px";
        additionalHeader.style.color = "#00a78e";
        categoryContainer.appendChild(additionalHeader);

        const notebookList = document.createElement("div");
        notebookList.classList.add("notebook-list");
        categoryContainer.appendChild(notebookList);

        if (!additionalFigures[category]) {
            additionalFigures[category] = [];
        }

        additionalFigures[category].forEach(item => {
            addNotebookItem(notebookList, category, item, savedChecklist);
        });

        const newFigureForm = document.createElement("div");
        newFigureForm.classList.add("new-figure-form");

        const newFigureInput = document.createElement("input");
        newFigureInput.type = "text";
        newFigureInput.placeholder = "Figure name...";

        const addFigureButton = document.createElement("button");
        addFigureButton.textContent = "Add";
        addFigureButton.classList.add("button");

        function addNewFigure() {
            const newFigureName = newFigureInput.value.trim();
            if (newFigureName !== "") {
                additionalFigures[category].push(newFigureName);
                localStorage.setItem("additionalFigures", JSON.stringify(additionalFigures));
                addNotebookItem(notebookList, category, newFigureName, savedChecklist);
                newFigureInput.value = "";
            }
        }

        addFigureButton.addEventListener("click", addNewFigure);

        newFigureInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                addNewFigure();
            }
        });

        newFigureForm.appendChild(newFigureInput);
        newFigureForm.appendChild(addFigureButton);
        categoryContainer.appendChild(newFigureForm);

        checklistContainer.appendChild(categoryContainer);
    }
}

function addNotebookItem(container, category, item, savedChecklist) {
    const notebookItem = document.createElement("div");
    notebookItem.classList.add("notebook-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = savedChecklist[`${category}-${item}`] || false;
    checkbox.addEventListener("change", () => {
        savedChecklist[`${category}-${item}`] = checkbox.checked;
        localStorage.setItem("figurineChecklist", JSON.stringify(savedChecklist));
    });

    const label = document.createElement("label");
    label.textContent = item;
// finish ----------------------------------------------------------------------------------------------------------------


// Extra: Delete button for checklist --------------------------------------------------------
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        
        const index = additionalFigures[category].indexOf(item);
        if (index > -1) {
            additionalFigures[category].splice(index, 1);
            localStorage.setItem("additionalFigures", JSON.stringify(additionalFigures));
        }
       
        container.removeChild(notebookItem);
        
        delete savedChecklist[`${category}-${item}`];
        localStorage.setItem("figurineChecklist", JSON.stringify(savedChecklist));
    });

    notebookItem.appendChild(checkbox);
    notebookItem.appendChild(label);
    notebookItem.appendChild(deleteBtn);
    container.appendChild(notebookItem);
}

function saveChecklist() {

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const savedChecklist = {};
    checkboxes.forEach(checkbox => {
        const label = checkbox.parentNode.querySelector("label").textContent;
        const category = checkbox.parentNode.parentNode.parentNode.querySelector("h3").textContent;
        savedChecklist[`${category}-${label}`] = checkbox.checked;
    });
    localStorage.setItem("figurineChecklist", JSON.stringify(savedChecklist));
    alert("Checklist saved!");
}

loadChecklist();

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