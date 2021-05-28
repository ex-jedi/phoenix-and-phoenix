// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  splitTextHeadingsFunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
  gsapTabRefresh,
  svgRefresh,
  simpleFadeIn,
  circleAnimationfunction,
  fadeAndSwapThreeExport,
  svgScrubAnimation,
  addMenuListener,
} from './animations';
import { addTabsListeners, consoleGreeting } from './lib';
import { cookieWarning } from './utils';

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

// ********** SVG Scrub Animations **********
svgScrubAnimation();

// ********** Fade and Swap Three **********
fadeAndSwapThreeExport();

// ********** Menu Animation **********
addMenuListener();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Tabs **********

// * Tabs Listeners
addTabsListeners();

// ********** Console Greeting **********
consoleGreeting();

// ********** GSAP Tab Refresh **********
gsapTabRefresh();

// ********** SVG Refresh **********
svgRefresh();

// *=========================================
// ** Utils  **
// *=========================================

cookieWarning();
