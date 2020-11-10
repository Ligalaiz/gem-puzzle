import shuffle from './shuffle.js';
import { get, set } from './storage.js';
import generateField from '../layouts/generateField.js';
import timer from './timer.js';
import stopFunction from './gameFunctions/stopFunction.js';
import showScoreFunction from './gameFunctions/showScoreFunction.js';

export default function game(obj) {
  const {
    type,
    target,
    table,
    pause,
    start,
    stop,
    shuffleBtn,
    select,
    score,
  } = obj;

  const puzzles = document.querySelectorAll('.puzzle__item');
  const minutesDisplay = document.querySelector('#min');
  const secondsDisplay = document.querySelector('#sec');
  const stepDisplay = document.querySelector('#stepDisplay');

  if (type.match(/mousedown/)) {
    // Start button
    if (target.classList.contains('start')) {
      // Control changes
      set('startGame', 'on');

      set('startBtn', 'on');
      set('pauseBtn', 'off');
      set('shuffleBtn', 'off');
      set('score', 'off');
      set('min', '0');
      set('sec', '0');
      set('step', '0');

      start.setAttribute('disabled', '');
      start.style.cursor = 'default';
      pause.removeAttribute('disabled');
      stop.removeAttribute('disabled');
      pause.style.cursor = 'pointer';
      stop.style.cursor = 'pointer';

      shuffleBtn.setAttribute('disabled', '');
      select.setAttribute('disabled', '');
      score.setAttribute('disabled', '');
      shuffleBtn.style.cursor = 'default';
      select.style.cursor = 'default';
      score.style.cursor = 'default';

      minutesDisplay.innerText = '00';
      secondsDisplay.innerText = '00';
      stepDisplay.innerText = '00';
      let startState = true;
      timer({ startState });

      // Stirring is disabled specifically for testing convenience.
      // shuffle(table);

      // Play board changes
      puzzles.forEach((item) => item.classList.remove('index'));
    }

    // Pause button
    if (target.classList.contains('pause')) {
      if (get('pauseBtn') === 'on') {
        set('pauseBtn', 'off');
        puzzles.forEach((item) => item.classList.remove('index'));
      } else {
        set('pauseBtn', 'on');
        puzzles.forEach((item) => item.classList.add('index'));
      }
      let pauseState = get('pauseState') === 'on' ? 'off' : 'on';
      set('pauseState', pauseState);
      timer({ pauseState });
    }

    // Stop button
    if (target.classList.contains('stop')) {
      stopFunction();
    }

    // Shuffle button
    if (target.classList.contains('shuffle')) {
      shuffle(table);
      document
        .querySelectorAll('.puzzle__item')
        .forEach((item) => item.classList.add('index'));
    }

    // Sound button
    if (target.classList.contains('sound')) {
      if (get('soundBtn') === 'on') {
        set('soundBtn', 'off');
      } else {
        set('soundBtn', 'on');
      }
    }

    // Score button
    if (target.classList.contains('score')) {
      showScoreFunction();
    }
  }

  if (type.match(/change/)) {
    // Select
    if (target.classList.contains('select')) {
      set('select', `${select.value}`);
      const items = document.querySelectorAll('.puzzle__item');
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

      Array.from(items).forEach((i) => i.remove());
      let field = generateField();
      table.generateLayout(field);
      set('field', field);
      document
        .querySelectorAll('.puzzle__item')
        .forEach((item) => item.classList.add('index'));
    }
  }
}
