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
  let pass = '';
  // let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // let lower = upper.toLowerCase();
  // let nums = '0123456789';
  // let specialChar = '!@#$%^&*()-_+=';
  let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=';
  let prompts = Number(prompt('Required: 8-128', '0'));

  if(prompts >= 8 && prompts <= 128) {
    let upperCases = confirm("Does your password require uppercase characters?");
    let lowerCases = confirm("Does your password require lowercase characters?");
    let numsNums = confirm("Does your password require numbers?");
    let specialChars = confirm("Does your password require special characters?");
    
    for(let i = 0; i < prompts; i++) {
      if(charSet) {
        pass += charSet[Math.floor(Math.random() * charSet.length)];
      } 
    } 
    return pass;
  }
  alert('Input must be between 8 and 128.');
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



  // let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=';
  
*/
