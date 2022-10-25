//https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a

let weather = {
    apiKey: '9f7e9e0b314b24c7c6eaf82ebc88862a',
    fetchWeather: (() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a').then
            ((Response) => {
                Response.json().then((data) => {
                    console.log(data);
                })
            })
    })
}