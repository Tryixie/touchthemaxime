const inputName = document.getElementById("inputtext");
const form = document.getElementById("submit");
const buttonCool = document.getElementById("buttonCool");
let pseudo = "";

buttonCool.addEventListener("click", (e) => {
  location.replace("game.html");
  e.preventDefault();
});
