import { gsap } from 'gsap';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

import { createDraggable } from '$utils/createDraggable';

gsap.registerPlugin(Physics2DPlugin);

window.Webflow ||= [];
window.Webflow.push(() => {
  //Create Draggable elements from anything with the class name "draggable"
  createDraggable('.draggable');

  const navContainer = document.getElementById('navtest');

  function generateNavOpenItems() {
    for (let i = 0; i < 10; i++) {
      console.log('genrating item');
      const svgElement = createThrowSvg();

      if (navContainer != null) {
        navContainer.appendChild(svgElement);
      }

      gsap.to(svgElement, {
        x: 100,
        physics2D: {},
      });
    }
  }

  function createThrowSvg() {
    const svgElement = document.createElementNS('src/assets/cursor-mouse-hover.svg', 'svg');
    svgElement.setAttribute('width', '50');
    svgElement.setAttribute('height', '50');

    return svgElement;
  }

  const menuOpen = document.getElementById('nav-menu-open');
  if (!menuOpen) {
    console.log('not there');
  } else {
    menuOpen.addEventListener('click', () => {
      generateNavOpenItems();
    });
  }
});
