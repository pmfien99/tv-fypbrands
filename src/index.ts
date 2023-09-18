import { createDraggable } from '$utils/createDraggable';
import { createMenuAnim } from '$utils/createMenuAnim';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Create Draggable elements from anything with the class name "draggable"
  createDraggable('.draggable');

  // Create Animation that happens on navigation open
  createMenuAnim();
});
