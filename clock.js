let seconds = 0;
let minutes = 0;
let hours = 0;

function secondRotation(seconds) {
    var degRotation = 6 * seconds;



    return degRotation
}

// function minuteRotation (minutes, seconds) {
//     let minRotation = minutes * 6 + (seconds * 60 / (minutes * 6));
//     return minRotation
    
// }
// console.log(minuteRotation(30,30));

function minuteRotation (minutes, seconds) {
    let minRotation = 60*minutes +seconds;
    let degRotation = .1*minRotation;
    return degRotation
    
}

// function hourRotation (hours, minutes, seconds) {
//     let hoRotation = (seconds * 6) * (minutes * 60) / (hours * 216000);
//     return hoRotation;

// }

// console.log(hourRotation(1, 60, 60));

function hourRotation (hours, minutes) {
    let totalMinutes = 60*hours+minutes;
    let degRotation = .5+totalMinutes;
    return degRotation;

}




function tick () {
    seconds ++;
    if(seconds==60) {
        minutes++;
        seconds =0;
    } 
    if(minutes==60) {
        hours++;
        minutes=0;
    } 
    if (hours==12) {
        hours=0;
    }
    console.log(`${hours}:${minutes}:${seconds}`)

    secHand.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteRotation(minutes, seconds) + 'deg)';
    hourHand.style.transform = 'rotate(' + hourRotation(hours,minutes) + 'deg)';
    
}

document.addEventListener('DOMContentLoaded', function () {
     secHand = document.getElementById('second');
     minuteHand = document.getElementById('minute');
     hourHand = document.getElementById('hour');
    
    // DOM event listener for tick
    setInterval(tick, 50);
});

