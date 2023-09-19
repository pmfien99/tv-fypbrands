import { gsap } from 'gsap';

export const createWorkMenuMorph = () => {
  const workFiltersBtn = document.getElementById('work-filter-btn');
  if (workFiltersBtn !== null) {
    const shapeClosed = document.getElementById('filter-closed') as gsap.SVGPathValue | null;
    const shapeOpen = document.getElementById('filter-open') as gsap.SVGPathValue | null;

    let isOpen = false;
    workFiltersBtn.addEventListener('click', () => {
      if (shapeClosed !== null && shapeOpen !== null) {
        if (isOpen === false) {
          gsap.to(shapeClosed, {
            morphSVG: { shape: shapeOpen, shapeIndex: 'auto' },
            duration: 0.3,
            ease: 'back.inOut',
          });
          isOpen = true;
        } else {
          gsap.to(shapeClosed, {
            morphSVG: { shape: shapeClosed, shapeIndex: 'auto' },
            duration: 0.3,
            ease: 'back.inOut',
          });
          isOpen = false;
        }
      }
    });
  } else {
    return;
  }
};
