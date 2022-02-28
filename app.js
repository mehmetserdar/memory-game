document.addEventListener('DOMContentLoaded', () => {
  //card options


  const cardArray = [{
      name: 'fries',
      img: 'https://picsum.photos/260/220?random=1'
    },
    {
      name: 'cheeseburger',
      img: 'https://picsum.photos/260/220?random=2'
    },
    {
      name: 'ice-cream',
      img: 'https://picsum.photos/260/220?random=3'
    },
    {
      name: 'pizza',
      img: 'https://picsum.photos/260/220?random=4'
    },
    {
      name: 'milkshake',
      img: 'https://picsum.photos/260/220?random=5'
    },
    {
      name: 'hotdog',
      img: 'https://picsum.photos/260/220?random=6'
    },
    {
      name: 'fries',
      img: 'https://picsum.photos/260/220?random=1'
    },
    {
      name: 'cheeseburger',
      img: 'https://picsum.photos/260/220?random=2'
    },
    {
      name: 'ice-cream',
      img: 'https://picsum.photos/260/220?random=3'
    },
    {
      name: 'pizza',
      img: 'https://picsum.photos/260/220?random=4'
    },
    {
      name: 'milkshake',
      img: 'https://picsum.photos/260/220?random=5'
    },
    {
      name: 'hotdog',
      img: 'https://picsum.photos/260/220?random=6'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const matchDisplay = document.querySelector('#match')

  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []



  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'https://picsum.photos/260/220/?blur=10')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]


    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'https://picsum.photos/260/220/?blur=10')
      cards[optionTwoId].setAttribute('src', 'https://picsum.photos/260/220/?blur=10')

    } else if (cardsChosen[0] === cardsChosen[1]) {
      matchDisplay.textContent = "It's a match!"
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'https://picsum.photos/260/220/?blur=10')
      cards[optionTwoId].setAttribute('src', 'https://picsum.photos/260/220/?blur=10')
      matchDisplay.textContent = "No match!"
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      matchDisplay.textContent = ""
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 800)
    }
  }

  createBoard()
})
