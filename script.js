

const btnEl = document.querySelector('.btn')
const jokeEl = document.querySelector('.joke')
const apiKey = 'coi9p6uUgkQYG58VtK/9lQ==lSfuVexQTJ7Iz6CQ'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function tellJoke() {
    jokeEl.innerHTML = 'Loading...'
    btnEl.disabled = true
    const response = await fetch(apiURL, options)
    const data = await response.json()
    jokeEl.innerHTML = data[0].joke
    btnEl.disabled = false
}


btnEl.addEventListener('click', tellJoke)