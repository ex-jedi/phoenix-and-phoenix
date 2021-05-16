// *==============================================================================
// ** Imports  **
// *==============================================================================

import {
  animatedMainLogo,
  bodySplitTextAnimation,
  splitTextHeadingsFunction,
  fadeAndSwapThreeExport,
  scrollTriggerRefresh,
  addMenuListener,
} from './animations';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********
animatedMainLogo();

// ********** Heading Split Text **********
splitTextHeadingsFunction();

// ********** Body Text **********
bodySplitTextAnimation();

// ********** Fade and Swap Three **********
fadeAndSwapThreeExport();

// ********** Scroll Trigger Refresh **********
scrollTriggerRefresh();

// ********** Menu Animation **********
addMenuListener();
