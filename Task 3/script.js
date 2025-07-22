const display = document.getElementById('display');

const isOperator = (char) => ['+', '-', '*', '/', '%'].includes(char);

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    if (isOperator(value)) return;
    display.innerText = value;
  } else {
    const lastChar = display.innerText.slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
      display.innerText = display.innerText.slice(0, -1) + value;
    } else {
      display.innerText += value;
    }
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  let text = display.innerText;
  if (text.length <= 1 || text === "Error") {
    display.innerText = "0";
  } else {
    display.innerText = text.slice(0, -1);
  }
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
