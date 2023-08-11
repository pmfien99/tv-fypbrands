import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';

/**
 * Create dragable elements on the screen
 * @param name class name to be used for dragable elements.
 */
export const createDraggable = (className: string) => {
  gsap.registerPlugin(Draggable);

  Draggable.create(className, {
    cursor: 'src/assets/cursor-mouse-hover.svg',
    activeCursor: '.src/assets/cursor-mouse-hover.svg',
    bounds: window,
    inertia: true,
  });
  console.log(`Creating Dragable Elements!`);
};
