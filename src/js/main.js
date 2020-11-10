import generateField from './layouts/generateField.js';
import { Table } from './utils/Table.js';
// import DragAndDrop from './utils/DragAndDrop.js';
import clickHandler from './utils/clickHandler.js';
import { get, set } from './utils/storage.js';
import logIn from './utils/logIn.js';
import animationBtns from './utils/animationBtns.js';
import game from './utils/game.js';
import checkState from './utils/checkState.js';
import scoreData from './utils/scoreData.js';

// Check table state
if (!get('select')) set('select', 'three');
if (!get('step')) set('step', '0');
if (!get('min')) set('min', '0');
if (!get('sec')) set('sec', '0');
if (!get('score')) set('score', 'off');
if (!get('pauseState')) set('pauseState', 'off');

// Score storage
scoreData();

// Create Table
let field = get('field') || generateField();
const table = new Table(field);

// Render
table.init().generateLayout();

const overlay = document.querySelector('.puzzle__overlay'),
  start = document.querySelector('.start'),
  pause = document.querySelector('.pause'),
  stop = document.querySelector('.stop'),
  shuffleBtn = document.querySelector('.shuffle'),
  select = document.querySelector('.select'),
  score = document.querySelector('.score'),
  puzzles = document.querySelectorAll('.puzzle__item'),
  wrap = document.querySelector('.wrap');

// Check state
checkState({ overlay, puzzles, pause, start, stop, shuffleBtn, select, score });

// Add Drag And Drop
// const dragAndDrop = new DragAndDrop();

// function dragAndDropHandler(e) {
//   const { type } = e;

//   if (type.match(/mousedown/)) {
//     dragAndDrop.setDraggable(e);
  // }
  // if (type.match(/mouseup/)) {
  //   dragAndDrop.removeDraggable(e);
  // }

  // if (type.match(/mouseover/)) {
  //   dragAndDrop.changePuzzlePlace(e);
  // }

  // if (type.match(/dragstart/)) {
  //   dragAndDrop.dragStart(e);
  //   console.log('dragstart');
  // }

  // if (type.match(/dragend/)) {
  //   dragAndDrop.dragEnd(e, table);
  //   console.log('dragend');
  // }

  // if (type.match(/dragover/)) {
  //   e.preventDefault();
  // }
  // if (type.match(/dragleave/)) {
  //   dragAndDrop.dragLeave(e, table);
  //   // console.log('dragleave')
  // }
  // if (type.match(/dragenter/)) {
  //   dragAndDrop.dragEnter(e);
  //   // console.log('dragenter')
  // }
  // if (type.match(/drop/)) {
  //   dragAndDrop.dragDrop(e, wrap);
  //   console.log('drop');
  // }
// }

// main.addEventListener('dragstart', dragAndDropHandler);
// main.addEventListener('dragover', dragAndDropHandler);
// main.addEventListener('dragleave', dragAndDropHandler);
// main.addEventListener('dragenter', dragAndDropHandler);
// main.addEventListener('dragend', dragAndDropHandler);
// main.addEventListener('drop', dragAndDropHandler);
// main.addEventListener('mousedown', dragAndDropHandler);
// main.addEventListener('mouseup', dragAndDropHandler);

//  Add click Handler
function mouseHandler(e) {
  const { type, target } = e;
  animationBtns(target, type, pause);
  if (type.match(/click/)) {
    if (target.closest('div[data-num]') === null) return;
    if (target.closest('div[data-num]').dataset.num) {
      clickHandler(e, table);
    }
  }

  if (type.match(/mousedown|change/)) {
    logIn({ target, overlay, start, pause, stop });

    game({
      type,
      target,
      table,
      start,
      pause,
      stop,
      shuffleBtn,
      select,
      score,
    });
  }
}

wrap.addEventListener('click', mouseHandler);
wrap.addEventListener('mousedown', mouseHandler);
wrap.addEventListener('mouseup', mouseHandler);
wrap.addEventListener('change', mouseHandler);

function keyHandler(e) {
  const { type, target, code } = e;

  if (type.match(/keydown/)) {
    logIn({ target, overlay, start, code, pause, stop });
  }
}
wrap.addEventListener('keydown', keyHandler);
