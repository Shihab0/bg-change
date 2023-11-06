//step -1
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const colorCode = document.getElementById("colorCode");

  btn.addEventListener("click", function () {
    const bgColor = generateRgb();
    root.style.backgroundColor = bgColor;
    colorCode.innerText = bgColor;
  });
}

//step - 2

function generateRgb() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgba(${red}, ${green}, ${blue})`;
}
