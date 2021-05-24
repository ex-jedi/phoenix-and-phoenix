// *=========================================
// ** Imports  **
// *=========================================

// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// *=========================================
// ** lib  **
// *=========================================
import { getTabsElements } from './lib';

// *=========================================
// ** GSAP  **
// *=========================================

// ********** Register Plugins **********
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, SplitText);

// ********** GSAP Utility Functions **********

// * Config
gsap.config({
  nullTargetWarn: false,
});

//* Split text revert function to remove split text elements after timeline has run
function splitBeGone(element) {
  element.revert();
}

// * ScrollTrigger Refresh Initial
function scrollTriggerRefresh(time = 1000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  window.addEventListener('load', () => {
    setTimeout(() => {
      // console.log(`✨ ScrollTrigger refresh created after ${time}ms ✨`);
      scrollTriggerRefreshTarget.forEach((triggerElem) => {
        ScrollTrigger.create({
          trigger: triggerElem,
          start: 'top bottom',
          once: true,
          id: 'ScrollTrigger Refresh',
          onEnter: () => {
            ScrollTrigger.refresh();
            // console.log('⚡ ScrollTrigger Refresh Triggered ⚡');
          },
        });
      });
    }, time);
  });
}

// * ScrollTrigger Refresh Tabs
function scrollTriggerRefreshTabs(time = 2000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-refresh-target');
  // console.log(`✨ ScrollTrigger Tabs refresh created after ${time}ms ✨`);
  scrollTriggerRefreshTarget.forEach((triggerElem) => {
    ScrollTrigger.create({
      trigger: triggerElem,
      start: 'top bottom',
      // end: 'bottom bottom',
      once: true,
      id: 'ScrollTrigger Refresh',
      onEnter: () => {
        ScrollTrigger.refresh();
        // console.log('⚡ ScrollTrigger Tabs Refresh Triggered ⚡');
      },
    });
  });
}

