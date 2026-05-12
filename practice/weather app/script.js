let API = "751ebf8861485c69a9a024b5b4da658a";

async function getData() {
  let city = document.querySelector(".inpcityname").value;
  let temp = document.querySelector(".temp");
  let sunrise= document.querySelector(".sunrise2");
  let sunset= document.querySelector(".sunset2");


  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();

  temp.innerHTML=`${data.main.temp} °C`;
  sunrise.innerHTML=`${data.sys.sunrise}`;
  sunset.innerHTML=`${data.sys.sunset}`;
  



  console.log(data);
}

