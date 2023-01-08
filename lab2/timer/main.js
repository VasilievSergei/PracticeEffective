// input
const inputMinutes = document.querySelector(".input-minut"); 
const inputSeconds = document.querySelector(".input-second"); 

// control buttons
const buttonStart = document.getElementById("button-start");
const buttonStop  = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

// setter time buttons
const buttonSetOneMinut  = document.getElementById("button-one-minut");
const buttonSetFiveMinut = document.getElementById("button-five-minut");
const buttonSetTenMinut  = document.getElementById("button-ten-minut");

//audio
const audio_file = new Audio('./assets/za_shto.mp3');

let minutes = localStorage.getItem("minutes") ?? 0;
let seconds = localStorage.getItem("seconds") ?? 0;
let timer = null;

inputMinutes.value = minutes;
inputSeconds.value = seconds;

let isRun   = Number(localStorage.getItem("isRun")) ?? 0;
let isReset = Number(localStorage.getItem("isReset")) ?? 1;

const disableInput = () => {
    inputMinutes.setAttribute("disabled", true);
    inputSeconds.setAttribute("disabled", true);
}

const unDisableInput = () => {
    inputMinutes.removeAttribute("disabled");
    inputSeconds.removeAttribute("disabled");
}

const setIsReset = (value) => {
    isReset = value;
    localStorage.setItem('isReset', isReset);
}

const setIsRun = (value) => {
    isRun = value;
    localStorage.setItem('isRun', isReset);
}

if(isReset) {
    unDisableInput();
}
else {
    disableInput();
}

if(isRun){
    start();
}

const minutesChange = (e) => {
    minutes = e.target.value > 0 ? e.target.value : 0;

    localStorage.setItem("minutes", minutes);

    inputMinutes.value = minutes;
}

const secondsChange = (e) => {
    seconds = e.target.value > 0 ? e.target.value : 0;
    
    localStorage.setItem("seconds", seconds);

    inputSeconds.value = seconds;
}

const setTimeByButton = (time) => {
    minutes = time;
    seconds = 0;

    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);

    inputMinutes.value = minutes;
    inputSeconds.value = seconds;

}

const playMusic = () => {
    audio_file.loop = true;
    audio_file.autoplay = true;
    audio_file.play();
}

const stopPlayMusic = () => {
    audio_file.loop = false;
    audio_file.autoplay = false;
    audio_file.pause();
    audio_file.currentTime = 0;
}


function start() {
    if (minutes > 0 || seconds > 0 || isRun) {

        minutes = isNaN(parseInt(inputMinutes.value)) ? 0 : parseInt(inputMinutes.value);
        seconds = isNaN(parseInt(inputSeconds.value)) ? 0 : parseInt(inputSeconds.value);

        
        setIsReset(0);
        setIsRun(1);

        buttonStart.removeEventListener('click', start);
        disableInput();

        timer = setInterval(() => {
        if (minutes == 0 && seconds == 1) {
            clearInterval(timer);

            setIsRun(0);

            buttonStart.addEventListener('click', start);
            
            playMusic();
            document.body.classList.add('red-background');

        } else if(minutes > 0 && seconds == 0){
            minutes--; 
            seconds = 60; 

            inputMinutes.value = minutes;
            localStorage.setItem("minutes", minutes);
        }
        seconds--;

        inputSeconds.value = seconds;
        localStorage.setItem("seconds", seconds);

        }, 1000);
    }

}


const stop = () => {
    clearInterval(timer);
    buttonStart.addEventListener('click', start);

    setIsRun(0);
}

const reset = () => {
    clearInterval(timer);
    
    minutes = 0;
    seconds = 0;

    localStorage.clear();

    setIsRun(0);
    setIsReset(1);

    inputMinutes.value = minutes;
    inputSeconds.value = seconds;

    buttonStart.addEventListener('click', start);

    document.body.classList.remove('red-background');

    unDisableInput();

    stopPlayMusic();
}

// input listener
inputMinutes.addEventListener('change', minutesChange);
inputSeconds.addEventListener('change', secondsChange);

// control button
buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);
buttonReset.addEventListener('click', reset);

// button setter time
buttonSetOneMinut.addEventListener('click', () => {
    if(isReset){
        setTimeByButton(1);
    }
});

buttonSetFiveMinut.addEventListener('click', () => {
    if(isReset) {
        setTimeByButton(5);
    }
});

buttonSetTenMinut.addEventListener('click', () => {
    if(isReset){
        setTimeByButton(10);
    }
});