"use strict";
const timer24 = document.querySelector(".time-24");
const timer12 = document.querySelector(".time-12");
const toggle = document.querySelector(".button-toggle");

//24 hour format
const tick = function () {
  const now = new Date();
  const min = String(now.getMinutes()).padStart(2, 0);
  const hours = String(now.getHours()).padStart(2, 0);
  const secs = String(now.getSeconds()).padStart(2, 0);

  timer24.textContent = `${hours}:${min}:${secs}`;
};
tick();
setInterval(tick, 1000);

//12 hour format
setInterval(function () {
  const now = new Date();
  const min = String(now.getMinutes()).padStart(2, 0);
  // let hours = String(now.getHours()).padStart(2, 0);
  let hours = String(now.getHours()).padStart(2, 0);
  hours = hours == "00" ? "12" : hours;
  hours = hours > "12" ? String(Number(hours) - 12) : hours;
  const secs = String(now.getSeconds()).padStart(2, 0);

  // timer12.textContent = `${hours}:${min}:${secs} ${
  //   hours >= "12" ? "pm" : "am"
  // }`;
  timer12.textContent = `${hours}${Number(secs) % 2 == 0 ? ":" : " "}${min} ${
    hours >= "12" ? "pm" : "am"
  }`;
}, 1000);

//toggle button
toggle.addEventListener("click", function (e) {
  e.preventDefault();
  timer12.classList.toggle("hidden");
  timer24.classList.toggle("hidden");
});
