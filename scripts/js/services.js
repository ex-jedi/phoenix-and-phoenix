// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  splitTextHeadingsFunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
  simpleFadeIn,
  circleAnimationfunction,
} from './animations';
import { addTabsListeners, consoleGreeting } from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Scroll Trigger Refresh **********
scrollTriggerRefresh();

// ********** Animated Main Logo **********

animatedMainLogo();

// ********** Split Text Headings **********
splitTextHeadingsFunction();

// ********** Split Text Body **********
bodySplitTextAnimation();

// ********** Simple Fade In **********
simpleFadeIn();

// ********** Circle Animation **********
circleAnimationfunction();
// *=========================================
// ** Lib  **
// *=========================================

// ********** Tabs **********

// * Tabs Listeners
addTabsListeners();

// ********** Console Greeting **********
consoleGreeting();

// !==============================================================================
// FIXME: Services page animations
// !==============================================================================

const serviceTabButtons = document.querySelectorAll('.tab-button');
console.log(serviceTabButtons);
serviceTabButtons.forEach((button) => {
  button.addEventListener(
    'click',
    () => {
      splitTextHeadingsFunction();
      bodySplitTextAnimation();
      console.log('GSAP refresh');
    },
    { once: true }
  );
});
