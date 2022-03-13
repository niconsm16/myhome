let coorda
let coordb

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(exito)
}
else {

    console.log('se puso en rata el hijo de remil puta')

}


function exito(geolocationPosition) {

    console.log(geolocationPosition)

    coorda = geolocationPosition.coords.latitude
    coordb = geolocationPosition.coords.longitude

}