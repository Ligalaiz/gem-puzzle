import { get, set } from './storage.js';

export default function checkState(obj) {
  const {
    overlay,
    puzzles,
    pause,
    start,
    stop,
    shuffleBtn,
    select,
    score,
  } = obj;

  // Set default btn state
  set('pauseBtn', 'off');
  set('soundBtn', 'off');

  select.value = get('select');

  // Set grid settings
  const wrap = document.querySelector('.puzzle__wrap');

  let size = null;
  switch (get('select')) {
    case 'three':
      size = 3;
      break;
    case 'four':
      size = 4;
      break;
    case 'five':
      size = 5;
      break;
    case 'six':
      size = 6;
      break;
    case 'seven':
      size = 7;
      break;
    case 'eight':
      size = 8;
      break;
  }
  wrap.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  // Check LogIn
  if (get('logIn') === 'on') {
    overlay.classList.add('hide');

    // Control panel interactivity
    if (get('startGame') === 'on') {
      start.setAttribute('disabled', '');
      start.style.cursor = 'default';

      shuffleBtn.setAttribute('disabled', '');
      select.setAttribute('disabled', '');
      score.setAttribute('disabled', '');
      shuffleBtn.style.cursor = 'default';
      select.style.cursor = 'default';
      score.style.cursor = 'default';
      puzzles.forEach((item) => item.classList.remove('index'));
    } else {
      set('startBtn', 'on');
      pause.setAttribute('disabled', '');
      stop.setAttribute('disabled', '');
      pause.style.cursor = 'default';
      stop.style.cursor = 'default';
      puzzles.forEach((item) => item.classList.add('index'));
    }
  } else {
    puzzles.forEach((item) => item.classList.add('index'));
  }

  const stepDisplay = document.querySelector('#stepDisplay'),
    timeDisplayMimute = document.querySelector('#min'),
    timeDisplaySecond = document.querySelector('#sec');

  // Step
  function addZero(num) {
    return num < 10 ? (num = `0${num}`) : num;
  }
  stepDisplay.innerText = addZero(get('step'));

  // Time
  timeDisplayMimute.innerText = addZero(get('min'));
  timeDisplaySecond.innerText = addZero(get('sec'));

  // Score
  if (get('score') === 'on') set('score', 'off');
}
