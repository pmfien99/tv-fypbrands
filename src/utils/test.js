(function () {
  console.log('header');
  function initDropdown(ddTrigger) {
    var timer;
    var clickoutsideTimer;
    var open = false;
    var trigger = ddTrigger;
    var header = document.querySelector('header');
    var isWhite = header.classList.contains('white');
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    var panelLinks = panel.querySelectorAll('a.panel-link');
    var panelInner = panel.querySelector('.panel');
    var bg = panel.querySelector('.background-overlay');
    var panelContents = panel.querySelectorAll('.panel-content');
    var defaultPanelContent = panelContents[0];
    var currentPanelContent = null;

    function handleCurrentPanelChange() {
      if (!currentPanelContent) currentPanelContent = defaultPanelContent;

      panelContents.forEach(function (el) {
        if (el !== currentPanelContent) {
          el.style.display = 'none';
        }
      });

      currentPanelContent.style.display = 'flex';
    }

    function handlePanelLinkHover(e) {
      var link = e.target;
      currentPanelContent = document.getElementById(link.getAttribute('aria-controls'));
      handleCurrentPanelChange();
    }

    function handlePanelLinkLeave(e) {
      currentPanelContent = null;
      handleCurrentPanelChange();
    }

    panelLinks.forEach(function (link) {
      if (link.getAttribute('aria-current') === 'page') {
        currentPanelContent = document.getElementById(link.getAttribute('aria-controls'));
      }

      var isCurrent = window.location.pathname.indexOf(link.getAttribute('href')) >= 0;
      if (isCurrent) {
        setTimeout(function () {
          link.classList.add('w--current');
        }, 0);
      }

      link.addEventListener('mouseenter', handlePanelLinkHover);
      link.addEventListener('mouseleave', handlePanelLinkLeave);
    });

    handleCurrentPanelChange();

    // main panel
    panel.style.transition = 'opacity 0.3s ease-out';
    panelInner.style.transition = 'opacity 0.3s ease-out 0.15s';

    /**
     * Shows the Wrapper Panel
     */
    function showPanel() {
      console.log('showPanel');
      panelInner.style.transition = 'opacity 0.3s ease-out 0.15s';
      panel.style.opacity = 1;
      panelInner.style.opacity = 1;
    }

    /**
     * Hides the Wrapper Panel
     */
    function hidePanel() {
      console.log('hidePanel');
      panel.style.display = 'none';
      panelInner.style.transition = 'opacity 0.3s ease-out 0s';
      panel.style.opacity = 0;
      panelInner.style.opacity = 0;
    }

    function handleClickOutside(e) {
      console.log('handleClickOutside', e.target);
      if (window.innerWidth < 992 || !e.target) {
        return;
      }
      if (open && (!panel.contains(e.target) || e.target === bg)) {
        open = false;
        document.removeEventListener('click', handleClickOutside);
        handleChange();
      }
    }

    function handleChange() {
      clearTimeout(timer);
      clearTimeout(clickoutsideTimer);
      console.log({ handleChange: open });
      if (open) {
        console.log('open!');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.display = 'block';
        timer = setTimeout(function () {
          showPanel();
        }, 1);
        if (!document.body.classList.contains('nav-panel-open')) {
          document.body.classList.add('nav-panel-open');
        }
        if (isWhite) {
          header.classList.remove('white');
          header.classList.add('dark-blue');
        }
        clickoutsideTimer = setTimeout(function () {
          document.addEventListener('click', handleClickOutside);
        }, 250);
      } else {
        console.log('closed!');
        if (isWhite) {
          header.classList.add('white');
          header.classList.remove('dark-blue');
        }
        trigger.setAttribute('aria-expanded', 'false');
        if (window.innerWidth < 992) {
          hidePanel();
        }
        panel.style.opacity = 0;
        timer = setTimeout(function () {
          hidePanel();
        }, 400);
        document.body.classList.remove('nav-panel-open');
        clickoutsideTimer = setTimeout(function () {
          document.removeEventListener('click', handleClickOutside);
        }, 1);
      }
    }

    function handleTriggerClick() {
      console.log('handleTriggerClick');
      open = !open;
      handleChange();
    }

    trigger.addEventListener('click', handleTriggerClick);
  }

  function initNavigation() {
    var isTransparent = false;
    var header = document.querySelector('header');
    var isWhite = header.classList.contains('white');
    var navigation = document.getElementById('navigation');
    var mobileNavOpen = false;
    var menuButton = document.getElementById('menu-button');
    var mobileMenu = document.getElementById(menuButton.getAttribute('aria-controls'));
    var bgColor = 'rgba(9, 17, 124)';
    var currentNavColor = window.getComputedStyle(header).backgroundColor;
    if (currentNavColor === 'transparent' || currentNavColor === 'rgba(0, 0, 0, 0)') {
      isTransparent = true;
    }

    function handleMobileNavChange() {
      if (mobileNavOpen) {
        header.style.backgroundColor = bgColor;
        mobileMenu.style.backgroundColor = bgColor;
        mobileMenu.classList.add('open');
        navigation.classList.add('open');
        document.body.style.overflow = 'hidden';
        menuButton.setAttribute('aria-expanded', 'true');
        if (isWhite) {
          header.classList.add('transparent-white');
        }
      } else {
        if (isWhite) {
          header.classList.remove('transparent-white');
        }
        header.style.backgroundColor = currentNavColor;
        mobileMenu.style.backgroundColor = 'transparent';
        mobileMenu.classList.remove('open');
        navigation.classList.remove('open');
        document.body.style.removeProperty('overflow');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    }

    function handleMenuButtonClick() {
      mobileNavOpen = !mobileNavOpen;
      handleMobileNavChange();
    }
    menuButton.addEventListener('click', handleMenuButtonClick);
    var dropdowns = document.querySelectorAll('.nav-link[aria-haspopup]');
    console.log({ dropdowns });
    dropdowns.forEach(function (ddTrigger) {
      initDropdown(ddTrigger);
    });

    function handleResize() {
      if (mobileNavOpen && window.innerWidth >= 992) {
        mobileNavOpen = false;
        handleMobileNavChange();
      }
    }

    window.addEventListener('resize', handleResize);
  }

  function checkDropdowns() {
    var url = window.location.href;
    var ddButton = document.querySelector('[aria-controls="our-products-panel"]');
    var ddButtonPlatform = document.querySelector('[aria-controls="our-products-panel"]');
    var ddButtonInvestors = document.querySelector('[aria-controls="our-products-panel"]');

    const urlCurrent = url;
    switch (urlCurrent) {
      case url.indexOf('/our-products/') >= 0:
        ddButton.classList.add('w--current');
      case url.indexOf('/platform/') >= 0:
        ddButtonPlatform.classList.add('w--current');
      case url.indexOf('/investors') >= 0:
        ddButtonInvestors.classList.add('w--current');
    }
  }

  function moveNavDot() {
    var currentLink = document.querySelector('.nav-link.w--current');
    setTimeout(function () {
      if (currentLink) {
        currentLink.classList.add('animated');
      }
    }, 500);
  }

  function addNavListeners() {
    var links = document.querySelectorAll('.nav-link');

    function handleMouseLeave(e) {
      var link = e.target;
      link.removeEventListener('mouseleave', handleMouseLeave);
      link.classList.remove('animated');
    }

    function handleMouseEnter(e) {
      var link = e.target;
      if (link.classList.contains('w--current')) {
        return;
      }
      if (!link.classList.contains('animated')) {
        link.classList.add('animated');
        link.addEventListener('mouseleave', handleMouseLeave);
      }
    }

    links.forEach(function (el) {
      el.addEventListener('mouseenter', handleMouseEnter);
    });
  }

  function handleLoad() {
    initNavigation();
    checkDropdowns();
    moveNavDot();
    addNavListeners();
  }

  window.addEventListener('DOMContentLoaded', handleLoad);
})();
