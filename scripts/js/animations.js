// *=========================================
// ** Imports  **
// *=========================================

// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

// *=========================================
// ** GSAP  **
// *=========================================
// TODO: Remove All markers

// ********** Register Plugins **********
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

// ********** GSAP Utility Functions **********

//* Split text revert function to remove split text elements after timeline has run
function splitBeGone(element) {
  element.revert();
}

// * ScrollTrigger Refresh
function scrollTriggerRefresh(time = 2000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log(`✨ScrollTrigger refresh created after ${time}ms✨`);
      scrollTriggerRefreshTarget.forEach((triggerElem) => {
        ScrollTrigger.create({
          trigger: triggerElem,
          start: 'top Bottom',
          end: 'bottom bottom',
          once: true,
          id: 'ScrollTrigger Refresh',
          // markers: true,
          onEnter: () => {
            ScrollTrigger.refresh();
            console.log('⚡ScrollTrigger Refresh Triggered⚡');
          },
        });
      });
    }, time);
  });
}

// *==============================================================================
// ** General Animations  **
// *==============================================================================

// *=========================================
// ** Nav  **
// *=========================================

// const openMenuTl = gsap.timeline({
//   paused: true,
//   defaults: { ease: 'power3.out', duration: 1, delay: 0 },
// });

// openMenuTl
//   .to(mainNav, { y: '0%' })
//   .addLabel('colorChange', '-=0.3')
//   .to(navLink, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, 'colorChange')
//   .to(mainNavTriggerWrapper, { backgroundColor: '#f4f1f0' }, 'colorChange')
//   .to(mainNavTrigger, { color: '#6c9184', onComplete: pointerEventsRestore }, 'colorChange');

// // * Close menu

// const closeMenuTl = gsap.timeline({
//   paused: true,
//   defaults: { ease: 'power3.in', duration: 1, delay: 0 },
// });

// closeMenuTl
//   .to(navLink, { y: 40, opacity: 0, stagger: -0.2, duration: 0.5 })
//   .addLabel('colorChange', '-=0.5')
//   .to(mainNavTriggerWrapper, { backgroundColor: '#6c9184' }, 'colorChange')
//   .to(mainNavTrigger, { color: '#f4f1f0' }, 'colorChange')
//   .to(mainNav, { y: '120%', onComplete: pointerEventsRestore }, 'colorChange');

// *=========================================
// ** Main Logo  **
// *=========================================

const kateImages = gsap.utils.toArray('.kate-images-wrapper img');
const markImages = gsap.utils.toArray('.mark-images-wrapper img');

const animatedMainLogoTimeline = gsap.timeline({
  // TODO: Limit repeats?
  repeat: -1,
  repeatDelay: 1,
  defaults: { ease: 'none', duration: 0 },
});

animatedMainLogoTimeline
  .to(markImages[0], { opacity: 0 }, '+=1')
  .to(markImages[1], { opacity: 1 })
  .to(kateImages[0], { opacity: 0 }, '+=1')
  .to(kateImages[1], { opacity: 1 })
  .to(kateImages[1], { opacity: 0 }, '+=1')
  .to(kateImages[2], { opacity: 1 })
  .to(markImages[1], { opacity: 0 }, '+=1')
  .to(markImages[2], { opacity: 1 })
  .to(kateImages[2], { opacity: 0 }, '+=1')
  .to(kateImages[0], { opacity: 1 });

function animatedMainLogo() {
  animatedMainLogoTimeline.play();
}

// *=========================================
// ** Fade In Image  **
// *=========================================

function imageSwipeInExportFunction() {
  gsap.set('.swipe-in-image', { clipPath: 'inset(0% 100% 0% 0%)' });

  ScrollTrigger.batch('.swipe-in-image', {
    start: 'top 75%',
    end: 'bottom bottom',
    id: 'Swipe In Image',
    // markers: true,
    once: true,
    onEnter: (batch) => gsap.to(batch, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }),
  });
}

// *=========================================
// ** Heading Split Text  **
// *=========================================

const splitTextHeadings = gsap.utils.toArray(document.querySelectorAll('.split-text-heading-animation'));

// Timeline function to be popped into scroll trigger creating function
function splitTextTimelineFunction(splitElems, evenSplitElems, oddSplitElems, durationTime, delayTime) {
  // Create GSAP Timeline
  const headingAnimationTL = gsap.timeline({
    defaults: {
      duration: durationTime,
      ease: 'power2.inOut',
      stagger: { each: 0.05, from: 'random', ease: 'circ.inOut' },
    },
    onComplete: () => splitBeGone(splitElems),
  });

  // Populate timeline
  headingAnimationTL
    .addLabel('start', delayTime)
    .fromTo(
      evenSplitElems,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
      },
      'start'
    )
    .fromTo(
      oddSplitElems,
      { opacity: 0, y: +20 },
      {
        opacity: 1,
        y: 0,
      },
      'start'
    );

  return headingAnimationTL;
}

