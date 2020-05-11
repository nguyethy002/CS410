// Enter your code here
var form = document.getElementById('form');
form.addEventListener("submit",function(event){
  event.preventDefault();
});
function palindromeCheck (){
  var input = document.getElementById('number').value;
  if(input == ""){
    return document.getElementById('result').innerHTML = "Please enter a number";
  }
  else{
    var reverseInput = input.toString().split('').reverse().join('');
    console.log(input);
    console.log(reverseInput);
    if(input === reverseInput){
      document.getElementById('result').innerHTML = "Yes";
      return true;
    }
    else{
      document.getElementById('result').innerHTML = "No";
      return false;
  }
  }

}
