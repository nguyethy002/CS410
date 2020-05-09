// Enter your code here

const url = 'https://swapi.dev/api/people/';

let getCharactersAsync = async (url) => {
  var hold = " ";
  try{
    let response = await fetch(url);
    let data = await response.json();
    let people = data.results;
    people.forEach((item)=>{
      
      hold += "<li>" + item.name + " - " + item.birth_year + "</li>" + "<br/>"  ;
      console.log(item.name);
      console.log(item.birth_year);
    })
    document.getElementById("results").innerHTML = hold;
  }
  catch(error){
    console.log('Request failed', error);
  }
}
getCharactersAsync(url);

//Second Method
// fetch(url)
//   .then( reponse => {
//     return reponse.json();
//   })
//   .then((data)=>{
//     let people = data.results;
//     people.forEach((item)=>{
//       console.log(item.name);
//       console.log(item.birth_year);
//     }
//     )}
//   )
//   .catch(error => {
//     console.log('Request failed', error);
//   });