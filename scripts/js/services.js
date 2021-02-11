import { tabButtons, tabClickHandler } from './lib';

tabButtons.forEach((button) => button.addEventListener('click', tabClickHandler));
