(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/assets/sass/main.sass
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/utils/helper.js
/* harmony default export */ var helper = ({
  pipe: function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (args) {
      return functions.reduce(function (arg, nextFn) {
        return nextFn(arg);
      }, args);
    };
  },
  selectEl: function selectEl(selector) {
    return document.querySelector(selector);
  },
  createEl: function createEl(el) {
    return document.createElement(el);
  },
  createElNS: function createElNS(el, namespaceURI) {
    return document.createElementNS(namespaceURI, el);
  },
  addEventToEl: function addEventToEl(el, type, fn, bindEl) {
    el.addEventListener(type, function (e) {
      fn.call(bindEl, e);
    });
  },
  findKey: function findKey(collection, key) {
    for (var item in collection) {
      if (collection[item] === key) {
        return item;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/js/utils/variables.js
/* harmony default export */ var variables = ({
  DEFAULT_PADDING: 40,
  DEFAULT_PADDING_MULTIPLE_TIMES: 2,
  DEFAULT_PADDING_DIVISION_TIMES: 2,
  DEFAULT_DIGIT: 10,
  AXIS_LABEL_LINE_SIZE: 5,
  Y_AXIS_UNIT: 6,
  X_AXIS_LABEL_PADDING_MULTIPLE_TIMES: 1.5,
  Y_AXIS_LABEL_PADDING_MULTIPLE_TIMES: 1.6,
  CHART_TYPES: {
    LINE_CHART: 'line',
    BAR_CHART: 'bar',
    PIE_CHART: 'pie',
    AREA_CHART: 'area'
  },
  TOOLTIP_PADDINT_TOP: -20,
  TOOLTIP_PADDINT_LEFT: 20,
  TOOLTIP_HIDE_LEFT_POSITION: -10000
});
// CONCATENATED MODULE: ./src/js/utils/calculate.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ var calculate = ({
  getArrayMax: function getArrayMax(array) {
    return Math.max.apply(Math, _toConsumableArray(array));
  },
  getArraysMax: function getArraysMax(arraySet) {
    var _this = this;

    return Math.max.apply(Math, _toConsumableArray(arraySet.map(function (array) {
      return _this.getArrayMax(array);
    })));
  },
  getArrayMin: function getArrayMin(array) {
    return Math.min.apply(Math, _toConsumableArray(array));
  },
  getArraysMin: function getArraysMin(arraySet) {
    var _this2 = this;

    return Math.min.apply(Math, _toConsumableArray(arraySet.map(function (array) {
      return _this2.getArrayMin(array);
    })));
  },
  getDataSet: function getDataSet(series) {
    return series.map(function (item) {
      return item.data;
    });
  },
  getNegativeMinNum: function getNegativeMinNum(num, gap) {
    return Math.floor(num / gap) * gap;
  },
  getXAxisWidth: function getXAxisWidth(width, padding) {
    return width - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES;
  },
  getYAxisHeight: function getYAxisHeight(height, padding) {
    return height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES;
  },
  calculateXAxisGap: function calculateXAxisGap(xAxisWidth, length) {
    return Math.floor(xAxisWidth / (length - 1));
  },
  calculateYAxis: function calculateYAxis(max, min, unit, digit) {
    var gap = this.calculateYAxisGap(max, min, unit, digit);

    if (min < 0) {
      min = this.getNegativeMinNum(min, gap);
    }

    var yAxisData = [];

    for (var i = 0; i < unit; i++) {
      yAxisData.push(min + i * gap);
    }

    return yAxisData;
  },
  calculateYAxisGap: function calculateYAxisGap(max, min, unit, digit) {
    var gap;
    var maxMinGap = Math.ceil(max - min);

    if (maxMinGap <= 25) {
      gap = 5;
    } else if (maxMinGap <= 50) {
      gap = 10;
    } else if (maxMinGap <= 100) {
      gap = 20;
    } else if (maxMinGap <= 150) {
      gap = 30;
    } else if (maxMinGap <= 200) {
      gap = 40;
    } else {
      var multipleNum = Math.ceil(maxMinGap / 50 / 5);
      gap = multipleNum * 50;
    }

    return gap;
  }
});
// CONCATENATED MODULE: ./src/js/charts/chartBasic.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var chartBasic_ChartBasic =
/*#__PURE__*/
function () {
  function ChartBasic(_ref) {
    var padding = _ref.padding,
        type = _ref.type,
        size = _ref.size,
        containerEl = _ref.containerEl,
        data = _ref.data,
        options = _ref.options;

    _classCallCheck(this, ChartBasic);

    this.padding = !options.hasOwnProperty(padding) ? variables.DEFAULT_PADDING : padding;
    this.size = size;
    this.containerEl = helper.selectEl(containerEl);
    this.data = data;
    this.options = options;
    this.svgEl = this.appendSvgEl(size);
    this.tooltipEl = options.tooltip.show ? this.appendTooltipEl() : '';
    this.unit = variables.Y_AXIS_UNIT;
    this.digit = variables.DEFAULT_DIGIT;
    this.colors = ['#60c5ba', '#47b8e0', '#205e74'];
  }

  _createClass(ChartBasic, [{
    key: "appendSvgEl",
    value: function appendSvgEl(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;

      var svgEl = helper.createElNS("svg", "http://www.w3.org/2000/svg");

      svgEl.setAttribute("width", width);
      svgEl.setAttribute("height", height);
      svgEl.setAttribute("viewBox", "0 0 ".concat(width, " ").concat(height));
      return svgEl;
    }
  }, {
    key: "appendTooltipEl",
    value: function appendTooltipEl() {
      var tooltipEl = helper.createEl("div");

      tooltipEl.setAttribute("class", "tooltip");
      return tooltipEl;
    }
  }, {
    key: "drawXAxis",
    value: function drawXAxis(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          padding = _ref4[0],
          _ref4$ = _ref4[1],
          width = _ref4$.width,
          height = _ref4$.height;

      var axisLabel = {
        x: width - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES,
        y: height - padding / variables.DEFAULT_PADDING_DIVISION_TIMES
      };
      var axisLine = {
        left: {
          x: padding,
          y: height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES
        },
        right: {
          x: width - padding,
          y: height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES
        }
      };
      var xAxisLabel = this.options.xAxis.show ? "<text x=\"".concat(axisLabel.x, "\" y=\"").concat(axisLabel.y, "\">").concat(this.options.xAxis.title, "</text>") : "";
      this.svgEl.innerHTML += "\n      <g class=\"axis x-axis\">\n        ".concat(xAxisLabel, "\n        <line x1=\"").concat(axisLine.left.x, "\" x2=\"").concat(axisLine.right.x, "\" y1=\"").concat(axisLine.left.y, "\" y2=\"").concat(axisLine.right.y, "\" />\n      </g>\n    ");
    }
  }, {
    key: "drawXAxisLabels",
    value: function drawXAxisLabels(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 3),
          padding = _ref6[0],
          size = _ref6[1],
          xAxisData = _ref6[2];

      var xAxisWidth = calculate.getXAxisWidth(size.width, padding);

      var gap = calculate.calculateXAxisGap(xAxisWidth, xAxisData.length);

      var xAxisLabels = xAxisData.map(function (data, index) {
        return "\n        <text x=\"".concat(padding + gap * index, "\" y=\"").concat(size.height - padding * variables.X_AXIS_LABEL_PADDING_MULTIPLE_TIMES, "\">").concat(data, "</text>\n        <line x1=\"").concat(padding + gap * index, "\" x2=\"").concat(padding + gap * index, "\" y1=\"").concat(size.height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES, "\" y2=\"").concat(size.height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES + variables.AXIS_LABEL_LINE_SIZE, "\" />\n      ");
      }).join("");
      this.svgEl.innerHTML += "<g class=\"labels x-axis-labels\">".concat(xAxisLabels, "</g>");
    }
  }, {
    key: "drawYAxis",
    value: function drawYAxis(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          padding = _ref8[0],
          _ref8$ = _ref8[1],
          width = _ref8$.width,
          height = _ref8$.height;

      var axisLabel = {
        x: 0,
        y: padding / variables.DEFAULT_PADDING_DIVISION_TIMES
      };
      var axisLine = {
        left: {
          x: padding,
          y: height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES
        },
        right: {
          x: padding,
          y: padding
        }
      };
      var yAxisLabel = this.options.yAxis.show ? "<text x=\"".concat(axisLabel.x, "\" y=\"").concat(axisLabel.y, "\">").concat(this.options.yAxis.title, "</text>") : "";
      this.svgEl.innerHTML += "\n      <g class=\"axis y-axis\">\n        ".concat(yAxisLabel, "\n        <line x1=\"").concat(axisLine.left.x, "\" x2=\"").concat(axisLine.right.x, "\" y1=\"").concat(axisLine.left.y, "\" y2=\"").concat(axisLine.right.y, "\" />\n      </g>\n    ");
    }
  }, {
    key: "drawYAxisLabels",
    value: function drawYAxisLabels(_ref9) {
      var _ref10 = _slicedToArray(_ref9, 5),
          padding = _ref10[0],
          size = _ref10[1],
          series = _ref10[2],
          unit = _ref10[3],
          digit = _ref10[4];

      var showGrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var max = calculate.getArraysMax(calculate.getDataSet(series));

      var min = calculate.getArraysMin(calculate.getDataSet(series)) < 0 ? calculate.getArraysMin(calculate.getDataSet(series)) : 0;

      var yAxisHeight = calculate.getYAxisHeight(size.height, padding);

      var yAxisData = calculate.calculateYAxis(max, min, unit, digit);

      var yAxisLabels = yAxisData.map(function (data, index) {
        return "\n        <text x=\"".concat(padding / variables.DEFAULT_PADDING_DIVISION_TIMES * variables.Y_AXIS_LABEL_PADDING_MULTIPLE_TIMES, "\" y=\"").concat(yAxisHeight - yAxisHeight / unit * index, "\">").concat(data, "</text>\n        <line x1=\"").concat(padding - variables.AXIS_LABEL_LINE_SIZE, "\" x2=\"").concat(padding, "\" y1=\"").concat(yAxisHeight - Math.round(yAxisHeight / unit * index), "\" y2=\"").concat(yAxisHeight - Math.round(yAxisHeight / unit * index), "\" />\n      ");
      }).join("");
      this.svgEl.innerHTML += "<g class=\"labels y-axis-labels\">".concat(yAxisLabels, "</g>");

      if (showGrid) {
        this.drawYAxisGrid({
          padding: padding,
          size: size,
          yAxisData: yAxisData,
          unit: unit
        });
      }
    }
  }, {
    key: "drawYAxisGrid",
    value: function drawYAxisGrid(_ref11) {
      var padding = _ref11.padding,
          size = _ref11.size,
          yAxisData = _ref11.yAxisData,
          unit = _ref11.unit;

      var yAxisHeight = calculate.getYAxisHeight(size.height, padding);

      var yAxisGrid = yAxisData.map(function (data, index) {
        return "<line x1=\"".concat(padding, "\" x2=\"").concat(size.width - padding, "\" y1=\"").concat(yAxisHeight - Math.round(yAxisHeight / unit * index), "\" y2=\"").concat(yAxisHeight - Math.round(yAxisHeight / unit * index), "\" />");
      }).join("");
      this.svgEl.innerHTML += "<g class=\"grid y-axis-grid\">".concat(yAxisGrid, "</g>");
    }
  }, {
    key: "addTooltipEvent",
    value: function addTooltipEvent(e) {
      if (e.target.nodeName.toLowerCase() !== 'circle') {
        this.tooltipEl.style.left = "".concat(variables.TOOLTIP_HIDE_LEFT_POSITION, "px");
      } else {
        var data = e.target.dataset;
        this.tooltipEl.innerHTML = "\n        <h2 class=\"tooltip__title\">".concat(data.date, "</h2>\n        <p class=\"tooltip__desc\">\n          <span class=\"tooltip__line\" style=\"background: ").concat(data.color, "\"></span>\n          ").concat(data.value, "\n        </p>\n      ");
        this.tooltipEl.style.left = "".concat(e.clientX + variables.TOOLTIP_PADDINT_LEFT, "px");
        this.tooltipEl.style.top = "".concat(e.clientY + variables.TOOLTIP_PADDINT_TOP, "px");
      }
    }
  }, {
    key: "drawChart",
    value: function drawChart(containerEl, tooltipEl, svgEl) {
      containerEl.classList.add('dopyo-chart');
      containerEl.style.minWidth = "".concat(this.size.width, "px");
      tooltipEl && containerEl.appendChild(tooltipEl);
      containerEl.appendChild(svgEl);
    } // *********************
    // Test
    // *********************
    // addData(option) {
    //   this.data.xAxis.push(option.xAxis);
    //   option.series.forEach(a => {
    //     this.data.series.forEach(b => {
    //       if (a.name === b.name) {
    //         b.data.push(a.data);
    //       }
    //     })
    //   })
    //   this.resetChart();
    //   this.init();
    // }
    // resetChart() {
    //   document.querySelector('svg').innerHTML = "";
    //   this.svg = this.appendSvgEl(this.size);
    // }

  }]);

  return ChartBasic;
}();


// CONCATENATED MODULE: ./src/js/charts/lineChart.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function lineChart_slicedToArray(arr, i) { return lineChart_arrayWithHoles(arr) || lineChart_iterableToArrayLimit(arr, i) || lineChart_nonIterableRest(); }

function lineChart_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function lineChart_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function lineChart_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function lineChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lineChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lineChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) lineChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) lineChart_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var lineChart_LineChart =
/*#__PURE__*/
function (_ChartBasic) {
  _inherits(LineChart, _ChartBasic);

  function LineChart(_ref) {
    var size = _ref.size,
        containerEl = _ref.containerEl,
        data = _ref.data,
        options = _ref.options;

    lineChart_classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(LineChart).call(this, {
      size: size,
      containerEl: containerEl,
      data: data,
      options: options
    }));
  }

  lineChart_createClass(LineChart, [{
    key: "render",
    value: function render() {
      this.drawXAxis([this.padding, this.size]);
      this.drawXAxisLabels([this.padding, this.size, this.data.xAxis]);
      this.drawYAxis([this.padding, this.size]);
      this.drawYAxisLabels([this.padding, this.size, this.data.series, this.unit, this.digit]);
      this.drawData([this.padding, this.size, this.data, this.unit, this.digit]);
      this.tooltipEl && helper.addEventToEl(this.svgEl, 'mouseover', this.addTooltipEvent, this);
      this.drawChart(this.containerEl, this.tooltipEl, this.svgEl);
    }
  }, {
    key: "drawData",
    value: function drawData(_ref2) {
      var _this = this;

      var _ref3 = lineChart_slicedToArray(_ref2, 5),
          padding = _ref3[0],
          size = _ref3[1],
          data = _ref3[2],
          unit = _ref3[3],
          digit = _ref3[4];

      var max = calculate.getArraysMax(calculate.getDataSet(data.series));

      var min = calculate.getArraysMin(calculate.getDataSet(data.series)) < 0 ? calculate.getArraysMin(calculate.getDataSet(data.series)) : 0;

      var yAxisData = calculate.calculateYAxis(max, min, unit, digit);

      var yAxisHeight = calculate.getYAxisHeight(size.height, padding);

      var standardYAxis = {
        value: calculate.calculateYAxisGap(max, min, unit, digit),
        yCoordinate: yAxisHeight / unit
      };
      var zeroIndex = yAxisData.findIndex(function (num) {
        return num === 0;
      });

      var xAxisGap = calculate.calculateXAxisGap(calculate.getXAxisWidth(size.width, padding), data.xAxis.length);

      data.series.forEach(function (item, index) {
        item.calculatedData = item.data.map(function (y, i) {
          return [Math.round(padding + xAxisGap * i), Math.round(yAxisHeight - y * standardYAxis.yCoordinate / standardYAxis.value + -Math.round(standardYAxis.yCoordinate * zeroIndex))];
        });
      });
      this.svgEl.innerHTML += data.series.map(function (item, index) {
        return "<g class=\"data\">\n        ".concat(_this.drawLine(item, index), "\n        ").concat(_this.drawDots(data.xAxis, item, index), "\n      </g>\n      ");
      }).join("");
    }
  }, {
    key: "drawDots",
    value: function drawDots(xAxis, item, index) {
      var _this2 = this;

      var dots = item.calculatedData.map(function (x, i) {
        return "<circle cx=\"".concat(x[0], "\" cy=\"").concat(x[1], "\" r=\"8\" stroke=\"").concat(_this2.colors[index], "\" fill=\"#fff\" data-color=\"").concat(_this2.colors[index], "\" data-date=\"").concat(xAxis[i], "\" data-value=\"").concat(item.data[i], "\" />");
      }).join("");
      return "<g class=\"dots\">".concat(dots, "</g>");
    }
  }, {
    key: "drawLine",
    value: function drawLine(item, index) {
      var tmpLine = item.calculatedData.reduce(function (accum, curr, idx, array) {
        if (!Array.isArray(curr)) {
          return;
        } else {
          if (idx === 0) {
            accum += 'M ';
          } else if (idx === 1) {
            accum += 'L ';
          }

          return accum += "".concat(curr.join(","), " ");
        }
      }, "");
      return "<g class=\"line\"><path fill=\"none\" d=\"".concat(tmpLine, "\" stroke=\"").concat(this.colors[index], "\" /></g>");
    }
  }]);

  return LineChart;
}(chartBasic_ChartBasic);


