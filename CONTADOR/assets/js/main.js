const count = document.getElementById("count");

count.addEventListener("click", () => {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const step = document.getElementById("step");
  const result = document.getElementById("result");
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    alert("[ERRO] Preencha todos os campos");
  } else {
    result.innerHTML = "Contando...";
    let i = Number(start.value);
    let f = Number(end.value);
    let p = Number(step.value);
    if (p <= 0) {
      alert("Passo inválido! Considerando Passo 1");
      p = 1;
    }
    if (i < f) {
      // Contagem Crescente
      for (let c = i; c <= f; c += p) {
        // console.log(`Batata ${c}`);
        result.innerHTML += ` ${c} \u{1F449}`;
      }
    } else if (i > f) {
      // Contagem Decrescente
      for (let c = i; c >= f; c -= p) {
        result.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    result.innerHTML += `\u{1F3C1}`;
  }
});
