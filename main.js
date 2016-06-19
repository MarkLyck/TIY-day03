
// This timer is an altered version of one of the SO answers below, to fit my needs.
// http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 60 / 60, 10);
        minutes = parseInt(timer / 60 % 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var timeInSeconds = 60 * 198 + 3,
      // For some reason this only finds one element (the first),
      // despite having multiple elements with the class of .timer
      // TODO, ask how to select all classes in JS.
        display = document.querySelector('.timer');
    // console.log(display);
    startTimer(timeInSeconds, display);
};
