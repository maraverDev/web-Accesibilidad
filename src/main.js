const body = document.getElementById("body");
const btnChangeTheme = document.getElementById("themeToggleBtn");
const btnClickCount = document.getElementById("clickButton");
let clickCount = 0;
const txtClickCount = document.getElementById("clickCounter");
const btnSizeTxt = document.getElementById("textSizeBtn");
const btnCiego = document.getElementById("ciegoBtn");
const scrollBtn = document.getElementById("scrollTopBtn");
const btnColor = document.getElementById("changeColorBtn");
const sectionChangeColor = document.getElementById("sectionText");

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-gray-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-amber-500",
];

function getColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColor() {
  const newColor = getColor();
  sectionChangeColor.className = `p-2 ${newColor}`;
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

function changeTheme() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light"); // Guardar la preferencia
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark"); // Guardar la preferencia
  }
}
function clickCounter() {
  clickCount++;
  txtClickCount.innerText = clickCount;
}

function aumentarTexto() {
  if (body.classList.contains("text-2xl")) {
    body.classList.remove("text-2xl");
  } else {
    body.classList.add("text-2xl");
  }
}

function leerTexto() {
  const content = document.body.innerText;
  const mensaje = new SpeechSynthesisUtterance(content);
  mensaje.lang = "es-ES";
  window.speechSynthesis.speak(mensaje);
}

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }

  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progress = (scrollTop / documentHeight) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


btnColor.addEventListener("click", changeColor);
scrollBtn.addEventListener("click", scrollToTop);
btnChangeTheme.addEventListener("click", changeTheme);
btnSizeTxt.addEventListener("click", aumentarTexto);
btnClickCount.addEventListener("click", clickCounter);
btnCiego.addEventListener("click", leerTexto);
