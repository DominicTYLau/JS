
const secondHand = document.querySelector('.second_hand')
const minHand = document.querySelector('.min_hand')
const hourHand = document.querySelector('.hour_hand')
const clock_face = document.querySelector('.clock_face');
const circle = document.querySelector('.circle');


let darkMode = false;

setDate();

function setDate(){
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
    const milli = currentTime.getMilliseconds();

    const secondsDeg = ((seconds*1000+milli)/60000) * 360 + 90;
    const minutesDeg = (minutes/60)* 360 + 90;
    const hoursDeg = (hours%12/12)*360 + 90;

    setHandPos(secondHand, secondsDeg);
    setHandPos(minHand, minutesDeg);
    setHandPos(hourHand, hoursDeg);

    if (seconds == 0) {
        secondHand.style.transitionDuration = '0s'
        minHand.style.transitionDuration = '0s'
        hourHand.style.transitionDuration = '0s'
      } else {
        secondHand.style.transitionDuration = '0.05s'
        minHand.style.transitionDuration = '0.05s'
        hourHand.style.transitionDuration = '0.05s'
      }

    requestAnimationFrame(setDate);
}

function setHandPos(hand, deg){
    hand.style.transform = `rotate(${deg}deg)`
}


clock_face.addEventListener('click', function() {
  darkMode = !darkMode;
  if(darkMode){
    clock_face.classList.add("dark");
    minHand.classList.add("dark")
    hourHand.classList.add("dark")
    secondHand.classList.add("dark")
    circle.classList.add("dark")
  }
  else{
    clock_face.classList.remove("dark");
    minHand.classList.remove("dark")
    hourHand.classList.remove("dark")
    secondHand.classList.remove("dark")
    circle.classList.remove("dark")
  }
});
