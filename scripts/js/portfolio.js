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
} from './animations';

import { consoleGreeting } from './lib';

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

// ********** Scroll Trigger Refresh **********
scrollTriggerRefresh();

// *=========================================
// ** Lib  **
// *=========================================

consoleGreeting();
