// .get.JSON {
//     "https://restcountries.com/v3.1/name/${country name}?fullText=true"
// 
letsearchbtn = document.getElementById("search-btn");
let countryInp =
fetch('https://restcountries.com/v3.1/name/China')
.then(res=>res.json())
.then(data=>console.log(data))




