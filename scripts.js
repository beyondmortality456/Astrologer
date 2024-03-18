import { astrologerAnswers } from "./data/answers.js";

function generateAnswer() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const answer = astrologerAnswers[randomNumber];

  document.querySelector(".answer-text").innerHTML = answer;
}

document.querySelector(".js-answer-button").addEventListener("click", () => {
  const astrologer = document.querySelector(".smiling-astrologer");
  astrologer.classList.toggle("tilting"); // Toggles the tilting animation on and off

  generateAnswer();
});
