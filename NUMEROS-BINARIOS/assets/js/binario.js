// BINARIO PARA DECIMAL
const converterBi = document.querySelector("#converterBi");
const resultBi = document.querySelector("#resultBi");

converterBi.addEventListener("click", () => {
  const numberBi = document.querySelector("#numberBi");
  if (!numberBi.value) return alert("Você deve informar o valor binário!");
  resultBi.value = `${decimal(numberBi.value)}`;
});

function decimal(numero) {
  const binario = document.querySelector("#numberBi").value;
  const decimal = parseInt(binario, 2);
  return decimal;
}
