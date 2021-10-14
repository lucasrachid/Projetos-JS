const hour = new Date();
let hours = hour.getHours();
let min = hour.getMinutes();
const showHour = document.querySelector(".hour");
showHour.innerHTML = `Agora são ${hours + `:` + min}`;
const img = document.querySelector("img");

const changeHour = {
  dawn() {
    img.src = "assets/img/dawn.jpeg";
    document.body.style.backgroundColor = "#393673";
  },
  morning() {
    img.src = "assets/img/morning.jpg";
    document.body.style.backgroundColor = "#f8a88b";
  },
  evening() {
    img.src = "assets/img/evening.jpg";
    document.body.style.backgroundColor = "#f8d08b";
  },
  night() {
    img.src = "assets/img/night.jpg";
    document.body.style.backgroundColor = "#08091c";
  },
};

if (hours >= 0 && hours <= 6 && min > 0) {
  changeHour.dawn();
} else if (hours > 6 && hours <= 12 && min < 0) {
  changeHour.morning();
} else if (hours > 12 && hours <= 18 && min < 0) {
  changeHour.evening();
} else {
  changeHour.night();
}
