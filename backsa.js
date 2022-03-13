let climback = document.querySelector('body .clima')
let mediaqueryList = window.matchMedia("(max-width: 600px)")


let response = fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

    .then((response) => response.json())
    .then((a) => {

        if (window.innerWidth <= 600) { climback.style.backgroundImage = `url(${a.url})` }

        mediaqueryList.addEventListener('change', () => {

            mediaqueryList.matches
                ? climback.style.backgroundImage = `url(${a.url})`
                : climback.style.backgroundImage = 'none'
        })
    })

    .catch((error) => {

        console.log('no lo toma')

        if (window.innerWidth <= 600) {
            climback.style.backgroundImage = 'url("https://picsum.photos/seed/picsum/600/300")'
        }

        mediaqueryList.addEventListener('change', () => {

            mediaqueryList.matches
                ? climback.style.backgroundImage = 'url("https://picsum.photos/seed/picsum/600/300")'
                : climback.style.backgroundImage = 'none'
        })

    })

