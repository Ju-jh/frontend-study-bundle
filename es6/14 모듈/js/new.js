import { fnQs, a } from './module1.js';
import b from './module2.js';

fnQs('.btn1').addEventListener('click', (e) => {
  alert(a);
  console.log(a, b);
});
