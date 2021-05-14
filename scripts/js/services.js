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

// *=========================================
// ** Lib  **
// *=========================================

// ********** Tabs **********

// * Tabs Listeners
addTabsListeners();

// ********** Console Greeting **********
consoleGreeting();

// !==============================================================================
// FIXME: Services page animations. Move to lib
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

// TODO: Put in lib
function svgScrubAnimationRefresh() {
  const { tabPanel, tabButtons } = getTabsElements();
  tabButtons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
      const clickedTab = e.currentTarget;
      const { id } = clickedTab;
      console.log({ id });
      const panelToShow = tabPanel.find((panel) => panel.getAttribute('aria-labelledby') === id);
      console.log({ panelToShow });
      const svgToAnimate = panelToShow.querySelector('[data-name="Text"]');
      console.log({ svgToAnimate });
      tabSvgAnimation(svgToAnimate);
    });
  });
}

svgScrubAnimationRefresh();
