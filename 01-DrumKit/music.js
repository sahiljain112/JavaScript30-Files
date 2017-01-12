
(function () {
  const buttonRecord = document.querySelector('.button-record')
  const buttonStop = document.querySelector('.button-stop')
  const buttonPlay = document.querySelector('.button-play')
  const USER_DEFINED_TIME_INTERVAL = 500
  let recordSequence = [],
    timeGap = [],
    recordSequenceFlag = 0,
    previousTimestamp = 0,
    index = 0,
    sleepTimer = 100,
    audioDuration = 0,
    audioStopFlag = 1

  const sleepPromise = (time) => new Promise(resolve => setTimeout(resolve, time))

  const playAudio = (audioElement) => {
    audioElement.currentTime = 0
    audioElement.play()
  }

  const setAudio = (element) => {
    sleepTimer = timeGap[index % timeGap.length]
    index = index + 1
    console.log('Index', index % recordSequence.length)
    const audioElement = recordSequence[index % recordSequence.length]

    sleepPromise(sleepTimer).then(() => {
      if(audioStopFlag === 1)
        return
      playAudio(element)
      setAudio(audioElement)
    })
  }

  buttonRecord.onclick = () => {
    recordSequence = []
    recordSequenceFlag = 1
    previousTimestamp = new Date()
  }

  buttonStop.onclick = () => {
    recordSequenceFlag = 0
    if(audioStopFlag === 1)
      return
    audioStopFlag = 1
    recordSequence = []
    index = 0
    timeGap = []
  }

  buttonPlay.onclick = () => {
    recordSequenceFlag = 0
    audioStopFlag = 0
    recordSequence.forEach((audioElement) => {
      audioDuration += audioElement.duration
    })
    audioDuration = parseInt((audioDuration * 1000), 10)
    console.log(audioDuration)
    console.log('Record Seq', recordSequence)
    setAudio(recordSequence[0])
    console.log('Exited Button Play')
  }

  const playSound = (e) => {
    const keyCode = e.keyCode
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)

    console.log(keys)
    if (!audio) {
      return
    }

    if (recordSequenceFlag) {
      const timeNow = new Date()
      let timeDiff = timeNow.valueOf() - previousTimestamp
      if (timeGap.length === 0) {
        timeDiff = USER_DEFINED_TIME_INTERVAL
      }

      timeGap.push(timeDiff)
      console.log('Time diff', timeDiff)
      previousTimestamp = timeNow
    //  console.log('Awesome. Content is recording! ')
      recordSequence.push(audio)
    }
    playAudio(audio)
    key.classList.add('playing')
  }

  const removeTransition = (e) => {
    if (e.propertyName === 'transform') {
      console.log('Property Name', e.propertyName)
      e.target.classList.remove('playing')
    }
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)
})()
