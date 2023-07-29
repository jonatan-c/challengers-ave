const specialCharacters = "!@#$%^&*-_+=?";
const abecedary = "abcdefghijklmnopqrstuvwxyz";
const abecedaryMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";

function validatePassword(password) {
  if (password.length < 16) {
    return false;
  }

  const hasBothLetters = hasLowercaseAndUppercase(password);
  if (!hasBothLetters) {
    return false;
  }

  const hasConsecutiveEqualChars = hasConsecutiveEqualCharacters(password);
  if (hasConsecutiveEqualChars) {
    return false;
  }

  let numbersCount = 0;
  for (const char of password) {
    if (number.includes(char)) {
      numbersCount++;
      if (numbersCount >= 4) {
        break;
      }
    }
  }
  if (numbersCount < 4) {
    return false;
  }

  const hasConsecutiveEqualNum = hasConsecutiveEqualCharacters(password);
  if (hasConsecutiveEqualNum) {
    return false;
  }

  const hasTwoSpecialChars = hasTwoOrMoreSpecialCharacters(password);
  if (hasTwoSpecialChars) {
    return false;
  }

  if (password.includes("0")) {
    return false;
  }

  if (password.includes(" ")) {
    return false;
  }

  return true;
}

function hasLowercaseAndUppercase(password) {
  let hasLowercase = false;
  let hasUppercase = false;

  for (const char of password) {
    if (abecedary.includes(char)) {
      hasLowercase = true;
    } else if (abecedaryMay.includes(char)) {
      hasUppercase = true;
    }

    if (hasLowercase && hasUppercase) {
      return true;
    }
  }

  return false;
}

function hasConsecutiveEqualCharacters(password) {
  for (let i = 0; i < password.length - 1; i++) {
    const char = password[i];
    const nextChar = password[i + 1];

    if (char === nextChar) {
      return true;
    }
  }

  return false;
}

function hasTwoOrMoreSpecialCharacters(password) {
  let specialCharsFound = new Set();

  for (const char of password) {
    if (specialCharacters.includes(char)) {
      specialCharsFound.add(char);

      if (specialCharsFound.size >= 2) {
        return true;
      }
    } else {
      specialCharsFound.clear();
    }
  }

  return false;
}

const password1 = "$Jonatan#14792683"; // Valid password
const password2 = "12345Aa"; 
const password3 = "Abcdefghijklmnop0";

console.log(validatePassword(password1));
console.log(validatePassword(password2));
console.log(validatePassword(password3));
