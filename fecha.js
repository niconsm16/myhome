function fecha() {
    setTimeout(() => {
        moment.locale('es');
        document.getElementById('hora').innerHTML = moment().format('LT');
        document.getElementById('fecha').innerHTML = moment().format('LL');
    }, 10);
} fecha()

setInterval(() => {
    fecha()
}, 60000);