// *==============================================================================
// ** Imports  **
// *==============================================================================

import { cookieWarning, cleanText } from './utils.js';

import { addMenuListener, splitTextHeadingsFunction, swapTwoImagesFunction, animatedMainLogo } from './animations';

// *=========================================
// ** Utils  **
// *=========================================

// * Has to run first so it doesn't remove splitText's divs
cleanText('.split-text-heading-animation');

cookieWarning();

// *=========================================
// ** GSAP  **
// *=========================================
// ********** Menu Animation **********
addMenuListener();

// ********** Heading Split Text **********
splitTextHeadingsFunction();

// ********** Swap Two Images **********
swapTwoImagesFunction();

// ********** Logo **********
animatedMainLogo();
