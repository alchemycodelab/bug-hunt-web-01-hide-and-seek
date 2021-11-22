// import functions and grab DOM elements
const shedClick = document.getElementById('shed-button');
const boulderButton = document.getElementById('boulder');

const shedContainer = document.getElementById('Shed-Container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('bouldercontainer');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = [
    'tree'
    'shed'
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.random();

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses--;
    }

    totalGuesses = totalEl.textContent;
    correctGuesses = winsEl.textContent;

}

function setStyles() {
    shedContainer.classList.add = 'face';
    treeContainer.classList.add = 'face';
    boulderContainer.classList.add = 'face';
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
shedButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'shed');  
});

treeButton.addEventListener('submit', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'tree');  
});

boulderButton.addEventListener(() => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'boulder');  
});
