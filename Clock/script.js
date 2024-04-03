
const secondHand = document.querySelector('.second_hand')
const minHand = document.querySelector('.min_hand')
const hourHand = document.querySelector('.hour_hand')


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