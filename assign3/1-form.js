// Enter your code here
var form = document.getElementById('form');
form.addEventListener("submit",function(event){
  event.preventDefault();
});
function submitFunction(){
  var nameSubmit = document.getElementById("name").value;
  var emailSubmit = document.getElementById("email").value;
  var anythingSubmit = document.getElementById("AE").value;
  var regisSubmit = document.getElementById("user-registration");
  var input1 = document.getElementById("CS410");
  var input2 = document.getElementById("CS510");
  var input3 = document.getElementById("PL");
  var input4 = document.getElementById("OS");
  var input5 = document.getElementById("FD");

  var hold = "";
  var hold2 = "";

  if(input1.checked == true){
    hold = input1.value;
  }
  else if(input2.checked == true){
    hold = input2.value;
  }
  else{
    hold = "Not selected";
  }

  if(input3.checked == true){
    hold2 = input3.value;
  }
  else if(input4.checked == true){
    hold2 = input4.value;
  }
  else if(input5.checked == true){
    hold2 = input5.value;
  }
  else{
    hold2 = "Not selected";
  }

  console.log("name", nameSubmit);
  console.log("email", emailSubmit);
  console.log("registration status:", regisSubmit.options[regisSubmit.selectedIndex].value);
  console.log("class section:", hold);
  console.log("class goal:", hold2);
  console.log("anything else:", anythingSubmit)
  
}