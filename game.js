const divOne = document.querySelector ('.name');
const divTwo = document.querySelector ('.welcome');
const divThree = document.querySelector ('.message');
const gameTittle = document.querySelector ('.gametittle');
const inputName = document.querySelector ('#input-name');
const firstButton = document.querySelector ('#firstbutton');
const welcome = document.querySelector ('#welcomename');
const inputGuess = document.querySelector ('#input-guess');
const secondButton = document.querySelector ('#secondbutton');
const thirdButton = document.querySelector ('#thirdbutton');
const result = document.querySelector ('#Gameresult');

firstButton.addEventListener ('click', popUpTwo)

function popUpTwo () {
    let n = inputName.value;
    if (n == ''){
        alert('Name is required')
    }
    else {
    divTwo.style.zIndex = 3;
    divThree.style.zIndex = 2;
    divOne.style.zIndex = 1;
    welcome.innerHTML = `welcome ${n} !`
    }
    
};

secondButton.addEventListener ('click', popUpThree );

function popUpThree () {
    if (isNaN (inputGuess.value)| inputGuess.value =='') {
        alert('Input valid number')
}
    else { divThree.style.zIndex = 3;
    divOne.style.zIndex = 2;
    divTwo.style.zIndex = 1;
    let randomNumber = Math.floor(Math.random () * 10)
    if (inputGuess.value == randomNumber) {
        result.innerHTML = `You got it right`;
        divThree.style.backgroundColor = 'green';
    }
    else {
        result.innerHTML = `You are Wrong, Try again the number is ${randomNumber}`;
        divThree.style.backgroundColor = 'red';
    }  };    
};

thirdButton.addEventListener ('click', popUpOne);

function popUpOne () {
    divOne.style.zIndex = 3;
    divTwo.style.zIndex = 2;
    divThree.style.zIndex = 1;
    inputName.value = '';
    inputGuess.value = '';
};

    
