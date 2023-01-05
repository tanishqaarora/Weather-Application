const hitWeatherAPI = async () => {
    const cityName = document.getElementById('location').value;
    const response = await fetch (`https://weather-api-c7nx.onrender.com?cityName=${cityName}`);
    const weatherReport = await response.json ();
    const temp = weatherReport.temperature;

    document.getElementById("temperature").innerHTML = `Temperature in ${cityName} is ${temp} degrees celcius.`;   
}

const btn = document.getElementById("form-submit");

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
});

