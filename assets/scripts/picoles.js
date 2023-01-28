const cardsFigure =  document.querySelectorAll(".figure-card")
const cardsImg = document.querySelectorAll(".card-img-top")
const cardsTitle = document.querySelectorAll('.card-title')


const PicolésTradicionaisImg = document.querySelector('.PicolésTradicionais')
const SkimóImg = document.querySelector('.Skimó')
const PaletaMexicanaImg = document.querySelector('.PaletaMexicana')

const bntCards = document.querySelectorAll('a.btn')

PicolésTradicionaisImg.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')
SkimóImg.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')
PaletaMexicanaImg.setAttribute('src', 'https://m.media-amazon.com/images/I/014m2zoaPrL.png')

for (let i = 0; i < cardsFigure.length; i++) {
  // define o atributo height como 200px
  cardsFigure[i].style.width = "200px",
  cardsFigure[i].style.height = "250px"
  cardsImg[i].style.width = "100%"
  cardsImg[i].style.height = "100%"
  // bntCards[i].style.backgroundColor = 'var(--cor-roxo-acai)' --> DEFINE A COR DE FUNO DOS BOTO~ES DO CARD
  bntCards[i].classList.add('fs-5')
  cardsTitle[i].classList.add('fs-1')
}