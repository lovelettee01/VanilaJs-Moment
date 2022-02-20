const API_KEY = "e21fed9a31176a54065562f7666671c8";
navigator.geolocation.getCurrentPosition(
  //Succes
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const wUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(wUrl)
      .then((res) => res.json())
      .then((data) => {
        const weatherElement = document.getElementById("weather");
        let wHtml = `<span>${data.name}<span> / <span>${data.weather[0].main}( ${data.main.temp} ºC)</span>`;
        weatherElement.innerHTML = wHtml;
      });
  },
  //Error
  () => {
    alert("Can't find you loaction. No weather for you");
  }
);
