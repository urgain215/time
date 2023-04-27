"use strict";
const timer24 = document.querySelector(".time-24");
const timer12 = document.querySelector(".time-12");
const toggle = document.querySelector(".button-toggle");

//24 hour format
const tick_24 = function () {
  const now = new Date();
  const min = String(now.getMinutes()).padStart(2, 0);
  const hours = String(now.getHours()).padStart(2, 0);
  const secs = String(now.getSeconds()).padStart(2, 0);

  timer24.textContent = `${hours}:${min}:${secs}`;
};
tick_24();
setInterval(tick_24, 1000);

//12 hour format
const tick_12 = function () {
  const now = new Date();
  const min = String(now.getMinutes()).padStart(2, 0);
  let orihours = String(now.getHours()).padStart(2, 0);
  let newhours = orihours == "00" ? "12" : orihours;
  newhours =
    orihours > "12" ? String(Number(orihours) - 12).padStart(2, 0) : orihours;
  const secs = String(now.getSeconds()).padStart(2, 0);

  // timer12.textContent = `${hours}:${min}:${secs} ${
  //   hours >= "12" ? "pm" : "am"
  // }`;
  timer12.textContent = `${newhours}${
    Number(secs) % 2 == 0 ? ":" : " "
  }${min} ${orihours >= "12" ? "pm" : "am"}`;
};
tick_12();
setInterval(tick_12, 1000);

//toggle button
toggle.addEventListener("click", function (e) {
  e.preventDefault();
  timer12.classList.toggle("hidden");
  timer24.classList.toggle("hidden");
});
