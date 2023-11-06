//step -1
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const colorCode = document.getElementById("colorCode");
  const hexCode = document.getElementById("hexCode");
  const copyBtn = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    const bgColor = generateRgb();
    root.style.backgroundColor = bgColor;
    colorCode.innerText = bgColor;

    const hexColor = generateHex();
    hexCode.value = hexColor;
  });

  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(hexCode.value);
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
