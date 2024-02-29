var timeEl = document.getElementById('time');

function getTime() {
    var currentTime = new Date().toLocaleTimeString();
    return currentTime;
};

function updateTime() {
    timeEl.innerHTML = getTime();
}
if (timeEl !== null) {
    updateTime();
    setInterval(updateTime, 1000);
}