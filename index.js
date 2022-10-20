require('dotenv').config();

const express = require('express');
const app = express();
const https = require('https');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const queryString = req.url.split('?')[1];
    if (queryString === undefined) {
        res.send({
            error: 'No cityName found'
        })
    }
    const cityName = queryString.split('=')[1];
    if (cityName === undefined) {
        res.send({
            error: 'No cityName found.'
        })
    }
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
        
            res.send({
                temperature: temp,
                description: description
            })
        }
        )
    });
})

app.listen(3030, () => console.log('Server is running...'));