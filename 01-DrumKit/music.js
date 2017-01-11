
(function () {

  const playSound = (e) => {
  //  console.log(e)
    const keyCode = e.keyCode
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)

    console.log(keys)
    if (!audio) {
      return
    }
    audio.currentTime = 0
    audio.play()
    console.log(key)
    key.classList.add('playing')
  }

  const removeTransition = (e) => {

    if(e.propertyName === 'transform') {
      console.log('Property Name', e.propertyName)
      e.target.classList.remove('playing')
    }
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)

})()
