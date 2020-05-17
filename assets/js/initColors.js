document.addEventListener('DOMContentLoaded', () => {
  let be = document.body;

  initColors();

  function initColors () {
    if ( localStorage.getItem('isLight') === null ) {
      localStorage.setItem('isLight', 'true');
    }

    if ( localStorage.getItem('isLight') === 'false' ) {
      makeDark();
    } else {
      makeLight();
    }
  }

  function makeDark () {
    be.style.setProperty('--primary', '#ffffff');
    be.style.setProperty('--secondary', '#ffffff');
    be.style.setProperty('--grey', '#73737d');
    be.style.setProperty('--background-color', '#111216');
    be.style.setProperty('--accent', '#e9daac');
    be.style.setProperty('--hover', 'rgba(255, 255, 255, 0.07)');
    be.style.setProperty('--gradient', 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)');
    be.style.setProperty('--articleText', '#ffffff');
    be.style.setProperty('--track', 'rgba(255, 255, 255, 0.3)');
    be.style.setProperty('--progress', '#ffffff');
    be.style.setProperty('--card', '#1d2128');
    be.style.setProperty('--error', '#ee565b');
    be.style.setProperty('--success', '#46b17b');
    be.style.setProperty('--menuBackground', 'rgba(17, 18, 22, 0.5)');
    be.style.setProperty('--menuText', 'rgba(250, 250, 250, 0.5)');
    be.style.setProperty('--menuEdge', 'rgba(250, 250, 250, 0.075)');
    be.style.setProperty('--errorBackground', 'rgba(238, 86, 91, 0.1)');
    be.style.setProperty('--horizontalRule', 'rgba(255, 255, 255, 0.15)');
    be.style.setProperty('--inputBackground', 'rgba(255, 255, 255, 0.07)');
    be.style.setProperty('--tooltip', '#000000');
  }

  function makeLight () {
    be.style.setProperty('--primary', '');
    be.style.setProperty('--secondary', '');
    be.style.setProperty('--grey', '');
    be.style.setProperty('--background-color', '');
    be.style.setProperty('--accent', '');
    be.style.setProperty('--hover', '');
    be.style.setProperty('--gradient', '');
    be.style.setProperty('--articleText', '');
    be.style.setProperty('--track', '');
    be.style.setProperty('--progress', '');
    be.style.setProperty('--card', '');
    be.style.setProperty('--error', '');
    be.style.setProperty('--success', '');
    be.style.setProperty('--menuBackground', '');
    be.style.setProperty('--menuText', '');
    be.style.setProperty('--menuEdge', '');
    be.style.setProperty('--errorBackground', '');
    be.style.setProperty('--horizontalRule', '');
    be.style.setProperty('--inputBackground', '');
    be.style.setProperty('--tooltip', 'lightgrey');
  }
});
