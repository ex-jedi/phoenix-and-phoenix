// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  splitTextHeadingsFunction,
  bodySplitTextAnimation,
  imageSwipeInExportFunction,
  scrollTriggerRefresh,
  fadeAndSwapNineFunctionExport,
  simpleFadeIn,
  addMenuListener,
} from './animations';

import { consoleGreeting } from './lib';

import { cookieWarning, cleanTextExport } from './utils';

// *=========================================
// ** Utils  **
// *=========================================

// * Has to run first so it doesn't remove splitText's divs
cleanTextExport();

cookieWarning();

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();

// ********** Split Text Animation **********

// * Headings
splitTextHeadingsFunction();

// * Body Text
bodySplitTextAnimation();

// ********** Images **********

// * Swipe
imageSwipeInExportFunction();

// * Fade and Swap Nine
fadeAndSwapNineFunctionExport();

// * Simple Fade
simpleFadeIn();

// ********** Scroll Trigger Refresh **********
scrollTriggerRefresh();

// ********** Menu Animation **********
addMenuListener();

// *=========================================
// ** Lib  **
// *=========================================

consoleGreeting();
