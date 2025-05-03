const generateButton = document.getElementById('GenerateBtn');
const passwordOutput = document.getElementById('results');
const passwordLengthInput = document.getElementById('passwordLengthInput');
const passwordLengthSlider = document.getElementById('passwordLengthSlider');
const easySayRadio = document.querySelector('input[name="option"][value="option 1"]');
const easyReadRadio = document.querySelector('input[name="option"][value="option 2"]');
const complexRadio = document.querySelector('input[name="option"][value="option 3"]');
const uppercaseCheckbox = document.querySelector('input[name="optionchk"][value="upperCase"]');
const lowercaseCheckbox = document.querySelector('input[name="optionchk"][value="lowerCase"]');
const numbersCheckbox = document.querySelector('input[name="optionchk"][value="numbers"]');
const symbolsCheckbox = document.querySelector('input[name="optionchk"][value="Symbols"]');

function generateRandomComplexPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";
  const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
  let password = "";

  if (length > 0) {
    if (length > 3) {
      password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
      password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
      password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
      password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
    }
    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  }
  return password;
}

function generatePasswordWithCustomChars(length, allowedChars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
  return password;
}

function generateEasyToSayPassword(length) {
  const syllables = ["ap", "ple", "ban", "ana", "cat", "dog", "sun", "moon", "star", "tree", "one", "two", "three", "to", "day", "glo", "bal"];
  let password = "";
  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * syllables.length);
    password += syllables[randomIndex];
    if (password.length < length && Math.random() < 0.3) {
      password += Math.floor(Math.random() * 10);
    } else if (password.length < length && Math.random() < 0.2) {
      password += "@#$%&"[Math.floor(Math.random() * 5)];
    }
  }
  return password.slice(0, length);
}

function generateEasyToReadPassword(length) {
  const easyChars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * easyChars.length);
    password += easyChars.charAt(randomIndex);
  }
  return password;
}

function updatePasswordLength(newLength) {
  passwordLengthInput.value = newLength;
  passwordLengthSlider.value = newLength;
}

function generatePassword() {
  let passwordLength = parseInt(passwordLengthInput.value);
  let allowedChars = "";
  let password = "";
  let useSpecificChars = false;

  const isCustomLength = parseInt(passwordLengthInput.value) !== 16 || parseInt(passwordLengthSlider.value) !== 16;
  const isCharTypeSelected = uppercaseCheckbox.checked || lowercaseCheckbox.checked || numbersCheckbox.checked || symbolsCheckbox.checked;

  if (!easySayRadio.checked && !easyReadRadio.checked && !complexRadio.checked && !isCustomLength && !isCharTypeSelected) {
    // Default random password
    passwordLength = Math.floor(Math.random() * 10) + 16;
    password = generateRandomComplexPassword(passwordLength);
  } else {
    // Customized password
    if (uppercaseCheckbox.checked) allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseCheckbox.checked) allowedChars += "abcdefghijklmnopqrstuvwxyz";
    if (numbersCheckbox.checked) allowedChars += "0123456789";
    if (symbolsCheckbox.checked) allowedChars += "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";

    useSpecificChars = allowedChars.length > 0;

    if (easySayRadio.checked) {
      // Combine easy to say with selected character types if any
      let easySayBase = generateEasyToSayPassword(passwordLength * 0.6); // Use a portion of the length for syllables
      let remainingLength = passwordLength - easySayBase.length;
      let extraChars = "";
      if (useSpecificChars && remainingLength > 0) {
        extraChars = generatePasswordWithCustomChars(remainingLength, allowedChars);
      } else if (!useSpecificChars && remainingLength > 0) {
        extraChars = generatePasswordWithCustomChars(remainingLength, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~[]\{}|;':\",./<>?");
      }
      password = easySayBase + extraChars;
    } else if (easyReadRadio.checked) {
      // Combine easy to read with selected character types if any
      let easyReadBase = generateEasyToReadPassword(passwordLength);
      if (useSpecificChars) {
        let tempPassword = "";
        for (let i = 0; i < passwordLength; i++) {
          tempPassword += allowedChars[Math.floor(Math.random() * allowedChars.length)];
        }
        password = tempPassword;
      } else {
        password = easyReadBase;
      }
    } else { // complexRadio.checked or specific character types
      if (useSpecificChars) {
        password = generatePasswordWithCustomChars(passwordLength, allowedChars);
      } else {
        password = generateRandomComplexPassword(passwordLength);
      }
    }
  }

  updatePasswordLength(passwordLength);
  passwordOutput.value = password;
}

// Event listeners for length synchronization
passwordLengthInput.addEventListener('input', function() {
  const newLength = parseInt(this.value);
  if (newLength >= parseInt(this.min) && newLength <= parseInt(this.max)) {
    updatePasswordLength(newLength);
  }
});

passwordLengthSlider.addEventListener('input', function() {
  const newLength = parseInt(this.value);
  updatePasswordLength(newLength);
});

// Initial synchronization
updatePasswordLength(parseInt(passwordLengthInput.value));

// Event listener for the generate button
if (generateButton) {
  generateButton.addEventListener('click', generatePassword);
} else {
  console.error("Error: Generate button element not found!");
}