// initialize variables
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let array = [
    "unmark", "unmark", "unmark",
    "unmark", "unmark", "unmark",
    "unmark", "unmark", "unmark"
];

// info for player one
let playerOne = {
    name: "Player One",
    marker: 'X'
};

// info for player two
let playerTwo = {
    name: "Player Two",
    marker: 'O'
};

// object for gameboard
const gameboard = ( statusBox, boxNumber) => {
    array[ boxNumber ] = statusBox;
    const test = () => console.log(statusBox + ' ' + boxNumber + ' ' + array);
    return { statusBox, boxNumber, test, array };
};

// event listener for grid
box1.addEventListener('click', () => {
    const boxOne = gameboard( "mark", 0 );
    boxOne.test();
});

box2.addEventListener('click', () => {
    const boxTwo = gameboard( "mark", 1 );
    boxTwo.test();
});

box3.addEventListener('click', () => {
    const boxThree = gameboard( "mark", 2 );
    boxThree.test();
});

box4.addEventListener('click', () => {
    const boxFour = gameboard( "mark", 3 );
    boxFour.test();
});

box5.addEventListener('click', () => {
    const boxFive = gameboard( "mark", 4 );
    boxFive.test();
});

box6.addEventListener('click', () => {
    const boxSix = gameboard( "mark", 5 );
    boxSix.test();
});

box7.addEventListener('click', () => {
    const boxSeven = gameboard( "mark", 6 );
    boxSeven.test();
});

box8.addEventListener('click', () => {
    const boxEight = gameboard( "mark", 7 );
    boxEight.test();
});

box9.addEventListener('click', () => {
    const boxNine = gameboard( "mark", 8 );
    boxNine.test();
});