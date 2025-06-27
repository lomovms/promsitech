/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://lomovms.github.io/promsitech/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([11,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_hamburger_hamburger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _components_hamburger_hamburger_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_hamburger_hamburger_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_select_select_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _components_slider_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _components_popup_popup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _components_price_slider_price_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_10__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import '~components/input'








$(document).ready(function () {
  // adds SVG External Content support to all browsers
  svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()(); // Polyfill object-fit/object-position on <img>

  object_fit_images__WEBPACK_IMPORTED_MODULE_2___default()(); // lazyload

  var images = document.querySelectorAll("img.lazyload");
  new lazyload__WEBPACK_IMPORTED_MODULE_3___default.a(images);
  $('.partners-slide__image-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    closeOnContentClick: true,
    image: {
      verticalFit: true
    }
  });
  $('.partners-slide__image-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Проверка для кнопки прокрутки и секции каталога
  var scrollBtn = document.querySelector('.main-slide__scroll-btn');
  var catalogSection = document.querySelector('#catalog');

  if (scrollBtn && catalogSection) {
    scrollBtn.addEventListener('click', function (event) {
      event.preventDefault();
      var catalogPosition = catalogSection.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: catalogPosition,
        behavior: 'smooth'
      });
    });
  } // Проверка для табов новостей


  var newsTabs = document.querySelectorAll('.news-tabs__item');
  var newsPanes = document.querySelectorAll('.news-tab-pane');

  if (newsTabs.length > 0 && newsPanes.length > 0) {
    newsTabs.forEach(function (tab) {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        var targetTab = tab.getAttribute('data-tab');
        console.log("Клик по вкладке:", targetTab); // Убираем активные классы у всех вкладок и панелей

        newsTabs.forEach(function (t) {
          return t.classList.remove('active');
        });
        newsPanes.forEach(function (pane) {
          return pane.classList.remove('active');
        }); // Добавляем активный класс на кликнутый таб

        tab.classList.add('active'); // Показываем соответствующую панель

        var targetPane = document.querySelector(".news-tab-pane[data-tab=\"".concat(targetTab, "\"]"));

        if (targetPane) {
          targetPane.classList.add('active');
          console.log("Активирован .news-tab-pane:", targetPane);
        } else {
          console.error("Не найдена панель для вкладки:", targetTab);
        }
      });
    });
  } // Проверка для галереи


  if (document.querySelector('.popup-gallery')) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function titleSrc(item) {
          return item.el.attr('title');
        }
      }
    });
  } // Проверка для табов продуктов


  var productTabs = document.querySelectorAll('.product-tab');
  var productPanes = document.querySelectorAll('.product-tab-pane');

  if (productTabs.length > 0 && productPanes.length > 0) {
    productTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetTab = tab.getAttribute('data-tab');
        productTabs.forEach(function (t) {
          return t.classList.remove('active');
        });
        productPanes.forEach(function (pane) {
          return pane.classList.remove('active');
        });
        tab.classList.add('active');
        var targetPane = document.querySelector(".product-tab-pane[data-tab=\"".concat(targetTab, "\"]"));
        if (targetPane) targetPane.classList.add('active');
      });
    });
  } // Проверка для переключения вида


  var viewToggle = document.querySelector('.view-toggle');

  if (viewToggle) {
    var gridIcon = viewToggle.querySelector('.icon--grid');
    var listIcon = viewToggle.querySelector('.icon--list');
    var viewItems = document.querySelectorAll('.view-item');

    if (gridIcon && listIcon && viewItems.length > 0) {
      var currentView = 'grid';

      var setView = function setView(view) {
        currentView = view;
        gridIcon.setAttribute('data-active', view === 'grid');
        listIcon.setAttribute('data-active', view === 'list');
        viewItems.forEach(function (item) {
          item.setAttribute('data-view', view);
        });
      };

      gridIcon.addEventListener('click', function () {
        return setView('grid');
      });
      listIcon.addEventListener('click', function () {
        return setView('list');
      });
    }
  } // Проверка для галереи категорий


  var gallery = document.querySelector('.gallery');
  var blockLeft = document.querySelector('.block-left');
  var categoryRow = document.querySelector('.category-item__row');

  if (gallery && blockLeft && categoryRow) {
    var blockLeftTop = blockLeft.offsetTop;
    var categoryRowBottom = categoryRow.offsetTop + categoryRow.offsetHeight;
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;

      if (scrollTop >= blockLeftTop && scrollTop + gallery.offsetHeight < categoryRowBottom) {
        gallery.classList.add('fixed');
        gallery.classList.remove('absolute');
      } else if (scrollTop + gallery.offsetHeight >= categoryRowBottom) {
        gallery.classList.remove('fixed');
        gallery.classList.add('absolute');
      } else {
        gallery.classList.remove('fixed', 'absolute');
      }
    });
  } // Проверка для FAQ


  var faqHeaders = document.querySelectorAll('.faq-items__item-header');

  if (faqHeaders.length > 0) {
    faqHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
        var parent = header.parentElement;
        parent.classList.toggle('open');
      });
    });
  } // Проверка для Яндекс.Карты


  var mapContainer = document.querySelector('#map');

  if (mapContainer) {
    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
      });
      var points = [{
        coords: [55.76, 37.64],
        title: 'Название магазина или сервиса'
      }, {
        coords: [55.75, 37.61],
        title: 'Название магазина или сервиса 2'
      }, {
        coords: [59.93, 30.31],
        title: 'Название магазина или сервиса 3'
      }];
      var placemarks = [];
      points.forEach(function (point) {
        var placemark = new ymaps.Placemark(point.coords, {
          hintContent: point.title
        });
        placemarks.push(placemark);
        map.geoObjects.add(placemark);
      });
      var addressElements = document.querySelectorAll('.where-buy-address');

      if (addressElements.length > 0) {
        addressElements.forEach(function (element, index) {
          element.addEventListener('click', function () {
            var coords = JSON.parse(element.dataset.coords);
            map.setCenter(coords, 14, {
              duration: 500
            });
            placemarks.forEach(function (placemark) {
              return placemark.options.set('preset', 'islands#blueIcon');
            });
            placemarks[index].options.set('preset', 'islands#redIcon');
          });
        });
      }
    });
  }

  document.querySelectorAll('[data-toggle-btn]').forEach(function (button) {
    button.addEventListener('click', function () {
      var wrapper = button.previousElementSibling;
      var hiddenItems = wrapper.querySelectorAll('.is-hidden');
      var isExpanded = button.classList.toggle('is-open');
      hiddenItems.forEach(function (item) {
        item.style.display = isExpanded ? 'flex' : 'none';
      });
      button.textContent = isExpanded ? 'Скрыть' : 'Показать все';
    });
  });
  var catalogBtn = document.querySelector('.button--catalog');
  var megaMenu = document.querySelector('.catalog-megamenu');
  var overlay = document.querySelector('.catalog-overlay');

  if (catalogBtn && megaMenu && overlay) {
    var closeMegaMenu = function closeMegaMenu() {
      megaMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    };

    catalogBtn.addEventListener('click', function () {
      var isActive = megaMenu.classList.contains('active');

      if (isActive) {
        closeMegaMenu();
      } else {
        megaMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
      }
    });
    overlay.addEventListener('click', function () {
      closeMegaMenu();
    });
  }

  var btnUp = document.querySelector('.button-up');
  var footer = document.querySelector('footer'); // адаптируй, если у тебя другой селектор футера

  if (btnUp && footer) {
    btnUp.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    var checkOffset = function checkOffset() {
      var footerRect = footer.getBoundingClientRect();
      var windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight - 60) {
        btnUp.style.bottom = "".concat(windowHeight - footerRect.top + 20, "px");
      } else {
        btnUp.style.bottom = '30px';
      }
    };

    window.addEventListener('scroll', function () {
      checkOffset();

      if (window.scrollY > 300) {
        btnUp.classList.add('visible');
      } else {
        btnUp.classList.remove('visible');
      }
    });
    checkOffset();
  }

  $(document).ready(function () {
    var _$$magnificPopup;

    $('.popup-open').magnificPopup((_$$magnificPopup = {
      type: 'inline',
      mainClass: 'mfp-fade',
      removalDelay: 300,
      closeBtnInside: true
    }, _defineProperty(_$$magnificPopup, "removalDelay", 0), _defineProperty(_$$magnificPopup, "mainClass", 'mfp-no-move-from-top'), _$$magnificPopup));
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var phoneInputs = document.querySelectorAll('input[type="tel"]');
  var mask = new inputmask__WEBPACK_IMPORTED_MODULE_10___default.a('+7 (999) 999-9999');
  phoneInputs.forEach(function (input) {
    return mask.mask(input);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var phoneInputs = document.querySelectorAll('input[type="tel"]');
  var mask = new inputmask__WEBPACK_IMPORTED_MODULE_10___default.a('+7 (999) 999-9999');
  phoneInputs.forEach(function (input) {
    mask.mask(input);
    input.addEventListener('input', function () {
      input.setCustomValidity(input.inputmask.isComplete() ? '' : 'Введите полный номер');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var placeholder = document.querySelector('.header-placeholder');
  var lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add('sticky', 'visible');
    } else if (scrollTop <= 50) {
      header.classList.remove('visible', 'sticky');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
document.addEventListener('click', function (e) {
  if (e.target.closest('.js-close-popup')) {
    e.preventDefault();
    $.magnificPopup.close();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var forms = document.querySelectorAll('.js-ajax-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var requiredFields = form.querySelectorAll('[required]');
      var hasError = false;
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('input-error');
          hasError = true;
        } else {
          field.classList.remove('input-error');
        }
      });
      if (hasError) return;
      var formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        if (!response.ok) throw new Error('Ошибка при отправке формы');
        $.magnificPopup.close();
        $.magnificPopup.open({
          items: {
            src: '#thanks-popup'
          },
          type: 'inline'
        });
        form.reset();
      }).catch(function (err) {
        console.error('Ошибка:', err);
        alert('Ошибка при отправке формы.');
      });
    });
  });
});
document.querySelectorAll('.video-wrapper__play').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var wrapper = btn.closest('.video-wrapper');
    var src = wrapper.dataset.video;
    var iframe = document.createElement('iframe');
    iframe.src = src + '?autoplay=1';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.width = '100%';
    iframe.height = '100%';
    wrapper.innerHTML = ''; // очищаем превью и кнопку

    wrapper.appendChild(iframe);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hamburger = /*#__PURE__*/function () {
  function Hamburger() {
    _classCallCheck(this, Hamburger);

    this.initialize();
  }

  _createClass(Hamburger, [{
    key: "initialize",
    value: function initialize() {
      var hamburger = $('[data-hamburger]');
      hamburger.click(function () {
        var el = $('[data-menu-fixed]');
        el.toggleClass('active');
      });
    }
  }]);

  return Hamburger;
}();

new Hamburger();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sumoselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var sumoselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sumoselect__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Select = /*#__PURE__*/function () {
  function Select() {
    _classCallCheck(this, Select);

    this.initialize();
  }

  _createClass(Select, [{
    key: "initialize",
    value: function initialize() {
      $('select').each(function () {
        var el = $(this);
        var search = Boolean(el.attr('data-search')) || false;
        var placeholder = el.attr('data-placeholder') || 'This is a placeholder';
        var okCancel = Boolean(el.attr('data-okCancel')) || false;
        var selectAll = Boolean(el.attr('data-selectAll')) || false;
        el.SumoSelect({
          search: search,
          searchText: 'Введите текст',
          placeholder: placeholder,
          okCancelInMulti: okCancel,
          selectAll: selectAll,
          forceCustomRendering: false // включает на мобильных стандартный селект

        });
        el.on('sumo:opening', function () {
          $(this).closest('.SumoSelect').find('.optWrapper li').each(function () {// $(this).find('i').remove();
            // $(this).prepend('<i class="fas fa-band-aid"></i>');
          });
        });
      });
    }
  }]);

  return Select;
}();

new Select();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mainSlider */
/* unused harmony export secondarySlider */
/* unused harmony export thirdSlider */
/* unused harmony export historySlider */
/* unused harmony export swiperThumbs */
/* unused harmony export swiperGaller */
/* unused harmony export partnersSlider */
/* unused harmony export visualSlider */
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

 // Объявляем переменные слайдеров в глобальной области видимости модуля

var mainSlider, secondarySlider, thirdSlider, historySlider, swiperThumbs, swiperGaller, partnersSlider, visualSlider;
document.addEventListener('DOMContentLoaded', function () {
  // Инициализация основного слайдера
  mainSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.main-slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Pagination */ "d"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Autoplay */ "a"]],
    // slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: '.main-slider__next',
      prevEl: '.main-slider__prev'
    },
    breakpoints: {
      480: {
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        }
      }
    }
  }); // Инициализация вторичного слайдера

  secondarySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.secondary-slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Pagination */ "d"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Autoplay */ "a"]],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: '.secondary-slider__next',
      prevEl: '.secondary-slider__prev'
    },
    breakpoints: {
      480: {
        spaceBetween: 30
      }
    }
  }); // Третий слайдер

  thirdSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.third-slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Pagination */ "d"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Autoplay */ "a"]],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: '.third-slider__next',
      prevEl: '.third-slider__prev'
    },
    pagination: {
      el: '.third-slider__counter',
      type: 'fraction'
    },
    breakpoints: {
      480: {
        spaceBetween: 30
      }
    }
  }); // Исторический слайдер

  historySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.history-swiper', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Pagination */ "d"]],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.history__next',
      prevEl: '.history__prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        var years = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        return "<span class=\"".concat(className, "\">").concat(years[index], "</span>");
      }
    }
  }); // Слайдер превью (Thumbs)

  swiperThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.mySwiper1', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* FreeMode */ "b"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Thumbs */ "e"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"]],
    loop: true,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true
  }); // Основной слайдер с превью

  swiperGaller = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.mySwiper2', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Thumbs */ "e"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"]],
    loop: true,
    thumbs: {
      swiper: swiperThumbs
    }
  });
  var partnersSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.partners-slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"]],
    slidesPerView: 6,
    loop: true,
    navigation: {
      nextEl: '.partners-slider__next',
      prevEl: '.partners-slider__prev'
    }
  }); // Слайдер команды

  var teamTabs = document.querySelectorAll('.team-tab');
  var teamSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.team-swiper', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Pagination */ "d"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Autoplay */ "a"]],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: '.team__next',
      prevEl: '.team__prev'
    },
    pagination: {
      el: '.team__counter',
      type: 'fraction'
    },
    on: {
      slideChange: function slideChange() {
        // Снимаем активный класс с вкладок
        teamTabs.forEach(function (tab) {
          return tab.classList.remove('active');
        }); // Добавляем активный класс к соответствующей вкладке

        var activeIndex = teamSlider.realIndex;
        teamTabs[activeIndex].classList.add('active');
      }
    }
  });
  var visualSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.visual-slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "c"]],
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.visual-slider__next',
      prevEl: '.visual-slider__prev'
    },
    slideToClickedSlide: true
  }); // Переключение слайдов при клике на вкладку

  teamTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function (event) {
      event.preventDefault(); // Активируем слайд

      teamSlider.slideTo(index);
    });
  });
}); // Экспортируем слайдеры



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Popup = /*#__PURE__*/function () {
  function Popup() {
    _classCallCheck(this, Popup);

    this.initialize();
  }

  _createClass(Popup, [{
    key: "initialize",
    value: function initialize() {
      var popup = $('[data-popup]');
      var popupImg = $('[data-popup-img]');
      popupImg.magnificPopup({
        type: 'image',
        image: {
          markup: '<div class="mfp-figure popup--figure mfp-with-anim">' + '<button title="%title%" type="button" class="mfp-close popup__close"></button>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</div>',
          // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
          cursor: 'mfp-zoom-out-cur',
          // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
          titleSrc: 'title',
          // Attribute of the target element that contains caption for the slide.
          // Or the function that should return the title. For example:
          // titleSrc: function(item) {
          //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
          // }
          verticalFit: true,
          // Fits image in area vertically
          tError: '<a href="%url%">The image</a> could not be loaded.' // Error message

        },
        callbacks: {
          beforeOpen: function beforeOpen() {
            this.st.mainClass = 'mfp-zoom-in';
          }
        }
      });
      popup.magnificPopup({
        type: 'inline',
        midClick: true,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close popup__close"></button>',
        removalDelay: 500,
        //delay removal by X to allow out-animation
        callbacks: {
          beforeOpen: function beforeOpen() {
            this.st.mainClass = 'mfp-zoom-in';
          },
          open: function open() {
            // загружаем карты, если они есть во всплывающих окнах
            var mp = $.magnificPopup.instance,
                id = $(mp.currItem.el[0]).attr('href');
            var map = $(id).find('[data-map]'),
                mapSingle = $(id).find('[data-map-single]'); // карта с множеством меток

            map.each(function (index, el) {
              var load = $(el).attr('data-map');

              if (load == 'load') {
                $(el).attr('data-map', '');
                Window.loadMap($(el), true, 'init');
              }
            }); // карта с одной меткой

            mapSingle.each(function (index, el) {
              var load = $(el).attr('data-map-single');

              if (load == 'load') {
                $(el).attr('data-map-single', '');
                Window.loadMap($(el), true, 'initSingle');
              }
            });
          }
        }
      });
    }
  }]);

  return Popup;
}();