// * ScrollTrigger Refresh Tabs
function scrollTriggerRefreshSVG(time = 2000) {
  const scrollTriggerRefreshTarget = document.querySelectorAll('.scrolltrigger-svg-refresh-target');
  // console.log(`✨ ScrollTrigger SVG refresh created after ${time}ms ✨`);
  scrollTriggerRefreshTarget.forEach((triggerElem) => {
    ScrollTrigger.create({
      trigger: triggerElem,
      start: 'top bottom',
      // end: 'bottom bottom',
      once: true,
      id: 'ScrollTrigger Refresh',
      onEnter: () => {
        ScrollTrigger.refresh();
        // console.log('⚡ ScrollTrigger SVG Refresh Triggered ⚡');
      },
    });
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

// * Add and remove Transforms

function removeTransformProperty() {
  const header = document.querySelector('.header');
  header.style.transform = 'none';
}

function addTransformProperty() {
  const header = document.querySelector('.header');
  header.style.transform = 'translate3d(0,0,0)';
}

// * Menu pointer events and text
// Restore pointerevents
function navTextPointerEvents() {
  const { mainNav, mainNavLinks, mainNavTrigger } = getNavElements();
  mainNavTrigger.style.pointerEvents = 'auto';
  mainNav.style.pointerEvents = 'auto';
  // mainNavLinks.forEach((link) => (link.style.pointerEvents = 'auto'));

  if (mainNav.dataset.state === 'open') {
    mainNavTrigger.textContent = 'CLOSE MENU';
    // mainNavTrigger.style.padding = '0';
  } else {
    mainNavTrigger.textContent = 'MENU';
    // Stripping out styles injected by GreenSock to show normal menu if screen is resized
    mainNav.removeAttribute('style');
    mainNavLinks.forEach((link) => link.removeAttribute('style'));
    addTransformProperty();
  }
}

// * Open Menu

function menuOpenAnimation() {
  const { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger } = getNavElements();
  const openMenuTl = gsap.timeline({
    paused: true,
    onComplete: navTextPointerEvents,
    defaults: { ease: 'power3.out', duration: 0.75, delay: 0 },
  });

  return openMenuTl
    .to(mainNav, { opacity: 1, duration: 0, ease: 'none' })
    .to(mainNav, { y: '0%' })
    .addLabel('colorChange', '-=0.3')
    .to(mainNavLinks, { y: 0, opacity: 1, stagger: 0.1, duration: 0.25 }, 'colorChange')
    .to(mainNavTriggerWrapper, { backgroundColor: '#fdfcfa' }, 'colorChange+=0.75')
    .to(mainNavTrigger, { backgroundColor: '#fdfcfa', color: '#5bb072' }, 'colorChange+=0.75');
}

// * Close menu

function closeMenuAnimation() {
  const { mainNav, mainNavLinks, mainNavTriggerWrapper, mainNavTrigger } = getNavElements();
  const closeMenuTl = gsap.timeline({
    paused: true,
    onComplete: navTextPointerEvents,
    defaults: { ease: 'power3.in', duration: 0.75, delay: 0 },
  });

  return closeMenuTl
    .to(mainNavLinks, { y: 40, opacity: 0, stagger: -0.1, duration: 0.25 })
    .addLabel('colorChange', '-=0.3')
    .to(mainNavTriggerWrapper, { backgroundColor: '#5bb072' }, 'colorChange')
    .to(mainNavTrigger, { backgroundColor: '#5bb072', color: '#f4f1f0' }, 'colorChange')
    .to(mainNav, { y: '120%' }, 'colorChange');
}

// * Menu Opener and Closer Handler

function menuOpenerHandler() {
  const { mainNav, mainNavTrigger } = getNavElements();
  if (mainNav.dataset.state === 'closed') {
    mainNavTrigger.style.pointerEvents = 'none';
    removeTransformProperty();
    menuOpenAnimation().restart();
    mainNav.dataset.state = 'open';
  } else {
    mainNavTrigger.style.pointerEvents = 'none';
    closeMenuAnimation().restart();
    mainNav.dataset.state = 'closed';
  }
}

// * Menu Event Listener

function addMenuListener() {
  const { mainNavTrigger } = getNavElements();
  mainNavTrigger.addEventListener('click', menuOpenerHandler);
}

// *=========================================
// ** Main Logo  **
// *=========================================

const kateImages = gsap.utils.toArray('.kate-images-wrapper img');
const markImages = gsap.utils.toArray('.mark-images-wrapper img');

const animatedMainLogoTimeline = gsap.timeline({
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
    once: true,
    onEnter: (batch) => gsap.to(batch, { duration: 0.75, ease: 'circ.inOut', opacity: 1 }),
  });
}

// *=========================================
// ** Heading Split Text  **
// *=========================================

const splitTextHeadings = gsap.utils.toArray(document.querySelectorAll('.split-text-heading-animation'));

// Timeline function to be popped into scroll trigger creating function
function splitTextTimelineFunction(splitElems, evenSplitElems, oddSplitElems, durationTime, delayTime, stagger) {
  // Create GSAP Timeline
  const headingAnimationTL = gsap.timeline({
    defaults: {
      duration: durationTime,
      ease: 'power2.inOut',
      stagger: { each: stagger, from: 'random', ease: 'circ.inOut' },
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
    let timingDuration = 0.3;
    let timingDelay = 0;
    let stagger = 0.05;
    if (wordsLength > 50) {
      stagger = 0.01;
    } else if (wordsLength < 5) {
      timingDuration = 0.6;
      timingDelay = 0.3;
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
      onEnter: () => splitTextTimelineFunction(split, evenSplit, oddSplit, timingDuration, timingDelay, stagger).play(),
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
    onEnter: (batch) => gsap.to(batch, { opacity: 1, rotate: 0, duration: 0.75, ease: 'circ.inOut' }),
  });
}

// *=========================================
// ** Nine Image fade Swappers **
// *=========================================

// * Element Variables
const fadeAndSwapNineElement = document.querySelectorAll('.fade-and-swap-nine');

// *=========================================
// ** Swapper Nine  **
// *=========================================

function swapNineFunction(swapperImages) {
  const imageSwapper = gsap.timeline({
    paused: true,
    defaults: { duration: 0, ease: 'none' },
    repeat: -1,
  });

  const delay = '+=0.4';

  imageSwapper
    .to(swapperImages[0], { autoAlpha: 0 }, delay)
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

  return imageSwapper;
}

function nineSwapCallback(elem, images) {
  const swapping = swapNineFunction(images);
  elem.addEventListener('mouseover', function () {
    swapping.resume();
  });
  elem.addEventListener('mouseleave', function () {
    swapping.pause();
  });
}

// *=========================================
// ** Nine Image Fade and SWap  **
// *=========================================

gsap.set(fadeAndSwapNineElement, { clipPath: 'inset(0% 100% 0% 0%)' });

function fadeAndSwapNineFunction(elem, swapperImages) {
  const faderSwapper = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
    onComplete: () => nineSwapCallback(elem, swapperImages),
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
      once: true,
      onEnter: () => fadeAndSwapNineFunction(images, gsapImages).play(),
    });
  });
}

// *=========================================
// ** Three image Wiper and Swapper **
// *=========================================

// ********** Three Image Swap **********

// * Image swapping Function

