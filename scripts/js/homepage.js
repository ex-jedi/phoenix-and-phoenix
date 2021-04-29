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
  circleAnimationfunction,
} from './animations';

// TODO: Temp For Building. Remove 👇🏾
// !==============================================================================
// ! Temp Things For Building **
// !==============================================================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

// *=========================================
// ** Body Splittext Animation  **
// *=========================================

// Don't export
function splitBeGone(element) {
  element.revert();
}

const splitTextBodyElems = gsap.utils.toArray(document.querySelectorAll('.split-text-body-animation'));

function bodySplitTextAnimation() {
  splitTextBodyElems.forEach((body) => {
    // Split headings into words
    const split = new SplitText(body, { type: 'lines' });

    // Create array of words
    const splitLines = split.lines;
    console.log(splitLines);

    // Set heading starting properties
    gsap.set(splitLines, { opacity: 0, y: -20 });

    ScrollTrigger.create({
      trigger: body,
      start: 'top 75%',
      id: 'Body Split Text',
      markers: true,
      onEnter: () => gsap.to(splitLines, { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'circ.inOut' }),
    });
  });
}

bodySplitTextAnimation();

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

// *=========================================
// ** GSAP  **
// *=========================================

// * Circle Animation
circleAnimationfunction();

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
