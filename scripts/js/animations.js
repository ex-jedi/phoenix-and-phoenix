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

// * Config
gsap.config({
  nullTargetWarn: false,
});

//* Split text revert function to remove split text elements after timeline has run
function splitBeGone(element) {
  element.revert();
}

// * ScrollTrigger Refresh
function scrollTriggerRefresh(time = 2000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log(`✨ ScrollTrigger refresh created after ${time}ms ✨`);
      scrollTriggerRefreshTarget.forEach((triggerElem) => {
        ScrollTrigger.create({
          trigger: triggerElem,
          start: 'top bottom',
          // end: 'bottom bottom',
          once: true,
          id: 'ScrollTrigger Refresh',
          // markers: true,
          onEnter: () => {
            ScrollTrigger.refresh();
            console.log('⚡ ScrollTrigger Refresh Triggered ⚡');
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

// * Get nav elements

function getNavElements() {
  const mainNav = document.querySelector('.main-nav');
  const mainNavLinks = gsap.utils.toArray(document.querySelectorAll('.main-nav-link'));
  const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
  const mainNavTrigger = document.querySelector('.main-nav-trigger');

  return { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger };
}

// * Menu pointer events and text
// Restore pointerevents
function navTextPointerEvents() {
  const { mainNav, mainNavLinks, mainNavTrigger } = getNavElements();
  mainNavTrigger.style.pointerEvents = 'auto';
  if (mainNav.dataset.state === 'open') {
    mainNavTrigger.textContent = 'CLOSE MENU';
    mainNavTrigger.style.padding = '0';
  } else {
    mainNavTrigger.textContent = 'MENU';
    mainNavTrigger.style.padding = '0 5rem';
    // Stripping out styles injected by GreenSock to show normal menu if screen is resized
    mainNav.removeAttribute('style');
    mainNavLinks.forEach((link) => link.removeAttribute('style'));
  }
}

// * Add and remove Transforms

function removeTransformProperty() {
  const header = document.querySelector('.header');
  header.style.transform = 'none';
  console.log('Take');
}

function addTransformProperty() {
  const header = document.querySelector('.header');
  header.style.transform = 'translate3d(0,0,0)';
  console.log('add');
}

// * Open Menu

function menuOpenAnimation() {
  const { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger } = getNavElements();
  const openMenuTl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power3.out', duration: 1, delay: 0 },
  });

  return openMenuTl
    .to(mainNav, { y: '0%' })
    .addLabel('colorChange', '-=0.3')
    .to(mainNavLinks, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, 'colorChange')
    .to(mainNavTriggerWrapper, { backgroundColor: '#f4f1f0' }, 'colorChange')
    .to(mainNavTrigger, { color: '#6c9184', onComplete: navTextPointerEvents }, 'colorChange');
}

// * Close menu

function closeMenuAnimation() {
  const { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger } = getNavElements();
  const closeMenuTl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power3.in', duration: 1, delay: 0 },
  });

  return closeMenuTl
    .to(mainNavLinks, { y: 40, opacity: 0, stagger: -0.2, duration: 0.5 })
    .addLabel('colorChange', '-=0.5')
    .to(mainNavTriggerWrapper, { backgroundColor: '#6c9184' }, 'colorChange')
    .to(mainNavTrigger, { color: '#f4f1f0' }, 'colorChange')
    .to(mainNav, { y: '120%', onComplete: navTextPointerEvents }, 'colorChange');
}

// * Menu Opener and Closer Handler

function menuOpenerHandler() {
  const { mainNav, mainNavTrigger } = getNavElements();
  if (mainNav.dataset.state === 'closed') {
    console.log('⚡ Opening ⚡');
    mainNavTrigger.style.pointerEvents = 'none';
    removeTransformProperty();
    menuOpenAnimation().restart();
    mainNav.dataset.state = 'open';
  } else {
    console.log('⚡ Closing ⚡');
    addTransformProperty();
    mainNavTrigger.style.pointerEvents = 'none';
    closeMenuAnimation().restart();
    mainNav.dataset.state = 'closed';
  }
}

// * Menu Event Listener

function addMenuListener() {
  const { mainNavTriggerWrapper } = getNavElements();
  mainNavTriggerWrapper.addEventListener('click', menuOpenerHandler);
}

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
// ** Swipe In Image  **
// *=========================================

function imageSwipeInExportFunction() {
  gsap.set('.swipe-in-image', { clipPath: 'inset(0% 100% 0% 0%)' });

  ScrollTrigger.batch('.swipe-in-image', {
    start: 'top 60%',
    end: 'bottom bottom',
    id: 'Swipe In Image',
    // markers: true,
    once: true,
    onEnter: (batch) => gsap.to(batch, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }),
  });
}

// *=========================================
// ** Simple Fade In  **
// *=========================================
function simpleFadeIn() {
  gsap.set('.simple-fade-in', { opacity: 0 });

  ScrollTrigger.batch('.simple-fade-in', {
    start: 'top 75%',
    end: 'bottom bottom',
    id: 'Fade In',
    // markers: true,
    once: true,
    onEnter: (batch) => gsap.to(batch, { duration: 0.75, ease: 'circ.inOut', opacity: 1 }),
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
    if (wordsLength < 5) {
      timingDuration = 0.6;
      timingDelay = 0.3;
    } else {
      timingDuration = 0.3;
      timingDelay = 0;
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
      start: 'top 70%',
      end: 'bottom bottom',
      id: 'Body Split Text',
      // markers: true,
      onEnter: () =>
        gsap.to(splitLines, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
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
    start: 'top 70%',
    end: 'bottom bottom',
    once: true,
    id: 'Circles',
    // markers: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, rotate: 0, duration: 0.75, ease: 'circ.inOut' }),
  });
}

// *=========================================
// ** Nine Image Wipe and Swap Nine **
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
      start: 'top 60%',
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

function getFadeSwapThreeImages() {
  const fadeAndSwapThreeElement = gsap.utils.toArray(document.querySelectorAll('.fade-and-swap-three'));
  return fadeAndSwapThreeElement;
}

// * Image swapping Function

function fadeAndSwapThreeFunction(elem, swapperImages) {
  const faderSwapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
  });
  const delay = '+=0.4';

  faderSwapperThree
    .fromTo(
      elem,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' },
      '+=0.2'
    )
    .to(swapperImages[0], { autoAlpha: 0 })
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 })
    .to(swapperImages[2], { autoAlpha: 0 }, delay)
    .to(swapperImages[0], { autoAlpha: 1 });

  return faderSwapperThree;
}

