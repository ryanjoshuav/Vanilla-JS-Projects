const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const getRemainingTime = (futureTime, countdown) => {
  const today = new Date().getTime();

  const remainingTime = futureTime - today;
  // console.log(remainingTime);
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d =24hr

  //values in ms
  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  //calculate all values
  const days = Math.floor(remainingTime / oneDay);
  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  const mins = Math.floor((remainingTime % oneHour) / oneMinute);
  const secs = Math.floor((remainingTime % oneMinute) / 1000);

  //set values array
  const values = [days, hours, mins, secs];

  //render remaining time
  items.forEach((item, i) => {
    item.innerHTML = formatTime(values[i]);
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
};

//set future date
const getFutureDate = () => {
  const currentYear = new Date().getFullYear();
  let futureDate = new Date(currentYear, 11, 31, 23, 59, 59, 999);

  const weekday = futureDate.getDay();
  const date = futureDate.getDate();
  const month = futureDate.getMonth();
  const year = futureDate.getFullYear();
  let hours = futureDate.getHours();
  const amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 0;
  const minutes = futureDate.getMinutes();

  giveaway.textContent = `giveaway ends on ${weekdays[weekday]}, ${date} ${months[month]} ${year} ${hours}:${minutes}${amOrPm}`;

  const futureTime = futureDate.getTime();
  return futureTime;
};

const initApp = () => {
  const futureTime = getFutureDate();

  const countdown = setInterval(
    () => getRemainingTime(futureTime, countdown),
    1000
  );
  // getRemainingTime(futureTime);
};

document.addEventListener("DOMContentLoaded", initApp);
