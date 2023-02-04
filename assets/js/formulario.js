// ---------- VALIDAÇÃO USERNAME ---------- //
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const  ExpRegTel = /^[0-9]{11}$/;



form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  sobrenomeValidate();
  emailValidate();
  telefoneValidate();
  enviar(event);
})

function setError(index) {
  campos[index].style.borderBottom = '2px solid #cc1100';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.borderBottom = '2px solid #3cb043';
  spans[index].style.display = 'none';
}

function nameValidate() {
  console.log(campos[0].value.length);
  if (campos[0].value.length < 3) {
    setError(0);
    inputsCorretos.username = false;
  } else {
    removeError(0);
    inputsCorretos.username = true;
  }
}

function sobrenomeValidate() {
  console.log(campos[1].value.length);
  if (campos[1].value.length < 7) {
    setError(1);
    inputsCorretos.sobrenome = false;
  } else {
    removeError(1);
    inputsCorretos.sobrenome = true
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2);
    inputsCorretos.email = false;
  } else {
    removeError(2);
    inputsCorretos.email = true
  }
}

function telefoneValidate() {
  if (!ExpRegTel.test(campos[3].value)) {
    setError(3);
    inputsCorretos.telefone = false;
  } else {
    removeError(3);
    inputsCorretos.telefone = true
  }
}

let bntEnviar = document.querySelector("#submit");
let inputsCorretos = {
  username: false,
  sobrenome: false,
  email: false,
  telefone: false,
}
bntEnviar.addEventListener("click", enviar)

function enviar(event) {
  if (inputsCorretos.username == false || inputsCorretos.sobrenome == false || inputsCorretos.email == false || inputsCorretos.telefone == false) {
    event.preventDefault();
    alert("Preencha todas as informações")
  } else {
    alert("Formulário enviado")
  }
}