function fadeAndSwapThreeExport() {
  const fadeAndSwapThreeElement = getFadeSwapThreeImages();
  fadeAndSwapThreeElement.forEach((images) => {
    gsap.set(images, { clipPath: 'inset(0% 100% 0% 0%)' });
    const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
    ScrollTrigger.create({
      trigger: images,
      start: 'top 60%',
      end: 'bottom bottom',
      id: 'Three F & S Image',
      // markers: true,
      once: true,
      onEnter: () => fadeAndSwapThreeFunction(images, gsapImages).play(),
    });
  });
}

// *=========================================
// ** SVG Scrub Animation  **
// *=========================================

// Initialise animation on load.
function svgScrubAnimation() {
  const svgToAnimate = gsap.utils.toArray(document.querySelectorAll('[data-name="Text"]'));

  svgToAnimate.forEach((svg) => {
    svg.style.transformOrigin = 'center';
    gsap.to(svg, {
      rotation: 360,
      transformOrigin: 'center',
      ease: 'none',
      scrollTrigger: {
        trigger: svg,
        id: 'SVG Scrubber',
        // markers: true,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });
}

function tabSvgAnimation(targetSvg) {
  gsap.to(targetSvg, {
    rotation: 360,
    transformOrigin: 'center',
    ease: 'none',
    scrollTrigger: {
      trigger: targetSvg,
      id: 'Illustration SVG Scrubber',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
    },
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
  simpleFadeIn,
  tabSvgAnimation,
  svgScrubAnimation,
  addMenuListener,
};
