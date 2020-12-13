// Page Elements
const $input = $('#city');
const inputField=document.getElementById('city')
const $submit = $('#button');
const $destination = $('#destination');
const destinationDiv=document.getElementById('destination')
const $container = $('.container');
const $venueDivs = $("#venues");
const venueDiv = document.getElementById("venues");
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weatherUrl='http://api.weatherstack.com/current?access_key='
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
// Foursquare API Info
const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';
const submit=document.getElementById("button")

// // WEATHER API Info
//const apiKey = '3643f1688b16adb141006edd62cccc5d';
const apiKey = '2082573baa2c88e4ee84edd0044c8192';
const forecastUrl = 'http://api.weatherstack.com/current?access_key='
// Add AJAX functions here:

async function getVenues(){
  const city=inputField.value
  console.log(city)
  const urlToFetch =`${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20201203`;
  console.log(urlToFetch)
  try {
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.response.groups[0].items)   
      createVenuesHTML(jsonResponse.response.groups[0].items)   
    } else{
      throw new Error('Request failed!');
    }
    
  } 
  catch (error) {
    console.log(error)
  }
}
async function getForecast(){
  const city=inputField.value
  console.log(city)
  const urlToFetch = `${forecastUrl}${apiKey}&query=${city}`;
  console.log(urlToFetch)
  try {
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse)   
      createWeatherHTML ((jsonResponse))
        
    } else{
      throw new Error('Request failed!');
    }
    
  } 
  catch (error) {
    console.log(error)
  }
}
// Execute function
submit.addEventListener("click",()=>{
  //  $venueDivs.empty();
  // $weatherDiv.empty();
  // $destination.empty();
  getForecast();
  getVenues();
  return false;
}
)

