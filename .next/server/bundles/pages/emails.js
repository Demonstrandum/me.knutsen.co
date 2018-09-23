module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);




(function (scope) {
  scope.Component = __WEBPACK_IMPORTED_MODULE_0_react__["Component"];

  scope.Title = function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, props.children, " \u2500 Knutsen.co"));
  };

  scope.Text = function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "text"
    }, props.children);
  };
})(global);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Utility.js
var Utility = __webpack_require__(3);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(1);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/Header.css
var Header = __webpack_require__(5);
var Header_default = /*#__PURE__*/__webpack_require__.n(Header);

// CONCATENATED MODULE: ./components/Header.js



/* harmony default export */ var components_Header = (function () {
  return external__react__default.a.createElement("header", null, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
    className: "aside"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    id: "home"
  }, "K"))), external__react__default.a.createElement("div", {
    className: "aside"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", null, "Home")), external__react__default.a.createElement(link__default.a, {
    href: "#projects"
  }, external__react__default.a.createElement("a", null, "Projects")), external__react__default.a.createElement(link__default.a, {
    href: "/emails"
  }, external__react__default.a.createElement("a", null, "Emails"))), external__react__default.a.createElement("div", {
    className: "right"
  })));
});
// CONCATENATED MODULE: ./components/Layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_Layout; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window) {
        window.addEventListener('load', function () {
          document.body.style.top = toString(document.getElementsByTagName('header')[0].clientHeight);
          console.log(document.body.style.top);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Unnamed")), external__react__default.a.createElement(components_Header, null), this.props.children);
    }
  }]);

  return Layout;
}(Component);



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Utility__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, null, "Mail"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "Accessing a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", null, "knutsen.co"), " email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote", null, "If you don't already have one, please contact me through your current email at ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("code", null, "moi@knutsen.co"), " to set one up, then follow the instructions below."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Since this is on a private server, setup will be a little different from other email services."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "A suggested email client is Mozilla's\xA0", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.thunderbird.net/"
  }, "Thunderbird"), " due to it's auto-configuration functionality. However, in all likelihood you'll want to try to stick with whatever email client you use now. Gmail's phone app mail-client works very well with external email on smartphones, but not the browser-based Gmail client. For computers I recommended getting a proper email-client that can handle any mail, like Thunderbird."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "General instructions"), "Setting up with email over ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "SSL/TLS"), " (Secure):", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "It is very important to use the server URLs provided below when setting up the email client, don't let it say ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("q", null, "knutsen.co"), ".", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("q", null, "IMAP"), " is the recommended protocol."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Username:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "name"), "@knutsen.co"), " \u2500 (your email address.)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Password:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, " Use the email account's password.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Incoming Server:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", null, "n1plcpnl0111.prod.ams1.secureserver.net"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "IMAP Port: 993"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "POP3 Port: 995")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Outgoing Server:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", null, "n1plcpnl0111.prod.ams1.secureserver.net"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "SMTP Port: 465")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    colSpan: "2"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Authentication is required for IMAP, POP3, and SMTP.")))))));
});

/***/ })
/******/ ]);