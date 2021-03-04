import * as Flickity from 'flickity';
import 'flickity-imagesloaded';

const carousel = document.querySelector('illustration-portfolio-section');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 1000,
  prevNextButtons: false,
  wrapAround: true,
  selectedAttraction: 0.006,
  friction: 0.15,
});
