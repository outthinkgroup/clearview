function initAnimateSubMenu() {
  //test if there is a sub menu if not returns
  const subnav = document.querySelector(".sub-menu");
  if (!subnav) {
    return null;
  }

  //vars

  //creates the animating bg
  const headerBar = document.querySelector("#site-navigation");
  const triggers = document.querySelectorAll(".main-header-menu > .menu-item");
  const bgEl = document.createElement("div");
  bgEl.classList.add("animate-sub-menu-bg");
  const bgWrapper = document.createElement("div");
  bgWrapper.classList.add("bg-root");

  headerBar.appendChild(bgWrapper);
  bgWrapper.appendChild(bgEl);

  const background = bgEl; // easier to recognize

  //when mouse enters trigger
  function handleEnter(e) {
    //need to override wp style for their dropdown
    e.target.classList.add("trigger-enter");
    //console.log(e.target.classList);
    setTimeout(() => e.target.classList.add("trigger-enter-active"), 150);
    //console.log(document.querySelector(".trigger-enter"));
    const dropdown = e.target.querySelector(".sub-menu");
    const headerBarCoords = headerBar.getBoundingClientRect();
    if (!dropdown) {
      console.log("nope");
      return null;
    }
    bgWrapper.setAttribute("data-active", true);
    const dropdownCoords = dropdown.getBoundingClientRect();
    const bgNewCoords = {
      width: dropdownCoords.width,
      height: dropdownCoords.height,
      top: dropdownCoords.top - headerBarCoords.top,
      left: dropdownCoords.left - headerBarCoords.left,
    };

    background.style.setProperty("width", `${bgNewCoords.width}px`);
    background.style.setProperty("height", `${bgNewCoords.height}px`);
    background.style.setProperty(
      "transform",
      `translate(${bgNewCoords.left}px, ${bgNewCoords.top}px)`
    );
  }
  //when mouse leaves trigger
  function handleLeave() {
    console.log("leave");
    this.classList.remove(".trigger-enter");
    this.classList.remove(".trigger-enter-active");
    bgWrapper.removeAttribute("data-active");
  }
  //listeners
  //wrapped in a media query this doesnt run on mobile
  function enableAnimatableSubNav(mediaQuery) {
    if (mediaQuery.matches) {
      // If media query matches
      return null;
    } else {
      [...triggers].forEach(trigger => {
        //gives each menu item two events
        trigger.addEventListener("mouseenter", e => handleEnter(e));
        trigger.addEventListener("mouseleave", handleLeave);
      });
    }
  }

  var mediaQuery = window.matchMedia("(max-width: 921px)");
  enableAnimatableSubNav(mediaQuery); // Call listener function at run time
  mediaQuery.addListener(enableAnimatableSubNav); // Attach listener function on state changes
}
window.addEventListener("load", initAnimateSubMenu);
