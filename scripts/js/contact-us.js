// *==============================================================================
// ** Imports  **
// *==============================================================================

import { animatedMainLogo, splitTextHeadingsFunction, addMenuListener } from './animations';

import { cookieWarning, cleanTextExport } from './utils';

// *=========================================
// ** Utils  **
// *=========================================

// * Has to run first so it doesn't remove splitText's divs
cleanTextExport();

cookieWarning();

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();
splitTextHeadingsFunction();

// ********** Menu Animation **********
addMenuListener();
