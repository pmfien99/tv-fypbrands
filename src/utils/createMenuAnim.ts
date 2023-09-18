import * as Matter from 'matter-js';

export const createMenuAnim = () => {
  const icons = [
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
      width: 143,
      height: 203,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
      width: 121,
      height: 185,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
      width: 167,
      height: 174,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/65085f399ff9c6390c0a8671_navIcons%20-%20guitar.svg',
      width: 305,
      height: 608,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
      width: 143,
      height: 203,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
      width: 121,
      height: 185,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
      width: 167,
      height: 174,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/65085f399ff9c6390c0a8671_navIcons%20-%20guitar.svg',
      width: 305,
      height: 608,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
      width: 143,
      height: 203,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
      width: 121,
      height: 185,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
      width: 167,
      height: 174,
    },
    {
      link: 'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/65085f399ff9c6390c0a8671_navIcons%20-%20guitar.svg',
      width: 305,
      height: 608,
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
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
    },
  });

  const iconsBodies = [];

  function createIcons() {
    for (let i = 0; i < icons.length; i++) {
      const x = window.innerWidth + 100;
      const y = randomInteger(window.innerHeight / 2 - 400, window.innerHeight / 2 + 400);

      const icon = icons[i];
      const scale = randomDecimalInteger(0.4, 0.65);
      const width = icon.width * scale;
      const height = icon.height * scale;
      const iconBody = Bodies.rectangle(x, y, width, height, {
        friction: 0.8,
        airFriction: 0.1,
        restitution: 0.3,
        isStatic: true,
        render: {
          fillStyle: 'red',
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

  function fireIcon(i) {
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
  async function startAnimation() {
    console.log('animating');
    if (isDirty) return;
    isDirty = true;
    await new Promise((resolve) => {
      // if (iconsBodies.length !== 0) {
      //   iconsBodies = [];
      // }

      for (let i = 0; i < iconsBodies.length; i++) {
        setTimeout(() => {
          fireIcon(i);
        }, i * 20);
      }

      resolve(true);
    });
    createIcons();

    isDirty = false;
  }
  document.addEventListener('DOMContentLoaded', () => {
    createIcons();
    Matter.Events.on(engine, 'collisionStart', function (event) {
      const { pairs } = event;
      console.log(pairs, 'pairs');
    });
    Matter.Events.on(engine, 'beforeUpdate', function (event) {
      for (let i = 0; i < iconsBodies.length; i++) {
        const iconBody = iconsBodies[i];
        if (iconBody.position.x <= 0) {
          Body.setVelocity(iconBody, { x: 25, y: 5 });
        }
        if (iconBody.position.y <= 0) {
          Body.setVelocity(iconBody, { x: -30, y: 5 });
        }

        if (iconBody.position.y >= window.innerHeight) {
          iconsBodies.splice(i, 1);
        }
      }
    });
  });

  const navToggle = document.getElementById('tvNavToggle');

  if (navToggle != null) {
    navToggle.addEventListener('click', function () {
      startAnimation();
    });
  }
};
