//stars

const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  document.querySelector(".galaxy-container").appendChild(star);
}
//stars

//text POIZONKG
const text = "PØIZON KG";
const delay = 50; // Delay between characters in milliseconds
let i = 0;

const randomChar = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
};

const typingInterval = setInterval(() => {
  if (i < 7) {
    document.querySelector(".typing-text").textContent += randomChar();
  } else {
    document.querySelector(".typing-text").textContent = text.substring(0, i);
  }
  i++;
  if (i > text.length) {
    clearInterval(typingInterval);
  }
}, delay);

//text POIZONKG

//calculator
const form = document.querySelector("#calculator-form");
const rmbPriceInput = document.querySelector("#rmb-price");
const somPriceSpan = document.querySelector("#som-price");
const deliveryCostSpan = document.querySelector("#delivery-cost");
const totalCostSpan = document.querySelector("#total-cost");

rmbPriceInput.addEventListener("input", (event) => {
  const rmbPrice = event.target.value;
  const exchangeRate = 12.7;

  const somPrice = rmbPrice * exchangeRate;
  let deliveryCost = 0;
  if (rmbPrice <= 120) {
    deliveryCost = 500;
  } else {
    deliveryCost = 1500;
  }
  const totalCost = somPrice + deliveryCost;

  somPriceSpan.textContent = somPrice;
  deliveryCostSpan.textContent = deliveryCost;
  totalCostSpan.textContent = totalCost;
});
//calculator
