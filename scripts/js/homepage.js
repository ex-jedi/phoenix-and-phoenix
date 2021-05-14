// TODO: Temp for speedy animation building 👇🏾 Remove
// !==============================================================================
// ! Temp Imports  **
// !==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

// *==============================================================================
// ** Imports  **
// *==============================================================================
import {
  animatedMainLogo,
  fadeAndSwapNineFunctionExport,
  fadeAndSwapThreeExport,
  imageSwipeInExportFunction,
  splitTextHeadingsFunction,
  circleAnimationfunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
  addMenuListener,
} from './animations';

import { consoleGreeting } from './lib';

// TODO: Temp For Building. Remove 👇🏾
// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

bodySplitTextAnimation();

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

// *=========================================
// ** GSAP  **
// *=========================================

// * Circle Animation
circleAnimationfunction();

// * Animated Main Logo
animatedMainLogo();

// * Header Image Animation
fadeAndSwapNineFunctionExport();

// * Fade and Swap Three Animation
fadeAndSwapThreeExport();

// * Image Swipe In
imageSwipeInExportFunction();

// * Split Text Animation For Headings
splitTextHeadingsFunction();

// * Scroll Trigger Refresh
scrollTriggerRefresh(2000);

// *=========================================
// ** Lib  **
// *=========================================

// ********** Console Greeting **********

consoleGreeting();

// !==============================================================================
// FIXME: Here for responsive menu styling
// !==============================================================================

addMenuListener();
