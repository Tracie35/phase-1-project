// .get.JSON {
//     "https://restcountries.com/v3.1/name/${country name}?fullText=true"
// 

fetch('https://restcountries.com/v3.1/name/Uganda')
.then(res=>res.json())
.then(data=>console.log(data))

