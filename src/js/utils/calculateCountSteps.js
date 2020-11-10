import { get, set } from './storage.js';

export default function calculateCountSteps(obj) {
  const { gameClick } = obj,
    stepDisplay = document.querySelector('#stepDisplay');

  function addZero(num) {
    return num < 10 ? (num = `0${num}`) : num;
  }
  
  if (gameClick) {
    let step = parseInt(get('step'));
    step += 1;
    set('step', step);
    stepDisplay.innerText = addZero(step);
  }
}
