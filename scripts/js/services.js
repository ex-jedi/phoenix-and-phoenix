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
  brandingTabSvgAnimation,
  websitesTabSvgAnimation,
  illustrationTabSvgAnimation,
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

// * Branding
brandingTabSvgAnimation();

// * Websites
websitesTabSvgAnimation();

// * Illustration
// illustrationTabSvgAnimation();

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

const brandingButton = document.querySelector('#branding');
const websitesButton = document.querySelector('#websites');
const illustrationButton = document.querySelector('#illustration');

brandingButton.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  brandingTabSvgAnimation();
});

websitesButton.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  websitesTabSvgAnimation();
});

illustrationButton.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  illustrationTabSvgAnimation();
});
