const SPEC_CHARS = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

var generateBtn = document.querySelector('#generate');

function generatePassword() {
  const criteria = {
    passwordLength: null,
    hasLowercase: false,
    hasUppercase: false,
    hasNumeric: false,
    hasSpecial: false,
  };

  let password;

  criteria.passwordLength = getPasswordLength();
  criteria.hasLowercase = confirm(
    'Would you like to add lowercase characters?'
  );
  criteria.hasUppercase = confirm(
    'Would you like to add uppercase characters?'
  );
  criteria.hasNumeric = confirm('Would you like to add numeric characters?');
  criteria.hasSpecial = confirm('Would you like to add special characters?');

  console.log(criteria);

  return password;
}

function getPasswordLength() {
  const question = 'Choose a password length from 8 to 128 characters';
  let lengthAnswer = prompt(question);

  if (lengthAnswer === null) {
    return;
  }

  if (isNaN(lengthAnswer)) {
    alert('Please, enter a number');
    return getPasswordLength(question);
  }

  if (+lengthAnswer < 8 || +lengthAnswer > 128) {
    alert('Try again, password lenght must be from 8 to 128');
    return getPasswordLength(question);
  }

  return +lengthAnswer;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
