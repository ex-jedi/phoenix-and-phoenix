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

const openMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out', duration: 1, delay: 0 },
});

openMenuTl
  .to(mainNav, { y: '0%' })
  .addLabel('colorChange', '-=0.3')
  .to(navLink, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, 'colorChange')
  .to(mainNavTriggerWrapper, { backgroundColor: '#f4f1f0' }, 'colorChange')
  .to(mainNavTrigger, { color: '#6c9184', onComplete: pointerEventsRestore }, 'colorChange');

// * Close menu

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.in', duration: 1, delay: 0 },
});

closeMenuTl
  .to(navLink, { y: 40, opacity: 0, stagger: -0.2, duration: 0.5 })
  .addLabel('colorChange', '-=0.5')
  .to(mainNavTriggerWrapper, { backgroundColor: '#6c9184' }, 'colorChange')
  .to(mainNavTrigger, { color: '#f4f1f0' }, 'colorChange')
  .to(mainNav, { y: '120%', onComplete: pointerEventsRestore }, 'colorChange');