// CONCATENATED MODULE: ./src/js/charts/areaChart.js
function areaChart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { areaChart_typeof = function _typeof(obj) { return typeof obj; }; } else { areaChart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return areaChart_typeof(obj); }

function areaChart_toConsumableArray(arr) { return areaChart_arrayWithoutHoles(arr) || areaChart_iterableToArray(arr) || areaChart_nonIterableSpread(); }

function areaChart_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function areaChart_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function areaChart_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function areaChart_slicedToArray(arr, i) { return areaChart_arrayWithHoles(arr) || areaChart_iterableToArrayLimit(arr, i) || areaChart_nonIterableRest(); }

function areaChart_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function areaChart_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function areaChart_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function areaChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function areaChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function areaChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) areaChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) areaChart_defineProperties(Constructor, staticProps); return Constructor; }

function areaChart_possibleConstructorReturn(self, call) { if (call && (areaChart_typeof(call) === "object" || typeof call === "function")) { return call; } return areaChart_assertThisInitialized(self); }

function areaChart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function areaChart_getPrototypeOf(o) { areaChart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return areaChart_getPrototypeOf(o); }

function areaChart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) areaChart_setPrototypeOf(subClass, superClass); }

function areaChart_setPrototypeOf(o, p) { areaChart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return areaChart_setPrototypeOf(o, p); }






