let color = '#';

function changeColor() {
  color = '#'; // Reset color to initial value
  let value = "0123456789ABCDEF"; 
  for (let i = 0; i < 6; i++) {
    color += value[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  document.body.style.backgroundColor = color;
}

document.getElementById('colorButton').addEventListener("click", changeColor);
