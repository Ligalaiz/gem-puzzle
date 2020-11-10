export default function checkZero(e) {
  const { target } = e;
  let widthEl = target.closest('div[data-num]').offsetWidth;
  let izZero = false;
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
    if (cellWithZero === '0') izZero = true;
  }
  if (y + widthEl + 5 < fromTop + widthField) {
    cellWithZero = document.elementFromPoint(e.x, e.y + widthEl).dataset.num;
    if (cellWithZero === '0') izZero = true;
  }
  if (x !== fromLeft) {
    cellWithZero = document.elementFromPoint(e.x - widthEl, e.y).dataset.num;
    if (cellWithZero === '0') izZero = true;
  }
  if (x + widthEl + 5 < fromLeft + widthField) {
    cellWithZero = document.elementFromPoint(e.x + widthEl, e.y).dataset.num;
    if (cellWithZero === '0') izZero = true;
  }
  return izZero;
}
