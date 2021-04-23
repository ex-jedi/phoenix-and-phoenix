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
const imageWipeElement = document.querySelectorAll('.image-wipe-animation');

// ********** Wipe and Swap Nine **********

// * Element Variables
const fadeAndSwapNineElement = document.querySelectorAll('.fade-and-swap-nine');
// const imageSwapImages = gsap.utils.toArray('.image-wipe-animation img');
gsap.set(fadeAndSwapNineElement, { clipPath: 'inset(0% 100% 0% 0%)' });

// * Image swapping Function

function fadeAndSwapNineFunction(elem, swapperImages) {
  const faderSwapper = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
  });

  const delay = '+=0.4';

  faderSwapper
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' })
    .to(swapperImages[0], { autoAlpha: 0 }, '+=1')
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 })
    .to(swapperImages[2], { autoAlpha: 0 }, delay)
    .to(swapperImages[3], { autoAlpha: 1 })
    .to(swapperImages[3], { autoAlpha: 0 }, delay)
    .to(swapperImages[4], { autoAlpha: 1 })
    .to(swapperImages[4], { autoAlpha: 0 }, delay)
    .to(swapperImages[5], { autoAlpha: 1 })
    .to(swapperImages[5], { autoAlpha: 0 }, delay)
    .to(swapperImages[6], { autoAlpha: 1 })
    .to(swapperImages[6], { autoAlpha: 0 }, delay)
    .to(swapperImages[7], { autoAlpha: 1 })
    .to(swapperImages[7], { autoAlpha: 0 }, delay)
    .to(swapperImages[8], { autoAlpha: 1 });

  return faderSwapper;
}

fadeAndSwapNineElement.forEach((images) => {
  const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
  ScrollTrigger.create({
    trigger: images,
    start: 'top center',
    id: 'Header Image',
    markers: true,
    once: true,
    onEnter: () => fadeAndSwapNineFunction(images, gsapImages).play(),
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
