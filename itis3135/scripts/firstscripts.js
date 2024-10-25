const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let timeH = new Date().getHours();
const timeM = new Date().getMinutes();
const dayOfWeek = weekDays[new Date().getDay()];
const theMonth = months[new Date().getMonth()];
const theDay = new Date().getDate();
const theYear = new Date().getFullYear();

if (timeH > 12) {
    timeH -= 12;
}

document.getElementById("date").innerHTML = 
`<h3>Today is ${timeH}:${timeM} on ${dayOfWeek}, ${theMonth} ${theDay}, ${theYear}</h3>`;

function helloUser() { //User name input and feeling
    const name = document.getElementById("name-input").value;
    const feeling = document.getElementById("feeling-input").value;
    
    if (name !== "" && feeling !== "") {
    document.getElementById("submitted-prompt").innerText = `Hello: ${name}, you are feeling ${feeling}`;
    return;
    } else {
        alert("Please fill in your name and how you're feeling.");
        return;
    }
}

function favShape() { //Favorite shape input and return
    let favNum = Math.round(document.getElementById("fav-num-input").value);

    if (favNum < 0) {
        favNum = -favNum;
    }
    const shapeNames = [
    {name: "henagon", sides: 1},
    {name: "digon", sides: 2},
    {name: "trigon", sides: 3},
    {name: "tetragon", sides: 4},
    {name: "pentagon", sides: 5},
    {name: "hexagon", sides: 6},
    {name: "heptagon", sides: 7},
    {name: "octagon", sides: 8},
    {name: "enneagon", sides: 9},
    {name: "decagon", sides: 10},
    {name: "icosagon", sides: 20},
    {name: "triacontagon", sides: 30},
    {name: "tetracontagon", sides: 40},
    {name: "pentacontagon", sides: 50},
    {name: "hexacontagon", sides: 60},
    {name: "heptacontagon", sides: 70},
    {name: "octacontagon", sides: 80},
    {name: "enneacontagon", sides: 90},
    {name: "hectogon", sides: 100}
];

    if (favNum >= 90 && favNum < 100) {
        favNum = 90;
    } else if (favNum > 80 && favNum < 90) {
        favNum = 80;
    } else if (favNum > 70 && favNum < 80) {
        favNum = 70;
    } else if (favNum > 60 && favNum < 70) {
        favNum = 60;
    } else if (favNum > 50 && favNum < 60) {
        favNum = 50;
    } else if (favNum > 40 && favNum < 50) {
        favNum = 40;
    } else if (favNum > 30 && favNum < 40) {
        favNum = 30;
    } else if (favNum > 20 && favNum < 30) {
        favNum = 20;
    } else if (favNum > 10 && favNum < 20) {
        favNum = 10;
    }
    const favShape = shapeNames.find((shape) => shape.sides === favNum); 

    if (favNum > 100) {
        alert("Your favorite number is quite large!, let's make it equal to or below 100");
    } else if (favShape.name !== "" || favShape.name !== null) {
        alert (`Your favorite shape is a ${favShape.name}!!`);
    }

   // document.getElementById("user-fav-shape").innerText = `Favorite Shape: ${favShape.name}`;


}

function codZombiesChallengePicker() { //Mostly for myself, thought I add it in here
    const challenges = [
        "2 Box",
        "No Purchase",
        "Rainbow Perk",
        "Reverse Rainbow Perk",
        "Box Roulette",
        "No Perk"
    ];

    const random = Math.floor(Math.random() * 6);

    document.getElementById("challenge-output").innerHTML = `<p>Your COD zombies challenge today is the <strong>${challenges[random]}</strong> challenge.</p>`;
}

let beaverHTML = document.getElementById("beaver-activities-output");
// document.getElementById("beaver-activitites-output").innerHTML += `<p></p>`;
let woodGathered = false;
let isDamBuilt = false;
let numWood = 0;

function buildDam() {
    if (!woodGathered) {
          alert("You have not gathered wood!");
        return;
    } else if (isDamBuilt) {
        beaverHTML.innerHTML += `<p>The dam is already built!</p>`;
        return;
    }
    beaverHTML.innerHTML += `<p>The dam has been built!</p>`;
    isDamBuilt = true;
    
}

function gatherWood() {
    beaverHTML.innerHTML += `<p>You have gathered wood.</p>`;
    woodGathered = true;
}

function tellAJoke() {
    beaverHTML.innerHTML += `
    <p><strong>Why did the beaver get promoted at work?</strong></p>
    <p>He was <em>dam</em> good at his job!</p>`;
}

function beaverFacts() {
    const factsAboutBeavers = [
        "Beavers can hold their breath underwater for up to 15 minutes.",
        "Dams are used as protection against predators.",
        'Beavers use "lodges" as their homes.',
        "Beavers are the second largest rodent in the world.",
        "Beavers splash the water with their tails to warn others about danger in the area.",
        "Beaver's dams help create wetlands which help other species of animals thrive in areas they might not be able to without."
    ];

    const rng = Math.floor(Math.random(0) * 6);

    beaverHTML.innerHTML += `
    <p>Here is a random fact about beavers:</p>
    <p>${factsAboutBeavers[rng]}</p>`;
}

function resetLog() {
    const temp = beaverHTML.innerHTML;
    beaverHTML.innerHTML = `
    <p><strong>Are you sure you want to reset the log?</strong></p>
    <button id="confirm-reset" type="button">Confirm Reset</button>
    <button id="cancel-reset" type="button">Cancel Reset</button>
    `;
    let confirm = false;
    document.getElementById("confirm-reset").addEventListener("click", () => {
        setTimeout(alert("Log has been reset!"),4000);
        beaverHTML.innerHTML = ``;
    });
    document.getElementById("cancel-reset").addEventListener("click", () => {
        alert("Log will not be reset.");
        beaverHTML.innerHTML = temp;
    });
}

document.getElementById("prompts-btn").addEventListener("click", helloUser);
document.getElementById("fav-num-btn").addEventListener("click", favShape);

document.getElementById("build-a-dam").addEventListener("click", buildDam);
document.getElementById("gather-wood").addEventListener("click", gatherWood);
document.getElementById("tell-a-joke").addEventListener("click", tellAJoke);
document.getElementById("beaver-facts").addEventListener("click", beaverFacts);
document.getElementById("reset-button").addEventListener("click", resetLog);

document.getElementById("zombie-challenge-btn").addEventListener("click", codZombiesChallengePicker);