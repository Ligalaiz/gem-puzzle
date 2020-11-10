import { get } from '../storage.js';

export default function showWinMessage() {
  const message = document.querySelector('.message'),
    text = document.querySelector('.message__text');

  function addZero(num) {
    return num < 10 ? (num = `0${num}`) : num;
  }

  function changeWord(steps) {
    if (parseInt(steps) === 1) {
      return '';
    } else if (parseInt(steps) <= 4) {
      return 'a';
    } else {
      return 'ов';
    }
  }

  let minutes = get('min'),
    seconds = get('sec'),
    steps = get('step');

  message.classList.add('message--active');
  text.innerText = `Ура! Вы решили головоломку за ${addZero(minutes)}:${addZero(
    seconds
  )} и ${addZero(steps)} ход${changeWord(steps)}`;
  setTimeout(() => {
    message.classList.remove('message--active');
  }, 3000);
}
