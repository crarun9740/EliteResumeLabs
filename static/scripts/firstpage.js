const display = document.getElementById("display");
const display2 = document.getElementById("display-2");
const footer = document.getElementById("footer");
const btn1 = document.getElementById("btn1");
const btn6 = document.getElementById("btn-6");
const allBtn = document.querySelectorAll("#new-btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector(".btn-5");
const btn7 = document.querySelector(".btn-7");
const prefernotnotans = document.querySelector(".end-btn-1");

window.addEventListener("load", () => {
  footer.style.marginTop = "300px";
  display.style.display = "none";
  display2.style.display = "none";
});

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("display").style.display = "block";
  btn1.style.border = "4px solid #00a6fb";
});

btn2.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("display").style.display = "block";
  footer.style.marginTop = "80px";
  btn2.style.border = "4px solid #00a6fb";
});

btn6.addEventListener("click", (event) => {
  event.preventDefault();
  display2.style.display = "block";
  btn6.style.border = "4px solid #00a6fb";
});

prefernotnotans.addEventListener("click", () => {
  location.reload();
});
