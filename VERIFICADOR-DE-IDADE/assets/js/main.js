const birthday = document.querySelector("#birthday");
const verify = document.querySelector("#verify");
const complement = document.querySelector(".complement");
const result = document.querySelector(".result");
let boxResult = document.createElement("img");
boxResult.setAttribute("class", "photo");

const methods = {
  checkAge() {
    const date = new Date();
    const year = date.getFullYear();
    const age = year - birthday.value;
    return age;
  },
  checkGender() {
    const gender = ["Masculino", "Feminino"];
    let genders = document.getElementsByName("genders");
    for (let i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        return gender[i];
      }
    }
  },
  checkPerson(age, gender) {},
};

const verifyElements = {
  birthdayTrue() {
    if (!birthday.value) {
      return alert("Você deve preencher todos os dados.");
    }
  },
  genderTrue() {
    if (!methods.checkGender()) {
      return alert("Você deve preencher todos os dados.");
    }
  },
  okAge() {
    if (methods.checkAge() < 0) {
      return alert("Ano de nascimento inválido.");
    }
  },
};

verify.addEventListener("click", () => {
  const lineAge = methods.checkAge();
  const gender = methods.checkGender();
  verifyElements.birthdayTrue();
  verifyElements.genderTrue();
  verifyElements.okAge();
  complement.innerHTML = `Detectamos uma pessoa de ${lineAge} anos, do sexo ${gender}.`;
  if (lineAge <= 15 && gender == "Masculino") {
    boxResult.setAttribute("src", "assets/img/bebe-homem.jpg");
  } else if (lineAge > 15 && lineAge <= 40 && gender == "Masculino") {
    boxResult.setAttribute("src", "assets/img/homem.jpg");
  } else if (lineAge > 40 && gender == "Masculino") {
    boxResult.setAttribute("src", "assets/img/idoso.jpg");
  } else if (lineAge <= 15 && gender == "Feminino") {
    boxResult.setAttribute("src", "assets/img/bebe-mulher.jpg");
  } else if (lineAge > 15 && lineAge <= 40 && gender == "Feminino") {
    boxResult.setAttribute("src", "assets/img/mulher.jpg");
  } else if (lineAge > 40 && gender == "Feminino") {
    boxResult.setAttribute("src", "assets/img/idosa.jpg");
  } else {
    alert("Erro: Algum dado está incorreto.");
  }
  result.appendChild(boxResult);
});
