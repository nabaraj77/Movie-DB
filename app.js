const onTv = document.querySelector(".on-tv");
const inThreateres = document.querySelector(".in-threateres");

// Highighting on TV and In Threateres
function click() {
  onTv.classList.toggle("clicked");
  inThreateres.classList.toggle("clicked");
}
onTv.addEventListener("click", click);
inThreateres.addEventListener("click", click);

//FILMS MAKING FUNCTION
let filmSrc = document.querySelector(".image");
let circleDown = document.querySelector(".circle-down");
let filmName = document.querySelector(".bold");
let filmDate = document.querySelector(".italic");
let filmsSection = document.querySelector(".films-section");
let filmAdded = document.querySelector(".filmsAdded");
console.log(filmAdded);
const films = (filmSrc, circleValue, film, date) => {
  //filmSrc = img;
  let html = `<div class="films">
      <a class="" href="">
        <img src=${filmSrc} alt="film1" />
      </a>
      <p class="circle-up">...</p>
      <p class="circle-down">${circleValue}%</p>
      <p class="bold">${film}</p>
      <p class="italic">${date}</p>
    </div>`;
  filmAdded.insertAdjacentHTML("beforebegin", html);
};
films("photo2.jpg", 23, "Obi-Wan Kenobi", "May 26, 2022");
films("photo3.jpg", 50, "Euronews Hoy", "Jan 28, 2019");
films("photo4.jpg", 44, "Pantanal", "Mar 28, 2022");
films("photo5.jpg", 72, "Canım Annem", "Feb 14, 2022");
films("photo6.jpg", 87, "SPY x FAMILY", "Apr 09");
films("photo7.jpg", 46, "Power Couple ", "Apr 12, 2016");

let mov = document.getElementById("mov");
mov.classList.add("hidden");
// document.addEventListener("mouseover", function () {
//   mov.classList.remove("hidden");
// });
function myEnterFunction() {
  let mov = document.getElementById("mov");
  mov.classList.remove("hidden");
}
function onMouseLeave() {
  let mov = document.getElementById("mov");
  mov.classList.add("hidden");
}
