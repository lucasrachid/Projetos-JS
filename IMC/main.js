const namePerson = document.querySelector("#name");
const submit = document.querySelector(".Calcular");
const result = document.querySelector(".result");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

submit.addEventListener("click", () => {
  if (namePerson.value === "" || height.value === "" || weight.value === "") {
    return alert("Preencha todos os campos!!!");
  } else {
    result.innerHTML = `<p>Olá ${namePerson.value}, você pesa ${
      weight.value
    } KG e tem ${height.value} metros de altura, e o seu IMC é ${imc().toFixed(
      2
    )}, classificado como ${verificarIMC(imc())}</p>`;
  }
});

function imc() {
  return weight.value / (height.value * height.value);
}

function verificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do Peso";
  if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
  if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
  if (imc >= 30 && imc <= 34.9) return "Obesidade Grau 1";
  if (imc >= 35 && imc <= 39.9) return "Obesidade Grau 2";
  if (imc >= 40) return "Obesidade Grau 3";
}
