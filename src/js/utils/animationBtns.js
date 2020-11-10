export default function animationBtns(target, type) {
  if (type.match(/mousedown/)) {
    
    if (
      target.classList.contains('form__btn') ||
      (target.classList.contains('control__item') &&
        !target.classList.contains('select'))
    ) {
      target.classList.add('shadow');
    }
  }

  if (type.match(/mouseup/)) {
    if (
      target.classList.contains('form__btn') ||
      (target.classList.contains('control__item') &&
       !target.classList.contains('select'))
    ) {
      target.classList.remove('shadow');
    }
  }
}
