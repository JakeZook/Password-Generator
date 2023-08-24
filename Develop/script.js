// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowercaseIncluded;
var uppercaseIncluded;
var numeralsIncluded;
var specialCharactersIncluded;

const lowercaseCharacters = ["a", "b", "c", "d", "e",
"f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"];

const uppercaseCharacters = ['A','B','C','D','E',
'F','G','H','I','J',
'K','L','M','N','O',
'P','Q','R','S','T',
'U','V','W','X','Y','Z'];

const numeralCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const specialCharacters = ["!", "@", "#", "$", "%",
"^", "&", "*", "(", ")",
"=", "+", "-", "~", "/",
"<", ">", "?"];

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

	var generatedPassword = "";
	for (let i = 0; i < passwordLength; i++)
	{
		let char = Math.floor(Math.random() * possibleCharacters.length);
		generatedPassword += possibleCharacters[char];
	}
	return generatedPassword;
}

function getLength() {
	var validLength = false;
	while (!validLength) {
		passwordLength = prompt(
			"Enter the length of the password! Must be between 8-128 characters!"
		);

		if (passwordLength >= 8 || passwordLength <= 128) {
			validLength = true;
		}
	}
}

function getCharacterTypes() {
	lowercaseIncluded = confirm("Would you like to include lowercase letters?");
	uppercaseIncluded = confirm("Would you like to include uppercase letters?");
	numeralsIncluded = confirm("Would you like to include numerals?");
	specialCharactersIncluded = confirm(
		"Would you like to include special characters?"
	);
}

function assignCharacters() {
	possibleCharacters = [];

	if (
		!lowercaseIncluded &&
		!uppercaseIncluded &&
		!numeralsIncluded &&
		!specialCharactersIncluded
	) {
		alert("You must include at least one character type!");
		getCharacterTypes();
	}

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
