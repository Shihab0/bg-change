let div = null;
//step -1
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const btn = document.getElementById("change-btn");
  const output2 = document.getElementById("colorCode");
  const copyBtn = document.getElementById("copy-btn");
  const copyBtn2 = document.getElementById("copy-btn2");

  btn.addEventListener("click", function () {
    const color = generateDecimal();
    const bgColor = generateRgb(color);
    root.style.backgroundColor = bgColor;
    output2.value = bgColor;

    const hexColor = generateHex(color);
    output.value = hexColor.substring(1).toUpperCase();
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;

    if (color) {
      output.value = color.toUpperCase();
      if (isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
        const rgbDecimal = changeRgbCode(color);
        output2.value = rgbDecimal;
      }
    }

    function changeRgbCode(color) {
      const red = parseInt(color.slice(0, 2), 16);
      const green = parseInt(color.slice(2, 4), 16);
      const blue = parseInt(color.slice(4, 6), 16);
      return `rgb(${red},${green},${blue})`;
    }
  });

  copyBtn.addEventListener("click", function () {
    if (div != null) {
      div.remove();
      div = null;
    }

    if (isValidHex(output.value)) {
      window.navigator.clipboard.writeText(`#${output.value}`);
      generateToastMessage(`#${output.value}` + " copied");
    } else {
      alert("Invalid color code.");
    }
  });

  copyBtn2.addEventListener("click", function () {
    if (div != null) {
      div.remove();
      div = null;
    }

    if (isValidHex(output.value)) {
      window.navigator.clipboard.writeText(`${output2.value}`);
      generateToastMessage(`${output2.value}` + " copied");
    } else {
      alert("Invalid color code.");
    }
  });
}

//step - 2

function generateDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return { red, green, blue };
}

function generateRgb({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}
function generateHex({ red, green, blue }) {
  function getTwoCode(value) {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
}

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

/**
 *
 * @param {string} color
 */

function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
