window.onload = function () {
  const buttonStart = document.getElementById("button-start")
  const buttonStop = document.getElementById("button-stop")
  const buttonReset = document.getElementById("button-reset")
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let tens = 00
  let seconds = 00
  let Interval

  buttonStart.onclick = function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
    console.log(Interval)
  }

  buttonStop.onclick = () => {
    clearInterval(Interval)
  }

  /* BUTTON RESET H2'YE 'YOUR TİME' BAŞLIĞI VE H3'E GEÇEN ZAMANI GİRECEK ŞEKİLDE DÜZENLENECEK */
  buttonReset.onclick = () => {
    clearInterval(Interval)
    tens = 00
    seconds = 00
    appendSeconds.innerHTML = "00"
    appendTens.innerHTML = "00"
  }

  function startTimer() {
    tens++
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens
    }
    if (tens > 9) {
      appendTens.innerHTML = tens
    }
    if (tens > 99) {
      seconds++
      appendSeconds.innerHTML = "0" + seconds
      tens = 00
      appendTens.innerHTML = "0" + 0
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds
    }
  }
}

/* window.onload = function () {
  const buttonStart = document.getElementById("button-start")
  const buttonStop = document.getElementById("button-stop")
  const buttonReset = document.getElementById("button-reset")
  let seconds = 00
  let tens = 00
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  var Interval

  buttonStart.onclick = function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
  }

  buttonStop.onclick = () => {
    clearInterval(Interval)
  }

  buttonReset.onclick = () => {
    clearInterval(Interval)
    appendSeconds.innerHTML = "00"
    appendTens.innerHTML = "00"
  }

  function startTimer() {
    tens++
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens
    }
    if (tens > 9) {
      appendTens.innerHTML = tens
    }
    if (tens > 99) {
      seconds++
      appendSeconds.innerHTML = "0" + seconds
      tens = 0
      appendTens.innerHTML = "0" + 0
    }
    if (seconds > 9) appendSeconds.innerHTML = seconds
  }
} */
