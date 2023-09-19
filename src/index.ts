import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/all';

import { createDraggable } from '$utils/createDraggable';
import { createMenuAnim } from '$utils/createMenuAnim';
import { createNavMenuMorph } from '$utils/createNavMenuMorph';
import { createWorkMenuMorph } from '$utils/createWorkMenuMorph';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(MorphSVGPlugin);

  // Create Draggable elements from anything with the class name "draggable"
  createDraggable('.draggable');

  // Create Animation that happens on navigation open
  setTimeout(() => {
    createMenuAnim();
  }, 50);

  // Creates the SVG Morph Effects on respective pages
  createWorkMenuMorph();
  createNavMenuMorph();
});
