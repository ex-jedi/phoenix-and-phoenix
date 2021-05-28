// *==============================================================================
// ** Imports  **
// *==============================================================================

import { addMenuListener, swipeTextAnimation } from './animations';
import { consoleGreeting, flickityInit } from './lib';
import { cookieWarning } from './utils';

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

// *=========================================
// ** Utils  **
// *=========================================

cookieWarning();
