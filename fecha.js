function fecha() {

    moment.locale('es');
    document.getElementById('hora').innerHTML = moment().format('LT');
    document.getElementById('fecha').innerHTML = moment().format('LL');

} fecha()

function clima() {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.60771830593006&lon=-58.37247015781196&units=metric&appid=e4c39cf3e7382a70132b5a958f2645af')

        .then((response) => response.json())
        .then((a) => {
            document.getElementById('ciudad').innerHTML = `${a.name}, ${a.sys.country}`
            document.getElementById('clima').innerHTML = `Temp: ${a.main.temp} - S. Térmica: ${a.main.feels_like}`
        })

} clima()

setInterval(() => {
    fecha()
    clima()
}, 60000);

