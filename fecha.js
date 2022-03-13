function fecha() {

    moment.locale('es');
    document.getElementById('hora').innerHTML = moment().format('LT');
    document.getElementById('fecha').innerHTML = moment().format('LL');

} fecha()

let flag

function clima() {
    setTimeout(() => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coorda}&lon=${coordb}&units=metric&appid=e4c39cf3e7382a70132b5a958f2645af&lang=es`)

            .then((response) => response.json())
            .then((a) => {
                document.getElementById('ciudad').innerHTML = `${a.name}, ${a.sys.country}`
                document.getElementById('clima').innerHTML = `Temp: ${a.main.temp} - S. Térmica: ${a.main.feels_like}`
                document.getElementById('flag').innerHTML = `<img src="https://flagcdn.com/16x12/${(a.sys.country).toLowerCase()}.webp" />`
            })
    }, 1000);
} clima()

setInterval(() => {
    fecha()
    clima()
}, 60000);

