// .get.JSON {
//     "https://restcountries.com/v3.1/name/${country name}?fullText=true"
// 
letsearchbtn = document.getElementById("search-btn");
let countryInp =document.getElementById
("country-inp");
searchBtn.addeventListener("click",()=>{
    let countryName = "india";
    let finalURL = `https://restcountries.com/v3.1/name/${keyword}`
    console.log (finalURL)
    fetch(`https://restcountries.com/v3.1/name/${keyword}`)
.then((response) => response.json())
.then((data) => {
    console.log (data[0]);
    console.log ()

}
})

    
    
    





