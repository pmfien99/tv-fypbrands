import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

import { greetUser } from '$utils/greet';

function update() {
  gsap.registerPlugin(InertiaPlugin);

  console.log('Creating dragable items');
  Draggable.create('.sticker', {
    intertia: true,
  });
}

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
  update();
});
