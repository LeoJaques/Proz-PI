function loadImagesInCard(url1, url2, url3){
  const cardImg1 = document.querySelector('.card1')
  const cardImg2 = document.querySelector('.card2')
  const cardImg3 = document.querySelector('.card3')

  cardImg1.setAttribute('src', url1)
  cardImg2.setAttribute('src', url2)
  cardImg3.setAttribute('src', url3)

}

function verifyPage(page){
  return window.location.href.includes(page)
}



if (verifyPage('acai.html')) {
  const polpaImg = 'https://nossafrutabrasil.com.br/wp-content/uploads/2019/11/nossa-fruta-1kg-acai.png'
  
  const barcaImg = 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/16453533726212199cc2353_500_500.jpeg'
  
  const copoImg = '../assets/images/copo.png'
  
  loadImagesInCard(polpaImg, copoImg, barcaImg)
}

if (verifyPage('milkshake.html')) {
    const classicMilkshakeImg = 'https://img.freepik.com/fotos-gratis/milk-shake-em-cima-da-mesa_144627-27512.jpg?w=740&t=st=1674517919~exp=1674518519~hmac=c301116005f979b198629f6122cf763256540fd0aeacff6a1a567f6c84ca0071'
    
    const comboMilkshakeImg = '../assets/images/comboMilkshakeImg.png'
    
    const specialMilkshakeImg = '../assets/images/specialMilkshakeImg.png'

    
    loadImagesInCard(classicMilkshakeImg, specialMilkshakeImg, comboMilkshakeImg)
    
  }

  if (verifyPage('potessorvete.html')){
    const classicPoteSorveteImg = '../assets/images/poteClassico.png'
    
    const comboPoteSorveteImg = 'https://images-food.ifcshop.com.br/produto/11826_0_20200114170948.jpg'
    
    const specialPoteSorveteImg = 'https://static.paodeacucar.com/img/uploads/1/242/609242.png'

    loadImagesInCard(classicPoteSorveteImg, specialPoteSorveteImg, comboPoteSorveteImg)
  }

  if(verifyPage('potesorvete.html') || verifyPage('acai.html') || verifyPage('milkshake.html')){
    const cardsFigure =  document.querySelectorAll(".figure-card")
    const cardsImg = document.querySelectorAll(".card-img-top")
    const cardsTitle = document.querySelectorAll('.card-title')
    const bntCards = document.querySelectorAll('.btn')


    for (let i = 0; i < cardsFigure.length; i++) {
      cardsFigure[i].style.width = "200px",
      cardsFigure[i].style.height = "250px"
      cardsImg[i].style.width = "100%"
      cardsImg[i].style.height = "100%"
      bntCards[i].classList.add('fs-5')
      cardsTitle[i].classList.add('fs-1')
    }
  }

  // PRIMEIRO FORMA DE ADICIONAR UM ELEMENTO MODAL ASSIM QUE A PÁGINA CARREGAR

// window.addEventListener('DOMContentLoaded', () => {
//   const myModal = new bootstrap.Modal('#modalForm')
//   myModal.show()
// })


//AQUI FOI FEITO UMA REFATORAÇÃO PARA VERIFICAR DE O ARQUIVO É O INDEX E QUE POSSUI UM ELEMNTO COM O ID #modalForm 
if (window.location.href.includes('index.html') && document.getElementById('modalForm')) {
  window.addEventListener('DOMContentLoaded', () => {
    const myModal = new bootstrap.Modal('#modalForm')
    myModal.show()
  })
}



if (window.location.href.includes('form.html')) {
  const form = document.querySelector('.offer-form')
  const logoForm = document.querySelector('.logo-form')
  const figureForm = document.querySelector('.figure-form')

  const inputName = document.getElementById("inputName");
  const emailInput = document.getElementById('inputEmail')
  const telInput = document.getElementById('inputTel')


  const checkbox = document.getElementById("gridCheck1")
  const button = document.getElementById("button")

  const helperNomeText = document.getElementById("name-helper")
  const helperEmailText = document.getElementById('email-helper')
  const helperTelText = document.getElementById('tel-helper')

  const validateAlert = document.querySelector('.alert-success')
  const invalidateAlert = document.querySelector('.alert-danger')


  figureForm.style.width = '250px'
  logoForm.style.width = '100%'



  inputName.addEventListener("blur", function() {
    if (inputName.value) {
      inputName.style.border = '1px solid green'
      helperNomeText.style.display = 'none'
    } else {
      inputName.style.border = '1px solid red'
      helperNomeText.innerText = "Insira seu nome."
      helperNomeText.style.display = 'block'
      button.disabled = true
    }
  });


  emailInput.addEventListener('blur', ()=> {
    const email = emailInput.value
    const ExRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
    if (ExRegEmail.test(email)) {
      emailInput.style.border = '1px solid green'
      helperEmailText.style.display = 'none'
  
    } else {
      emailInput.style.border = '1px solid red'
      helperEmailText.innerText = 'Por favor insirar um e-mail valido'
      helperEmailText.style.display = 'block'
      button.disabled = true
    }
  })
  
  
  telInput.addEventListener('blur', () => {
    const telNumber = telInput.value
    const ExpRegTel = /^[0-9]{11}$/
  
  
    if (ExpRegTel.test(telNumber)) {
      telInput.style.border = '1px solid green'
      helperTelText.style.display = 'none'
    } else {
      telInput.style.border = '1px solid red'
      helperTelText.innerText = 'Por favor insirar um telefone válido - (XX) XXXXX-XXXX'
      helperTelText.style.display = 'block'
      button.disabled = true
    }
  
  })
  
  checkbox.addEventListener("change", function() {
    const emailValue = emailInput.value
    const telValue = telInput.value 
    const nomeValue = inputName.value
   
    if (nomeValue && (emailValue || telValue)) {
      button.disabled = false
      checkbox.checked = true
    } else {
      button.disabled = true
      checkbox.checked = false
      invalidateAlert.style.display = 'block'
      setTimeout(() => {
        invalidateAlert.style.display = 'none'
      }, 5000)
    }
  })

  button.addEventListener("click", () => {
    inputName.value = ''
    emailInput.value = ''
    telInput.value = ''
    checkbox.checked = false
    button.disabled = true
    validateAlert.style.display = 'block'
    setTimeout(() => {
      validateAlert.style.display = 'none'
    }, 5000)
  })
}

