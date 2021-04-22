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
// * Element Variables
const imageWipeElement = document.querySelectorAll('.image-wipe-animation');
const imageSwapImages = gsap.utils.toArray('.image-wipe-animation img');

gsap.set(imageWipeElement, { clipPath: 'inset(0 100% 0 0)' });

// ScrollTrigger.batch(imageWipeElement, {
//   markers: true,
//   start: 'top center',
//   onEnter: (batch) => gsap.to(batch, { duration: 0.5, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }),
// });

imageWipeElement.forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    markers: true,
    start: 'top center',
    onEnter: () => gsap.to(elem, { duration: 0.5, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }),
  });
});

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
