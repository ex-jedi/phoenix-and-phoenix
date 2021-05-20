// *==============================================================================
// ** Imports  **
// *==============================================================================
// !==============================================================================
// FIXME: Temp for quick building
// !==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

import { addMenuListener } from './animations';

// *=========================================
// ** GSAP  **
// *=========================================
// ********** Menu Animation **********
addMenuListener();

// ********** Swap Two Images **********

// *=========================================
// ** Swap Two **
// *=========================================

// * Image swapping Function

function swapTwoImagesFunction() {
  const swapTwoElement = document.querySelector('.swap-two');
  const gsapImages = gsap.utils.toArray(swapTwoElement.querySelectorAll('img'));
  // gsap.set(gsapImages[1], { autoAlpha: 0 });
  const swapTwoTl = gsap.timeline({
    repeat: -1,
    paused: false,
    defaults: { ease: 'none', duration: 0 },
  });

  swapTwoTl
    .fromTo('#swap-one', { autoAlpha: 1 }, { autoAlpha: 0 }, '+=1')
    .to('#swap-two', { autoAlpha: 1, delay: 1 })
    .to(null, { duration: 1 });
}

swapTwoImagesFunction();
