// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  splitTextHeadingsFunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
  scrollTriggerRefreshTabs,
  simpleFadeIn,
  circleAnimationfunction,
  fadeAndSwapThreeExport,
  svgScrubAnimation,
  addMenuListener,
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

// ********** SVG Scrub Animations **********

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

// !==============================================================================
// FIXME: 👇🏾 Don't seem to work when moved into modules
// !==============================================================================

function gsapTabRefresh() {
  // TODO: Check if you want to refresh every time not just once.
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
        scrollTriggerRefreshTabs(500);
        console.log('🚀 GSAP Tab Refresh 🚀');
      },
      { once: true }
    );
  });
}

gsapTabRefresh();

svgScrubAnimation();
