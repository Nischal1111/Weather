const apiKey = 'ccb114238b8ad72d6323e9b374491b58';

function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResult(data)
        })
        .catch(() => {
            info.innerHTML = "";
        const img=document.createElement("div")
            img.innerHTML=`<img class="error-location" src="location.png">`
            info.appendChild(img);
            
        const p = document.createElement("p");
            p.innerHTML = "City not found. Please enter a valid city. :)";
            info.appendChild(p);
            p.classList.add("error")

        });
}

function displayResult(data) {
    const info = document.getElementById("info");
    const weatherIcon = data.weather[0].icon;
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = formattedDate;

    info.innerHTML = `
        <div >
        <p id="temperature">${data.main.temp}°C</p>
        <p id="city">${data.name}</p>
        <img class="imageEl" src="http://openweathermap.org/img/w/${weatherIcon}.png">
        <p id="weather-cond">${data.weather[0].description}</p>
            <div class="info--infos">
                <div class=main-info>
                <label>Pressure</label>
                <p id="pressure" class="infos">${data.main.pressure} hPa</p>
                </div>
                <div class=main-info>
                <label>Windspeed</label>
                <p id="wind-speed" class="infos">${data.wind.speed} m/s</p>
                </div>
                <div class=main-info>
                <label>Humidity</label>
                <p id="humidity" class="infos">${data.main.humidity}%</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById("input").value="";
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather("Warrington");
});

document.getElementById('btn').addEventListener('click', () => {
    const city = document.getElementById('input').value;
    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }
    fetchWeather(city);
    document.getElementById('error-message').textContent = '';
    document.getElementById('input').value = '';
});

document.getElementById('input').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        const city = document.getElementById('input').value;
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }
        fetchWeather(city);
        document.getElementById('error-message').textContent = '';
        document.getElementById('input').value = '';
    }
});

