// Enter your code here
function URLparse(){
  var url = document.getElementById("comments").value;
  if(url.match(/\?./)){
    var address = url.split('?');
    var param = address[1].split('&');
    var paramArray = " ";
    document.getElementById("address").innerHTML = address[0];
    for(var index = 0; index < param.length; index ++)
    {
      paramArray += `${param[index].replace("=", ": ")} <br/>`;
      

    }
    document.getElementById("param").innerHTML = paramArray;
  }
  else{
    document.getElementById("address").innerHTML = url;
    document.getElementById("param").innerHTML = "No parameters detected";
  }
}

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
