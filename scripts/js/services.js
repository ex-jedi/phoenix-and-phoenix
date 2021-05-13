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
  svgScrubAnimation,
  fadeAndSwapThreeExport,
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

// ********** SVG Scrub Animation **********
svgScrubAnimation();

// ********** Fade and Swap Three **********
fadeAndSwapThreeExport();

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
serviceTabButtons.forEach((button) => {
  button.addEventListener(
    'click',
    () => {
      splitTextHeadingsFunction();
      bodySplitTextAnimation();
      fadeAndSwapThreeExport();
      circleAnimationfunction();
      simpleFadeIn();
      console.log('🚀 GSAP Tab Refresh 🚀');
    },
    { once: true }
  );
});
