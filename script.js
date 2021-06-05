var specialCharacters = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '/', '|', ';', ':', "'", '"', '<', '>', ',', '.', '?'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Gets the password specifics
function passwordDetails() {
    //Prompts user password password details
    var characterLength = parseInt(prompt("How many characters would you like in your password?"),10);
    var characterSpecial = confirm("Click OK to include special characters in your password");
    var characterUpper = confirm("Click OK to include upper case characters in your password ");
    var characterLower = confirm("Click OK to include lower case characters in your password");
    var characterNumber = confirm("Click OK to include number characters in your password");

    //If/Then statements to check customer's input for password details
    if(Number.isNaN(characterLength)) {
        alert('Password length must be a number');
        return null;
    }

    if(characterLength < 8) {
        alert("Password length should be at least 8 characters long");
        return null;
    } 

    if (characterLength > 128) {
        alert("Password length cannot be more than 128")
        return null;
    }

    if(characterSpecial && characterUpper && characterLower && characterNumber === false) {
        alert("Please select one character type");
        return null;
    }

    //Store values in properties
    var chosenCharacters = {
        length: characterLength,
        special: characterSpecial,
        uppercase: characterUpper,
        lowercase: characterLower,
        number: characterNumber
    }

    return chosenCharacters;


}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
