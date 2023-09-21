
const apiKey = 'f69db9139723d3c973444fa59319f63b'; // Replace with your OpenWeatherMap API key

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
                temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionElement.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error(error);
                locationElement.textContent = 'Error: City not found';
                temperatureElement.textContent = '';
                descriptionElement.textContent = '';
            });
    }
});
