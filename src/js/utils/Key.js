import { get } from './storage.js';
import create from './create.js';

export default class Key {
  constructor(num, parent) {
    this.num = num;
    this.parent = parent;
    this.isZero = !!num;

    if (num && this.isZero) {
      let tableSze = get('select');
      this.div = create(
        'div',
        'puzzle__item num',
        null,
        this.parent,
        ['num', this.num],
        ['size', tableSze]
      );
    } else {
      this.div = create('div', 'puzzle__item zero', null, this.parent, [
        'num',
        this.num,
      ]);
    }
  }
}
