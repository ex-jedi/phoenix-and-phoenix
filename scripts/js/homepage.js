// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp for speedy animation building 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { animatedMainLogo } from './animations';

// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

console.log('This is the homepage!');

// *=========================================
// ** Header Image  **
// *=========================================

// ********** Initial Wipe **********

/*
Image wipes
Images swap


*/

// * Element Variables
const imageWipeElement = document.querySelectorAll('.image-wipe-animation');
const imageSwapImages = gsap.utils.toArray('.image-wipe-animation img');
console.log(imageSwapImages);

gsap.set(imageWipeElement, { clipPath: 'inset(0 100% 0 0)' });

const imageWipeSwap = gsap.timeline({
  scrollTrigger: {
    trigger: imageWipeElement,
    start: 'top center',
    markers: true,
  },
  defaults: { ease: 'none', duration: 0, delay: 0 },
});

imageWipeSwap
  .to(imageWipeElement, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' })
  .to(imageSwapImages[0], { autoAlpha: 0 }, '+=1')
  .to(imageSwapImages[1], { autoAlpha: 1 })
  .to(imageSwapImages[1], { autoAlpha: 0 }, '+=1')
  .to(imageSwapImages[2], { autoAlpha: 1 });

// ScrollTrigger.batch(imageWipeElement, {
//   markers: true,
//   start: 'top center',
//   onEnter: (batch) => gsap.to(batch, { duration: 0.5, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }),
// });

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
