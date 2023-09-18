export const createLEDInteraction = () => {
  const clickReds = document.getElementsByClassName('led-rgb-red');
  const clickGreens = document.getElementsByClassName('led-rgb-green');
  const clickBlues = document.getElementsByClassName('led-rgb-blue');

  for (let i = 0; i < clickReds.length; i++) {
    clickReds[i].addEventListener('click', addGlowRed);
  }

  for (let i = 0; i < clickGreens.length; i++) {
    clickGreens[i].addEventListener('click', addGlowGreen);
  }

  for (let i = 0; i < clickBlues.length; i++) {
    clickBlues[i].addEventListener('click', addGlowBlue);
  }

  function addGlowRed() {
    console.log('red');
    const elementsToGlow = document.querySelectorAll(
      '.led-bar-logo, .rgb-light-selector-red, .led-strip-light'
    );
    const elementToUnGlow = document.querySelectorAll(
      '.rgb-light-selector-blue, .rgb-light-selector-green'
    );

    elementsToGlow.forEach((element) => {
      element.classList.remove('led-glow-green', 'led-glow-blue');
      element.classList.add('led-glow-red');
    });

    elementToUnGlow.forEach((element) => {
      element.classList.remove('led-glow-green', 'led-glow-blue');
    });

    const SVGstoGlow = document.querySelectorAll('.led-bar-svg');
    SVGstoGlow.forEach((svg) => {
      svg.classList.remove('led-bar-svg-green', 'led-bar-svg-blue');
      svg.classList.add('led-bar-svg-red');
    });
  }

  function addGlowGreen() {
    console.log('green');
    const elementsToGlow = document.querySelectorAll(
      '.led-bar-logo, .rgb-light-selector-green, .led-strip-light'
    );
    const elementToUnGlow = document.querySelectorAll(
      '.rgb-light-selector-blue, .rgb-light-selector-red'
    );

    elementsToGlow.forEach((element) => {
      element.classList.remove('led-glow-red', 'led-glow-blue');
      element.classList.add('led-glow-green');
    });

    elementToUnGlow.forEach((element) => {
      element.classList.remove('led-glow-red', 'led-glow-blue');
    });

    const SVGstoGlow = document.querySelectorAll('.led-bar-svg');
    SVGstoGlow.forEach((svg) => {
      svg.classList.remove('led-bar-svg-red', 'led-bar-svg-blue');
      svg.classList.add('led-bar-svg-green');
    });
  }

  function addGlowBlue() {
    console.log('blue');
    const elementsToGlow = document.querySelectorAll(
      '.led-bar-logo, .rgb-light-selector-blue, .led-strip-light'
    );
    const elementToUnGlow = document.querySelectorAll(
      '.rgb-light-selector-green, .rgb-light-selector-red'
    );

    elementsToGlow.forEach((element) => {
      element.classList.remove('led-glow-green', 'led-glow-red');
      element.classList.add('led-glow-blue');
    });
    elementToUnGlow.forEach((element) => {
      element.classList.remove('led-glow-green', 'led-glow-red');
    });

    const SVGstoGlow = document.querySelectorAll('.led-bar-svg');
    SVGstoGlow.forEach((svg) => {
      svg.classList.remove('led-bar-svg-green', 'led-bar-svg-red');
      svg.classList.add('led-bar-svg-blue');
    });
  }
};
