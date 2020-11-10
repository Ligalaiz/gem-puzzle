import { get, set } from './storage.js';

export default function shuffle(table) {
  const items = document.querySelectorAll('.puzzle__item');
  Array.from(items).forEach((i) => i.remove());

  let field = get('field');
  field = field.sort(() => Math.random() - 0.5);
  table.generateLayout(field);
  set('field', field);
}
