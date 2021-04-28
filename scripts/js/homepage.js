// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp for speedy animation building 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import {
  animatedMainLogo,
  homepageHeaderImageAnimation,
  fadeAndSwapThreeExport,
  imageSwipeInExportFunction,
} from './animations';

// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

console.log('This is the homepage!');

const splitTextHeadings = document.querySelector('.split-text-heading-animation');
console.log(splitTextHeadings);

const split = new SplitText(splitTextHeadings, { type: 'words' });

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
