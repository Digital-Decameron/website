document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('themeColorButton')
    .addEventListener('click', toggleColors);

  let bodyElement = document.body;
  let moonOrSun   = document.getElementById('moonOrSun');
  let sunRays     = document.getElementById('sunRays');
  let moonMask    = document.getElementById('moonMask');

  initAnimation();

  function initAnimation () {
    if ( localStorage.getItem('isLight') === 'true' ) {
      moonMask.style.top        = '-8px';
      moonMask.style.right      = '-5px';
      moonOrSun.style.transform = 'scale(1)';
      sunRays.style.transform   = 'scale(0.1)';
    } else {
      moonMask.style.top        = '-25px';
      moonMask.style.right      = '-15px';
      moonOrSun.style.transform = 'scale(0.5)';
      sunRays.style.transform   = 'scale(0.6)';
    }
  }

  function toggleColors () {
    if ( localStorage.getItem('isLight') === 'true' ) {
      makeDark();

      moonMask.classList.add('mask-to-sun-animation');
      moonOrSun.classList.add('to-sun-animation');
      sunRays.classList.add('expand-rays');

      setTimeout(function () {
        sunRays.classList.remove('expand-rays');
      }, 500);
      setTimeout(function () {
        moonMask.classList.remove('mask-to-sun-animation');
        moonOrSun.classList.remove('to-sun-animation');
        initAnimation();
      }, 400);

      localStorage.setItem('isLight', 'false');
    } else {
      makeLight();

      moonMask.classList.add('mask-to-moon-animation');
      moonOrSun.classList.add('to-moon-animation');
      sunRays.classList.add('contract-rays');

      setTimeout(function () {
        sunRays.classList.remove('contract-rays');
      }, 500);
      setTimeout(function () {
        moonMask.classList.remove('mask-to-moon-animation');
        moonOrSun.classList.remove('to-moon-animation');
        sunRays.classList.remove('contract-rays');
        initAnimation();
      }, 400);

      localStorage.setItem('isLight', 'true');
    }
  }

  function makeDark () {
    bodyElement.style.setProperty('--primary', '#ffffff');
    bodyElement.style.setProperty('--secondary', '#ffffff');
    bodyElement.style.setProperty('--grey', '#73737d');
    bodyElement.style.setProperty('--background-color', '#111216');
    bodyElement.style.setProperty('--accent', '#e9daac');
    bodyElement.style.setProperty('--hover', 'rgba(255, 255, 255, 0.07)');
    bodyElement.style.setProperty('--gradient', 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)');
    bodyElement.style.setProperty('--articleText', '#ffffff');
    bodyElement.style.setProperty('--track', 'rgba(255, 255, 255, 0.3)');
    bodyElement.style.setProperty('--progress', '#ffffff');
    bodyElement.style.setProperty('--card', '#1d2128');
    bodyElement.style.setProperty('--error', '#ee565b');
    bodyElement.style.setProperty('--success', '#46b17b');
    bodyElement.style.setProperty('--menuBackground', 'rgba(17, 18, 22, 0.5)');
    bodyElement.style.setProperty('--menuText', 'rgba(250, 250, 250, 0.5)');
    bodyElement.style.setProperty('--menuEdge', 'rgba(250, 250, 250, 0.075)');
    bodyElement.style.setProperty('--errorBackground', 'rgba(238, 86, 91, 0.1)');
    bodyElement.style.setProperty('--horizontalRule', 'rgba(255, 255, 255, 0.15)');
    bodyElement.style.setProperty('--inputBackground', 'rgba(255, 255, 255, 0.07)');
    bodyElement.style.setProperty('--tooltip', '#000000');
  }

  function makeLight () {
    bodyElement.style.setProperty('--primary', '');
    bodyElement.style.setProperty('--secondary', '');
    bodyElement.style.setProperty('--grey', '');
    bodyElement.style.setProperty('--background-color', '');
    bodyElement.style.setProperty('--accent', '');
    bodyElement.style.setProperty('--hover', '');
    bodyElement.style.setProperty('--gradient', '');
    bodyElement.style.setProperty('--articleText', '');
    bodyElement.style.setProperty('--track', '');
    bodyElement.style.setProperty('--progress', '');
    bodyElement.style.setProperty('--card', '');
    bodyElement.style.setProperty('--error', '');
    bodyElement.style.setProperty('--success', '');
    bodyElement.style.setProperty('--errorBackground', '');
    bodyElement.style.setProperty('--horizontalRule', '');
    bodyElement.style.setProperty('--inputBackground', '');
    bodyElement.style.setProperty('--menuBackground', '');
    bodyElement.style.setProperty('--menuText', '');
    bodyElement.style.setProperty('--menuEdge', '');
    bodyElement.style.setProperty('--tooltip', 'lightgrey');
  }
});
