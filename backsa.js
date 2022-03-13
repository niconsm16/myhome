fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

    .then((response) => response.json())
    .then((a) => {
        setTimeout(() => {


            let climback = document.querySelector('body .clima')
            let mediaqueryList = window.matchMedia("(max-width: 600px)")

            mediaqueryList.addEventListener('change', () => {
                mediaqueryList.matches
                    ? climback.style.backgroundImage = `url(${a.url})`
                    : climback.style.backgroundImage = 'none'
            })
        }, 1500);
    })

