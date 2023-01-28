const cardsFigure =  document.querySelectorAll(".figure-card")
const cardsImg = document.querySelectorAll(".card-img-top")
const cardsTitle = document.querySelectorAll('.card-title')


const SundaeiImg = document.querySelector('.Sundae')
const CestinhaImg = document.querySelector('.Cestinha')
const CasquinhaSimplesOuRecheadaImg = document.querySelector('.CasquinhaSimplesOuRecheada')
const BananaSplitImg = document.querySelector('.BananaSplit')

const bntCards = document.querySelectorAll('a.btn')

SundaeImg.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')
CestinhaImg.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')
CasquinhaSimplesOuRecheadaImg.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')
BananaSplit.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')


for (let i = 0; i < cardsFigure.length; i++) {
  // define o atributo height como 200px
  cardsFigure[i].style.width = "200px",
  cardsFigure[i].style.height = "250px"
  cardsImg[i].style.width = "100%"
  cardsImg[i].style.height = "100%"
  // bntCards[i].style.backgroundColor = 'var(--cor-roxo-acai)' --> DEFINE A COR DE FUNO DOS BOTO~ES DO CARD
  bntCards[i].classList.add('fs-5')
  cardsTitle[i].classList.add('fs-1')