// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp for speedy animation building 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { animatedMainLogo, homepageHeaderImageAnimation } from './animations';

// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

console.log('This is the homepage!');

// *=========================================
// ** Three image Wipe and Swap  **
// *=========================================

// * Element Variables
const fadeAndSwapThreeElement = document.querySelectorAll('.fade-and-swap-three');
// const imageSwapImages = gsap.utils.toArray('.image-wipe-animation img');
gsap.set(fadeAndSwapThreeElement, { clipPath: 'inset(0% 100% 0% 0%)' });

// * Image swapping Function

function fadeAndSwapThreeFunction(elem, swapperImages) {
  const faderSwapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
  });

  const delay = '+=0.4';

  faderSwapperThree
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' })
    .to(swapperImages[0], { autoAlpha: 0 }, '+=1')
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 });

  return faderSwapperThree;
}

fadeAndSwapThreeElement.forEach((images) => {
  const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
  ScrollTrigger.create({
    trigger: images,
    start: 'top center',
    id: 'Three F & S Image',
    markers: true,
    once: true,
    onEnter: () => fadeAndSwapThreeFunction(images, gsapImages).play(),
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

// * Header Image Animation

homepageHeaderImageAnimation();
