
( function () {

  const inputs = document.querySelectorAll('.controls input')
//  console.log(inputs)
  const handleChange = (e) => {

    // console.log(e.target.value)
    const suffix = e.target.dataset['sizing']|| ''
    console.log(document.documentElement)
    document.documentElement.style.setProperty(`--${e.target.name}`, (e.target.value + suffix))
  //  console.log(this.dataset)
  }

  inputs.forEach((input) => {
    input.addEventListener('change', (e) => handleChange(e))
  })
  inputs.forEach(input => input.addEventListener('mousemove', (e) => handleChange(e)))

})()
