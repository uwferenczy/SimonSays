var buttonColours=["red", "blue", "green", "yellow"]
var gamePattern=[]
var blueSound = new Audio('sounds/blue.mp3');
var greenSound = new Audio('sounds/green.mp3');
var redSound = new Audio('sounds/red.mp3');
var yellowSound = new Audio('sounds/yellow.mp3');
var wrongSound = new Audio('sounds/wrong.mp3');

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4)
    return randomNumber
}

var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100).fadeIn(100);

function playSound(colour){
    switch(colour){
    case 'blue':
        blueSound.play();
        break;
    case 'green':
        greenSound.play();
        break;
    case 'red':
        redSound.play();
        break;
    case 'yellow':
        yellowSound.play();
        break;
}
}

playSound(randomChosenColour);

console.log(gamePattern);