function clima() {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.60771830593006&lon=-58.37247015781196&units=metric&appid=e4c39cf3e7382a70132b5a958f2645af')

        .then((response) => response.json())
        .then((a) => {
            console.log(a.main.temp)
        })

} clima()