//https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a

/* let weather = {
    apiKey: '9f7e9e0b314b24c7c6eaf82ebc88862a',
    fetchWeather: (() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a').then
            ((Response) => {
                Response.json().then((data) => {
                    console.log(data);
                })
            })
    })
} */

/* let weather = {
    apiKey: "9f7e9e0b314b24c7c6eaf82ebc88862a",
    fetchWeather: (city) => {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        ).then((Response) => {
            Response.json().then((data) => {
                this.displayWeather(data);
            });
        });
    },
    displayWeather: () => {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description , temp, humidity , speed);
    },
}; */


let weather = {
    apiKey: "9f7e9e0b314b24c7c6eaf82ebc88862a",
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey)
      .then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function () {
      const {name} = data;
      const {icon,description} = data.weather[0];
      const {temp, humidity} = data.main;
      const {speed} = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
    }
  };