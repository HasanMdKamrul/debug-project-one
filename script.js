// ** console connet

let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

// ** get element
const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};

// ** slider handler
const handleSlider = (event) => {
  const charCountEl = getElement("char-count");
  charCountEl.innerText = event;
};

// ** checkbox handler
const handleCheckbox = () => {
  const numberEl = getElement("number");
  const specialCharEl = getElement("special");

  if (numberEl.checked === "true") {
    charSet = "0123456789";
  } else {
    charSet = charSet.replace(/0123456789/g, "");
  }
  if (specialCharEl.checked === "true") {
    charSet += "!@#$%^&()";
  } else {
    charSet = charSet.replace(/[^\w ]/g, "");
  }
  generatePassword();
};

// ** password generator
const generatePassword = () => {
  const passwordEl = getElement("pass");

  const charCount = getElement("char-count");

  let password = "";

  for (let i = 0; i < charCount.length; i++) {
    const randomNumber = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomNumber, randomNumber + 1);
  }

  passwordEl.innerText = password;
};

// ** display password
const handleViewPassword = () => {
  const passwordEl = getElement("password");
  const view = getElement("view-check");
  const viewIcon = getElement("view-icon");

  if (view.checked === true) {
    passwordEl.setAttribute("type", "text");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye-slash text-white"></i>`;
  } else {
    passwordEl.setAttribute("type", "password");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye text-white"></i>`;
  }
};

// ** handleCopy
const handleCopy = () => {
  const copyText = getElement("password");
  copyText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
};

generatePassword();