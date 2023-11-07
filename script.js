let div = null;
//step -1
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const btn = document.getElementById("change-btn");
  const colorCode = document.getElementById("colorCode");
  const copyBtn = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    const bgColor = generateRgb();
    root.style.backgroundColor = bgColor;
    colorCode.innerText = bgColor;

    const hexColor = generateHex();
    output.value = hexColor.substring(1).toUpperCase();
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;

    if (color) {
      output.value = color.toUpperCase();
      if (isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
      }
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
}

//step - 2

function generateRgb() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgba(${red}, ${green}, ${blue})`;
}
function generateHex() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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
