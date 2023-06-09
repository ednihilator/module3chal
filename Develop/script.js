// Assignment code here
var charList='abcdefghijklmnopqrstuvwxyz';
var numList=[0,1,2,3,4,5,6,7,8,9];
var specList="!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var charNum = 8;
var password=''; //this is the empty password which will get characters added to it
var charIndex = Math.floor(Math.random() * charList.length);
var numIndex = Math.floor(Math.random() * numList.length);
var specialCharIndex = Math.floor(Math.random() * specList.length);
//these next 4 variables check to see which types of characters to include in the password
var includeUpperChar=false;
var includeSChar=false;
var includeNum=false;
var includeLowerChar=false;

function newRandom(){
  charIndex = Math.floor(Math.random() * charList.length);
  numIndex = Math.floor(Math.random() * numList.length);
  specialCharIndex = Math.floor(Math.random() * specList.length);
}
//this is the function that prompts users about their password length/character types, then returns a password
function generatePassword(){
  charNum = prompt("How long do you want your password to be? 8-24 characters");
  includeUpperChar=confirm("Would you like uppercase letters?");
  includeSChar=confirm("Would you like special characters?");
  includeNum=confirm("Would you like numbers?");
  includeLowerChar=confirm("Would you like lowercase letters?");
//this for loop checks for character length, then based on user parameters of lowercase/uppercase letters, numbers, and special characters, adds them to an empty string
  for (var x=0; x<charNum;) {
    if (includeUpperChar&&x<charNum){
      newRandom();
      charList.toUpperCase();
      password += charList[charIndex].toUpperCase();
      charList.toLowerCase();
      x++;
    } 
    if (includeNum&&x<charNum){
      newRandom();
       password += (numList[numIndex]);
       x++;
     }
     if(includeLowerChar&&x<charNum){
      newRandom();
      password += charList[charIndex];
      x++;
     }
     if(includeSChar&&x<charNum){
      newRandom();
      password += (specList[specialCharIndex]);
      x++;
     }
  }
  
  
  
  //console.log("password is "+ password);
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//tried putting the resetPass function into here, but it doesn't work
  password='';
  console.log("password is "+ password +" after password reset");
  return password;

}
//this function resets the password so the user doesn't have to refresh the page to get a new pass
//couldn't get this part to work
function resetPass(){
  password='';
  console.log("password is "+ password +" after password reset");
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
