import { gsap } from 'gsap';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

gsap.registerPlugin(Physics2DPlugin);

/**
 * Create dragable elements on the screen
 * @param menuId class name to be used for dragable elements.
 */
export const createMenuAnimation = (menuId: string) => {
  const menuOpen = document.getElementById(menuId);
  if (!menuOpen) {
    return null;
  }

  console.log('Menu Animation Added');
  menuOpen.addEventListener('click', generateAnimation);
};

function generateAnimation() {
  const items = [];
  const bg = document.querySelector('#featureBackground');

  for (let i = 0; i < 10; i++) {
    const testItem = document.createElement('div');
    testItem.setAttribute('class', 'testitem');
    bg.appendChild(testItem);
    items.push(testItem);
  }

  gsap.set(items, {
    scale: 'random(0.4, 1)',
  });

  gsap.to(items, {
    x: -10000,
    duration: 3,
    physics2D: {
      velocity: 'random(200, 650)',

      gravity: 400,
      angle: 'random(250, 290)',
      acceleration: 100,
    },
  });

  console.log('generating items');
}
