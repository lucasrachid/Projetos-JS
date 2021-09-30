const voltar = document.querySelector(".voltar");
const avancar = document.querySelector(".frente");
let imgIndex = 0;
const smartphone = document.querySelector(".smartphone");

voltar.addEventListener("click", () => {
  removerIndex();
  changeImage();
  console.log(imgIndex);
});

avancar.addEventListener("click", () => {
  adicionarIndex();
  changeImage();
  console.log(imgIndex);
});

const changeImage = () => {
  const images = [
    "chrono",
    "inuyasha",
    "ippo",
    "tenchi",
    "tenjhotenge",
    "yuyuhakusho",
  ];
  const oneImage = images[imgIndex];
  imagens[oneImage]();
};

const imagens = {
  chrono: () => {
    smartphone.style.backgroundImage =
      "url('/PROJETOS-JS/SLIDESHOW/img/chrono.jpg')";
  },
  inuyasha: () => {
    smartphone.style.backgroundImage =
      "url('/PROJETOS-JS/SLIDESHOW/img/inuyasha.jpg')";
  },
  ippo: () => {
    smartphone.style.backgroundImage =
      "url('/PROJETOS-JS/SLIDESHOW/img/ippo.png')";
  },
  tenchi: () => {
    smartphone.style.backgroundImage =
      "url('/PROJETOS-JS/SLIDESHOW/img/tenchi.jpg')";
  },
  tenjhotenge: () => {
    smartphone.style.backgroundImage =
      "url('/PROJETOS-JS/SLIDESHOW/img/tenjhotenge.jpg')";
  },
  yuyuhakusho: () => {
    smartphone.style.backgroundImage =
      "url('/PROJETOS-JS/SLIDESHOW/img/yuyuhakusho.jpg')";
  },
};

function adicionarIndex() {
  if (imgIndex < 5) {
    ++imgIndex;
  } else {
    imgIndex = 0;
  }
}

function removerIndex() {
  if (imgIndex >= 1) {
    --imgIndex;
  } else {
    imgIndex = 5;
  }
}

function alterandoClasse() {
  voltar.classList.toggle("show");
}

function alterandoClasse2() {
  avancar.classList.toggle("show");
}
