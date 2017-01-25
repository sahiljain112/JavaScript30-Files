
    function debounce (func, wait = 20, immediate = true) {
      var timeout
      return function () {
        var context = this, args = arguments
        var later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }

    const images = document.querySelectorAll('.slide-in')

    function handleSlideIn () {

      images.forEach(image => {

        const slideInAt = (window.innerHeight + window.scrollY) - image.height/4
        const imageBottom = image.offsetTop + image.height

        const isHalfShown = slideInAt > image.offsetTop
        const hasNotScrolledPast = imageBottom > window.scrollY
        if (isHalfShown && hasNotScrolledPast) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      })

    }


    window.addEventListener('scroll', debounce(handleSlideIn))
