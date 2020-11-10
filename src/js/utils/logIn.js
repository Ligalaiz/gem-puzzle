import { set } from './storage.js';

export default function logIn(obj) {
  const { target, overlay, code, pause, stop } = obj;
  if (target.classList.contains('form__btn') || code === 'Enter') {
    const nickname = document.querySelector('.form__field');
    if (
      nickname.value &&
      nickname.value.length > 4 &&
      nickname.value.match(/[a-zA-Zа-яА-ЯёЁ0-9]/g)
    ) {
      set('currentUser', nickname.value);
      set('logIn', 'on');
        
      pause.setAttribute('disabled', '');
      stop.setAttribute('disabled', '');

      pause.style.cursor = 'default';
      stop.style.cursor = 'default';
      overlay.classList.add('hide');
    }
  }
}
