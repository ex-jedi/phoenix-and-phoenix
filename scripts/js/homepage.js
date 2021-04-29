// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp for speedy animation building 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import { toArray } from 'gsap/gsap-core';
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

const splitTextHeadings = toArray(document.querySelectorAll('.split-text-heading-animation'));

// Split text revert function
function splitBeGone(element) {
  element.revert();
}

function splitTextHeadingsFunction() {
  splitTextHeadings.forEach((headings) => {
    // Split headings into words
    const split = new SplitText(headings, { type: 'words' });

    // Create array or words
    const splitWords = split.words;

    // Timing idea
    const splitDuration = splitWords.length / 20;
    console.log('splitDuration', splitDuration);

    // Filter for odd index items in words array
    const evenSplit = splitWords.filter((div, index) => index % 2 === 0);

    // Filter for even index items in words array
    const oddSplit = splitWords.filter((div, index) => index % 2 !== 0);

    // Set heading starting properties
    gsap.set(evenSplit, { opacity: 0, y: -20 });
    gsap.set(oddSplit, { opacity: 0, y: +20 });

    // Create GSAP Timeline
    const headingAnimationTL = gsap.timeline({
      scrollTrigger: {
        trigger: headings,
        start: 'top 70%',
        markers: true,
        id: 'Split Text Headings',
      },
      defaults: {
        duration: 0.3,
        ease: 'power2.inOut',
        stagger: { each: 0.09, from: 'random' },
      },
      onComplete: () => splitBeGone(split),
    });

    // Populate timeline
    headingAnimationTL
      .addLabel('start')
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
  });
}

splitTextHeadingsFunction();

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
