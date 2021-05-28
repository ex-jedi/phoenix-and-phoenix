// *==============================================================================
// ** Imports  **
// *==============================================================================

import { animatedMainLogo, splitTextHeadingsFunction, addMenuListener } from './animations';
import { cookieWarning } from './utils';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();
splitTextHeadingsFunction();

// ********** Menu Animation **********
addMenuListener();

// *=========================================
// ** Utils  **
// *=========================================

cookieWarning();
