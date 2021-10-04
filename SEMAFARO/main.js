const semafaro = document.querySelector(".img");
const vermelho = document.querySelector(".vermelho");
const amarelo = document.querySelector(".amarelo");
const verde = document.querySelector(".verde");
const automatico = document.querySelector(".automatico");
const desativar = document.querySelector(".desativar");
let colorIndex = 0;
let intervalId = null;

vermelho.addEventListener("click", () => {
  stopAutomatic();
  return turnOn.red();
});

amarelo.addEventListener("click", () => {
  stopAutomatic();
  return turnOn.yellow();
});

verde.addEventListener("click", () => {
  stopAutomatic();
  return turnOn.green();
});

desativar.addEventListener("click", () => {
  stopAutomatic();
  return turnOn.turnOff();
});

automatico.addEventListener("click", () => {
  stopAutomatic();
  turnOn.automatic();
});
// automatico.addEventListener("click", () => {
//   stopAutomatic();
//   return setInterval(() => {
//     changeColor();

//   }, 2000);
// });

const nextIndex = () => {
  //   if (colorIndex < 3) {
  //     colorIndex++;
  //   } else {
  //     colorIndex = 0;
  //   }
  //   //OPERACAO TERNARIA
  colorIndex = colorIndex < 3 ? ++colorIndex : 0;
};

const changeColor = () => {
  const colors = ["red", "yellow", "green", "turnOff"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const turnOn = {
  red: () => (semafaro.src = "img/vermelho.png"),
  yellow: () => (semafaro.src = "img/amarelo.png"),
  green: () => (semafaro.src = "img/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 1000)),
  turnOff: () => (semafaro.src = "img/desligado.png"),
};

const stopAutomatic = () => {
  clearInterval(intervalId);
};
