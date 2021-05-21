// *==============================================================================
// ** Imports  **
// *==============================================================================

import * as Flickity from 'flickity';
import 'flickity-imagesloaded';
import { addMenuListener, swipeTextAnimation } from './animations';

// *=========================================
// ** GSAP  **
// *=========================================
// ********** Menu Animation **********
addMenuListener();

swipeTextAnimation();

// *==============================================================================
// ** on Page  **
// *==============================================================================

// TODO: Move to lib
const carousel = document.querySelector('.illustration-portfolio-section');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 2000,
  prevNextButtons: false,
  wrapAround: true,
  selectedAttraction: 0.006,
  friction: 0.15,
});

// Fade SVG scroll when user scrolls. No autoplay.
