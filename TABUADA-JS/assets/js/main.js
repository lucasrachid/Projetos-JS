const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const numero = document.querySelector("#numero");
  const result = document.querySelector("#tabuada");
  if (numero.value.length == 0) {
    alert("Preencha um número.");
  } else {
    const numeroTabuada = Number(numero.value);
    result.innerHTML = ``;
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${numeroTabuada} x ${c} = ${numeroTabuada * c}`;
      item.value = `result${c}`;
      result.appendChild(item);
    }
  }
});
