import { get, set } from '../storage.js';

export default function showScoreFunction() {
  get('score') === 'on' ? set('score', 'off') : set('score', 'on');

  let scoreDisplay = document.querySelector('.popup'),
    popupNickname = document.querySelectorAll('.popup__nickname'),
    popupSteps = document.querySelectorAll('.popup__steps'),
    popupTime = document.querySelectorAll('.popup__time');

  if (get('score') === 'on') {
    let currentTableSize = get('select'),
      arrScore = [];

    switch (currentTableSize) {
      case 'three':
        arrScore = get('threeStorage');
        break;
      case 'four':
        arrScore = get('fourStorage');
        break;
      case 'five':
        arrScore = get('fiveStorage');
        break;
      case 'six':
        arrScore = get('sixStorage');
        break;
      case 'seven':
        arrScore = get('sevenStorage');
        break;
      case 'eight':
        arrScore = get('eightStorage');
        break;
    }

    for (let i = 0; i < popupNickname.length; i++) {
      popupNickname[i].innerText = arrScore[i].nickname;
    }

    for (let i = 0; i < popupSteps.length; i++) {
      popupSteps[i].innerText = arrScore[i].steps;
    }
    for (let i = 0; i < popupTime.length; i++) {
      popupTime[i].innerText = arrScore[i].time;
    }

    scoreDisplay.classList.add('popup--active');
  } else if (get('score') === 'off') {
    scoreDisplay.classList.remove('popup--active');
  }
}
