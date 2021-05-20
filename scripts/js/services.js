// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  splitTextHeadingsFunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
  scrollTriggerRefreshTabs,
  scrollTriggerRefreshSVG,
  simpleFadeIn,
  circleAnimationfunction,
  fadeAndSwapThreeExport,
  svgScrubAnimation,
  addMenuListener,
} from './animations';
import { addTabsListeners, consoleGreeting, getTabsElements } from './lib';

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

// !==============================================================================
// FIXME: 👇🏾 Don't seem to work when moved into modules
// !==============================================================================

function gsapTabRefresh() {
  // TODO: Check if you want to refresh every time not just once.
  const { tabButtons } = getTabsElements();
  console.log({ tabButtons });
  tabButtons.forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        splitTextHeadingsFunction();
        bodySplitTextAnimation();
        fadeAndSwapThreeExport();
        circleAnimationfunction();
        simpleFadeIn();
        scrollTriggerRefreshTabs();
        console.log('🚀 GSAP Tab Refresh 🚀');
      },
      { once: true }
    );
  });
}

gsapTabRefresh();

function svgRefresh() {
  const { tabButtons } = getTabsElements();
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      scrollTriggerRefreshSVG(500);
      console.log('🚀 GSAP SVG Refresh Click 🚀');
    });
  });
}

svgRefresh();
