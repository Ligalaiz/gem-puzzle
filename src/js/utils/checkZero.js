export default function checkZero(e) {
  const { target } = e;
  let widthEl = target.closest('div[data-num]').offsetWidth;
  let isZero = false;
  let side = '';
  let cellWithZero;

  let x = target.closest('div[data-num]').getBoundingClientRect()['x'],
    y = target.closest('div[data-num]').getBoundingClientRect()['y'];

  let widthField = document.querySelector('.puzzle__wrap').offsetWidth,
    fromTop = document.querySelector('.puzzle__wrap').getBoundingClientRect()[
      'y'
    ],
    fromLeft = document.querySelector('.puzzle__wrap').getBoundingClientRect()[
      'x'
    ];

  if (y !== fromTop) {
    cellWithZero = document.elementFromPoint(e.x, e.y - widthEl).dataset.num;
    if (cellWithZero === '0') {
      side = 'top';
      isZero = true;
    }
  }
  if (y + widthEl + 5 < fromTop + widthField) {
    cellWithZero = document.elementFromPoint(e.x, e.y + widthEl).dataset.num;
    if (cellWithZero === '0') {
      side = 'bottom';
      isZero = true;
    }
  }
  if (x !== fromLeft) {
    cellWithZero = document.elementFromPoint(e.x - widthEl, e.y).dataset.num;
    if (cellWithZero === '0') {
      side = 'left';
      isZero = true;
    }
  }
  if (x + widthEl + 5 < fromLeft + widthField) {
    cellWithZero = document.elementFromPoint(e.x + widthEl, e.y).dataset.num;
    if (cellWithZero === '0') {
      side = 'right';
      isZero = true;
    }
  }

  console.log({ isZero, side });
  return { isZero, side };
}
