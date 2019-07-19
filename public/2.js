(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Product",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    images: function images() {
      return this.item.images;
    },
    image: function image() {
      var _this = this;

      return function () {
        var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

        //
        if (_this.images.length <= 0) {
          //
          if (size === 10) return __webpack_require__(/*! ../assets/default-lazy.png */ "./resources/js/assets/default-lazy.png"); //

          return __webpack_require__(/*! ../assets/default.png */ "./resources/js/assets/default.png");
        }

        var images = _this.images[0].breakpoints; //

        return images.hasOwnProperty(size) ? images[size] : images["original"];
      };
    },
    childrenImages: function childrenImages() {
      var _this2 = this;

      var images = [];

      if (this.item.images.length > 0) {
        // primeira camada de imagens do produto.
        images.push(this.images);
      }

      this.item.children.forEach(function (child) {
        // capturar imagem de produtos filhos.
        images = Array.prototype.concat(images, _this2.childImageRecursive(child));
      });
      return images;
    }
  },
  methods: {
    /**
     * Varrer produtos filhos e obter todas as imagens.
     *
     * @returns array
     */
    childImageRecursive: function childImageRecursive(child) {
      var _this3 = this;

      var images = []; //

      if (child.images.length > 0) {
        images.push(child.images);
      } //


      if (child.kit) {
        child.children.forEach(function (item) {
          if (item.images.length > 0) {
            //
            images.push(item.images);
          }

          if (item.kit) {
            //
            images = Array.prototype.concat(images, _this3.childImageRecursive(item));
          }
        });
      } //


      return images;
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
                staticClass: "mx-auto py-2",
                staticStyle: { position: "relative" },
                attrs: { tile: "", elevation: hover ? 12 : 2 }
              },
              [
                !_vm.item.kit
                  ? _c("v-img", {
                      attrs: {
                        src: _vm.image(256),
                        "lazy-src": _vm.image(10),
                        height: "256",
                        contain: ""
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
                    })
                  : _c(
                      "v-carousel",
                      {
                        attrs: {
                          height: "256",
                          cycle: "",
                          "hide-delimiter-background": ""
                        }
                      },
                      _vm._l(_vm.item.children, function(child, index) {
                        return _c(
                          "v-carousel-item",
                          { key: index },
                          [
                            _c("v-img", {
                              attrs: {
                                src: child.images[0].breakpoints[256],
                                "lazy-src": child.images[0].breakpoints[10],
                                height: "256",
                                contain: ""
                              }
                            })
                          ],
                          1
                        )
                      }),
                      1
                    ),
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
                                key: "remove-" + _vm.item.id,
                                staticClass: "white--text",
                                attrs: {
                                  absolute: "",
                                  color: "error",
                                  fab: "",
                                  large: "",
                                  right: "",
                                  top: ""
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.$emit("remove", _vm.item.id)
                                  }
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
                _c("v-card-title", [_vm._v(_vm._s(_vm.item.name))]),
                _vm._v(" "),
                _c("v-card-text", [
                  _c("div", { staticClass: "my-3 subtitle-1 black--text" }, [
                    _vm._v(
                      "R$ " +
                        _vm._s(_vm.item.price) +
                        " • " +
                        _vm._s(_vm.item.category_id)
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.item.description))])
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

/***/ "./resources/js/assets/default-lazy.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/default-lazy.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-lazy.png?ad46c6836f49e29db7e22d76954212e0";

/***/ }),

/***/ "./resources/js/assets/default.png":
/*!*****************************************!*\
  !*** ./resources/js/assets/default.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default.png?4b1287b9af362426b38e37aee4a16015";

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