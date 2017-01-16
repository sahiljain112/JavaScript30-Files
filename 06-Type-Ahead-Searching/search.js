(function () {
  console.log('Inside function')
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

  const cities = []
  const searchInput = document.querySelector('.search')
  const displayList = document.querySelector('.suggestions')

  fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))

  function highlightMapping (contentToMap) {
    return `<span class='hl'>${contentToMap}</span>`
  }

  function fancyNumber (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function findMatches (textToMatch) {
    console.log('Text to match', textToMatch)
    const regex = new RegExp(textToMatch, 'gi')
    const matchedCities = cities.filter(obj => obj.state.match(regex) || obj.city.match(regex))

    const html = matchedCities.map((obj) => {
      const [highLightedCity, highLightedState] = [
        obj.city.replace(regex, highlightMapping(textToMatch)),
        obj.state.replace(regex, highlightMapping(textToMatch))
      ]
          // console.log(highLightedCity, highLightedState)
      return (
      `<li>
        <span class='place'>${highLightedCity}, ${highLightedState}</span>
        <span class='population'> ${fancyNumber(obj.population)}</span>
      </li>`
      )
    }).join('')
    displayList.innerHTML = html
  }

  function search () {
    findMatches(this.value)
  }

  searchInput.addEventListener('change', search)
  searchInput.addEventListener('keyup', search)
})()
