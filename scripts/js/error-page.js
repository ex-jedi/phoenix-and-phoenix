// *==============================================================================
// ** Imports  **
// *==============================================================================

import { cookieWarning, cleanTextExport } from './utils.js';

import { addMenuListener, splitTextHeadingsFunction, swapTwoImagesFunction, animatedMainLogo } from './animations';

// *=========================================
// ** Utils  **
// *=========================================

// * Has to run first so it doesn't remove splitText's divs
cleanTextExport();

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
