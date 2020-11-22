// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();

// console.log(correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  useHistory();
}


// *CODE GOES BELOW HERE *
function displayResult(numberGuess){

  if (numberGuess > correctNumber){
    showNumberAbove();
  } else if (numberGuess < correctNumber){
    showNumberBelow();
  } else {
    showYouWon();
  }

}

function initGame(){
  // *CODE GOES BELOW HERE *
  correctNumber = getRandomNumber();
  guesses = [];
  document.getElementById("result").innerHTML = '';
  useHistory();
  numberGuess = document.getElementById("number-guess").value = '';

}

function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  return Math.floor(Math.random()*100)+1; 
}

function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  console.log(guesses);
}

function useHistory() {
  let newlist = guesses.map(listItems);
  document.getElementById("history").innerHTML = newlist;
}

function listItems(item){
  let list = "<li class='list-group-item'>" + "You guessed " + item + "</li>"
  return list;
}  

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"

  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won' , text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
 
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning' , text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"

  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning' , text);
  document.getElementById("result").innerHTML = dialog;
}

function addNumbers(num1, num2){
  return num1 + num2;
}

add = addNumbers(1,3);
console.log(add);
