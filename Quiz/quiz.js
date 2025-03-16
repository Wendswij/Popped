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

// Questions --------------------------------------------------------
const questions = [
    {
        question: "What best describes your approach to life?",
        options: [
            { answer: "A quiet observer, finding beauty in small moments", character: "Nyota, HIRONO, PINO JELLY, Sweet Bean, DIMOO, Azura, LuLu the Piggy, Smiski, CRYBABY, Chaka" },
            { answer: "A bold explorer, always seeking new adventures", character: "Azura, LuLu the Piggy, The Monsters, Azukisan, PUCKY, Peach Riot" },
            { answer: "A daydreamer lost in a world of imagination", character: "DIMOO, PUCKY, Smiski, Nyota, HIRONO, Wuhuang & Bazahey, Chaka, CRYBABY, PINO JELLY" },
            { answer: "A rebel who challenges expectations", character: "Peach Riot, SKULLPANDA, KUBO, Wuhuang & Bazahey, Azukisan, The Monsters, Chaka" },
            { answer: "A playful spirit who finds joy in the simplest things", character: "Sweet Bean, Azukisan, Smiski, MOLLY, Chaka, CRYBABY, Nyota, LuLu the Piggy, PUCKY" },
        ],
    },

    {
        question: "How do you deal with emotions?",
        options: [
            { answer: "I embrace them fully, even the sad ones", character: "CRYBABY, Azura, HIRONO, Peach Riot, DIMOO, Nyota" },
            { answer: "I turn them into something creative or expressive", character: "MOLLY, Peach Riot, Nyota, HIRONO, Smiski, SKULLPANDA, PUCKY" },
            { answer: "I keep them to myself, but they shape who I am", character: "HIRONO, SKULLPANDA, Smiski, Nyota, KUBO, DIMOO, PINO JELLY, Peach Riot, Chaka" },
            { answer: "I don’t think too much and just enjoy the moment", character: "Sweet Bean, LuLu the Piggy, PUCKY, Nyota, The Monsters, Azukisan, Wuhuang & Bazahey, Smiski, MOLLY" },
            { answer: "I reflect on them quietly, letting time guide me", character: "Nyota, DIMOO, Smiski, Chaka, Wuhuang & Bazahey, Azura" },
        ],
    },

    {
        question: "Which of these feels like home to you?",
        options: [
            { answer: "A cozy corner filled with books, soft lights, and warm tea", character: "Nyota, HIRONO, CRYBABY, Chaka, DIMOO, Smiski, Wuhuang & Bazahey, Azukisan, PUCKY" },
            { answer: "A dreamy landscape where anything is possible", character: "DIMOO, PUCKY, Chaka, The Monsters, Azura, LuLu the Piggy, Azukisan, CRYBABY, PINO JELLY" },
            { answer: "A buzzing city full of energy and excitement", character: "MOLLY, KUBO, Azura, SKULLPANDA, Peach Riot, Wuhuang & Bazahey" },
            { answer: "A neon-lit underground club where the music never stops", character: "Peach Riot, SKULLPANDA, KUBO, PINO JELLY, The Monsters" },
            { answer: "A whimsical candy land where every day feels like a celebration", character: "PINO JELLY, LuLu the Piggy, Sweet Bean, MOLLY, DIMOO, CRYBABY, PUCKY, Azukisan" },
        ],
    },

    {
        question: "Which aesthetic best represents you?",
        options: [
            { answer: "Dark, mysterious, and slightly edgy", character: "SKULLPANDA, HIRONO, Peach Riot, KUBO, The Monsters, Chaka, Wuhuang & Bazahey" },
            { answer: "Soft pastels and dreamy vibes", character: "DIMOO, PUCKY, CRYBABY, PINO JELLY, Peach Riot, Sweet Bean, Chaka, MOLLY, Azura, Nyota" },
            { answer: "Colorful and playful", character: "Sweet Bean, LuLu the Piggy, PINO JELLY, DIMOO, Azura, MOLLY, CRYBABY, PUCKY, The Monsters, Peach Riot" },
            { answer: "Minimalist, clean, and peaceful", character: "Nyota, Chaka, Smiski, HIRONO, KUBO, PINO JELLY, Wuhuang & Bazahey" },
            { answer: "Retro, grunge, or punk-inspired", character: "Peach Riot, KUBO, Azura, SKULLPANDA, The Monsters, Wuhuang & Bazahey" },
        ],
    },

    {
        question: "Which of these hobbies resonates with you the most?",
        options: [
            { answer: "Listening to music and getting lost in the sound", character: "Peach Riot, PINO JELLY, Chaka" },
            { answer: "Sketching or writing to express your thoughts", character: "HIRONO, MOLLY, DIMOO, CRYBABY" },
            { answer: "Exploring nature and finding hidden gems", character: "Azura, PUCKY, DIMOO, Smiski" },
            { answer: "Trying new fashion styles and changing up your look", character: "SKULLPANDA, KUBO, Peach Riot, MOLLY" },
            { answer: "Caring for pets or enjoying quiet moments with animals", character: "Azukisan, Nyota, Wuhuang & Bazahey, PUCKY" },
        ],
    },

    {
        question: "How do you face challanges?",
        options: [
            { answer: "I face them head on with confidence", character: "MOLLY, KUBO, SKULLPANDA" },
            { answer: "I take my time and find a creative solution", character: "DIMOO, PUCKY, Smiski" },
            { answer: "I reflect deeply before making a move", character: "HIRONO, Nyota, Azura, CRYBABY" },
            { answer: "I push through with rebellious energy", character: "Peach Riot, SKULLPANDA, Wuhuang & Bazahey" },
            { answer: "I adapt and go with the flow", character: "Chaka, PINO JELLY, The Monsters, Sweet Bean" },
        ],
    },

    {
        question: "How do you express yourself?",
        options: [
            { answer: "Through deep emotions, even the ones I hide", character: "CRYBABY, Azura, HIRONO, DIMOO" },
            { answer: "By creating something new and imaginative", character: "DIMOO, PUCKY, MOLLY, Smiski" },
            { answer: "Through my unique sense of fashion and style", character: "SKULLPANDA, KUBO, Peach Riot, PINO JELLY" },
            { answer: "Through humour and spontaneous adventures", character: "LuLu the Piggy, Sweet Bean, Azukisan, The Monsters" },
            { answer: "By staying mysterious and letting actions speak", character: "Chaka, Nyota, Wuhuang & Bazahey, SKULLPANDA" },
        ],
    },

    {
        question: "People would describe you as?",
        options: [
            { answer: "As someone who was never afraid to feel deeply", character: "CRYBABY, Azura, HIRONO, DIMOO" },
            { answer: "As the dreamer who never stopped imagining", character: "DIMOO, PUCKY, Nyota, Smiski" },
            { answer: "As someone who stood out from the crowd with confidence", character: "MOLLY, SKULLPANDA, KUBO, Peach Riot" },
            { answer: "As the one who always made life fun and exciting", character: "LuLu the Piggy, Peach Riot, Sweet Bean, Azukisan, The Monsters" },
            { answer: "As a mysterious enigma, forever intriguing", character: "Chaka, Wuhuang & Bazahey, SKULLPANDA, PINO JELLY" },
        ],
    },

    {
        question: "If you had to choose a signature accessory, what would it be?",
        options: [
            { answer: "A soft, flowy piece that reflects my emotions", character: "CRYBABY, Azura, Nyota, DIMOO, PUCKY" },
            { answer: "A pair of bold statement sunglasses", character: "MOLLY, KUBO, SKULLPANDA, LuLu the Piggy, The Monsters" },
            { answer: "A collection of rings and edgy jewelry", character: "SKULLPANDA, Peach Riot, Chaka, Wuhuang & Bazahey" },
            { answer: "A cute, quirky bag filled with unexpected surprises", character: "PUCKY, Sweet Bean, LuLu the Piggy, Azukisan, The Monsters" },
            { answer: "Something subtle that glows under the right light", character: "Chaka, DIMOO, PINO JELLY, Smiski, Azura," },
        ],
    },

    {
        question: "What kind of energy do you bring to a group?",
        options: [
            { answer: "The gentle, introspective one who listens more than they talk", character: "Nyota, HIRONO, Smiski, PUCKY" },
            { answer: "The fun, chaotic one who keeps everyone entertained", character: "LuLu the Piggy, Peach Riot, Sweet Bean, Azukisan, The Monsters" },
            { answer: "The stylish one who always knows the latest trends", character: "MOLLY, SKULLPANDA, KUBO, PINO JELLY" },
            { answer: "The deep thinker who sees beauty in everything", character: "CRYBABY, Azura, DIMOO, PUCKY" },
            { answer: "The mysterious one who’s always full of surprises", character: "Chaka, Wuhuang & Bazahey, SKULLPANDA, The Monsters, Smiski" },
        ],
    },
];
// End of quiz Questions --------------------------------------------------------


