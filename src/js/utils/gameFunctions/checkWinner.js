import { get} from '../storage.js';
export default function checkWinner() {
  let currentGameState = get('field');
  currentGameState.pop();
  let isWrong = currentGameState.find((item, index) => item !== index + 1);
  return isWrong === 0 || isWrong ? false : true;
}
