// Enter your code here
document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault()
});

var button = document.getElementById('button');

function changeColor(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var randomColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor = randomColor;
}
var toSet= setInterval(changeColor,3000)
var flag = -1; 

function toStop(){
  
  var input = document.getElementById("interval").value;
  var time = input * 1000;
  button.style.boxShadow = "none";

  if(flag == -1){
    flag = 0;
    toSet = clearInterval(toSet);
    button.value = "Start";
    button.style.backgroundColor = "blue";
    button.style.borderColor = "blue";
    document.getElementById("interval").disabled = false;
  }
  else{
    button.value = "Stop";
    button.style.backgroundColor = "#dc3545";
    button.style.borderColor = "#dc3545";
    toSet = setInterval(changeColor,time);
    document.getElementById("interval").disabled = true;
    flag = -1;
  }
}

//reference for generate random color
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php