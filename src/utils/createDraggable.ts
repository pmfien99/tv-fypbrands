import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

/**
 * Create dragable elements on the screen
 * @param className class name to be used for dragable elements.
 */
export const createDraggable = (className: string) => {
  gsap.registerPlugin(Draggable);
  gsap.registerPlugin(InertiaPlugin);

  Draggable.create(className, {
    bounds: document.getElementById('global-page-wrapper'),
    edgeResistance: 1,
    cursor: 'src/assets/cursor-mouse-hover.svg',
    activeCursor: '.src/assets/cursor-mouse-hover.svg',
    inertia: true,
  });
};
