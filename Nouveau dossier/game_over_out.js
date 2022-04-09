const inputName = document.getElementById("inputtext");
const gameOver = document.getElementById("gameOver");
let pseudo = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

window.addEventListener("load", () => {
  let pseudo = prompt("quel est ton nom");
  gameOver.innerHTML += "<h3> Tu as bien rep connard " + pseudo + "</h3>"; //se met a la suite
});
