const envioCor = document.querySelector("#submitCor");
const resultado = document.getElementById("resultado");

envioCor.addEventListener("click", trocarCorDoTexto);

function trocarCorDoTexto() {
  const cor = document.getElementById("cor").value;
  const resultadoSpan = document.querySelector(".resultado-cor");
  resultado.style.color = cor;
  resultadoSpan.innerHTML = `A cor escolhida foi:<span>${cor}</span>`;
}
