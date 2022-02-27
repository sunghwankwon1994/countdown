const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
let dateInputEl = document.getElementById("dateInput");

let newDays = "2023-01-01";

function enterDate() {
  const currentDate = new Date();
  let dateInput = new Date(dateInputEl.value);
  console.log(dateInput);
  if (dateInput - currentDate >= 0) {
    newDays = dateInputEl.value;
  } else {
    alert("Error!: The past cannot be entered.");
  }
}

function countdown() {
  const newDaysDate = new Date(newDays);
  const currentDate = new Date();

  const totalSeconds = (newDaysDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = (Math.floor(totalSeconds / 3600) % 24) + 5;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
