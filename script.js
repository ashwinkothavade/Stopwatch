const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start() {
    if (running) return;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    running = true;
}

function pause() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    display.textContent = '00:00:00:00';
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
