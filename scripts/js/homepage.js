// *==============================================================================
// ** Imports  **
// *==============================================================================
// TODO: Temp 👇🏾 Remove

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { animatedMainLogo } from './animations';
// *==============================================================================
// ** Page JS  **
// *==============================================================================

// *==============================================================================
// ** Imports  **
// *==============================================================================

// *=========================================
// ** GSAP  **
// *=========================================

animatedMainLogo();

const headerImageWrapper = document.querySelector('.homepage-header-image-wrapper');
console.log(headerImageWrapper);
