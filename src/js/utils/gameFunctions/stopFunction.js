import { set } from '../storage.js';
import calculateCountSteps from '../calculateCountSteps.js';
import timer from '../timer.js';

export default function stopFunction() {
  const start = document.querySelector('.start');
  const stop = document.querySelector('.stop');
  const pause = document.querySelector('.pause'),
    shuffleBtn = document.querySelector('.shuffle'),
    select = document.querySelector('.select'),
    score = document.querySelector('.score'),
    puzzles = document.querySelectorAll('.puzzle__item');

  set('startGame', 'off');
  set('startBtn', 'off');
  set('pauseBtn', 'off');

  start.removeAttribute('disabled');
  start.style.cursor = 'pointer';
  pause.setAttribute('disabled', '');
  stop.setAttribute('disabled', '');
  pause.style.cursor = 'default';
  stop.style.cursor = 'default';

  shuffleBtn.removeAttribute('disabled');
  select.removeAttribute('disabled');
  score.removeAttribute('disabled');
  shuffleBtn.style.cursor = 'pointer';
  select.style.cursor = 'pointer';
  score.style.cursor = 'pointer';

  puzzles.forEach((item) => item.classList.add('index'));
  let stopState = true;
  calculateCountSteps({ stopState });
  timer({ stopState });

  set('pauseState', 'off');
}
