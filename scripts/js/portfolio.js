// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  splitTextHeadingsFunction,
  bodySplitTextAnimation,
  imageSwipeInExportFunction,
  scrollTriggerRefresh,
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

// ********** Scroll Trigger Refresh **********
scrollTriggerRefresh();

// *=========================================
// ** Lib  **
// *=========================================

consoleGreeting();
