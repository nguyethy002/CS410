// Enter your code here
function highlight(){
  var input = document.getElementById("input").value;
  console.log(input);
  var text = document.getElementById("intro").textContent;
  var result = text.replace(new RegExp(input, 'ig'), (match) =>`<change>${match}</change>`);
  document.getElementById('intro').innerHTML = result;
}