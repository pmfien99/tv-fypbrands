import { gsap, random } from 'gsap';
import { InertiaPlugin } from 'gsap/all';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

gsap.registerPlugin(Physics2DPlugin);
gsap.registerPlugin(InertiaPlugin);

export const createMenuAnimation = () => {
  // ONLY EDIT THINGS HERE
  // ---------------------------------------------------------------------------------------------------------
  const imageURLs: string[] = [
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb571c232682e302ae2788_coconut-cocktail-svgrepo-com.svg',
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb571c2cc610d7f351d6f6_gluten-free-svgrepo-com.svg',
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ebf8bd363e1b787dc9f_placeholder-menu-open-1.svg',
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee61eecdd4629b6262e_placeholder-menu-open-2.svg',
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb9ee6dbe2e5914780fe60_placeholder-menu-open-3.svg',
  ];
  // REFACTOR THE ABOVE TO BE ASSETS IN ASSETS FOLDER WHEN FINAL ASSETS ARE DELIVERED ^

  const imageNumber = 4;
  const menuID = 'tvNavToggle';
  const maxSize = 100;
  const minSize = 50;
  let isOpen: boolean;
  const menuElements = [];
  // ---------------------------------------------------------------------------------------------------------
  // ONLY EDIT THINGS HERE

  const generateAnimation = () => {
    if (isOpen === true) {
      isOpen = false;
      document.getElementsByTagName('body')[0].setAttribute('style', '');
      return;
    }

    if (isOpen === false) {
      isOpen = true;
      document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden;');
      const canvas = document.getElementsByTagName('body')[0];
      for (let x = 0; x < imageURLs.length; x++) {
        for (let y = 0; y < imageNumber; y++) {
          const size = Math.max(minSize, Math.random() * maxSize);
          const img = new Image(size, size);
          const startX = window.innerWidth - Math.random() * -100;
          const startY = window.innerHeight / 2 + Math.random() * window.innerHeight * 0.3;
          img.src = imageURLs[x];
          img.style.cssText = `position: absolute; left: ${startX}px; top: ${startY}px; z-index: 9999;`;
          canvas?.appendChild(img);
          menuElements.push(img);
          gsap.to(img, {
            duration: 3,
            inertia: {
              x: window.innerWidth * -1 - 200,
              y: window.innerHeight * -1 + startY,
            },
            rotate: gsap.utils.random(-360, 360, 1),
            onUpdateParams: [x, y],
            onUpdate: () => {
              if (img.x <= 0) {
              }
            },
            onComplete: () => {
              img.remove();
            },
          });
        }
      }
    }
    return true;
  };

  const navToggle = document.getElementById(menuID);
  if (navToggle != null) {
    isOpen = false;
    navToggle.addEventListener('click', generateAnimation);
  } else {
    console.error('Fatal Error. Shutting down.');
  }
};
