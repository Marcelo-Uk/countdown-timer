/*
Countdown Timer

Project by Marcelo-Uk
Based on the tutorial from Florin Pop Youtube Channel

Background image by @kovacsz1 from http://unsplash.com

*/

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

let dateChoosen = '1 Jan 2023';

let storeTitle = "";
let storeDate = "";

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

function getData1(){ //To clean TITLE input field
    storeTitle  = document.getElementById('getTitle').value;
    document.getElementById('mainTitle').innerHTML = storeTitle;
    document.getElementById('mainTitle').value = "";
}

btn1.addEventListener('click', function handleClick(event){ //To clean TITLE input field
    event.preventDefault(); //prevents page reload

    const inputs = document.querySelectorAll('#getTitle')

    inputs.forEach(input => {
        input.value = '';
    })
});

function getData2(){ //To clean DATE input field
    storeDate  = document.getElementById('getDate').value;
    dateChoosen = storeDate;
}

btn2.addEventListener('click', function handleClick(event){ //To clean DATE input field
    event.preventDefault(); //prevents page reload

    const inputs = document.querySelectorAll('#getDate')

    inputs.forEach(input => {
        input.value = '';
    })
});


function countdown(){
    const dateChoosenDate = new Date(dateChoosen);
    const currentDate = new Date();

    const totalSeconds = (dateChoosenDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds ) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call

countdown();

setInterval(countdown, 1000);