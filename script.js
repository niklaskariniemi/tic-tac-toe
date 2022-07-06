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
let index = 0;
let playerTurn = 0;

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

// player turn loop
//while ( index < 2 ) {
//    if ( index == 0 ) {
//        playerTurn = 1;
//       index = 1;
//    }
//   else if ( index == 1) {
//        playerTurn = 2;
//        index = 0;
//    }
//    else {
//        playerTurn = "Error";
//    }
//}

// object for gameboard
const gameboard = ( statusBox, boxNumber) => {
    array[ boxNumber ] = statusBox;
    const test = () => console.log(statusBox + ' ' + boxNumber + ' ' + array);
    return { statusBox, boxNumber, test, array };
};

// event listener for grid
box1.addEventListener('click', () => {
    const boxOne = gameboard( "mark", 0 );
    const p1 = document.createElement('p');
    box1.textContent = 'X';
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.fontSize = "32px";
    box1.appendChild(p1);
    boxOne.test();
});

box2.addEventListener('click', () => {
    const boxTwo = gameboard( "mark", 1 );
    const p2 = document.createElement('p');
    box2.textContent = 'X';
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.fontSize = "32px";
    box2.appendChild(p2);
    boxTwo.test();
});

box3.addEventListener('click', () => {
    const boxThree = gameboard( "mark", 2 );
    const p3 = document.createElement('p');
    box3.textContent = 'X';
    box3.style.display = "flex";
    box3.style.alignItems = "center";
    box3.style.justifyContent = "center";
    box3.style.fontSize = "32px";
    box3.appendChild(p3);
    boxThree.test();
});

box4.addEventListener('click', () => {
    const boxFour = gameboard( "mark", 3 );
    const p4 = document.createElement('p');
    box4.textContent = 'X';
    box4.style.display = "flex";
    box4.style.alignItems = "center";
    box4.style.justifyContent = "center";
    box4.style.fontSize = "32px";
    box4.appendChild(p4);
    boxFour.test();
});

box5.addEventListener('click', () => {
    const boxFive = gameboard( "mark", 4 );
    const p5 = document.createElement('p');
    box5.textContent = 'X';
    box5.style.display = "flex";
    box5.style.alignItems = "center";
    box5.style.justifyContent = "center";
    box5.style.fontSize = "32px";
    box5.appendChild(p5);
    boxFive.test();
});

box6.addEventListener('click', () => {
    const boxSix = gameboard( "mark", 5 );
    const p6 = document.createElement('p');
    box6.textContent = 'X';
    box6.style.display = "flex";
    box6.style.alignItems = "center";
    box6.style.justifyContent = "center";
    box6.style.fontSize = "32px";
    box6.appendChild(p6);
    boxSix.test();
});

box7.addEventListener('click', () => {
    const boxSeven = gameboard( "mark", 6 );
    const p7 = document.createElement('p');
    box7.textContent = 'X';
    box7.style.display = "flex";
    box7.style.alignItems = "center";
    box7.style.justifyContent = "center";
    box7.style.fontSize = "32px";
    box7.appendChild(p7);
    boxSeven.test();
});

box8.addEventListener('click', () => {
    const boxEight = gameboard( "mark", 7 );
    const p8 = document.createElement('p');
    box8.textContent = 'X';
    box8.style.display = "flex";
    box8.style.alignItems = "center";
    box8.style.justifyContent = "center";
    box8.style.fontSize = "32px";
    box8.appendChild(p8);
    boxEight.test();
});

box9.addEventListener('click', () => {
    const boxNine = gameboard( "mark", 8 );
    const p9 = document.createElement('p');
    box9.textContent = 'X';
    box9.style.display = "flex";
    box9.style.alignItems = "center";
    box9.style.justifyContent = "center";
    box9.style.fontSize = "32px";
    box9.appendChild(p9);
    boxNine.test();
});