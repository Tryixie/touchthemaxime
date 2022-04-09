const counterDisplay = document.querySelector("h3");
let counter = 0;
const rule = document.getElementById("rules");
const valider = document.getElementById("buttonCool");
const bubblediv = document.getElementsByClassName("bubble");
const lose = document.getElementById("lose");
const inputName = document.getElementById("inputtext");
let urname = document.querySelector(".urname");
let pseudo = "";
const fail = () => {
  let audio = new Audio("assets/fail.mp3");
  audio.play();
};
const win = () => {
  let audio = new Audio("assets/win.mp3");
  audio.play();
};
const gameover = () => {
  let audio = new Audio("assets/gameover.mp3");
  audio.play();
};

const music = document.getElementById("musicGame");

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    win();
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);

const bubbleMakerTwo = () => {
  const bubbleTwo = document.createElement("span");
  bubbleTwo.classList.add("bubbletwo");
  document.body.appendChild(bubbleTwo);

  const size = Math.random() * 100 + 100 + "px";
  bubbleTwo.style.height = size;
  bubbleTwo.style.width = size;

  bubbleTwo.style.top = Math.random() * 100 + 50 + "%";
  bubbleTwo.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubbleTwo.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubbleTwo.addEventListener("click", stopTimer);

  bubbleTwo.addEventListener("click", () => {
    document.querySelector("#lose").innerHTML += ` 
    <div class="lose-inner">
    <h1>Game Over</h1>
    <h2>Bah alors, <span>${pseudo}</span> on ne sait pas cliquer sur le bon <span>Maxime</span> ! </h2>
    <div class="infos">
    <p>Les règles étaient simples pourtant !</p>
    <p>Le but n'est PAS de cliquer sur les faux <span>Maxime</span>...</p>
    <h4>Ton score final est de ${counter}</h4>
    <h4>Pour un temps de ${timerTime} secondes</h4>
    <p>Avec un peu de chance, tu feras mieux la prochaine fois...</p>
    <a class="button" href="index.html">Recommencer</a>
    </div></div>
    `;
    lose.classList.add("loseOn");
    fail();
    gameover();
    music.pause();
  });

  setTimeout(() => {
    bubbleTwo.remove();
  }, 8000);
};

setInterval(bubbleMakerTwo, 1000);

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

const bubbleMakerWOne = () => {
  const bubblewone = document.createElement("span");
  bubblewone.classList.add("bubblewone");
  document.body.appendChild(bubblewone);

  const size = Math.random() * 100 + 100 + "px";
  bubblewone.style.height = size;
  bubblewone.style.width = size;

  bubblewone.style.top = Math.random() * 100 + 50 + "%";
  bubblewone.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubblewone.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubblewone.addEventListener("click", stopTimer);

  bubblewone.addEventListener("click", () => {
    document.querySelector("#lose").innerHTML += ` 
    <div class="lose-inner">
    <h1>Game Over</h1>
    <h2>Bah alors, <span>${pseudo}</span> on ne sait pas cliquer sur le bon <span>Maxime</span> ! </h2>
    <div class="infos">
    <p>Les règles étaient simples pourtant !</p>
    <p>Le but n'est PAS de cliquer sur les faux <span>Maxime</span>...</p>
    <h4>Ton score final est de ${counter}</h4>
    <h4>Pour un temps de ${timerTime} secondes</h4>
    <p>Avec un peu de chance, tu feras mieux la prochaine fois...</p>
    <a class="button" href="index.html">Recommencer</a>
    </div></div>
    `;
    lose.classList.add("loseOn");
    fail();
    gameover();
    music.pause();
  });

  setTimeout(() => {
    bubblewone.remove();
  }, 8000);
};

setInterval(bubbleMakerWOne, 1000);

const bubbleMakerWTwo = () => {
  const bubblewtwo = document.createElement("span");
  bubblewtwo.classList.add("bubblewtwo");
  document.body.appendChild(bubblewtwo);

  const size = Math.random() * 100 + 100 + "px";
  bubblewtwo.style.height = size;
  bubblewtwo.style.width = size;

  bubblewtwo.style.top = Math.random() * 100 + 50 + "%";
  bubblewtwo.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubblewtwo.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubblewtwo.addEventListener("click", stopTimer);

  bubblewtwo.addEventListener("click", () => {
    document.querySelector("#lose").innerHTML += ` 
    <div class="lose-inner">
    <h1>Game Over</h1>
    <h2>Bah alors, <span>${pseudo}</span> on ne sait pas cliquer sur le bon <span>Maxime</span> ! </h2>
    <div class="infos">
    <p>Les règles étaient simples pourtant !</p>
    <p>Le but n'est PAS de cliquer sur les faux <span>Maxime</span>...</p>
    <h4>Ton score final est de ${counter}</h4>
    <h4>Pour un temps de ${timerTime} secondes</h4>
    <p>Avec un peu de chance, tu feras mieux la prochaine fois...</p>
    <a class="button" href="index.html">Recommencer</a>
    </div></div>
    `;
    lose.classList.add("loseOn");
    fail();
    gameover();
    music.pause();
  });

  setTimeout(() => {
    bubblewtwo.remove();
  }, 8000);
};

setInterval(bubbleMakerWTwo, 1000);

const bubbleMakerROne = () => {
  const bubblerOne = document.createElement("span");
  bubblerOne.classList.add("bubblerone");
  document.body.appendChild(bubblerOne);

  const size = Math.random() * 100 + 100 + "px";
  bubblerOne.style.height = size;
  bubblerOne.style.width = size;

  bubblerOne.style.top = Math.random() * 100 + 50 + "%";
  bubblerOne.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubblerOne.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubblerOne.addEventListener("click", () => {
    win();
    counter++;
    counterDisplay.textContent = counter;
    bubblerOne.remove();
  });

  setTimeout(() => {
    bubblerOne.remove();
  }, 8000);
};

setInterval(bubbleMakerROne, 1000);

const bubbleMakerRTwo = () => {
  const bubblerTwo = document.createElement("span");
  bubblerTwo.classList.add("bubblertwo");
  document.body.appendChild(bubblerTwo);

  const size = Math.random() * 100 + 100 + "px";
  bubblerTwo.style.height = size;
  bubblerTwo.style.width = size;

  bubblerTwo.style.top = Math.random() * 100 + 50 + "%";
  bubblerTwo.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubblerTwo.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubblerTwo.addEventListener("click", () => {
    win();
    counter++;
    counterDisplay.textContent = counter;
    bubblerTwo.remove();
  });

  setTimeout(() => {
    bubblerTwo.remove();
  }, 8000);
};

setInterval(bubbleMakerRTwo, 1000);

window.addEventListener("load", (e) => {
  console.log("hey");
});

valider.addEventListener("click", (e) => {
  e.preventDefault();
  rule.style.display = "none";
});

const startButton = document.querySelector("[data-action=start]");
const stopButton = document.querySelector("[data-action=stop]");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let timerTime = 0;
let isRunning = false;
let interval;

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

function incrementTimer() {
  timerTime++;

  const numOfminutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;

  minutes.innerText = pad(numOfminutes);
  seconds.innerText = pad(numOfSeconds);
}

valider.addEventListener("click", startTimer);

valider.addEventListener("click", (e) => {
  document.querySelector(".urname").innerHTML += ` 
  <div class="username">Nom du joueur : <span>${pseudo}</div>
  `;
});

valider.addEventListener("click", (e) => {
  music.play();
});
