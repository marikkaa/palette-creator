let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let modeBtn = document.querySelector(".toggle-mode-btn");

const colors = [
  "aliceblue",
  "antiquewhite",
  "azure",
  "beige",
  "burlywood",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "darkcyan",
  "darkgrey",
  "darkolivegreen",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "deepskyblue",
  "floralwhite",
  "firebrick",
  "gainsboro",
  "ghostwhite",
  "honeydew",
  "indianred",
  "indigo",
  "ivory",
  "lavender",
  "lavenderblush",
  "lightblue",
  "lightpink",
  "linen",
  "maroon",
  "mediumseagreen",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "navajowhite",
  "navy",
  "oldlace",
  "palevioletred",
  "peru",
  "plum",
  "purple",
  "sienna",
  "sandybrown",
];

btn1.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * colors.length);
  document.getElementById("col1").style.backgroundColor = colors[randomNum];
  document.getElementById("col-name1").innerHTML = colors[randomNum];
});
btn2.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * colors.length);
  document.getElementById("col2").style.backgroundColor = colors[randomNum];
  document.getElementById("col-name2").innerHTML = colors[randomNum];
});
btn3.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * colors.length);
  document.getElementById("col3").style.backgroundColor = colors[randomNum];
  document.getElementById("col-name3").innerHTML = colors[randomNum];
});
btn4.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * colors.length);
  document.getElementById("col4").style.backgroundColor = colors[randomNum];
  document.getElementById("col-name4").innerHTML = colors[randomNum];
});

modeBtn.addEventListener("click", (ev) => {
  ev.target.parentElement.parentElement.classList.toggle("light-mode");
  ev.target.classList.toggle("change-mode");
  let btns = document.getElementsByClassName("color-btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.toggle("toggle-color");
  }
});

let hexBtn = document.querySelector(".btn-hex");

hexBtn.addEventListener("click", () => {
  function getRandomHexNumber() {
    return Math.floor(Math.random() * 16).toString(16);
  }
  function getRandomHexColor() {
    return "#" + Array.from({ length: 6 }).map(getRandomHexNumber).join("");
  }
  let randomHexColor1 = getRandomHexColor();

  document.getElementById("col1").style.backgroundColor = randomHexColor1;
  document.getElementById("col-name1").innerHTML = randomHexColor1;

  let randomHexColor2 = getRandomHexColor();

  document.getElementById("col2").style.backgroundColor = randomHexColor2;
  document.getElementById("col-name2").innerHTML = randomHexColor2;

  let randomHexColor3 = getRandomHexColor();

  document.getElementById("col3").style.backgroundColor = randomHexColor3;
  document.getElementById("col-name3").innerHTML = randomHexColor3;

  let randomHexColor4 = getRandomHexColor();

  document.getElementById("col4").style.backgroundColor = randomHexColor4;
  document.getElementById("col-name4").innerHTML = randomHexColor4;
});
