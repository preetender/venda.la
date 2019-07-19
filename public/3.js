(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Product",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "mx-auto",
                staticStyle: { position: "relative" },
                attrs: { tile: "", elevation: hover ? 12 : 2 }
              },
              [
                _c("v-img", {
                  attrs: {
                    src:
                      "https://picsum.photos/500/300?image=" + (_vm.n * 5 + 10),
                    "lazy-src":
                      "https://picsum.photos/10/6?image=" + (_vm.n * 5 + 10),
                    height: "240"
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "placeholder",
                        fn: function() {
                          return [
                            _c(
                              "v-layout",
                              {
                                attrs: {
                                  "fill-height": "",
                                  "align-center": "",
                                  "justify-center": "",
                                  "ma-0": ""
                                }
                              },
                              [
                                _c("v-progress-circular", {
                                  attrs: {
                                    indeterminate: "",
                                    color: "grey lighten-5"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                }),
                _vm._v(" "),
                _c(
                  "v-card-text",
                  {
                    staticClass: "pb-0",
                    staticStyle: { position: "relative" }
                  },
                  [
                    _c(
                      "v-slide-x-reverse-transition",
                      { attrs: { group: "" } },
                      [
                        hover
                          ? _c(
                              "v-btn",
                              {
                                key: "view-" + _vm.index,
                                staticClass: "white--text",
                                staticStyle: { right: "85px" },
                                attrs: {
                                  absolute: "",
                                  color: "orange",
                                  fab: "",
                                  large: "",
                                  right: "",
                                  top: ""
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-eye")])],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        hover
                          ? _c(
                              "v-btn",
                              {
                                key: "remove-" + _vm.index,
                                staticClass: "white--text",
                                attrs: {
                                  absolute: "",
                                  color: "error",
                                  fab: "",
                                  large: "",
                                  right: "",
                                  top: ""
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-delete")])],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-card-title", [_vm._v("nome do produto")]),
                _vm._v(" "),
                _c("v-card-text", [
                  _c("div", { staticClass: "my-3 subtitle-1 black--text" }, [
                    _vm._v("$ 00.00 • Categoria")
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Conteudo")])
                ])
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Product.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Product.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7e94e6d4&scoped=true& */ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e94e6d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=7e94e6d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);