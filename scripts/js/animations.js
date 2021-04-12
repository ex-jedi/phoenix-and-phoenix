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

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { animatedMainLogo };
