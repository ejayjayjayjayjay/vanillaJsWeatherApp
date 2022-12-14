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

let weather = {
    apiKey: "9f7e9e0b314b24c7c6eaf82ebc88862a",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = 'Weather in ' + name;
        // STRING TEMPLATE EXAMPLE
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector('.description').innerText = description;
        // TRADITIONAL CONCATENATE EXAMPLE
        // document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C"
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`;
    },

    search: function () {
        this.fetchWeather(document.querySelector('.search__bar').value)
    },

};

document.querySelector('.search button').addEventListener('click', () => {
    weather.search();
})

document.querySelector('.search__bar').addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        weather.search();
    }
})

weather.fetchWeather('Malabon');