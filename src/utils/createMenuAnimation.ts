import { gsap } from 'gsap';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

gsap.registerPlugin(Physics2DPlugin);

export const createMenuAnimation = () => {
  // ONLY EDIT THINGS HERE
  // ---------------------------------------------------------------------------------------------------------
  const imageURLs: string[] = [
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb571c232682e302ae2788_coconut-cocktail-svgrepo-com.svg',
    'https://uploads-ssl.webflow.com/64d51aeb05adb0e3c91005ab/64fb571c2cc610d7f351d6f6_gluten-free-svgrepo-com.svg',
  ];

  const imageNumber = 3;
  const menuID = 'tvNavToggle';
  const maxSize = 150;
  const minSize = 50;
  let isOpen: boolean;
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
      const canvas = document.getElementById('menuCanvas');
      for (let x = 0; x < imageURLs.length; x++) {
        for (let y = 0; y < imageNumber; y++) {
          const size = Math.max(minSize, Math.random() * maxSize);
          const img = new Image(size, size);
          const startX = window.innerWidth + 200;
          const startY = window.innerHeight / 2 + Math.random() * 100;
          img.src = imageURLs[x];
          img.style.cssText = `position: absolute; left: ${startX}px; top: ${startY}px; z-index: 9999;`;
          canvas?.appendChild(img);
          console.log(imageURLs[x]);
          gsap.to(img, {
            duration: 5,
            physics2D: {
              velocity: -1500,
              angle: Math.random() * 50,
              gravity: 200,
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
