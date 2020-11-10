import { get, set } from './storage.js';

export default function scoreData() {
  const person = { nickname: '', steps: 0, time: 0 },
    data = [];

  for (let i = 0; i < 10; i++) {
    data.push(person);
  }

  if (!get('threeStorage')) set('threeStorage', data);
  if (!get('fourStorage')) set('fourStorage', data);
  if (!get('fiveStorage')) set('fiveStorage', data);
  if (!get('sixStorage')) set('sixStorage', data);
  if (!get('sevenStorage')) set('sevenStorage', data);
  if (!get('eightStorage')) set('eightStorage', data);
}
