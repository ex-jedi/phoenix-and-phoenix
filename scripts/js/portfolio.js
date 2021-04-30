// *==============================================================================
// ** Imports  **
// *==============================================================================

import { animatedMainLogo, splitTextHeadingsFunction, bodySplitTextAnimation } from './animations';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();
splitTextHeadingsFunction();

// *=========================================
// ** On Page JS  **
// *=========================================

const menuItem = Array.from(document.querySelectorAll('.menu-item-number'));
let count = 1;
let preCount = 0;

menuItem.forEach((item) => {
  if (count > 9) {
    preCount = '';
  }
  const itemCounter = document.createElement('span');
  itemCounter.classList.add('item-number');
  itemCounter.textContent = `${preCount}${count}`;
  item.insertAdjacentElement('afterbegin', itemCounter);
  count += 1;
});
