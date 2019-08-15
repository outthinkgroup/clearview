/*
this gives a data attribute to the  header container.  allowing us to set styles based on whether or not the navigation is open or closed.
 */

window.addEventListener("load", mobileNavigationScript);
function mobileNavigationScript() {
  const mobileBtn = document.querySelector(".menu-toggle");
  const headContainer = document.querySelector(".main-header-container");
  headContainer.setAttribute("data-mobile-menu", "closed");

  mobileBtn.addEventListener("click", setMobilMenuOpenState);
  function setMobilMenuOpenState() {
    const state = this.classList.contains("toggled") ? "open" : "closed";
    console.log("headContainer", headContainer);
    headContainer.setAttribute("data-mobile-menu", state);
  }
}
