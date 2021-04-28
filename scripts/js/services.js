// *==============================================================================
// ** Imports  **
// *==============================================================================

import { animatedMainLogo } from './animations';
import { tabButtons, tabClickHandler } from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();

// *=========================================
// ** On Page JS  **
// *=========================================

// ********** Tabs **********

// * Tabs Handler
tabButtons.forEach((button) => button.addEventListener('click', tabClickHandler));
