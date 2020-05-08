// Enter your code here
function pharse(){
  var input = document.getElementById("userinput").value;
  console.log(userinput);
  var result = input.match(/[^\.!\?]+[\.!\?]+/g);
  console.log(result);
  // document.getElementById('intro').innerHTML = result;
}