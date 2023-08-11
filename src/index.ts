import { gsap } from 'gsap';

import { createDraggable } from '$utils/createDraggable';
import { createMenuAnimation } from '$utils/createMenuAnimation';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Create Draggable elements from anything with the class name "draggable"
  createDraggable('.draggable');

  // Create Animation that happens on navigation open
  createMenuAnimation('nav-menu-open');
});