var areaChart_AreaChart =
/*#__PURE__*/
function (_LineChart) {
  areaChart_inherits(AreaChart, _LineChart);

  function AreaChart(_ref) {
    var size = _ref.size,
        containerEl = _ref.containerEl,
        data = _ref.data,
        options = _ref.options;

    areaChart_classCallCheck(this, AreaChart);

    return areaChart_possibleConstructorReturn(this, areaChart_getPrototypeOf(AreaChart).call(this, {
      size: size,
      containerEl: containerEl,
      data: data,
      options: options
    }));
  }

  areaChart_createClass(AreaChart, [{
    key: "drawData",
    value: function drawData(_ref2) {
      var _this = this;

      var _ref3 = areaChart_slicedToArray(_ref2, 5),
          padding = _ref3[0],
          size = _ref3[1],
          data = _ref3[2],
          unit = _ref3[3],
          digit = _ref3[4];

      var max = calculate.getArraysMax(calculate.getDataSet(data.series));

      var min = calculate.getArraysMin(calculate.getDataSet(data.series)) < 0 ? calculate.getArraysMin(calculate.getDataSet(data.series)) : 0;

      var yAxisData = calculate.calculateYAxis(max, min, unit, digit);

      var yAxisHeight = calculate.getYAxisHeight(size.height, padding);

      var standardYAxis = {
        value: calculate.calculateYAxisGap(max, min, unit, digit),
        yCoordinate: yAxisHeight / unit
      };
      var zeroIndex = yAxisData.findIndex(function (num) {
        return num === 0;
      });

      var xAxisGap = calculate.calculateXAxisGap(calculate.getXAxisWidth(size.width, padding), data.xAxis.length);

      data.series.forEach(function (item, index) {
        item.calculatedData = item.data.map(function (y, i) {
          return [Math.round(padding + xAxisGap * i), Math.round(yAxisHeight - y * standardYAxis.yCoordinate / standardYAxis.value + -Math.round(standardYAxis.yCoordinate * zeroIndex))];
        });
      });
      this.svgEl.innerHTML += data.series.map(function (item, index) {
        return "<g class=\"data\">\n        ".concat(_this.drawArea(item, index), "\n        ").concat(_this.drawLine(item, index), "\n        ").concat(_this.drawDots(data.xAxis, item, index), "\n      </g>\n      ");
      }).join("");
    }
  }, {
    key: "drawArea",
    value: function drawArea(item, index) {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      var padding = this.padding;
      var tmpCalculatedData = [].concat(areaChart_toConsumableArray(item.calculatedData), [[item.calculatedData[item.calculatedData.length - 1][0], height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES], [padding, height - padding * variables.DEFAULT_PADDING_MULTIPLE_TIMES]]);
      var tmpLine = tmpCalculatedData.reduce(function (accum, curr, idx, array) {
        if (!Array.isArray(curr)) {
          return;
        } else {
          if (idx === 0) {
            accum += 'M ';
          } else if (idx === 1) {
            accum += 'L ';
          }

          return accum += "".concat(curr.join(","), " ");
        }
      }, "");
      return "<g class=\"area\">\n      <path fill-opacity=\"0.5\" fill=\"".concat(this.colors[index], "\" d=\"").concat(tmpLine, " Z\" />\n    </g>");
    }
  }]);

  return AreaChart;
}(lineChart_LineChart);


