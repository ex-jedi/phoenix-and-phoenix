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
gsap.set(imageWipeElement, { clipPath: 'inset(0% 100% 0% 0%)' });

function swapTLFunc(elem, swapperImages) {
  const faderSwapper = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
  });
  faderSwapper
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' })
    .to(swapperImages[0], { autoAlpha: 0 }, '+=0.6')
    .to(swapperImages[1], { autoAlpha: 1 });
  return faderSwapper;
}

imageWipeElement.forEach((images) => {
  const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
  ScrollTrigger.create({
    trigger: images,
    start: 'top center',
    markers: true,
    onEnter: () => swapTLFunc(images, gsapImages).play(),
  });
});

// gsap.set(imageWipeElement, { clipPath: 'inset(0 100% 0 0)' });
// function myFunc() {
//   console.log('Done!');
// }

// const imageWipeSwap = gsap.timeline({
//   scrollTrigger: {
//     trigger: imageWipeElement,
//     start: 'top center',
//     markers: true,
//   },
//   defaults: { ease: 'none', duration: 0, delay: 0 },
//   onComplete: myFunc,
// });

// imageWipeSwap
//   .to(imageWipeElement, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' })
//   .to(imageSwapImages[0], { autoAlpha: 0 }, '+=0.6')
//   .to(imageSwapImages[1], { autoAlpha: 1 })
//   .to(imageSwapImages[1], { autoAlpha: 0 }, '+=0.6')
//   .to(imageSwapImages[2], { autoAlpha: 1 })
//   .to(imageSwapImages[2], { autoAlpha: 0 }, '+=0.6')
//   .to(imageSwapImages[3], { autoAlpha: 1 });

/*
  Take each image wrapper
  Get images to animate for each wrapper
  Loop over each image and animate
  */

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
