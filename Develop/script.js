// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseIncluded;
var uppercaseIncluded;
var numeralsIncluded;
var specialCharactersIncluded;

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

function generatePassword() {
	getLength();
	getCharacterTypes();
}

function getLength() {
	var validLength = false;
	while (!validLength) {
		var length = prompt(
			"Enter the length of the password! Must be between 8-128 characters!"
		);

		if (length >= 8 || length <= 128) {
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
