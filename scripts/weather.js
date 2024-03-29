const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

const myKey ="7b61b1e00051956ed4f189b52bd44f67"
const myLat = "-1.944220" 
const myLong = "30.061984"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
    }
  }

  function displayResults(data){
    
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute("SRC", iconsrc)
    myGraphic.setAttribute("alt", data.weather[0].description)
  }
  
  apiFetch();