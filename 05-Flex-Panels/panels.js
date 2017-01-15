
(function () {
  console.log('Inside panel.js')
  const panels = document.querySelctorAll('.panel')
  console.log('All panels', panels)

  function endTransition (e) {
    console.log('Inside transition end function')
    if(e.propertyName.includes('flex'))
      this.classList.toggle('open-active')
  }

  function clickHandler (e) {
      console.log('Inside click handler')
      this.classList.toggle('open')
  }

  panels.forEach(panel => panel.addEventListener('click', clickHandler))
  panels.forEach(panel => panel.addEventListener('transitionend', endTransition))
})()
