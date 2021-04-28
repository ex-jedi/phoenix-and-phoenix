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

const split = new SplitText(splitTextHeadings, { type: 'words' });

const splitWords = split.words;

const evenSplit = splitWords.filter((div, index) => index % 2 === 0);
const oddSplit = splitWords.filter((div, index) => index % 2 !== 0);

function splitBeGone() {
  split.revert();
}

const headingAnimationTL = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: 'power2.inOut',
    stagger: { each: 0.1, from: 'random' },
  },
  onComplete: splitBeGone,
});

// gsap.set(evenSplit, { y: -20 });
// gsap.set(oddSplit, { y: 20 });

headingAnimationTL
  .addLabel('start', 0.5)
  .fromTo(
    evenSplit,
    { opacity: 0, y: -20 },
    {
      opacity: 1,
      y: 0,
    },
    'start'
  )
  .fromTo(
    oddSplit,
    { opacity: 0, y: +20 },
    {
      opacity: 1,
      y: 0,
    },
    'start'
  );

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
