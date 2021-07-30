var generateBtn = document.querySelector("#generate");

// Item to use for my password such as case,numbers, characters - linked to the fonction and/array 

function generatePassword() {

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray =      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["&", "*", "(", ")", "-", "_","@", "#", "$", "%", "^", "=", "+"];

// Results and user Array 
 
var resultArray = [];
var userArray = [];

// Question that we want to ask to the user liked with the diff. var previously put 
uppercaseArray [1] 

  var numCharacter = prompt ("How any itme do you want to use for your password - between 8 and 128 ?");
  var numbers = confirm     ("Do you want to use numbers in your password?");
  var uppercases = confirm  ("Do you want to use Uppercases in your password?");
  var lowercases = confirm  ("Do you want to use lowercases in your password?");
  var characters = confirm  ("Do you want to use special characters in your password?");



// Statement saying true of false to generate ramdoness 
if (numbers){
  resultArray = resultArray.concat(numbersArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// The results we are expecting the JS to complete over the user interface = Provde a random password 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// An Event listener to generate the click results - meaning that this will allow the ''mouse click'' for the js code to operate 
generateBtn.addEventListener("click", writePassword);