new Popup();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PriceSlider = /*#__PURE__*/function () {
  function PriceSlider() {
    _classCallCheck(this, PriceSlider);

    this.initialize();
  }

  _createClass(PriceSlider, [{
    key: "initialize",
    value: function initialize() {
      var range = $('[data-price-slider]');
      range.each(function () {
        var el = $(this);
        var id = el.attr('id');
        var min = parseInt(el.attr('data-min')) || 0;
        var max = parseInt(el.attr('data-max')) || 100;
        var startMin = parseInt(el.attr('data-start-min')) || min;
        var startMax = parseInt(el.attr('data-start-max')) || max;
        var connect = Boolean(el.attr('data-connect')) || false;
        var slider = document.getElementById(id);
        var dataInputs = Boolean(el.attr('data-inputs'));
        var dataValues = Boolean(el.attr('data-values'));
        var tooltips = Boolean(el.attr('data-tooltips')) || false;
        var tooltip = false;

        if (tooltips) {
          tooltip = wnumb__WEBPACK_IMPORTED_MODULE_1___default()({
            decimals: 0
          });
        }

        if (dataInputs) {
          var inputs = [document.getElementById(id + '-min'), document.getElementById(id + '-max')];
        }

        if (dataValues) {
          var skipValues = [document.getElementById(id + '-val-min'), document.getElementById(id + '-val-max')];
        }

        nouislider__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].create(slider, {
          start: [startMin, startMax],
          connect: connect,
          range: {
            'min': min,
            'max': max
          },
          format: wnumb__WEBPACK_IMPORTED_MODULE_1___default()({
            decimals: 0
          }),
          tooltips: [tooltip, tooltip]
        });
        slider.noUiSlider.on('update', function (values, handle) {
          if (dataInputs) {
            inputs[handle].value = values[handle];
          }

          if (dataValues) {
            skipValues[handle].innerHTML = values[handle];
          }
        });

        if (dataInputs) {
          inputs.forEach(function (input, handle) {
            input.addEventListener('change', function () {
              slider.noUiSlider.setHandle(handle, this.value);
            });
          });
        }
      });
    }
  }]);

  return PriceSlider;
}();

new PriceSlider();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(22);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);