var [milliseconds, seconds, minutes] = [0, 0, 0];
var timerEl = document.getElementById('stopwatch');
var startBtn = document.getElementById('startTimer');
var pauseBtn = document.getElementById('pauseTimer');
var resetBtn = document.getElementById('resetTimer');
var int = null;

startBtn.addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(updateTimer, 10);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(int);
});
resetBtn.addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerEl.innerHTML = '00 : 00 : 000 ';
});

function updateTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;
    var ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerEl.innerHTML = ` ${m} : ${s} : ${ms}`;
}