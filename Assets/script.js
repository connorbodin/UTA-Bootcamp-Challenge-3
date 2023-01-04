// // Assignment Code
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var max_count = 5;
var confirmChar = '';
var confirmUpper = '';
var confirmLower = '';
var confirmNum = '';
var confirmSpecial = '';
var allArr = {
  upper: upperCase,
  lower: lowerCase,
  special: specialChar, 
  numbers: num
};

//empty array to concat the 'y' answers together
var passChars = [];

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //    prompt user to choose num btwn 8 - 128
  var confirmChar = prompt('Please select a numerical value between 8 and 128');

  while (confirmChar <= 7 || confirmChar >= 129 || isNaN(confirmChar)) {
    alert('Password length must be between 8 and 128, please try again!');
    var confirmChar = prompt('Please select a numerical value between 8 and 128');
  }
  console.log(confirmChar); {

  }
  alert("You chose " + confirmChar + " number of charactlers! Cool cool, lets create a password with " + confirmChar + ' characters!')
  // Confirming for upper case characters
  var confirmUpper = prompt('Would you like upper case letters? y/n?', 'y/n');

  while (confirmUpper != 'y' && confirmChar != 'n') {
    alert('Must be an input of y or n!');
    var confirmChar = prompt('Would you like upper case letters', 'y/n');
  }
  alert("You chose " + confirmUpper + ' to the option to include uppercase characters!')

  console.log(confirmUpper);

  // Confirming for lower case characters

  var confirmLower = prompt('Would you like lower case characters?', 'y/n');

  while (confirmLower != 'y' && confirmLower != 'n') {
    alert('Must be an input of y or n!');
    var confirmChar = prompt('Would you like lower case letters', 'y/n');
  }
  alert("You chose " + confirmLower + ' to the option to include lower case characters!');

  console.log(confirmLower);

  // Confirming for number characters

  var confirmNum = prompt('Would you like numbers?', 'y/n');

  while (confirmNum != 'y' && confirmNum != 'n') {
    alert('Must be an input of y or n!');
    var confirmNum = prompt('Would you like numbers?', 'y/n');
  }
  alert("You chose " + confirmNum + ' to the option to include numbers!');
  console.log(confirmNum);

  // Confirming for upper Special characters


  var confirmSpecial = prompt('Would you like special characters?', 'y/n');
  while (confirmSpecial != 'y' && confirmSpecial != 'n') {
    alert('Must be an input of y or n!');
    var confirmChar = prompt('Would you like lower case letters', 'y/n');
  }
  alert("You chose " + confirmSpecial + ' to the option to include special characters!');
  console.log(confirmSpecial);

  // if statement if choosing n for all options 

  if (confirmSpecial === 'n' && confirmUpper === 'n' && confirmLower === 'n' && confirmNum === 'n') {
    alert('You must choose y to atleast one option!')
  } else {
    alert('You chose ' + confirmChar + ' characters, ' + confirmUpper + ' to upper case characters, ' + confirmLower + ' to lower case characters, ' + confirmNum + ' to numbers and ' + confirmSpecial + ' to special characters! ')
  }


// confirms if each confirmation is matching to 'y' and concats the arrays together
if (confirmUpper === 'y') {
  passChars = passChars.concat(upperCase)
} 

if (confirmLower === 'y') {
  passChars = passChars.concat(lowerCase)
}

if (confirmSpecial === 'y') {
  passChars = passChars.concat(specialChar)
}

if (confirmNum === 'y') {
  passChars = passChars.concat(num)
}

console.log(passChars); 

var randPw = '';

for (var i = 0; i < confirmChar; i++) {
  randPw = randPw + passChars[Math.floor((Math.random() * passChars.length))];
  console.log(randPw);
} 
return randPw

}
// writes password generated to the text field
function writePassword() {
  var password = generatePassword();
  var randPW = document.querySelector('#password');

  randPW.value = password;
}

