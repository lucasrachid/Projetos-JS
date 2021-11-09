const numbers = document.querySelector("select");
const add = document.querySelector("#adicionar");
const finalizar = document.querySelector("#finalizar");
const result = document.querySelector(".result");
const listaNumber = [];

const metodos = {
  verifyNumber(number) {
    if (number < 1 || number > 100) {
      return alert("Número inferior a 01 ou superior a 100.");
    }
  },
  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  },
  getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  },
};

add.addEventListener("click", () => {
  const number = document.querySelector("input");
  if (number.value.length == 0) {
    return alert("Por favor, preencha um número entre 01 a 100.");
  }
  metodos.verifyNumber(number.value);
  if (number.value > 0 && number.value < 101) {
    let item = document.createElement("option");
    item.text = `Valor ${number.value} adicionado`;
    item.value = `${number.value}`;
    numbers.appendChild(item);
    listaNumber.push(Number(number.value));
  }
});

finalizar.addEventListener("click", () => {
  if (numbers.length == 0) {
    return alert("Adicione números antes de finalizar.");
  }
  // console.log(listaNumber);
  let soma = 0;
  for (let i = 0; i < listaNumber.length; i++) {
    soma += listaNumber[i];
  }
  let media = soma / listaNumber.length;
  result.innerHTML = `<p>Ao todo, temos ${
    listaNumber.length
  } números cadastrados.</p>
  <p>O maior valor informado foi ${metodos.getMaxOfArray(listaNumber)}</p>
  <p>O menor valor informado foi ${metodos.getMinOfArray(listaNumber)}</p>
  <p>Somando todos os valores, temos ${soma}</p>
  <p>A média dos valores digitados é ${media.toFixed(2)}</p>`;
});
