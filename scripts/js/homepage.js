// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp for speedy animation building 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import {
  animatedMainLogo,
  homepageHeaderImageAnimation,
  fadeAndSwapThreeExport,
  imageSwipeInExportFunction,
} from './animations';

// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

const splitTextHeadings = gsap.utils.toArray(document.querySelectorAll('.split-text-heading-animation'));
console.log(splitTextHeadings);

console.log('This is the homepage!');

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

// *=========================================
// ** GSAP  **
// *=========================================

// * Animated Main Logo
animatedMainLogo();

// * Header Image Animation
homepageHeaderImageAnimation();

// * Fade and Swap Three Animation
fadeAndSwapThreeExport();

// * Image Swipe In
imageSwipeInExportFunction();
