async function weather() {
    try {

        let c = document.getElementById("cityname").value.toLowerCase();
        let humid = document.getElementById("hum");

        let city = document.getElementById("city");
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=449f7cdefd2544279ee45045240302&q=${c}&aqi=no`
        );
        let state = document.getElementById("state");


        let data = await response.json();
        state.textContent = "State:" + data.location.region;
        humid.textContent = "Humidity:" + data.current.humidity;
        let wind = document.getElementById("wind");
        wind.textContent = "Wind speed:" + data.current.wind_kph + "kph";
        city.textContent = "City:" + data.location.name;
        temperature.textContent = "Temperature:" + eval(data.current.temp_c) + "°C";
        let x = data.current.is_day == 1 ? "AM" : "PM";
        time.textContent = data.location.localtime + x;
        console.log(data);
        let weat = data.current.condition.text.value.tolowerCase();

    }
    catch {
        console.error("error");
    }
}


console.log(data)