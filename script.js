// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength; //Length of password given by user

//Bools to check to include character types
var lowercaseIncluded;
var uppercaseIncluded;
var numeralsIncluded;
var specialCharactersIncluded;

//Lowercase array
const lowercaseCharacters = ["a", "b", "c", "d", "e",
"f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"];

//Uppercase array
const uppercaseCharacters = ['A','B','C','D','E',
'F','G','H','I','J',
'K','L','M','N','O',
'P','Q','R','S','T',
'U','V','W','X','Y','Z'];

//Array of numbers
const numeralCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Array of special characters
const specialCharacters = ["!", "@", "#", "$", "%",
"^", "&", "*", "(", ")",
"=", "+", "-", "~", "/",
"<", ">", "?"];

//Empty array to store all characters selected
var possibleCharacters = [];

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

function generatePassword() {
	getLength();
	getCharacterTypes();
	assignCharacters();

	var generatedPassword = ""; //Resets on each new password
	//Loop runs the entire desired length of password
	for (let i = 0; i < passwordLength; i++)
	{
		//Randomly picks a number with a max of the number of possible characters and gives "char" the numeric value
		let char = Math.floor(Math.random() * possibleCharacters.length);
		//Takes the character from the numeric value of "char" and adds it to the end of the generated password
		generatedPassword += possibleCharacters[char];
	}
	//Sends the generated password back to writePassword();
	return generatedPassword;
}

//Ask user to enter desired password length
function getLength() {
	var validLength = false; //Resets bool on each attempt
	while (!validLength) {
		passwordLength = prompt(
			"Enter the length of the password! Must be between 8-128 characters!"
		);

		//If password matches length criteria, break out of loop
		if (passwordLength >= 8 && passwordLength <= 128) {
			validLength = true;
		}
	}
}

//Ask user what characters to include and sets specified bools
function getCharacterTypes() {
	lowercaseIncluded = confirm("Would you like to include lowercase letters?");
	uppercaseIncluded = confirm("Would you like to include uppercase letters?");
	numeralsIncluded = confirm("Would you like to include numerals?");
	specialCharactersIncluded = confirm(
		"Would you like to include special characters?"
	);
}

//Add selected characters to empty array
function assignCharacters() {
	possibleCharacters = []; //Clears array on each new password

	//If no characters are selected, go back and ask again
	if (
		!lowercaseIncluded &&
		!uppercaseIncluded &&
		!numeralsIncluded &&
		!specialCharactersIncluded
	) {
		alert("You must include at least one character type!");
		getCharacterTypes();
	}

	//Adds characters to array
	if (lowercaseIncluded) {
		possibleCharacters.push(...lowercaseCharacters);
	}
	if (uppercaseIncluded) {
		possibleCharacters.push(...uppercaseCharacters);
	}
	if (numeralsIncluded) {
		possibleCharacters.push(...numeralCharacters);
	}
	if (specialCharactersIncluded) {
		possibleCharacters.push(...specialCharacters);
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
