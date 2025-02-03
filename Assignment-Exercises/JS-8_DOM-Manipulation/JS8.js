// your code starts here

let count = 0;
function counter(i){
  if (count >= 0){
    count += i;
  }
  else{
    count -= i;
  }
  console.log(count)
  document.getElementById('counter-text').textContent = count;
}

let add = document.querySelector('#button-add').addEventListener("click", () => counter(1))
let subtract = document.querySelector('#button-subtract').addEventListener("click", () => counter(-1))
