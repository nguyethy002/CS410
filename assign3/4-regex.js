// Enter your code here
function pharse(){
  var input = document.getElementById("userinput").value;
  var result = input.split(new RegExp(/\,|\.|\!|\?/, 'g'));
  var hold = " ";
  for(var i = 0; i < result.length; i++){
    hold += `${result[i]}  </br> <hr>`;
  }
  console.log( "This is hold ", hold);
  console.log(result);
  console.log(result.length);
  document.getElementById('results').innerHTML = hold;
}