function swapThreeFunction(swapperImages) {
  const swapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
    paused: true,
    repeat: -1,
  });
  const delay = '+=0.4';

  swapperThree
    .to(swapperImages[0], { autoAlpha: 0 }, delay)
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 })
    .to(swapperImages[2], { autoAlpha: 0 }, delay)
    .to(swapperImages[0], { autoAlpha: 1 });

  return swapperThree;
}

function threeSwapCallback(elem, images) {
  const swappingThree = swapThreeFunction(images);
  elem.addEventListener('mouseover', function () {
    swappingThree.resume();
  });
  elem.addEventListener('mouseleave', function () {
    swappingThree.pause();
  });
}

// ********** Three Image Wipe and Swap **********

function getFadeSwapThreeImages() {
  const fadeAndSwapThreeElement = gsap.utils.toArray(document.querySelectorAll('.fade-and-swap-three'));
  return fadeAndSwapThreeElement;
}

// * Image swapping Function

function fadeAndSwapThreeFunction(elem, swapperImages) {
  const faderSwapperThree = gsap.timeline({
    defaults: { duration: 0, ease: 'none' },
    onComplete: () => {
      threeSwapCallback(elem, swapperImages);
    },
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
      once: true,
      onEnter: () => fadeAndSwapThreeFunction(images, gsapImages).play(),
    });
  });
}

// *=========================================
// ** Swap Two **
// *=========================================

// * 404 Page swapping Function

function swapTwoImagesFunction() {
  const swapTwoElement = document.querySelector('.swap-two');
  const gsapImages = gsap.utils.toArray(swapTwoElement.querySelectorAll('img'));
  const swapTwoTl = gsap.timeline({
    repeat: -1,
    paused: false,
    defaults: { ease: 'none', duration: 0 },
  });

  swapTwoTl.to(gsapImages[0], { autoAlpha: 0 }, '+=1').to(gsapImages[1], { autoAlpha: 1 }).to(null, { duration: 1 });
}

// *=========================================
// ** SVG Scrub Animation  **
// *=========================================

function tabSvgAnimation(targetSvg) {
  gsap.to(targetSvg, {
    rotation: 360,
    transformOrigin: 'center',
    ease: 'none',
    scrollTrigger: {
      trigger: targetSvg,
      // markers: true,
      id: 'Illustration SVG Scrubber',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
    },
  });
}

function svgScrubAnimation() {
  const { tabPanel } = getTabsElements();
  tabPanel.forEach((panel) => {
    const svgToAnimate = panel.querySelector('[data-name="Text"]');
    tabSvgAnimation(svgToAnimate);
  });
}

// * Refresh SVG Scrolltriggers as they get a but messes up when swapping tabs

function svgRefresh() {
  const { tabButtons } = getTabsElements();
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      scrollTriggerRefreshSVG(500);
      // console.log('🚀 GSAP SVG Refresh Click 🚀');
    });
  });
}

// ********** Tabs Refresh **********
function gsapTabRefresh() {
  // FIXME: Stress test to check if you want to refresh every time not just once
  const { tabButtons } = getTabsElements();
  tabButtons.forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        splitTextHeadingsFunction();
        bodySplitTextAnimation();
        fadeAndSwapThreeExport();
        circleAnimationfunction();
        simpleFadeIn();
        scrollTriggerRefreshTabs();
        // console.log('🚀 GSAP Tab Refresh 🚀');
      },
      { once: true }
    );
  });
}

// *=========================================
// ** Illustrations Fade Text  **
// *=========================================

function swipeTextwiggle() {
  const xPos = 25;

  const wiggleTl = gsap.timeline({
    delay: 0.5,
    defaults: { ease: 'power3.out', duration: 0.1 },
  });
  wiggleTl
    .to('.swipe-text-paragraph', { x: xPos })
    .to('.swipe-text-paragraph', { x: -xPos })
    .to('.swipe-text-paragraph', { x: xPos })
    .to('.swipe-text-paragraph', { x: -xPos })
    .to('.swipe-text-paragraph', { x: xPos })
    .to('.swipe-text-paragraph', { x: -xPos })
    .to('.swipe-text-paragraph', { x: 0 });
  return wiggleTl;
}

function swipeTextFade() {
  const fadeTl = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.out' },
  });

  fadeTl.to('.swipe-text-paragraph', { autoAlpha: 0 });

  return fadeTl;
}

function swipeTextAnimation() {
  const swipeMasterTl = gsap.timeline();
  swipeMasterTl.add(swipeTextwiggle()).add(swipeTextwiggle()).add(swipeTextwiggle()).add(swipeTextFade());
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
  scrollTriggerRefreshTabs,
  scrollTriggerRefreshSVG,
  svgRefresh,
  simpleFadeIn,
  svgScrubAnimation,
  addMenuListener,
  gsapTabRefresh,
  swapTwoImagesFunction,
  swipeTextAnimation,
};
