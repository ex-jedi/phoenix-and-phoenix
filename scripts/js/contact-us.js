// *==============================================================================
// ** Imports  **
// *==============================================================================

import { animatedMainLogo, splitTextHeadingsFunction, addMenuListener } from './animations';

import { cookieWarning, cleanText } from './utils';

// *=========================================
// ** Utils  **
// *=========================================

// * Has to run first so it doesn't remove splitText's divs
cleanText('.split-text-heading-animation');

cookieWarning();

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();
splitTextHeadingsFunction();

// ********** Menu Animation **********
addMenuListener();
