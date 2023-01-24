"use script";

const btn = document.querySelector("btn-country");
const countiesContainer = document.querySelector(".countries");

////////////////////////////
const getCountryData = function (country, currency) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const Card = ` <article class="country">
        <img class="country__img" src=${data.flags["png"]} />
        <div class="country__data">
          <h3 class="country__name">${data.name["official"]}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages["eng"]}</p>
          <p class="country__row"><span>💰</span>${data.currencies[currency].name}</p>
        </div>
      </article>`;

    countiesContainer.insertAdjacentHTML("beforeend", Card);
    countiesContainer.style.opacity = 1;
  });
};

getCountryData("usa", "USD");
getCountryData("Republic%20of%20India", "INR");
getCountryData("Germany", "EUR");
