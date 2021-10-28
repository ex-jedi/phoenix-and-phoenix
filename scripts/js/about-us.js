// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  bodySplitTextAnimation,
  splitTextHeadingsFunction,
  fadeAndSwapThreeExport,
  scrollTriggerRefresh,
  addMenuListener,
} from './animations';

import { cookieWarning, cleanText } from './utils';

// *=========================================
// ** Utils  **
// *=========================================

// * Has to run first so it doesn't remove splitText's divs
cleanText('.split-text-heading-animation');
cleanText('.split-text-body-animation');

cookieWarning();

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********
animatedMainLogo();

// ********** Heading Split Text **********
splitTextHeadingsFunction();

// ********** Body Text **********
bodySplitTextAnimation();

// ********** Fade and Swap Three **********
fadeAndSwapThreeExport();

// ********** Scroll Trigger Refresh **********
scrollTriggerRefresh();

// ********** Menu Animation **********
addMenuListener();
