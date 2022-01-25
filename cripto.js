let endpoint = 'https://api.binance.com/api/v3/ticker/price'

fetch(endpoint)
    .then(response => {
        response.json())
console.log(response)
    }
    .then(divisas => mostrarData(divisas))
    .catch(e => console.log(e))


const mostrarData = () => {

}