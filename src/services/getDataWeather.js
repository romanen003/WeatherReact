const API_KEY = '1ccb4c4ad6f36ab9aa776590f12471bf';

export function getWeatherData(cityName) {
     return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            if (response.status !== 200) {
                return {
                    code: response.status,
                    text: response.statusText
                };
            }
            return response.json()
                 .then((data) => {
                            return {
                                city: data.name,
                                pressure: data.main.pressure,
                                description:data.weather[0].description ,
                                temp: data.main.temp,
                                time: new Date().toLocaleString(),
                                pic: data.weather[0].icon
                            };
                        })
                 .catch(e => e)}
         );
}