function splitTextHeadingsFunction() {
  splitTextHeadings.forEach((headings) => {
    // Split headings into words
    const split = new SplitText(headings, { type: 'words' });

    // Create array of words
    const splitWords = split.words;

    const wordsLength = splitWords.length;
    let timingDuration;
    let timingDelay;
    if (wordsLength < 4) {
      timingDuration = 0.6;
      timingDelay = 0.3;
    } else {
      timingDuration = 0.3;
    }

    // Filter for odd index items in words array
    const evenSplit = splitWords.filter((div, index) => index % 2 === 0);

    // Filter for even index items in words array
    const oddSplit = splitWords.filter((div, index) => index % 2 !== 0);

    // Set heading starting properties
    gsap.set(evenSplit, { opacity: 0, y: -20 });
    gsap.set(oddSplit, { opacity: 0, y: +20 });

    ScrollTrigger.create({
      trigger: headings,
      start: 'top 75%',
      end: 'bottom bottom',
      id: 'Heading Split Text',
      // markers: true,
      onEnter: () => splitTextTimelineFunction(split, evenSplit, oddSplit, timingDuration, timingDelay).play(),
    });
  });
}

// *=========================================
// ** Body Split Text Animation  **
// *=========================================

const splitTextBodyElems = gsap.utils.toArray(document.querySelectorAll('.split-text-body-animation'));

function bodySplitTextAnimation() {
  splitTextBodyElems.forEach((body) => {
    // Split headings into words
    const split = new SplitText(body, { type: 'lines' });

    // Create array of lines
    const splitLines = split.lines;

    // Set lines starting properties
    gsap.set(splitLines, { opacity: 0, y: -20 });

    ScrollTrigger.create({
      trigger: body,
      start: 'top 75%',
      end: 'bottom bottom',
      id: 'Body Split Text',
      // markers: true,
      onEnter: () =>
        gsap.to(splitLines, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          onComplete: () => splitBeGone(split),
        }),
    });
  });
}

// *=========================================
// ** Circular Element Animation  **
// *=========================================

// Get elements to animate
const circleToAnimate = gsap.utils.toArray(document.querySelectorAll('.circle-animation'));

// Circle animation function
function circleAnimationfunction() {
  gsap.set(circleToAnimate, { rotate: -45, opacity: 0 });
  ScrollTrigger.batch(circleToAnimate, {
    start: 'top 75%',
    end: 'bottom bottom',
    once: true,
    id: 'Circles',
    // markers: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, rotate: 0, duration: 0.75, ease: 'circ.inOut' }),
  });
}

// *=========================================
// ** Three image Wipe and Swap Nine **
// *=========================================

// * Element Variables
const fadeAndSwapNineElement = document.querySelectorAll('.fade-and-swap-nine');
gsap.set(fadeAndSwapNineElement, { clipPath: 'inset(0% 100% 0% 0%)' });

// * Image swapping Function

function fadeAndSwapNineFunction(elem, swapperImages) {
  const faderSwapper = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
  });

  const delay = '+=0.4';

  faderSwapper
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }, '+=0.2')
    .to(swapperImages[0], { autoAlpha: 0 })
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
    .to(swapperImages[8], { autoAlpha: 1 })
    .to(swapperImages[8], { autoAlpha: 0 }, delay)
    .to(swapperImages[0], { autoAlpha: 1 });

  return faderSwapper;
}

function fadeAndSwapNineFunctionExport() {
  fadeAndSwapNineElement.forEach((images) => {
    const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
    ScrollTrigger.create({
      trigger: images,
      start: 'top 75%',
      end: 'bottom bottom',
      id: 'Fade & SWap Nine',
      // markers: true,
      once: true,
      onEnter: () => fadeAndSwapNineFunction(images, gsapImages).play(),
    });
  });
}

// *=========================================
// ** Three image Wipe and Swap Three **
// *=========================================

// * Element Variables
const fadeAndSwapThreeElement = document.querySelectorAll('.fade-and-swap-three');
gsap.set(fadeAndSwapThreeElement, { clipPath: 'inset(0% 100% 0% 0%)' });

// * Image swapping Function

function fadeAndSwapThreeFunction(elem, swapperImages) {
  const faderSwapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
  });

  const delay = '+=0.4';

  faderSwapperThree
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }, '+=0.2')
    .to(swapperImages[0], { autoAlpha: 0 })
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 })
    .to(swapperImages[2], { autoAlpha: 0 }, delay)
    .to(swapperImages[0], { autoAlpha: 1 });

  return faderSwapperThree;
}

function fadeAndSwapThreeExport() {
  fadeAndSwapThreeElement.forEach((images) => {
    const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
    ScrollTrigger.create({
      trigger: images,
      start: 'top 75%',
      end: 'bottom bottom',
      id: 'Three F & S Image',
      // markers: true,
      once: true,
      onEnter: () => fadeAndSwapThreeFunction(images, gsapImages).play(),
    });
  });
}

// *==============================================================================
// ** Exports  **
// *==============================================================================

export {
  animatedMainLogo,
  fadeAndSwapNineFunctionExport,
  fadeAndSwapThreeExport,
  imageSwipeInExportFunction,
  splitTextHeadingsFunction,
  circleAnimationfunction,
  bodySplitTextAnimation,
  scrollTriggerRefresh,
};
