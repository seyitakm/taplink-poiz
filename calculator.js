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
const text = "PØIZON SNG";
const delay = 50; // Delay between characters in milliseconds
let i = 0;

const randomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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
const deliverySpan = document.querySelector("#delivery");
const totalCostSpan = document.querySelector("#total-cost");
let currencyRateElement = document.getElementById("currency-rate");
let changeCountry = document.getElementById("changeCountry");
let changeOurCurrency = document.querySelector(".ourCurrencyExchange");

function changeCurrency(country) {
  if (country === "kazakhstan") {
    currencyRateElement.textContent = "70";

    changeCountry.textContent = "страна: Казахстан🇰🇿";
    changeOurCurrency.textContent = "тенге";
  } else if (country === "russia") {
    currencyRateElement.textContent = "13.7";
    changeCountry.textContent = "страна: Россия🇷🇺";
    changeOurCurrency.textContent = "рублях";
  } else if (country === "kyrgyzstan") {
    currencyRateElement.textContent = "12.7";
    changeCountry.textContent = "страна: Кыргызстан🇰🇬";
    changeOurCurrency.textContent = "сомах";
  }
  rmbPriceInput.value = "0";
  somPriceSpan.textContent = "0";
  deliveryCostSpan.textContent = "0";
  deliverySpan.textContent = "0";
  totalCostSpan.textContent = "0";
}

rmbPriceInput.addEventListener("input", (event) => {
  const rmbPrice = event.target.value;
  let exchangeRate = currencyRateElement.textContent;

  const somPrice = rmbPrice * exchangeRate;
  let deliveryCost = 0;
  let delivery = 0;

  if (changeOurCurrency.textContent === "тенге") {
    deliveryCost = 7500;
    delivery = 10000;
  } else if (changeOurCurrency.textContent === "рублях") {
    deliveryCost = 1500;
    delivery = 1600;
  } else {
    deliveryCost = 1500;
    delivery = 1300;
  }

  const totalCost = somPrice + deliveryCost + delivery;

  somPriceSpan.textContent = parseFloat(somPrice.toFixed(2));
  deliveryCostSpan.textContent = deliveryCost;
  deliverySpan.textContent = delivery;
  totalCostSpan.textContent = parseFloat(totalCost.toFixed(2));
});
//calculator
