// ---------- VALIDAÇÃO USERNAME ---------- //
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  sobrenomeValidate();
  emailValidate();
  telefoneValidate()
  enviar();
});

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
  } else {
    removeError(0);
  }
}

function sobrenomeValidate() {
  console.log(campos[1].value.length);
  if (campos[1].value.length < 7) {
    setError(1);
  } else {
    removeError(1);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2);
  } else {
    removeError(2);
  }
}

function telefoneValidate() {
  console.log(campos[3].value.length);
  if (campos[3].value.length < 7) {
    setError(3);
  } else {
    removeError(3);
  }
}


function enviar() {
  alert("Formulario enviado")
}