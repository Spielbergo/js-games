const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'bacon',
        img: 'images/bacon.jpg'
    },
    {
        name: 'curry',
        img: 'images/curry.jpg'
    },
    {
        name: 'pasta',
        img: 'images/pasta.jpg'
    },
    {
        name: 'veggies',
        img: 'images/veggies.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'bacon',
        img: 'images/bacon.jpg'
    },
    {
        name: 'curry',
        img: 'images/curry.jpg'
    },
    {
        name: 'pasta',
        img: 'images/pasta.jpg'
    },
    {
        name: 'veggies',
        img: 'images/veggies.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay =  document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('width', '100px');
        card.setAttribute('height', '100px');
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have already click that image');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('MATCH');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You fucked up. Try again!');
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congrats! You fuckin won!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500 )
    }
    console.log(cardsChosen);
}