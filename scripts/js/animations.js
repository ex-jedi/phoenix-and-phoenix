// *=========================================
// ** Imports  **
// *=========================================

// ********** GSAP **********
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

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

// *==============================================================================
// ** Homepage **
// *==============================================================================

// *=========================================
// ** Header Image  **
// *=========================================

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
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' }, delay)
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

function homepageHeaderImageAnimation() {
  fadeAndSwapNineElement.forEach((images) => {
    const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
    ScrollTrigger.create({
      trigger: images,
      start: 'top 60%',
      id: 'Header Image',
      markers: true,
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
    .to(elem, { duration: 0.75, ease: 'circ.inOut', clipPath: 'inset(0% 0% 0% 0%)' })
    .to(swapperImages[0], { autoAlpha: 0 }, '+=1')
    .to(swapperImages[1], { autoAlpha: 1 })
    .to(swapperImages[1], { autoAlpha: 0 }, delay)
    .to(swapperImages[2], { autoAlpha: 1 });

  return faderSwapperThree;
}

function fadeAndSwapThreeExport() {
  fadeAndSwapThreeElement.forEach((images) => {
    const gsapImages = gsap.utils.toArray(images.querySelectorAll('img'));
    ScrollTrigger.create({
      trigger: images,
      start: 'top 60%',
      id: 'Three F & S Image',
      markers: true,
      once: true,
      onEnter: () => fadeAndSwapThreeFunction(images, gsapImages).play(),
    });
  });
}

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { animatedMainLogo, homepageHeaderImageAnimation, fadeAndSwapThreeExport };
