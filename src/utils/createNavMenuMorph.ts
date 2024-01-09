import { gsap } from 'gsap';

export const createNavMenuMorph = () => {
  const navBtn = document.getElementById('tvNavToggle');
  const navBackground = document.getElementById('tvNavBackground');

  if (navBtn !== null) {
    const shapeClosed = document.getElementById('nav-icon-closed') as gsap.SVGPathValue | null;
    const shapeOpen = document.getElementById('nav-icon-open') as gsap.SVGPathValue | null;

    let isOpen = false;

    if (navBackground !== null) {
      if (shapeClosed !== null && shapeOpen !== null) {
        navBackground.addEventListener('click', () => {
          console.log('clicking the bg');
          navBtn.click();
        });
      }
    }

    navBtn.addEventListener('click', () => {
      if (shapeClosed !== null && shapeOpen !== null) {
        if (isOpen === false) {
          gsap.to(shapeClosed, {
            morphSVG: { shape: shapeOpen, shapeIndex: 'auto' },
            duration: 0.75,
            ease: 'back.inOut',
            fill: 'white',
          });
          isOpen = true;
        } else {
          gsap.to(shapeClosed, {
            morphSVG: { shape: shapeClosed, shapeIndex: 'auto' },
            duration: 0.75,
            ease: 'back.inOut',
            fill: '#262424',
          });
          isOpen = false;
        }
      }
    });
  } else {
    return;
  }
};
