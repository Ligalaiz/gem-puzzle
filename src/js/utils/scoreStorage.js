import { get, set } from './storage.js';

export default function scoreStorage() {
  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  
  let currentTableSize = get('select'),
    currentSteps = get('step'),
    currentNickname = get('currentUser'),
    currentTime = `${addZero(get('min'))} : ${addZero(get('sec'))}`,
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

  let findScorePlace = arrScore.findIndex(
    (item) => !item.steps || item.steps > currentSteps
  );
  arrScore
    .splice(findScorePlace, 0, {
      nickname: currentNickname,
      steps: currentSteps,
      time: currentTime,
    })
    .slice(0, 10);

  set(`${currentTableSize}Storage`, arrScore);
}
