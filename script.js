// Get elements from the DOM
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.querySelector('.weather-info');

// API key and base URL
const apiKey = '0e098be0af3ced73b83462cd408b9097';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const cityName = searchInput.value.trim();
    if (cityName !== '') {
        getWeatherData(cityName);
    }
});

// Function to fetch weather data from the API
function getWeatherData(cityName) {
    const url = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Error fetching weather data.';
        });
}

// Function to display weather data on the page
function displayWeatherData(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;

    const weatherDataHTML = `
        <p>${city}, ${country}</p>
        <p>${temperature}°C</p>
        <p>${description}</p>
    `;

    weatherInfo.innerHTML = weatherDataHTML;
}
