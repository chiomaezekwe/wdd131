// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula (Celsius and kilometers per hour)
    // To be used only if the temperature is <= 10°C and wind speed is > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    else
    // If conditions are not met, return "N/A"
    return "N/A (Wind chill is typically not applicable in warmer climates like Nigeria's)"; 
}

// Static values for testing
const temperature = 28;                 // Temperature is measured in Celsius
const windSpeed = 18;                   // Wind speed is measured in km/h
const conditions = "Mostly Sunny";      // Weather condition (static value)

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Update the weather section
document.getElementById("temperature").textContent = `${temperature} °C`;
document.getElementById("wind").textContent = `${windSpeed} km/h`;
document.getElementById("wind-chill").textContent = windChill;
document.getElementById("conditions").textContent = conditions;

// Function to display the current year and last modified date in the footer
window.onload = function () {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    // Set the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById("last-Modified").textContent = `Last Modified: ${lastModifiedDate.toLocaleString()}`;
};

