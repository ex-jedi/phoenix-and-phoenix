// *==============================================================================
// ** Imports  **
// *==============================================================================

import { animatedMainLogo } from './animations';
import { tabButtons, tabClickHandler, addTabsListeners, consoleGreeting } from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Animated Main Logo **********

animatedMainLogo();

// *=========================================
// ** Lib  **
// *=========================================

// ********** Tabs **********

// * Tabs Listeners
addTabsListeners();

// ********** Console Greeting **********
consoleGreeting();
