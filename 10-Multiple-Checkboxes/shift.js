(function () {
  const checkboxes = document.querySelectorAll('input[type=checkbox]')
  const inbox = document.querySelector('.inbox')


  let lastChecked
  let inBetween = false

  function handleClick (e) {
    const currentTarget = e.target
   if (currentTarget.type === 'checkbox') {   // Using event delegation
     if (e.shiftKey && currentTarget.checked) {  // Checking if shift key is pressed and the target is checked or not
       console.log('hello')
       checkboxes.forEach(checkbox => {
         console.log(checkbox, lastChecked)
          if ((checkbox === currentTarget || checkbox === lastChecked ) && lastChecked!== undefined){
            console.log('INBETWEEN START?END')
            inBetween = !inBetween
          }

          if (inBetween)
            checkbox.checked = true
        })
     }
     lastChecked = currentTarget
    }
}
  inbox.addEventListener('click', handleClick)

})()
