// Enter your code here
function URLparse(){
  var url = document.getElementById("comments").value;
  var address = url.split('?');
  var param = address[1].split('&');
  var paramArray = " ";
  document.getElementById("address").innerHTML = address[0];
  for(var index = 0; index < param.length; index ++)
  {
    var temp = param[index].replace("=", ": ") + "<br/>";
    paramArray += temp;

  }
  document.getElementById("name").innerHTML = paramArray;
}
// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
