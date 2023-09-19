import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/all';
import * as Matter from 'matter-js';

export const createMenuAnim = () => {
  gsap.registerPlugin(MorphSVGPlugin);
  const icons = [
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
      width: 193,
      height: 235,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
      width: 143,
      height: 207,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
      width: 219,
      height: 226,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/65085f399ff9c6390c0a8671_navIcons%20-%20guitar.svg',
      width: 332,
      height: 577,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
      width: 193,
      height: 235,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
      width: 143,
      height: 207,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
      width: 219,
      height: 226,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/65085f399ff9c6390c0a8671_navIcons%20-%20guitar.svg',
      width: 332,
      height: 577,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
      width: 193,
      height: 235,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
      width: 143,
      height: 207,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
      width: 219,
      height: 226,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/65085f399ff9c6390c0a8671_navIcons%20-%20guitar.svg',
      width: 332,
      height: 577,
    },
  ];

  function randomInteger(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
  }

  function randomDecimalInteger(min: number, max: number) {
    return Math.random() * (max - min + 0.1) + min;
  }

  const { Engine } = Matter,
    { Render } = Matter,
    { World } = Matter,
    { Bodies } = Matter,
    { Runner } = Matter,
    { Body } = Matter;

  const engine = Engine.create();
  const animationBody: HTMLElement = document.getElementById('animation-canvas');

  const render = Render.create({
    element: animationBody,
    engine: engine,
    options: {
      width: animationBody.clientWidth,
      height: animationBody.clientHeight,
      wireframes: false,
      background: 'transparent',
    },
  });

  const iconsBodies = [];

  function createIcons() {
    for (let i = 0; i < icons.length; i++) {
      const x = window.innerWidth + 100;
      const y = randomInteger(window.innerHeight / 2 - 400, window.innerHeight / 2 + 400);

      const icon = icons[i];
      const isMobile = window.innerWidth < 600;
      const scale = randomDecimalInteger(isMobile ? 0.2 : 0.4, isMobile ? 0.3 : 0.6);
      const width = icon.width * scale;
      const height = icon.height * scale;

      const iconBody: Matter.Body = Bodies.rectangle(x, y, width, height, {
        friction: 0.8,
        airFriction: 0.1,
        restitution: 0.3,
        isStatic: true,
        render: {
          sprite: {
            texture: icon.link,
            xScale: scale,
            yScale: scale,
          },
        },
      });
      iconBody.running = false;
      iconBody.tempWidth = width;
      iconBody.tempHeight = height;
      iconBody.tempScale = scale;
      iconsBodies.push(iconBody);
      World.add(engine.world, iconBody);
    }
  }
  const runner = Runner.create();
  Runner.run(runner, engine);
  Render.run(render);

  function fireIcon(i: number) {
    const iconBody = iconsBodies[i];
    if (iconBody.running) return;
    iconBody.running = true;
    Body.set(iconBody, 'isStatic', false);

    const velocity = {
      x: randomInteger(30, 50) * -1,
      y: randomInteger(5, 20) * -1,
    };
    Body.setVelocity(iconBody, velocity);
  }
  let isDirty = false;
  let isOpen = false;
  function startAnimation() {
    if (isOpen === false) {
      if (isDirty) return;
      isDirty = true;

      for (let i = 0; i < iconsBodies.length; i++) {
        setTimeout(() => {
          fireIcon(i);
        }, i * 20);
      }

      createIcons();

      isDirty = false;
      isOpen = true;
    } else {
      isOpen = false;
    }
  }

  createIcons();

  Matter.Events.on(engine, 'beforeUpdate', function () {
    for (let i = 0; i < iconsBodies.length; i++) {
      const iconBody = iconsBodies[i];

      if (iconBody.position.x <= iconBody.tempWidth / 2 + 10) {
        Body.setVelocity(iconBody, { x: 25, y: 5 });
      }
      if (iconBody.position.y <= iconBody.tempHeight / 2 + 10) {
        Body.setVelocity(iconBody, { x: -30, y: 5 });
      }

      if (iconBody.position.y >= window.innerHeight) {
        iconsBodies.splice(i, 1);
      }
    }
  });

  function recreateIcons() {
    // Remove existing icons from the world
    World.clear(engine.world, false);
    iconsBodies.length = 0; // Clear the iconsBodies array

    // Create new icons with updated positions
    createIcons();
  }

  // Listen for the window resize event
  window.addEventListener('resize', function () {
    // Update the dimensions of the render object
    render.options.width = animationBody.clientWidth;
    render.options.height = animationBody.clientHeight;

    // Update the canvas size
    render.canvas.width = render.options.width;
    render.canvas.height = render.options.height;

    // Recreate icons with updated positions
    recreateIcons();
  });

  // Call recreateIcons initially to create icons on page load
  recreateIcons();

  const navToggle = document.getElementById('tvNavToggle');

  if (navToggle != null) {
    navToggle.addEventListener('click', function () {
      startAnimation();
    });
  }
};
