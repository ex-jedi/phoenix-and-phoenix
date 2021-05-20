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
  fadeAndSwapThreeExport,
  tabSvgAnimation,
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

// * Initialising Animation
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

function svgScrubberEventListener() {
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
        console.log('🚀 GSAP Tab Refresh 🚀');
      },
      { once: true }
    );
  });
}

svgScrubberEventListener();

function svgScrubAnimationRefresh() {
  const { tabPanel, tabButtons } = getTabsElements();
  tabButtons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
      // TODO: Remove scroll trigger from all SVG's
      // Add trigger to SVG in current tab
      const clickedTab = e.currentTarget;
      const { id } = clickedTab;
      const panelToShow = tabPanel.find((panel) => panel.getAttribute('aria-labelledby') === id);
      const svgToAnimate = panelToShow.querySelector('[data-name="Text"]');
      tabSvgAnimation(svgToAnimate);
    });
  });
}

svgScrubAnimationRefresh();
