// *==============================================================================
// ** Imports  **
// *==============================================================================

import { addMenuListener, swipeTextAnimation } from './animations';
import { consoleGreeting, flickityInit } from './lib';

// *=========================================
// ** GSAP  **
// *=========================================
// ********** Menu Animation **********
addMenuListener();

// ********** Swipe Text Animation **********
swipeTextAnimation();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Console Greeting **********
consoleGreeting();

// ********** Flickity Init **********

flickityInit();
