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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
function generatePassword() {
  const charPool = [];

  const charPoolChoices = [
    lowerCaseChars,
    upperCaseChars,
    numberChars,
    specialChars,
  ];

  const randomPassword = [];

  for (let i = 0; i < charPoolChoices.length; i++) {
    let userPrompt = confirm(
      `would you like to include || ${charPoolChoices[i]} || in your password?`
    );
    if (userPrompt) {
      for (let j = 0; j < charPoolChoices[i].length; j++) {
        charPool.push(charPoolChoices[i][j]);
      }
    }
  }

  const passwordLength = parseInt(
    prompt('Please enter the chosen length of your password (between 8 - 128)')
  );

  for (let i = 0; i < passwordLength; i++) {
    let randomInt = getRandomInt(charPool.length);
    randomPassword.push(charPool[randomInt]);
  }

  const newPassword = randomPassword.join('');
  return newPassword;
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
