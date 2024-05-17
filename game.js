const containerele=document.querySelector(".container")
const btnply=document.querySelector(".btn_again")//playagainbtn
const hidenumb=document.querySelector(".hide-num")//hidden num
const userGuess=document.querySelector(".input-num")//userinput

const targetNumber = Math.floor(Math.random() * 100) + 1;
let uscore = 0;

document.getElementById('checkbtn').addEventListener('click', checkGuess);


function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Please enter a valid number between 1 and 100");
      return;
    }
    uscore++;
    if (userGuess === targetNumber) {
      document.getElementById("message").innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    } else if (userGuess < targetNumber) {
      document.getElementById("message").innerText = "Try a higher number.";
    } else {
      document.getElementById("message").innerText = "Try a lower number.";
    }
    document.querySelector('score').innerHTML=uscore;
  }



  