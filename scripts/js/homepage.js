// *==============================================================================
// ** Imports  **
// *==============================================================================
import {
  animatedMainLogo,
  fadeAndSwapNineFunctionExport,
  fadeAndSwapThreeExport,
  imageSwipeInExportFunction,
  splitTextHeadingsFunction,
  circleAnimationfunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
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

// * Body Split Text
bodySplitTextAnimation();

// * Circle Animation
circleAnimationfunction();

// * Animated Main Logo
animatedMainLogo();

// * Header Image Animation
fadeAndSwapNineFunctionExport();

// * Fade and Swap Three Animation
fadeAndSwapThreeExport();

// * Image Swipe In
imageSwipeInExportFunction();

// * Split Text Animation For Headings
splitTextHeadingsFunction();

// * Scroll Trigger Refresh
scrollTriggerRefresh();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Console Greeting **********

consoleGreeting();

addMenuListener();
