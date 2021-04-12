// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

// TODO: Temp 👇🏾 Move to animations file
// *=========================================
// ** Main Logo  **
// *=========================================

const kateImages = gsap.utils.toArray('.kate-images-wrapper img');
console.log(kateImages);

const animatedMainLogoTimeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 2,
  defaults: { ease: 'none', duration: 0 },
});

animatedMainLogoTimeline
  .to(kateImages[0], { opacity: 0, delay: 2 })
  .to(kateImages[0], { opacity: 0 })
  .to(kateImages[1], { opacity: 1 })
  .to(kateImages[1], { opacity: 0, delay: 2 })
  .to(kateImages[2], { opacity: 1 });

// function animatedMainLogo() {
//   animatedMainLogoTimeline.play();
// }
