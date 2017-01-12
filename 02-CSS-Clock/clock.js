/*
  Format followed for returning values: [HOUR, MINUTE, SECOND]
*/
(function () {
  const DEFAULT_HAND_OFFSET = 90
  const getDateParams = () => {
    const date = new Date()
    const seconds = date.getSeconds()
    const secondDegrees = (seconds / 60) * 360
    console.log('Second degrees', secondDegrees)

    const minutes = date.getMinutes()
    const minuteDegrees = (minutes / 60) * 360
    console.log('Minutes', minuteDegrees)

    const hourDegrees = (minutes / 12) * 360
    console.log('Hours', hourDegrees)
    return [hourDegrees, minuteDegrees, secondDegrees].map(hand => hand + DEFAULT_HAND_OFFSET)
  }

  const getClockHands = () => {
    return [
      document.querySelector('.hour-hand'),
      document.querySelector('.min-hand'),
      document.querySelector('.second-hand')
    ]
  }

  const setDatePromise = (time) => new Promise((resolve) => setTimeout(resolve, time))
  const setDate = () => {
    const dateParams = getDateParams()
    const clockHands = getClockHands()
    // console.log('Received date params: ', dateParams)
    // console.log('Received clock hands ', clockHands)

    clockHands.forEach((hand, index) => {
      //console.log('Hand, index', hand, index)
      hand.style.transform = `rotate(${dateParams[index]}deg)`
    })

    setDatePromise(1000).then(() => setDate())
  }
  setDate()
})()
