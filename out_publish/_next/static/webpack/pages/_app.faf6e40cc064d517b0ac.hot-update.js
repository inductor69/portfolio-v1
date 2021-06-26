self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Grid.js":
/*!***********************************!*\
  !*** ./components/layout/Grid.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/gridStyles */ "./components/layout/gridStyles.js");
/* harmony import */ var helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/gridHelpers */ "./helpers/gridHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\adity\\Desktop\\portfolio-v1-main\\components\\layout\\Grid.js",
    _s = $RefreshSig$();







function Grid(_ref) {
  _s();

  var gridState = _ref.gridState,
      setGridState = _ref.setGridState;
  var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    gridState === 'open' && controls.start('visible');
    gridState === 'close' && controls.start('close');
  }, [gridState]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    gridState: gridState,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 0,
        color: '#F1D3B9',
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 1,
        color: '#DF9E98',
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 2,
        color: '#fefaf6',
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid__item-content btn",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
          animate: controls,
          initial: "hidden",
          variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return setGridState('close');
            },
            className: "menu-trigger",
            children: "- close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 3,
        color: '#9ED4D4',
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 4,
        color: '#232320',
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "grid__link grid__item-content home",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
            animate: controls,
            initial: "hidden",
            variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              onClick: function onClick() {
                return setGridState('close');
              },
              className: "grid__item-title ",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 5,
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "#",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "grid__link grid__item-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
            animate: controls,
            initial: "hidden",
            variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "grid__item-title",
              children: "project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "grid__item-desc",
              children: "Under Construction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 6,
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "#",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "grid__link grid__item-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
            animate: controls,
            initial: "hidden",
            variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "grid__item-title",
              children: "project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "grid__item-desc",
              children: "Under Construction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 7,
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem7,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: "/images/grid/griddy.jpg",
          alt: "griddy",
          layout: "fill",
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridOverLay, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "#",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "grid__link grid__item-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
            animate: controls,
            initial: "hidden",
            variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
            onClick: function onClick() {
              return setGridState('close');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "grid__item-title",
              children: "project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 16
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "grid__item-desc",
              children: "Under Construction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 8,
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem8
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "#",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "grid__link grid__item-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
            animate: controls,
            initial: "hidden",
            variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "grid__item-title",
              children: "project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "grid__item-desc",
              children: "Under Construction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemBg, {
        pos: 9,
        gridState: gridState,
        animate: controls,
        initial: "hidden",
        variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridItem9,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: "/images/grid/hotflix.jpg",
          alt: "hotflix",
          layout: "fill",
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridOverLay, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/project/portfolio",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "grid__link grid__item-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_gridStyles__WEBPACK_IMPORTED_MODULE_1__.GridItemInner, {
            onClick: function onClick() {
              return setGridState('close');
            },
            animate: controls,
            initial: "hidden",
            variants: helpers_gridHelpers__WEBPACK_IMPORTED_MODULE_2__.gridText,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "grid__item-title",
              children: "project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "grid__item-desc",
              children: "Under Construction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Grid, "6pZ2lBElA3YLtcQOKE/nS/LmH94=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation];
});

_c = Grid;

var _c;

