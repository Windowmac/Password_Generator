// Assignment Code
const generateBtn = document.querySelector('#generate');

const lowerCaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const upperCaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const specialChars = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+',
  '-',
  '=',
];

const numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const charPoolChoices = [
  lowerCaseChars,
  upperCaseChars,
  numberChars,
  specialChars,
];

//for user prompt loop
const charPoolNames = [
  'lower case characters',
  'upper case characters',
  'numbers',
  'special characters',
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buildCharPool() {
  const charPool = [];
  while (charPool.length < 1) {
    for (let i = 0; i < charPoolChoices.length; i++) {
      let userPrompt = confirm(
        `would you like to include ${charPoolNames[i]} in your password?`
      );
      if (userPrompt) {
        for (let j = 0; j < charPoolChoices[i].length; j++) {
          charPool.push(charPoolChoices[i][j]);
        }
      }
    }
    if (charPool.length < 1) {
      alert('Please choose a set of characters to include');
    }
  }
  return charPool;
}

function getPasswordLength() {
  let passwordLength = parseInt(
    prompt('Please enter the length of your password (8-128 characters)')
  );
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Please enter a number between 8-128'));
  }
  return passwordLength;
}

// Write password to the #password input
function generatePassword() {
  const charPool = buildCharPool();
  const passwordLength = getPasswordLength();

  const randomPassword = [];

  for (let i = 0; i < passwordLength; i++) {
    let randomInt = getRandomInt(charPool.length);
    randomPassword.push(charPool[randomInt]);
  }

  return randomPassword.join('');
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
