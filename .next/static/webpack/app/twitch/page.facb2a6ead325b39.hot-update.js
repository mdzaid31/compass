"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/twitch/page",{

/***/ "(app-pages-browser)/./src/app/twitch/page.tsx":
/*!*********************************!*\
  !*** ./src/app/twitch/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Twitch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mintbase_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mintbase-js/react */ \"(app-pages-browser)/./node_modules/@mintbase-js/react/lib/index.js\");\n/* harmony import */ var _mintbase_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mintbase_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mintbase_js_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mintbase-js/sdk */ \"(app-pages-browser)/./node_modules/@mintbase-js/sdk/lib/index.js\");\n/* harmony import */ var _mintbase_js_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mintbase_js_sdk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst streamer = \"compass_cs2\";\nfunction Twitch() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const { selector, activeAccountId } = (0,_mintbase_js_react__WEBPACK_IMPORTED_MODULE_1__.useMbWallet)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const myCustomContractCall = {\n        signerId: activeAccountId,\n        contractAddress: \"adamomarali.near\",\n        methodName: \"twitch_engagement\",\n        args: {},\n        gas: _mintbase_js_sdk__WEBPACK_IMPORTED_MODULE_2__.MAX_GAS,\n        deposit: 0\n    };\n    const makeSmartContractCall = async ()=>{\n        const wallet = await selector.wallet();\n        const options = {\n            // account\n            wallet,\n            callbackUrl: \"http://localhost:3000\"\n        };\n        // call sign with options,\n        return await (0,_mintbase_js_sdk__WEBPACK_IMPORTED_MODULE_2__.execute)(options, myCustomContractCall);\n    };\n    function receiveNear() {\n        makeSmartContractCall().then((res)=>console.log(\"got transaction result:\", res)).catch((err)=>console.error(\"things went wrong\", err));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: \"url(/electro_giants.jpg)\",\n            backgroundSize: \"cover\",\n            height: \"100vh\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            flexDirection: \"column\",\n            padding: \"50px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    height: \"80%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        src: \"https://compass_cs2.twitch.tv/?video=2165846159&parent=www.raen.ai\",\n                        height: \"100%\",\n                        width: \"70%\",\n                        style: {\n                            border: \"none\",\n                            overflow: \"hidden\"\n                        },\n                        allowFullScreen: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadithyan.NAIR\\\\Desktop\\\\compass\\\\mainbasemint\\\\marketplace\\\\src\\\\app\\\\twitch\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        id: \"chat_embed\",\n                        src: \"https://www.twitch.tv/embed/\".concat(streamer, \"/chat?parent=marketbasemint.vercel.app\"),\n                        height: \"100%\",\n                        width: \"30%\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadithyan.NAIR\\\\Desktop\\\\compass\\\\mainbasemint\\\\marketplace\\\\src\\\\app\\\\twitch\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aadithyan.NAIR\\\\Desktop\\\\compass\\\\mainbasemint\\\\marketplace\\\\src\\\\app\\\\twitch\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            seconds > 5 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: \"#9664FF\",\n                    color: \"white\",\n                    border: \"none\",\n                    padding: \"10px 20px\",\n                    borderRadius: \"5px\",\n                    marginTop: \"20px\",\n                    cursor: \"pointer\",\n                    fontWeight: \"bold\"\n                },\n                onClick: receiveNear,\n                children: \"Recieve Near\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aadithyan.NAIR\\\\Desktop\\\\compass\\\\mainbasemint\\\\marketplace\\\\src\\\\app\\\\twitch\\\\page.tsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aadithyan.NAIR\\\\Desktop\\\\compass\\\\mainbasemint\\\\marketplace\\\\src\\\\app\\\\twitch\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Twitch, \"VH6PX5kEUcKwbRSPi+YHBIRxCqM=\", false, function() {\n    return [\n        _mintbase_js_react__WEBPACK_IMPORTED_MODULE_1__.useMbWallet\n    ];\n});\n_c = Twitch;\nvar _c;\n$RefreshReg$(_c, \"Twitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdHdpdGNoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHaUQ7QUFPdkI7QUFDeUI7QUFFbkQsTUFBTU0sV0FBVztBQUVGLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxFQUFFSyxRQUFRLEVBQUVDLGVBQWUsRUFBRSxHQUFHWCwrREFBV0E7SUFFakRJLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsV0FBV0MsWUFBWTtZQUMzQkosV0FBVyxDQUFDSyxjQUFnQkEsY0FBYztRQUM1QyxHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNSSx1QkFBOEQ7UUFDbEVDLFVBQVVOO1FBQ1ZPLGlCQUFpQjtRQUNqQkMsWUFBWTtRQUNaQyxNQUFNLENBQUM7UUFDUEMsS0FBS25CLHFEQUFPQTtRQUNab0IsU0FBUztJQUNYO0lBRUEsTUFBTUMsd0JBQXdCO1FBQzVCLE1BQU1DLFNBQVMsTUFBTWQsU0FBU2MsTUFBTTtRQUNwQyxNQUFNQyxVQUE4QjtZQUNsQyxVQUFVO1lBQ1ZEO1lBQ0FFLGFBQWE7UUFDZjtRQUVBLDBCQUEwQjtRQUMxQixPQUFRLE1BQU16Qix5REFBT0EsQ0FDbkJ3QixTQUNBVDtJQUVKO0lBRUEsU0FBU1c7UUFDUEosd0JBQ0dLLElBQUksQ0FBQyxDQUFDQyxNQUNMQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRixNQUV4Q0csS0FBSyxDQUFDLENBQUNDLE1BQVFILFFBQVFJLEtBQUssQ0FBQyxxQkFBcUJEO0lBQ3ZEO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NDLE9BQU87WUFDTEMsaUJBQWlCO1lBQ2pCQyxnQkFBZ0I7WUFDaEJDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsZUFBZTtZQUNmQyxTQUFTO1FBQ1g7OzBCQUVBLDhEQUFDVDtnQkFDQ0MsT0FBTztvQkFDTEksU0FBUztvQkFDVEcsZUFBZTtvQkFDZkYsZ0JBQWdCO29CQUNoQkMsWUFBWTtvQkFDWkcsT0FBTztvQkFDUE4sUUFBUTtvQkFDUk8sUUFBUTtnQkFDVjs7a0NBRUEsOERBQUNDO3dCQUNDQyxLQUFNO3dCQUNOVCxRQUFPO3dCQUNQTSxPQUFNO3dCQUNOVCxPQUFPOzRCQUNMYSxRQUFROzRCQUNSQyxVQUFVO3dCQUNaO3dCQUNBQyxpQkFBaUI7Ozs7OztrQ0FFbkIsOERBQUNKO3dCQUNDSyxJQUFHO3dCQUNISixLQUFLLCtCQUF3QyxPQUFUMUMsVUFBUzt3QkFDN0NpQyxRQUFPO3dCQUNQTSxPQUFNOzs7Ozs7Ozs7Ozs7WUFHVHJDLFVBQVUsbUJBQ1QsOERBQUM2QztnQkFDQ2pCLE9BQU87b0JBQ0xrQixpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQTixRQUFRO29CQUNSTCxTQUFTO29CQUNUWSxjQUFjO29CQUNkQyxXQUFXO29CQUNYQyxRQUFRO29CQUNSQyxZQUFZO2dCQUNkO2dCQUNBQyxTQUFTakM7MEJBQ1Y7Ozs7Ozs7Ozs7OztBQU1UO0dBeEd3QnBCOztRQUVnQlAsMkRBQVdBOzs7S0FGM0JPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdHdpdGNoL3BhZ2UudHN4PzY3YTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGaW5hbEV4ZWN1dGlvbk91dGNvbWUgfSBmcm9tIFwiQG1pbnRiYXNlLWpzL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlTWJXYWxsZXQgfSBmcm9tIFwiQG1pbnRiYXNlLWpzL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZXhlY3V0ZSxcclxuICBFeGVjdXRlQXJnc1Jlc3BvbnNlLFxyXG4gIE1BWF9HQVMsXHJcbiAgTmVhckNvbnRyYWN0Q2FsbCxcclxuICBOZWFyRXhlY3V0ZU9wdGlvbnMsXHJcbn0gZnJvbSBcIkBtaW50YmFzZS1qcy9zZGtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHN0cmVhbWVyID0gXCJjb21wYXNzX2NzMlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdGNoKCkge1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgc2VsZWN0b3IsIGFjdGl2ZUFjY291bnRJZCB9ID0gdXNlTWJXYWxsZXQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRTZWNvbmRzKChwcmV2U2Vjb25kcykgPT4gcHJldlNlY29uZHMgKyAxKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG15Q3VzdG9tQ29udHJhY3RDYWxsOiBOZWFyQ29udHJhY3RDYWxsPEV4ZWN1dGVBcmdzUmVzcG9uc2U+ID0ge1xyXG4gICAgc2lnbmVySWQ6IGFjdGl2ZUFjY291bnRJZCEsXHJcbiAgICBjb250cmFjdEFkZHJlc3M6IFwiYWRhbW9tYXJhbGkubmVhclwiLFxyXG4gICAgbWV0aG9kTmFtZTogXCJ0d2l0Y2hfZW5nYWdlbWVudFwiLFxyXG4gICAgYXJnczoge30sXHJcbiAgICBnYXM6IE1BWF9HQVMsXHJcbiAgICBkZXBvc2l0OiAwLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1ha2VTbWFydENvbnRyYWN0Q2FsbCA9IGFzeW5jICgpOiBQcm9taXNlPEZpbmFsRXhlY3V0aW9uT3V0Y29tZT4gPT4ge1xyXG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgc2VsZWN0b3Iud2FsbGV0KCk7XHJcbiAgICBjb25zdCBvcHRpb25zOiBOZWFyRXhlY3V0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIC8vIGFjY291bnRcclxuICAgICAgd2FsbGV0LFxyXG4gICAgICBjYWxsYmFja1VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsbCBzaWduIHdpdGggb3B0aW9ucyxcclxuICAgIHJldHVybiAoYXdhaXQgZXhlY3V0ZShcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgbXlDdXN0b21Db250cmFjdENhbGxcclxuICAgICkpIGFzIEZpbmFsRXhlY3V0aW9uT3V0Y29tZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiByZWNlaXZlTmVhcigpIHtcclxuICAgIG1ha2VTbWFydENvbnRyYWN0Q2FsbCgpXHJcbiAgICAgIC50aGVuKChyZXM6IEZpbmFsRXhlY3V0aW9uT3V0Y29tZSkgPT5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB0cmFuc2FjdGlvbiByZXN1bHQ6XCIsIHJlcylcclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcInRoaW5ncyB3ZW50IHdyb25nXCIsIGVycikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9lbGVjdHJvX2dpYW50cy5qcGcpXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCI1MHB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBzcmM9e2BodHRwczovL2NvbXBhc3NfY3MyLnR3aXRjaC50di8/dmlkZW89MjE2NTg0NjE1OSZwYXJlbnQ9d3d3LnJhZW4uYWlgfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjcwJVwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XHJcbiAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIGlkPVwiY2hhdF9lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy50d2l0Y2gudHYvZW1iZWQvJHtzdHJlYW1lcn0vY2hhdD9wYXJlbnQ9bWFya2V0YmFzZW1pbnQudmVyY2VsLmFwcGB9XHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzAlXCJcclxuICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2Vjb25kcyA+IDUgJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjOTY2NEZGXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17cmVjZWl2ZU5lYXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVjaWV2ZSBOZWFyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VNYldhbGxldCIsImV4ZWN1dGUiLCJNQVhfR0FTIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0cmVhbWVyIiwiVHdpdGNoIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJzZWxlY3RvciIsImFjdGl2ZUFjY291bnRJZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2U2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJteUN1c3RvbUNvbnRyYWN0Q2FsbCIsInNpZ25lcklkIiwiY29udHJhY3RBZGRyZXNzIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJnYXMiLCJkZXBvc2l0IiwibWFrZVNtYXJ0Q29udHJhY3RDYWxsIiwid2FsbGV0Iiwib3B0aW9ucyIsImNhbGxiYWNrVXJsIiwicmVjZWl2ZU5lYXIiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW4iLCJpZnJhbWUiLCJzcmMiLCJib3JkZXIiLCJvdmVyZmxvdyIsImFsbG93RnVsbFNjcmVlbiIsImlkIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJjdXJzb3IiLCJmb250V2VpZ2h0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/twitch/page.tsx\n"));

/***/ })

});