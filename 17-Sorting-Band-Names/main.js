(function(){
  console.log('Executing functions')
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  console.log('Bands')

  const regex = new RegExp('(a|the|an)', 'gi')

      function strip(bandName) {
        return bandName.replace(/^(a |the |an )/i, '').trim();
      }

  const sortBands = (firstBand, secondBand)  =>  strip(firstBand) > strip(secondBand) ? 1 : -1

bands.sort(sortBands)
document.querySelector('ul').innerHTML = bands.map(band => `<li> ${band} </li>`)

  console.log('Sorted bands', bands)

})()
