import { get, set } from './storage.js';

let timerId;
export default function timer(obj) {
  const { startState, pauseState, stopState } = obj;
  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const minutesDisplay = document.querySelector('#min'),
    secondsDisplay = document.querySelector('#sec');
    
  let minutes = 0,
    seconds = 0;

  if (startState) {
    timerId = setInterval(function () {
      seconds += 1;

      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }

      minutesDisplay.innerText = addZero(minutes);
      secondsDisplay.innerText = addZero(seconds);
      set('min', minutes);
      set('sec', seconds);
    }, 1000);
    set('timer', timerId);
  }

  if (pauseState === 'on') {
    clearInterval(parseInt(get('timer')));
    localStorage.removeItem('timer');
  } else if (pauseState === 'off') {
    minutes = parseInt(get('min'));
    seconds = parseInt(get('sec'));

    timerId = setInterval(function () {
      seconds += 1;

      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }

      minutesDisplay.innerText = addZero(minutes);
      secondsDisplay.innerText = addZero(seconds);
      set('min', minutes);
      set('sec', seconds);
    }, 1000);
    set('timer', timerId);
  }

  if (stopState) {
    clearInterval(parseInt(get('timer')));
    localStorage.removeItem('timer');
  }
}
