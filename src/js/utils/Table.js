import create from './create.js';
import Key from './Key.js';
// import { get, set } from './storage.js';

export const main = create('div', 'wrap');
const puzzle = create(
  'div',
  'puzzle',
  [
    create('div', 'puzzle__info', [
      create('div', 'time', [
        create('div', 'time__wrap', [
          create('div', null, 'time'),
          create('div', null, null, null, ['id', 'min']),
          create('div', null, ' : ', null,),
          create('div', null, null, null, ['id', 'sec']),
        ]),
      ]),
      create('div', 'step', [
        create('div', 'step__wrap', [
          create('div', null, 'step'),
          create('div', null, null, null, ['id', 'stepDisplay']),
        ]),
      ]),
    ]),
    create('div', 'puzzle__control control', [
      create('button', 'control__item start', 'start'),
      create('button', 'control__item pause', 'pause'),
      create('button', 'control__item stop', 'stop'),
      create('button', 'control__item shuffle', 'shuffle'),
      create('select', 'control__item select', [
        create('option', null, '3X3', null, ['value', 'three']),
        create('option', null, '4X4', null, ['value', 'four']),
        create('option', null, '5X5', null, ['value', 'five']),
        create('option', null, '6X6', null, ['value', 'six']),
        create('option', null, '7X7', null, ['value', 'seven']),
        create('option', null, '8X8', null, ['value', 'eight']),
      ]),
      create('button', 'control__item sound', 'sound'),
      create('button', 'control__item score', 'score'),
    ]),
    create('div', 'puzzle__overlay', [
      create('div', 'puzzle__form form', [
        create('input', 'form__field', null, null, ['placeholder', 'nickname'],['autofocus','']),
        create('button', 'form__btn', null, null),
        
      ], null),
      create('p', 'form__message', 'nickname more than four letters or numbers', null),
    ], null),
    create('div', 'puzzle__popup popup', [
      create('div', 'popup__wrap', [
        create('div', 'popup__item', [
          create('div', 'popup__position', '1', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '2', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '3', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '4', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '5', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '6', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '7', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '8', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '9', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        create('div', 'popup__item', [
          create('div', 'popup__position', '10', null),
          create('div', 'popup__steps', null, null),
          create('div', 'popup__time', null, null),
          create('div', 'popup__nickname', null, null)
        ], null),
        
      ], null),
    ], null),
    create('div', 'puzzle__message message', [
      create('div', 'message__wrap', [
        create('div', 'message__text', null, null),
      ], null),
    ], null),
  ],
  main
);

create('audio', null, [
  create('source', null, null, null, ['src', './move.mp3'], ['type', 'audio/mpeg']),
], main, ['id', 'audioClick']);

export class Table {
  constructor(keyArr) {
    this.keyArr = keyArr;
    this.chips = [];
  }

  init() {
    this.puzzleWrap = create('div', 'puzzle__wrap', null, puzzle);
    document.body.prepend(main);
    return this;
  }

  generateLayout(cells = this.keyArr) {
    this.keyArr = cells;
    cells.forEach((item) => {
      const chip = new Key(item, this.puzzleWrap);
      this.chips.push(chip);
    });
  }
}
