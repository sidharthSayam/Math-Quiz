const num1 = Math.round(Math.random() * 10);
const num2 = Math.round(Math.random() * 10);
const questionE1 = document.getElementById("question");
questionE1.innerText = `What is ${num1} multiply by ${num2}?`;
const correctanswer = num1 * num2;
const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreE1.innerText = `score: ${score}`;

formE1.addEventListener("submit", () => {
  const userAns = +inputE1.value;
  if (userAns === correctanswer) {
    score++;
    updatelocalStorage();
  } else {
    score--;
    updatelocalStorage();
  }
});
function updatelocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
