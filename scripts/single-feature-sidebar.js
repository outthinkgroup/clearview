(function() {
  function sidebarInit() {
    //stops script from running if not on a fth SINGLE
    if (!document.querySelector(".feature-single__wrapper--sidebar")) return;

    //media Query some functions run or wont run based on window width
    const maxWidth = window.matchMedia("(min-width: 762px)");

    //toggle open / close states
    const pageWrapper = document.querySelector(
      ".feature-single__wrapper--sidebar"
    );
    const toggleBtns = document.querySelectorAll(".toggle__button");

    /* const mobileToggleBtn = document.querySelector(
    ".fth-single__mobile-toggle span"
  ); */
    [...toggleBtns].forEach(toggleBtn =>
      toggleBtn.addEventListener("click", handleToggle)
    );

    /* mobileToggleBtn.addEventListener("click", handleToggle); */
    function handleToggle() {
      console.log("object");
      const sideBarState = pageWrapper.dataset.state;
      const newState = sideBarState === "open" ? "close" : "open";
      pageWrapper.dataset.state = newState;
      handleToggleArrow();
    }
    function setInitialSidebarState(windowWidth) {
      const pageWrapper = document.querySelector(
        ".feature-single__wrapper--sidebar"
      );
      if (windowWidth.matches) {
        pageWrapper.dataset.state = "open";
        handleToggleArrow(); //sets arrow on load
      } else {
        pageWrapper.dataset.state = "close";
        handleToggleArrow(); //sets arrow on load
      }
    }

    setInitialSidebarState(maxWidth); //maxWidth is defined on line 3
    maxWidth.addListener(setInitialSidebarState);

    function handleToggleArrow() {
      const toggleBtn = document.querySelector(".toggle__arrow");
      console.log(toggleBtn);
      const toggleState = document.querySelector(
        ".feature-single__wrapper--sidebar"
      ).dataset.state;
      const btnTxt = toggleState === "open" ? "&larr;" : "&rarr;";
      toggleBtn.innerHTML = btnTxt;
    }

    function shouldHandleStickyState(windowWidth) {
      if (windowWidth.matches) {
        //handleStickyState();
      } else {
        return;
      }
    }
    shouldHandleStickyState(maxWidth);
    maxWidth.addListener(shouldHandleStickyState);

    /* this adds a css variable that centers the content when
      data-state is closed on the fth-single
      
      ? this should probably be rethought ?
      */
    /* function contentMove() {
    const content = document.querySelector(".fth-single__content");
    const pageWidth = Math.max(
      document.querySelector(".feature-single-page").getBoundingClientRect()
        .width
    );
    const sidebarWidth = document
      .querySelector(".feature-single__sidebar")
      .getBoundingClientRect().width;
    const diff = pageWidth - (pageWidth - sidebarWidth);
    const move = Math.floor(diff / 2);
    content.style.setProperty("--contentMove", `-${move}px`);
  }
  function contentMoveGrouped() {
    contentMove();
    window.addEventListener("resize", contentMove);
  } */
    //above function shouldnt run if mobile
    /* function shouldContentMove(windowWidth) {
    if (windowWidth.matches) {
      contentMoveGrouped();
    } else {
      return;
    }
  } */
    //shouldContentMove(maxWidth); //maxWidth is defined on line 3
    //maxWidth.addListener(shouldContentMove); //listens to window width

    /* this will set the chapter menu to closed by default */

    /* */
  }
  window.addEventListener("load", sidebarInit);
})();
