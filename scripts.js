import { astrologerAnswers } from "./data/answers.js";

const html = `
<h1>Curious to know the answer to your questions?</h1>
<div class="images-container">
  <img
    class="smiling-astrologer"
    src="images/smiling-astrologer.png"
    alt="Smiling Astrologer"
  />
  <img
    class="crystal-ball"
    src="images/crystal-ball.png"
    alt="Crystal Ball"
  />
<div class="video-container">  
  <video autoplay loop muted id="crystal-background-video">
    <source src="videos/orbs.mp4" type="video/mp4" />
  </video>
</div>
</div>
<div class="call-to-action-text">
  Bring up a yes or no question up in your mind...
</div>
<div class="answer-popup"></div>
<button class="answer-button js-answer-button">Reveal the truth</button>`;

document.querySelector(".content-container").innerHTML = html;

function generateAnswer() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const answer = astrologerAnswers[randomNumber];

  const popupHTML = `    
    <div class="answer-container">
      <video autoplay loop muted class="background-video">
        <source src="videos/water.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="answer">${answer}</div>
      <button class="close-button">Close</button>
  </div>`;

  document.querySelector(".answer-popup").innerHTML = popupHTML;
}

document.querySelector(".js-answer-button").addEventListener("click", () => {
  const astrologer = document.querySelector(".smiling-astrologer");
  astrologer.classList.toggle("fadeout"); // Toggles the tilting animation on and off

  generateAnswer();
});
