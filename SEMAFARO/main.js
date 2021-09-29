const semafaro = document.querySelector(".img");
const vermelho = document.querySelector(".vermelho");
const amarelo = document.querySelector(".amarelo");
const verde = document.querySelector(".verde");
const automatico = document.querySelector(".automatico");
const desativar = document.querySelector(".desativar");

vermelho.addEventListener("click", () => {
  semafaro.src = "img/vermelho.png";
});

amarelo.addEventListener("click", () => {
  semafaro.src = "img/amarelo.png";
});

verde.addEventListener("click", () => {
  semafaro.src = "img/verde.png";
});

desativar.addEventListener("click", () => {
  semafaro.src = "img/desligado.png";
});

// automatico.addEventListener("click", () => {
//   semafaro.src = "img/vermelho.png";
// });
