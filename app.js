const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  
  //Get the random color between 0 - 2
  const rendomColor = getRendomNumber();
  document.body.style.backgroundColor = colors[rendomColor];
  const textColor = color.textContent = colors[rendomColor];
  color.innerHTML = textColor;

});


function getRendomNumber () {
  return Math.floor(Math.random() * colors.length);
}