// CONCATENATED MODULE: ./src/js/chart.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dopyo", function() { return dopyo; });





var dopyo = {
  createChart: function createChart(_ref) {
    var type = _ref.type,
        size = _ref.size,
        containerEl = _ref.containerEl,
        data = _ref.data,
        options = _ref.options;

    var chartType = helper.findKey(variables.CHART_TYPES, type);

    switch (chartType) {
      case 'LINE_CHART':
        this.drawLineChart({
          size: size,
          containerEl: containerEl,
          data: data,
          options: options
        });
        break;

      case 'BAR_CHART':
        break;

      case 'PIE_CHART':
        break;

      case 'AREA_CHART':
        this.drawAreaChart({
          size: size,
          containerEl: containerEl,
          data: data,
          options: options
        });
        break;
    }
  },
  drawLineChart: function drawLineChart(_ref2) {
    var size = _ref2.size,
        containerEl = _ref2.containerEl,
        data = _ref2.data,
        options = _ref2.options;
    var chart = new lineChart_LineChart({
      size: size,
      containerEl: containerEl,
      data: data,
      options: options
    });
    chart.render();
  },
  drawAreaChart: function drawAreaChart(_ref3) {
    var size = _ref3.size,
        containerEl = _ref3.containerEl,
        data = _ref3.data,
        options = _ref3.options;
    var chart = new areaChart_AreaChart({
      size: size,
      containerEl: containerEl,
      data: data,
      options: options
    });
    chart.render();
  }
};


/***/ })
/******/ ]);
});