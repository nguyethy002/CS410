// Enter your code here

const url = "https://swapi.dev/api/people/";

let getCharactersAsync = async (url) => {
  var hold = " ";
  try {
    var nextUrl = url;
    const people = [];
    while (nextUrl) {
      // Get the next people in line
      const response = await fetch(nextUrl);
      const data = await response.json();

      // Push the dumb people into the list
      people.push(...data.results);

      // Get the next url
      nextUrl = data.next;
    }

    console.log(people);
    for (var i = 0; i < people.length; i++) {
      // hold += "<li>" + people[i].name + " - " + people[i].birth_year + "</li>" + "<br/>"  ;
      hold += `<li> ${people[i].name} - ${people[i].birth_year} </li> <br/>`;
    }
    document.getElementById("results").innerHTML = hold;
    // var response = await fetch(url);
    // var data = await response.json();
    // let people = data.results;
    // people.forEach((item)=>{

    //   hold += "<li>" + item.name + " - " + item.birth_year + "</li>" + "<br/>"  ;
    //   console.log(item.name);
    //   console.log(item.birth_year);
    // })
    // document.getElementById("results").innerHTML = hold;
  } catch (error) {
    console.log("Request failed", error);
  }
};
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
