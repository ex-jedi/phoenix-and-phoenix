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
const headerImageWrapper = document.querySelector('.homepage-header-image-wrapper');
gsap.set(headerImageWrapper, { clipPath: 'inset(0 100% 0 0)' });

function imageWipeFunction() {
  const imageWipeTl = gsap.timeline();
  imageWipeTl.fromTo(headerImageWrapper, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0% 0% 0% 0%)' });

  return imageWipeTl;
}

ScrollTrigger.batch(headerImageWrapper, {
  markers: true,
  start: 'top center',
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      { clipPath: 'inset(0 100% 0 0)' },
      { duration: 0.5, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }
    ),
  // you can also define things like start, end, etc.
});

// gsap.fromTo(
//   headerImageWrapper,
//   { clipPath: 'inset(0 100% 0 0)' },
//   {
//     duration: 0.5,
//     ease: 'circ.inOut',
//     clipPath: 'inset(0% 0% 0% 0%)',
//     scrollTrigger: {
//       trigger: headerImageWrapper,
//       start: 'top center',
//       markers: true,
//     },
//   }
// );

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
