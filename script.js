const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".btn");
const delButton = document.getElementById("DE");
const acButton = document.getElementById("AC");
const sqrtButton = document.getElementById("sqrt");

let currentInput = "";

function handleButtonClick(e) {
  const value = e.target.innerText;

  if (value === "x") {
    currentInput += "*";
  } else if (value === "÷") {
    currentInput += "/";
  } else {
    currentInput += value;
  }
  inputBox.value = currentInput;
}

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Clear screen (AC button)
acButton.addEventListener("click", () => {
  currentInput = "";
  inputBox.value = "";
});

// Delete Button
delButton.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  inputBox.value = currentInput;
});

function result() {
  try {
    currentInput = eval(currentInput);
    inputBox.value = currentInput;
  } catch (error) {
    inputBox.value = "Error";
    currentInput = "";
  }
}

// Square root calculation
sqrtButton.addEventListener("click", () => {
  const value = parseFloat(currentInput);
  if (value >= 0) {
    currentInput = Math.sqrt(value).toString();
  } else {
    currentInput = "";
  }
  inputBox.value = currentInput;
});
