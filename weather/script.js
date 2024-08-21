function updateDateTime() {  
    const now = new Date(); // Get the current date and time  
    const options = {  
        year: 'numeric',  
        month: 'long',  
        day: 'numeric',  
        hour: '2-digit',  
        minute: '2-digit',  
        second: '2-digit',  
        hour12: true  
    }; // Options for formatting the date and time  

    // Format the date and time  
    const formattedDateTime = now.toLocaleString('en-US', options);  

    // Update the content of the div with the current date and time  
    document.getElementById('datetime').innerText = formattedDateTime;  
}  

// Call the function once to display the date and time immediately  
updateDateTime();  

// Update the date and time every second  
setInterval(updateDateTime, 1000);  

const apiKey = 'b670447e8c7c4666b2d65422242008'; // Replace with your actual API key  
const defaultCity = 'Iligan City'; // Default city  

async function fetchWeather(city) {  
    try {  
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);  
        const data = await response.json();  
        if (data.error) {  
            alert(data.error.message);  
            return;  
        }  
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;  
        document.getElementById('humidity').textContent = `${data.current.humidity}%`;  
        document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;  
    } catch (error) {  
        console.error('Error fetching weather data:', error);  
    }  
}  

// Fetch weather data for the default city on page load  
fetchWeather(defaultCity);  
document.getElementById('searchButton').addEventListener('click', () => {  
const cityInput = document.getElementById('cityInput').value;  
if (cityInput) {  
    fetchWeather(cityInput);  
}  
});
