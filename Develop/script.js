// Assignment Code
let generateBtn = document.querySelector("#generate");
let cardBody = document.querySelector('.card-body');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generatePassword - will check upper/lower/special char. 
function generatePassword() {
  let automatePass = '';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = upper.toLowerCase();
  let nums = '0123456789';
  let specialChar = '!@#$%^&*()-_+=';
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



/* Pseudo+
+ create series of prompts once clicked. 
 - prompt that takes in length of character b/w 8-128
 - prompt that takes specific character types which must have an uppercase, lowercase and/or special characters 
 - when answered, it validates 


 -click generate password btn 
 - call function to generate passwords 
 - cycle through the criteria 
 -return password from the generatePassword function
 -add the password to the screen 



   cardBody.innerHTML =  
  Math.random().toString().slice(2) +  
  Math.random().toString(36) 
      .toUpperCase().slice(2); 
*/
