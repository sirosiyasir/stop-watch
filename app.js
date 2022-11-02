/* start onclick ınterval oluşturulacak 
 , seconds ve tens harekete geçirilecek
 stop onclick oluşturulacak ınterval clear edilecek
 reset onclick oluşturulacak seconds ve tens 00'a eşitlenecek
 h2 ve h3 zaman değerlerini gir */

const buttonStart = document.getElementById("button-start")
const buttonStop = document.getElementById("button-stop")
const buttonReset = document.getElementById("button-reset")
const headerTwo = document.getElementById("header2")
const headerThree = document.getElementById("header3")
const innerSeconds = document.getElementById("seconds")
const innerTens = document.getElementById("tens")
let seconds = 00
let tens = 00
let ınterval

buttonStart.onclick = () => {
  ınterval = setInterval(startTimer, 10)
}

buttonStop.addEventListener("click", () => {
  clearInterval(ınterval)
})

buttonReset.onclick = () => {
  clearInterval(ınterval)
  yourTime()
  tens = 00
  seconds = 00
  innerSeconds.innerHTML = "00"
  innerTens.innerHTML = "00"
}

function startTimer(){
  tens++
  if(tens < 9){
    innerTens.innerHTML = "0" + tens 
  }
  if(tens > 9){
    innerTens.innerHTML = tens
  }
  if(tens > 99){
    seconds++
    innerSeconds.innerHTML = "0" + seconds
    tens = 00
    innerTens.innerHTML = "0" + tens
  }
  if(seconds > 9){
    innerSeconds.innerHTML = seconds
  } 
}

function yourTime() {
  headerTwo.innerText = "Your Time"
  headerThree.innerText = innerSeconds.innerHTML + " : " + innerTens.innerHTML
}
