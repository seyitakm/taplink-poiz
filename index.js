const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  document.querySelector(".galaxy-container").appendChild(star);
}

// const mysteryBoxesContainer = document.getElementById("mystery-boxes");
// let size = 50;
// let direction = 1;

// function fly() {
//   const x = Math.floor(Math.random() * window.innerWidth);
//   const y = Math.floor(Math.random() * window.innerHeight);
//   this.style.top = `${y}px`;
//   this.style.left = `${x}px`;

//   if (Math.random() < 0.5) {
//     direction *= -1;
//   }
//   this.style.transform = `scaleX(${direction})`;
// }

// for (let i = 0; i < 10; i++) {
//   const mysteryBox = document.createElement("div");
//   mysteryBox.classList.add("mystery-box");
//   mysteryBoxesContainer.appendChild(mysteryBox);
//   fly.call(mysteryBox);
//   setInterval(fly.bind(mysteryBox), 2000);

//   mysteryBox.addEventListener("click", () => {
//     size += 50;
//     mysteryBox.style.width = `${size}px`;
//     mysteryBox.style.height = `${size}px`;
//   });
// }

// const mysteryBoxesContainer = document.getElementById("mystery-boxes");
// let size = 50;
// let direction = 1;

// function fly() {
//   const x = Math.floor(Math.random() * window.innerWidth);
//   const y = Math.floor(Math.random() * window.innerHeight);
//   this.style.top = `${y}px`;
//   this.style.left = `${x}px`;

//   if (Math.random() < 0.5) {
//     direction *= -1;
//   }
//   this.style.transform = `scaleX(${direction})`;
// }

// for (let i = 0; i < 10; i++) {
//   const mysteryBox = document.createElement("div");
//   mysteryBox.classList.add("mystery-box");
//   mysteryBoxesContainer.appendChild(mysteryBox);

//   fly.call(mysteryBox);
//   setInterval(fly.bind(mysteryBox), 4000);

//   mysteryBox.addEventListener("click", () => {
//     size += 50;
//     mysteryBox.style.width = `${size}px`;
//     mysteryBox.style.height = `${size}px`;
//   });
// }
const mysteryBoxesContainer = document.getElementById("mystery-boxes");
let size = 50;
let direction = 1;

function fly() {
  const x = Math.floor(Math.random() * window.innerWidth);
  this.style.top = `${Math.random() * window.innerHeight}px`;
  this.style.left = `${x}px`;
  this.style.transform = `scaleX(${direction})`;

  if (Math.random() < 0.5) {
    direction *= -1;
  }

  const interval = setInterval(() => {
    this.style.width = `${size}px`;
    this.style.height = `${size}px`;
    this.style.top = `${parseInt(this.style.top) + 1}px`;

    if (parseInt(this.style.top) > window.innerHeight) {
      clearInterval(interval);
      this.style.display = "none";
    }
  }, 20);
}

document.body.appendChild(mysteryBoxesContainer);

for (let i = 0; i < 20; i++) {
  const mysteryBox = document.createElement("div");
  mysteryBox.style.position = "absolute";
  mysteryBox.style.top = "-50px";
  mysteryBox.style.left = "0";
  mysteryBox.style.width = "50px";
  mysteryBox.style.height = "50px";
  mysteryBox.style.background = "url('./assets/poizonbox.png') no-repeat";
  mysteryBox.style.backgroundSize = "cover";
  mysteryBox.style.transition = "all 0.5s";
  mysteryBoxesContainer.appendChild(mysteryBox);

  fly.call(mysteryBox);
}