let currentQuestion = 0;
let answers = {};
const quizContainer = document.getElementById("quiz-container");

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    const questionData = questions[currentQuestion];
    let questionHTML = `<h2>${questionData.question}</h2>`;

    questionData.options.forEach(option => {
        questionHTML += `<button onclick='handleAnswer(${JSON.stringify(option.character.split(", "))})'>${option.answer}</button>`;
    }); // FIXED

    quizContainer.innerHTML = questionHTML;
}

function handleAnswer(characterList) {
    characterList.forEach(character => {
        answers[character] = (answers[character] || 0) + 1;
    });

    currentQuestion++;
    showQuestion();
}

// Character Results --------------------------------------------------------
const characterImages = {
    "PUCKY": "Images/Figure/pokopcky.png",
    "Nyota": "Images/Figure/nyt.png",
    "HIRONO": "Images/Figure/hrno.png",
    "CRYBABY": "Images/Figure/figure-crybaby.png",
    "PINO JELLY": "Images/Figure/figure-pinojelly.png",
    "SKULLPANDA": "Images/Figure/sp.png",
    "Peach Riot": "Images/Figure/pr.png",
    "Sweet Bean": "Images/Figure/figure-sweetbean.png",
    "Chaka": "Images/Figure/figure-chaka.png",
    "DIMOO": "Images/Figure/dmo.png",
    "KUBO": "Images/Figure/figure-kubo.png",
    "MOLLY": "Images/Figure/figure-molly.png",
    "The Monsters": "Images/Figure/figure-labubu.png",
    "Azura": "Images/Figure/azr.png",
    "LuLu the Piggy": "Images/Figure/figure-lulu.png",
    "Azukisan": "Images/Figure/figure-azukisan.png",
    "Wuhuang & Bazahey": "Images/Figure/figure-wb.png",
    "Smiski": "Images/Figure/figure-smiski.png",
};
// End Character Result --------------------------------------------------------

// Result Function --------------------------------------------------------
function showResult() { //FIXED
    let maxCount = Math.max(...Object.values(answers)); // Use highest score for result.
    let topCharacters = Object.keys(answers).filter(character => answers[character] === maxCount);
    let resultCharacter = topCharacters[Math.floor(Math.random() * topCharacters.length)]; // Backup plan if tie 
    const characterImage = characterImages[resultCharacter] || "images/default.png"; // Add character image for visual aesthetics
    quizContainer.innerHTML =
        `<h2>Looks like you are... ${resultCharacter}!!!</h2>
        <img src="${characterImage}" alt="${resultCharacter}" style="max-width: 50%; height: auto; display: block; margin: 10px auto 0 auto; border-radius: 10px;">`;
    document.querySelector('.gamble-container').style.display = 'block';
}

showQuestion();
