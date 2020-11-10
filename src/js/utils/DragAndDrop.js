import checkZero from './checkZero.js';

export default class DragAndDrop {
  constructor(cards, cells) {
    this.card = cards;
    this.cells = cells;
  }

  setDraggable(e) {
    const { target } = e;
    let isZero = checkZero(e);
    if (isZero) {
      target.setAttribute('draggable', 'true');
    }
  }

  // removeDraggable(e) {
  //   const { target } = e;
  //   let isZero = checkZero(e);
  //   if (isZero) {
  //     target.removeAttribute('draggable');
  //   }
  // }

  dragStart(e) {
    const { target } = e;
    if (target.dataset.num) {
      if (!target.dataset.num.match(/0/)) {
        let isZero = checkZero(e);
        if (isZero) {
          setTimeout(() => {
            target.classList.add('delete');
          }, 1);
        }
        console.log('add hide');
      }
    }
  }

  dragEnd(e, table) {
    const { keyArr: arr } = table,
      { target } = e;

    if (target.dataset.num) {
      if (!target.dataset.num.match(/0/)) {
        target.classList.remove('delete');
        target.removeAttribute('draggable');
        console.log('remove hide');
      }
    }
  }

  dragDrop(e, wrap) {
    const { target } = e;
    wrap.append(target);
  }

  // dragEnter(e) {
  //   const { target } = e;
  //   if (target.dataset.num) {
  //     if (!target.dataset.num.match(/0/)) {
  //       target.style.display = 'none';
  //     }
  //   }
  // }

  // dragLeave(e, table) {

  // }
}

// const dragAndDrop = new DragAndDrop(cards, cell);
// function add() {
//   const puzzle = document.querySelector('div[data-num="8"]');
//   const zero = document.querySelector('div[data-num="0"]');
//   const wrap = document.querySelector('.puzzle__wrap');
//   console.log(puzzle);

//   function handler1(e) {
//     setTimeout(() => {
//       puzzle.classList.add('hide');
//     }, 1);
//     console.log('drag start');
//     zero.style.display = 'none';
//   }
//   function handler2(e) {
//     // dragAndDrop.dragEnd(e);
//     puzzle.classList.remove('hide');
//     console.log('drag end');
//   }
//   function handler3(e) {
//     e.preventDefault();
//   }
//   function handler4(e) {
//     this.style.backgroundColor = '#ffffff80';
//   }
//   function handler5(e) {
//     e.preventDefault();
//   }
//   function handler6(e) {
//     this.append(puzzle);
//   }

//   puzzle.addEventListener('dragstart', handler1);
//   puzzle.addEventListener('dragend', handler2);

//   wrap.addEventListener('dragover', handler3);
//   wrap.addEventListener('dragleave', handler4);
//   wrap.addEventListener('dragenter', handler5);
//   wrap.addEventListener('drop', handler6);
// }
// add();
