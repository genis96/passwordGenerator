// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generatePassword - will check upper/lower/special char. 
generatePassword = () => {
  let pass = '';
  let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=';
  //removing Number works as well
  let prompts = Number(prompt('Required: 8-128', '0'));

  if(prompts >= 8 && prompts <= 128) {
    let promptPopups = 
      confirm('Does your password require uppercase characters?');
      confirm('Does your password require lowercase characters?');
      confirm('Does your password require numbers?');
      confirm('Does your password require special characters?');
    
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

