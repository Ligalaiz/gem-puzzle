import checkZero from './checkZero.js';
import { get, set } from './storage.js';
import sound from './sound.js';
import calculateCountSteps from './calculateCountSteps.js';
import checkWinner from './gameFunctions/checkWinner.js';
import stopFunction from './gameFunctions/stopFunction.js';
import scoreStorage from './scoreStorage.js';
import showWinMessage from './gameFunctions/showWinMessage.js';

export default function clickHandler(e, table) {
  const { target } = e;
  let field = get('field');
 
  if (!target.closest('div[data-num]').dataset.num.match(/^0/)) {
    let isZero = checkZero(e),
      num = parseInt(target.closest('div[data-num]').dataset.num);

    if (isZero) {
      if (get('soundBtn') === 'on') sound();
      const items = document.querySelectorAll('.puzzle__item');
      let zeroIndex = field.findIndex((i) => i === 0),
        targetIndex = field.findIndex((i) => i === num);

      field[zeroIndex] = num;
      field[targetIndex] = 0;
      Array.from(items).forEach((i) => i.remove());
      table.generateLayout(field);

      let gameClick = true;
      calculateCountSteps({ gameClick });
      set('field', field);
      if (checkWinner()) {
        stopFunction();
        scoreStorage();
        showWinMessage();
      }
    }
  }
}
