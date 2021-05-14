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
  brandingTabSvgAnimation,
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

// * Branding
brandingTabSvgAnimation();

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

// TODO: Delete if this isn't needed anymore
// const brandingButton = document.querySelector('#branding');
// const websitesButton = document.querySelector('#websites');
// const illustrationButton = document.querySelector('#illustration');

// brandingButton.addEventListener('click', (e) => {
//   brandingTabSvgAnimation();
// });

// websitesButton.addEventListener('click', (e) => {
//   websitesTabSvgAnimation();
// });

// illustrationButton.addEventListener('click', (e) => {
//   illustrationTabSvgAnimation();
// });

// TODO: Put in lib
function allTheThings() {
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

allTheThings();
