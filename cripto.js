let dolarblue
let ofidolar

fetch('https://api.bluelytics.com.ar/v2/latest')
    .then((response) => response.json())
    .then((a) => {
        dolarblue = parseFloat(a['blue'].value_sell)
        ofidolar = parseFloat(a['oficial'].value_sell)

        document.getElementById('dolblue').innerHTML = `Blue: $${dolarblue}`
        document.getElementById('dolofi').innerHTML = `Oficial: $${ofidolar}`
    })

// Binance API, Id par, array del Api, Id del ARS
let criptos = [
    ['btcusdt', 11, 'btcusdtars'],
    ['ethusdt', 12, 'ethusdtars'],
    ['ltcusdt', 190, 'ltcusdtars'],
    ['solusdt', 779, 'solusdtars'],
    ['adausdt', 296, 'adausdtars'],
    ['zecusdt', 477, 'zecusdtars'],
    ['bchusdt', 661, 'bchusdtars'],
    ['usdt', 332, 'usdtars'],
    ['daiusdt', 873, 'daiusdtars'],
]

function listCriptos(api) {

    criptos.forEach(n => {
        let cryptoprice = parseFloat(api[(n[1])].price).toFixed(2)
        document.getElementById(n[0]).innerHTML = `USD: ${cryptoprice}`
        document.getElementById(n[2]).innerHTML = `ARS: $${(cryptoprice * dolarblue).toFixed(2)}`
    })
}

setTimeout(() => {
    fetch('https://api.binance.com/api/v3/ticker/price')
        .then((response) => response.json())
        .then((a) => {
            listCriptos(a)
        })
}, 450);


