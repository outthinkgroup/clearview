// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/joshkennedy00/sites/dev/clearviewsoftware/app/public/wp-content/themes/clearview2019/images/clearviewlogo--blue.svg":[["clearviewlogo--blue.ee40bd6d.svg","images/clearviewlogo--blue.svg"],"images/clearviewlogo--blue.svg"],"/Users/joshkennedy00/sites/dev/clearviewsoftware/app/public/wp-content/themes/clearview2019/images/clearviewlogo.svg":[["clearviewlogo.8a3dbe42.svg","images/clearviewlogo.svg"],"images/clearviewlogo.svg"],"/Users/joshkennedy00/sites/dev/clearviewsoftware/app/public/wp-content/themes/clearview2019/images/secondbg.svg":[["secondbg.25bb3b93.svg","images/secondbg.svg"],"images/secondbg.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/subnav-animate.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function initAnimateSubMenu() {
  //test if there is a sub menu if not returns
  var subnav = document.querySelector(".sub-menu");

  if (!subnav) {
    return null;
  } //vars
  //creates the animating bg


  var headerBar = document.querySelector("#site-navigation");
  var triggers = document.querySelectorAll(".main-header-menu > .menu-item");
  var bgEl = document.createElement("div");
  bgEl.classList.add("animate-sub-menu-bg");
  var bgWrapper = document.createElement("div");
  bgWrapper.classList.add("bg-root");
  headerBar.appendChild(bgWrapper);
  bgWrapper.appendChild(bgEl);
  var background = bgEl; // easier to recognize
  //when mouse enters trigger

  function handleEnter(e) {
    //need to override wp style for their dropdown
    e.target.classList.add("trigger-enter"); //console.log(e.target.classList);

    setTimeout(function () {
      return e.target.classList.add("trigger-enter-active");
    }, 150); //console.log(document.querySelector(".trigger-enter"));

    var dropdown = e.target.querySelector(".sub-menu");
    var headerBarCoords = headerBar.getBoundingClientRect();

    if (!dropdown) {
      console.log("nope");
      return null;
    }

    bgWrapper.setAttribute("data-active", true);
    var dropdownCoords = dropdown.getBoundingClientRect();
    var bgNewCoords = {
      width: dropdownCoords.width,
      height: dropdownCoords.height,
      top: dropdownCoords.top - headerBarCoords.top,
      left: dropdownCoords.left - headerBarCoords.left
    };
    background.style.setProperty("width", "".concat(bgNewCoords.width, "px"));
    background.style.setProperty("height", "".concat(bgNewCoords.height, "px"));
    background.style.setProperty("transform", "translate(".concat(bgNewCoords.left, "px, ").concat(bgNewCoords.top, "px)"));
  } //when mouse leaves trigger


  function handleLeave() {
    console.log("leave");
    this.classList.remove(".trigger-enter");
    this.classList.remove(".trigger-enter-active");
    bgWrapper.removeAttribute("data-active");
  } //listeners


  _toConsumableArray(triggers).forEach(function (trigger) {
    //gives each menu item two events
    trigger.addEventListener("mouseenter", function (e) {
      return handleEnter(e);
    });
    trigger.addEventListener("mouseleave", handleLeave);
  });
}

window.addEventListener("load", initAnimateSubMenu);
},{}],"scripts/single-feature-sidebar.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  function sidebarInit() {
    //stops script from running if not on a fth SINGLE
    if (!document.querySelector(".feature-single__wrapper--sidebar")) return; //media Query some functions run or wont run based on window width

    var maxWidth = window.matchMedia("(min-width: 762px)"); //toggle open / close states

    var pageWrapper = document.querySelector(".feature-single__wrapper--sidebar");
    var toggleBtns = document.querySelectorAll(".toggle__button");
    /* const mobileToggleBtn = document.querySelector(
    ".fth-single__mobile-toggle span"
    ); */

    _toConsumableArray(toggleBtns).forEach(function (toggleBtn) {
      return toggleBtn.addEventListener("click", handleToggle);
    });
    /* mobileToggleBtn.addEventListener("click", handleToggle); */


    function handleToggle() {
      console.log("object");
      var sideBarState = pageWrapper.dataset.state;
      var newState = sideBarState === "open" ? "close" : "open";
      pageWrapper.dataset.state = newState;
      handleToggleArrow();
    }

    function setInitialSidebarState(windowWidth) {
      var pageWrapper = document.querySelector(".feature-single__wrapper--sidebar");

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
      var toggleBtn = document.querySelector(".toggle__arrow");
      console.log(toggleBtn);
      var toggleState = document.querySelector(".feature-single__wrapper--sidebar").dataset.state;
      var btnTxt = toggleState === "open" ? "&larr;" : "&rarr;";
      toggleBtn.innerHTML = btnTxt;
    }

    function shouldHandleStickyState(windowWidth) {
      if (windowWidth.matches) {//handleStickyState();
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
},{}],"scripts/main.js":[function(require,module,exports) {
"use strict";

require("./subnav-animate");

require("./single-feature-sidebar");
},{"./subnav-animate":"scripts/subnav-animate.js","./single-feature-sidebar":"scripts/single-feature-sidebar.js"}],"main.js":[function(require,module,exports) {
"use strict";

require("./styles/main.scss");

require("./scripts/main.js");
},{"./styles/main.scss":"styles/main.scss","./scripts/main.js":"scripts/main.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60467" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=https://clearviewsoftware.local/wp-content/themes/clearview2019/dist/main.js.map