
//Digital

const digitalDisplay = document.querySelector(".digital");

function displayTime(){
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    digitalDisplay.innerHTML = time;
}

setInterval(displayTime, 1000);

// Analog

const clock = document.querySelector(".clock");
const other = document.querySelector(".other");

//hour-marks

let hourMarksArray = [];

for (let i=0; i<6; i++) {
    let hourMark = document.createElement("div");
    hourMark.classList.add("hour-mark")
    hourMarksArray.push(hourMark);
    clock.append(hourMark);
}

hourMarksArray.forEach((div, index)=>{
    div.style.transform = `rotate(${index*30}deg)`;
})


//minute-marks

let minuteMarksArray = [];

for (let i=0; i<30; i++) {
    let minuteMark = document.createElement("div");
    minuteMark.classList.add("minute-mark");
    minuteMarksArray.push(minuteMark)
    clock.append(minuteMark);
}

minuteMarksArray.forEach((div, index)=>{
    div.style.transform = `rotate(${index*6}deg)`;
})


// hour-hand

let innerClock = document.querySelector(".inner-circle");

let hourHand = document.createElement("div");
hourHand.classList.add("hour-hand");
innerClock.append(hourHand);

function moveHourhand(){
    let today = new Date();
    let hour = today.getHours();
    hour = hour % 12;
    hourHand.style.transform = `rotate(${(hour * 30)}deg)`
}

setInterval(moveHourhand, 1000);


// minute-hand 

let minuteHand = document.createElement("div");
minuteHand.classList.add("minute-hand");
innerClock.append(minuteHand);

function moveMinuteHand(){
    let today = new Date();
    let minute = today.getMinutes();
    minuteHand.style.transform = `rotate(${minute * 6}deg)`
}

setInterval(moveMinuteHand, 1000);

// second-hand

let secondHand = document.createElement("div");
secondHand.classList.add("second-hand");
innerClock.append(secondHand);

function moveSecondHand(){
    let today = new Date();
    let second = today.getSeconds();
    secondHand.style.transform = `rotate(${second * 6}deg)`;
}

setInterval(moveSecondHand, 1000);

function moveHands(){
    let today = new Date();
    let hour = today.getHours()
    hour = hour % 12;
    let minute = today.getMinutes();
    let second = today.getSeconds();

}