// Get DOM elements
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,./<>?";

// Generate password function
function generatePassword() {
  // Get user settings
  const length = lengthInput.value;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  // Validate length
  if (length < 4 || length > 20) {
    alert("Password length must be between 4 and 20 characters");
    return;
  }

  // Start with lowercase and numbers as base characters
  let availableChars = lowercaseChars + numberChars;

  // Add uppercase if selected
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }

  // Add symbols if selected
  if (includeSymbols) {
    availableChars += symbolChars;
  }

  // Generate password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  // Display password
  passwordInput.value = password;
}

// Copy password function
function copyPassword() {
  // Check if there's a password to copy
  if (!passwordInput.value) {
    alert("Generate a password first!");
    return;
  }

  // Select the password text
  passwordInput.select();

  // Copy to clipboard
  try {
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  } catch (err) {
    alert("Failed to copy password");
  }
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

// Generate a password when the page loads
generatePassword();
