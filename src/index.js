let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let day = days[now.getDay()];

let months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
let month = months[now.getMonth()];

let currentDate = document.querySelector("h1");
let cityResult = document.querySelector("#search-bar");
let country = document.querySelector("h2");
let form = document.querySelector("#citySubmit-form");
let degC = document.querySelector("#degC");
let degF = document.querySelector("#degF");
let finalTemp = document.querySelector("#temp");

currentDate.innerHTML = `${date} ${month} ${year} ${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  country.innerHTML = `${cityResult.value}`;
}

function clickDegC(event) {
  finalTemp.innerHTML = "19";
  event.target.classList.add("bold");
  degF.classList.remove("bold");
}

function clickDegF(event) {
  finalTemp.innerHTML = "65";
  event.target.classList.add("bold");
  degC.classList.remove("bold");
}

form.addEventListener("submit", search);
degC.addEventListener("click", clickDegC);
degF.addEventListener("click", clickDegF);
