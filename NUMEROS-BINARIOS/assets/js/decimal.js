// DECIMAL PARA BINARIO
const converterDe = document.querySelector("#converterDe");
const resultDe = document.querySelector("#resultDe");

converterDe.addEventListener("click", () => {
  const numberDe = document.querySelector("#numberDe");
  if (!numberDe.value) return alert("Você deve informar o valor binário!");
  resultDe.value = `${binario(numberDe.value)}`;
});

let binario = (numero) => {
  let binarioArray = [];
  while (numero > 1) {
    binarioArray.push(numero % 2);
    numero = Math.floor(numero / 2);
  }
  binarioArray.push(numero);
  return parseInt(binarioArray.reverse().join(""));
};
