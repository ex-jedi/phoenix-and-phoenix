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
  homepageHeaderImageAnimation,
  fadeAndSwapThreeExport,
  imageSwipeInExportFunction,
  splitTextHeadingsFunction,
} from './animations';

// TODO: Temp For Building. Remove 👇🏾
// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// *=========================================
// ** Circular Element Animation  **
// *=========================================

// Get elements to animate
const circleToAnimate = gsap.utils.toArray(document.querySelectorAll('.circle-animation'));
console.log(circleToAnimate);

function circleAnimationfunction() {
  gsap.set(circleToAnimate, { rotate: -20 });
  ScrollTrigger.batch(circleToAnimate, {
    start: 'top 75%',
    once: true,
    id: 'Circles',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, rotate: 0, duration: 0.75 }),
  });
}

circleAnimationfunction();
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

// * Split Text Animation For Headings
splitTextHeadingsFunction();
