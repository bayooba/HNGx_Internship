"use strict";

const currentDay = document.querySelector("#currentDayOfTheWeek");

const date = new Date();
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDay.innerHTML = daysOfTheWeek[date.getDay()];

const currentUTCTime = function () {
  const UTCTime = Date.now();
  document.querySelector("#currentUTCTime").innerHTML = UTCTime;
  setTimeout(() => {
    currentUTCTime();
  }, 1000);
};

currentUTCTime();
