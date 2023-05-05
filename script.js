const Award = [" ", "Grizzly Pioneer", "Banquet Boss", "Grizzly Entretainter", "Graphics Guru", "Mentor in Motion", "vintage warrior", "The Joystick Jedi", "Gaming Goliath", "superior squad", "The Click Commander", "Grizzly Titan", "Grizzly Hustlers", "Communication connoisseur", "Cyber Grizzly" ];
const texts = [" ", "plumface", "Dikshant & Jeel", "JonerF1 Spragouu Tendie", "Social", "mamanote", "trNt", "JackyBoy & Altais", "Rade Rosy Kozy The Odd Canuck", "Rocket League", "Call of Duty", "CS:GO", "Valorant", ".Crissie.", "Akthen" ]; 
 // An array of texts
let currentTextIndex = 0; // The current index in the texts array

const textElement = document.getElementById("text");

// Update the text element with the current text
function updateText() {
  textElement.textContent = texts[currentTextIndex];
}

// Move to the previous text in the array
function moveToPrevText() {
  currentTextIndex = (currentTextIndex - 1 + texts.length) % texts.length;
  updateText();
}

// Move to the next text in the array
function moveToNextText() {
  currentTextIndex = (currentTextIndex + 1) % texts.length;
  updateText();
}

// Add event listeners for the arrow keys
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    moveToPrevText();
  } else if (event.code === "ArrowRight") {
    moveToNextText();
  }
});

// Initialize the text element with the first text
updateText();


 // An array of texts
let AwardTextIndex = 0; // The current index in the texts array

const AwardtextElement = document.getElementById("award");

// Update the text element with the current text
function updateText1() {
    AwardtextElement.textContent = Award[AwardTextIndex];
}

// Move to the previous text in the array
function moveToPrevText1() {
    AwardTextIndex = (AwardTextIndex - 1 + Award.length) % Award.length;
  updateText1();
}

// Move to the next text in the array
function moveToNextText1() {
    AwardTextIndex = (AwardTextIndex + 1) % Award.length;
  updateText1();
}

// Add event listeners for the arrow keys
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    moveToPrevText1();
  } else if (event.code === "ArrowRight") {
    moveToNextText1();
  }
});

// Initialize the text element with the first text
updateText1();