$RefreshReg$(_c, "Grid");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvR3JpZC5qcyJdLCJuYW1lcyI6WyJHcmlkIiwiZ3JpZFN0YXRlIiwic2V0R3JpZFN0YXRlIiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJzdGFydCIsImdyaWRWYXJpYW50cyIsImdyaWRJdGVtMCIsImdyaWRJdGVtMSIsImdyaWRJdGVtMiIsImdyaWRJdGVtMyIsImdyaWRJdGVtNCIsImdyaWRJdGVtNSIsImdyaWRJdGVtNiIsImdyaWRJdGVtOCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQ3hELE1BQU1DLFFBQVEsR0FBR0MsMkRBQVksRUFBN0I7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLGFBQVMsS0FBSyxNQUFkLElBQXdCRSxRQUFRLENBQUNHLEtBQVQsQ0FBZSxTQUFmLENBQXhCO0FBQ0FMLGFBQVMsS0FBSyxPQUFkLElBQXlCRSxRQUFRLENBQUNHLEtBQVQsQ0FBZSxPQUFmLENBQXpCO0FBQ0QsR0FIUSxFQUdOLENBQUNMLFNBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsOERBQUQ7QUFBYSxhQUFTLEVBQUVBLFNBQXhCO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQSw2QkFDRSw4REFBQyxvRUFBRDtBQUNFLFdBQUcsRUFBRSxDQURQO0FBRUUsYUFBSyxFQUFFLFNBRlQ7QUFHRSxpQkFBUyxFQUFFQSxTQUhiO0FBSUUsZUFBTyxFQUFFRSxRQUpYO0FBS0UsZUFBTyxFQUFDLFFBTFY7QUFNRSxnQkFBUSxFQUFFSSwwREFBc0JDO0FBTmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFB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QUFBO0FBQUEsZ0JBUEYsZUFhRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZ0JFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLG9CQUFYO0FBQWdDLGdCQUFRLE1BQXhDO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLCtCQUFiO0FBQUEsaUNBQ0UsOERBQUMsdUVBQUQ7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1MLFlBQVksQ0FBQyxPQUFELENBQWxCO0FBQUEsYUFEWDtBQUVFLG1CQUFPLEVBQUVDLFFBRlg7QUFHRSxtQkFBTyxFQUFDLFFBSFY7QUFJRSxvQkFBUSxFQUFFSSx5REFKWjtBQUFBLG9DQU1FO0FBQUksdUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixlQU9FO0FBQU0sdUJBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK01EOztHQXZOdUJQLEk7VUFDTEksdUQ7OztLQURLSixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmFmNmU0MGNjMDY0ZDUxN2IwYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdjb21wb25lbnRzL2xheW91dC9ncmlkU3R5bGVzJztcbmltcG9ydCAqIGFzIGdyaWRWYXJpYW50cyBmcm9tICdoZWxwZXJzL2dyaWRIZWxwZXJzJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQoeyBncmlkU3RhdGUsIHNldEdyaWRTdGF0ZSB9KSB7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBncmlkU3RhdGUgPT09ICdvcGVuJyAmJiBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xuICAgIGdyaWRTdGF0ZSA9PT0gJ2Nsb3NlJyAmJiBjb250cm9scy5zdGFydCgnY2xvc2UnKTtcbiAgfSwgW2dyaWRTdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN0eWxlZC5HcmlkIGdyaWRTdGF0ZT17Z3JpZFN0YXRlfT5cbiAgICAgIDxzdHlsZWQuR3JpZEl0ZW0+XG4gICAgICAgIDxzdHlsZWQuR3JpZEl0ZW1CZ1xuICAgICAgICAgIHBvcz17MH1cbiAgICAgICAgICBjb2xvcj17JyNGMUQzQjknfVxuICAgICAgICAgIGdyaWRTdGF0ZT17Z3JpZFN0YXRlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHMuZ3JpZEl0ZW0wfVxuICAgICAgICA+PC9zdHlsZWQuR3JpZEl0ZW1CZz5cbiAgICAgIDwvc3R5bGVkLkdyaWRJdGVtPlxuICAgICAgPHN0eWxlZC5HcmlkSXRlbT5cbiAgICAgICAgPHN0eWxlZC5HcmlkSXRlbUJnXG4gICAgICAgICAgcG9zPXsxfVxuICAgICAgICAgIGNvbG9yPXsnI0RGOUU5OCd9XG4gICAgICAgICAgZ3JpZFN0YXRlPXtncmlkU3RhdGV9XG4gICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgdmFyaWFudHM9e2dyaWRWYXJpYW50cy5ncmlkSXRlbTF9XG4gICAgICAgID48L3N0eWxlZC5HcmlkSXRlbUJnPlxuICAgICAgPC9zdHlsZWQuR3JpZEl0ZW0+XG4gICAgICA8c3R5bGVkLkdyaWRJdGVtPlxuICAgICAgICA8c3R5bGVkLkdyaWRJdGVtQmdcbiAgICAgICAgICBwb3M9ezJ9XG4gICAgICAgICAgY29sb3I9eycjZmVmYWY2J31cbiAgICAgICAgICBncmlkU3RhdGU9e2dyaWRTdGF0ZX1cbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YXJpYW50cz17Z3JpZFZhcmlhbnRzLmdyaWRJdGVtMn1cbiAgICAgICAgPjwvc3R5bGVkLkdyaWRJdGVtQmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1jb250ZW50IGJ0blwiPlxuICAgICAgICAgIDxzdHlsZWQuR3JpZEl0ZW1Jbm5lclxuICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHMuZ3JpZFRleHR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHcmlkU3RhdGUoJ2Nsb3NlJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtdHJpZ2dlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIC0gY2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc3R5bGVkLkdyaWRJdGVtSW5uZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zdHlsZWQuR3JpZEl0ZW0+XG4gICAgICA8c3R5bGVkLkdyaWRJdGVtPlxuICAgICAgICA8c3R5bGVkLkdyaWRJdGVtQmdcbiAgICAgICAgICBwb3M9ezN9XG4gICAgICAgICAgY29sb3I9eycjOUVENEQ0J31cbiAgICAgICAgICBncmlkU3RhdGU9e2dyaWRTdGF0ZX1cbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YXJpYW50cz17Z3JpZFZhcmlhbnRzLmdyaWRJdGVtM31cbiAgICAgICAgPjwvc3R5bGVkLkdyaWRJdGVtQmc+XG4gICAgICA8L3N0eWxlZC5HcmlkSXRlbT5cbiAgICAgIDxzdHlsZWQuR3JpZEl0ZW0+XG4gICAgICAgIDxzdHlsZWQuR3JpZEl0ZW1CZ1xuICAgICAgICAgIHBvcz17NH1cbiAgICAgICAgICBjb2xvcj17JyMyMzIzMjAnfVxuICAgICAgICAgIGdyaWRTdGF0ZT17Z3JpZFN0YXRlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHMuZ3JpZEl0ZW00fVxuICAgICAgICA+PC9zdHlsZWQuR3JpZEl0ZW1CZz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmlkX19saW5rIGdyaWRfX2l0ZW0tY29udGVudCBob21lXCI+XG4gICAgICAgICAgICA8c3R5bGVkLkdyaWRJdGVtSW5uZXJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICB2YXJpYW50cz17Z3JpZFZhcmlhbnRzLmdyaWRUZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHcmlkU3RhdGUoJ2Nsb3NlJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS10aXRsZSBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9zdHlsZWQuR3JpZEl0ZW1Jbm5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc3R5bGVkLkdyaWRJdGVtPlxuICAgICAgPHN0eWxlZC5HcmlkSXRlbT5cbiAgICAgICAgPHN0eWxlZC5HcmlkSXRlbUJnXG4gICAgICAgICAgcG9zPXs1fVxuICAgICAgICAgIGdyaWRTdGF0ZT17Z3JpZFN0YXRlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHMuZ3JpZEl0ZW01fVxuICAgICAgICA+PC9zdHlsZWQuR3JpZEl0ZW1CZz5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmlkX19saW5rIGdyaWRfX2l0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgPHN0eWxlZC5HcmlkSXRlbUlubmVyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2dyaWRWYXJpYW50cy5ncmlkVGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tdGl0bGVcIj5wcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1kZXNjXCI+VW5kZXIgQ29uc3RydWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPC9zdHlsZWQuR3JpZEl0ZW1Jbm5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc3R5bGVkLkdyaWRJdGVtPlxuICAgICAgPHN0eWxlZC5HcmlkSXRlbT5cbiAgICAgICAgPHN0eWxlZC5HcmlkSXRlbUJnXG4gICAgICAgICAgcG9zPXs2fVxuICAgICAgICAgIGdyaWRTdGF0ZT17Z3JpZFN0YXRlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHMuZ3JpZEl0ZW02fVxuICAgICAgICA+PC9zdHlsZWQuR3JpZEl0ZW1CZz5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmlkX19saW5rIGdyaWRfX2l0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgPHN0eWxlZC5HcmlkSXRlbUlubmVyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2dyaWRWYXJpYW50cy5ncmlkVGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tdGl0bGVcIj5wcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1kZXNjXCI+VW5kZXIgQ29uc3RydWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPC9zdHlsZWQuR3JpZEl0ZW1Jbm5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc3R5bGVkLkdyaWRJdGVtPlxuICAgICAgPHN0eWxlZC5HcmlkSXRlbT5cbiAgICAgICAgPHN0eWxlZC5HcmlkSXRlbUJnXG4gICAgICAgICAgcG9zPXs3fVxuICAgICAgICAgIGdyaWRTdGF0ZT17Z3JpZFN0YXRlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHMuZ3JpZEl0ZW03fVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2dyaWQvZ3JpZGR5LmpwZ1wiXG4gICAgICAgICAgICBhbHQ9XCJncmlkZHlcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgLz4gXG4gICAgICAgICAgPHN0eWxlZC5HcmlkT3ZlckxheSAvPlxuICAgICAgICA8L3N0eWxlZC5HcmlkSXRlbUJnPlxuICAgICAgICA8TGluayBocmVmPVwiI1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyaWRfX2xpbmsgZ3JpZF9faXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3R5bGVkLkdyaWRJdGVtSW5uZXJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICB2YXJpYW50cz17Z3JpZFZhcmlhbnRzLmdyaWRUZXh0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHcmlkU3RhdGUoJ2Nsb3NlJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS10aXRsZVwiPnByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkX19pdGVtLWRlc2NcIj5VbmRlciBDb25zdHJ1Y3Rpb248L3NwYW4+XG4gICAgICAgICAgICA8L3N0eWxlZC5HcmlkSXRlbUlubmVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zdHlsZWQuR3JpZEl0ZW0+XG4gICAgICA8c3R5bGVkLkdyaWRJdGVtPlxuICAgICAgICA8c3R5bGVkLkdyaWRJdGVtQmdcbiAgICAgICAgICBwb3M9ezh9XG4gICAgICAgICAgZ3JpZFN0YXRlPXtncmlkU3RhdGV9XG4gICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgdmFyaWFudHM9e2dyaWRWYXJpYW50cy5ncmlkSXRlbTh9XG4gICAgICAgID48L3N0eWxlZC5HcmlkSXRlbUJnPlxuICAgICAgICA8TGluayBocmVmPVwiI1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyaWRfX2xpbmsgZ3JpZF9faXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3R5bGVkLkdyaWRJdGVtSW5uZXJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICB2YXJpYW50cz17Z3JpZFZhcmlhbnRzLmdyaWRUZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS10aXRsZVwiPnByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkX19pdGVtLWRlc2NcIj5VbmRlciBDb25zdHJ1Y3Rpb248L3NwYW4+XG4gICAgICAgICAgICA8L3N0eWxlZC5HcmlkSXRlbUlubmVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zdHlsZWQuR3JpZEl0ZW0+XG4gICAgICA8c3R5bGVkLkdyaWRJdGVtPlxuICAgICAgICA8c3R5bGVkLkdyaWRJdGVtQmdcbiAgICAgICAgICBwb3M9ezl9XG4gICAgICAgICAgZ3JpZFN0YXRlPXtncmlkU3RhdGV9XG4gICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgdmFyaWFudHM9e2dyaWRWYXJpYW50cy5ncmlkSXRlbTl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZ3JpZC9ob3RmbGl4LmpwZ1wiXG4gICAgICAgICAgICBhbHQ9XCJob3RmbGl4XCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHN0eWxlZC5HcmlkT3ZlckxheSAvPlxuICAgICAgICA8L3N0eWxlZC5HcmlkSXRlbUJnPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3QvcG9ydGZvbGlvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JpZF9fbGluayBncmlkX19pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdHlsZWQuR3JpZEl0ZW1Jbm5lclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHcmlkU3RhdGUoJ2Nsb3NlJyl9XG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e2dyaWRWYXJpYW50cy5ncmlkVGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tdGl0bGVcIj5wcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1kZXNjXCI+VW5kZXIgQ29uc3RydWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPC9zdHlsZWQuR3JpZEl0ZW1Jbm5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc3R5bGVkLkdyaWRJdGVtPlxuICAgIDwvc3R5bGVkLkdyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9