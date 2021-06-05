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

    if(
        characterSpecial === false &&
        characterUpper === false &&
        characterLower === false && 
        characterNumber === false
        ) {
        alert("Please select one character type");
        return null;
    }

    //Store character properties
    var chosenCharacters = {
        length: characterLength,
        special: characterSpecial,
        uppercase: characterUpper,
        lowercase: characterLower,
        number: characterNumber
    }

    return chosenCharacters;


}

//Get random character
function getCharacter(arr) {
    var randIndex = Math.floor(Math.random() * arr.characterLength);
    var randElement = arr[randIndex];
    return randElement;
}

//Capture user input
function generatePassword() {
    var possibleCharacters =[];
    var guaranteedCharacters = [];
    var result = [];
    var selections = passwordDetails();

    if (!options) return null;

    //If/then statements to add toteh arrays
    if (options.characterSpecial) {
        possibleCharacters = possibleCharacters.concat(characterSpecial);
        guaranteedCharacters.push(getCharacter(characterSpecial));
    }

    if (options.characterUpper) {
        possibleCharacters = possibleCharacters.concat(characterUpper);
        guaranteedCharacters.push(getCharacter(characterUpper));
    }

    if (options.characterLower) {
        possibleCharacters = possibleCharacters.concat(characterLower);
        guaranteedCharacters.push(getCharacter(characterLower));
    }

    if (options.characterNumber) {
        possibleCharacters = possibleCharacters.concat(characterNumber);
        guaranteedCharacters.push(getCharacter(characterNumber));
    }

    //forloop picking all possible characters
    for (var i = 0; i < selections.characterLength; i++) {
        var possibleCharacters = getCharacter(possibleCharacters);

        result.push(possibleCharacters);
    }

    //for loop adding in required characters to guaranteedCharacters array
    for (var i = 0; i < guaranteedCharacters.characterLength; i++) {
        result[i] = guaranteedCharacters[i];
    }

    return result.join('');
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
