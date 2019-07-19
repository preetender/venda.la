(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  data: function data() {
    return {
      form: {
        name: "",
        description: "",
        images: [],
        children: [],
        kit: false,
        category_id: ""
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=template&id=234fd476&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Create.vue?vue&type=template&id=234fd476&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-container",
    { attrs: { "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm12: "", md8: "" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { color: "transparent", flat: "", tile: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v("Adicionar Produto")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-items",
                        [
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("Cancelar")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { text: "", color: "success" } },
                            [_vm._v("Salvar")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Nome do produto" },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "name",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: { label: "Descrição do produto", counter: "" },
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "description",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.description"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: {
                          color: "primary accent-2",
                          label: "Imagens",
                          multiple: "",
                          placeholder: "Selecione as imagens",
                          "prepend-icon": "mdi-paperclip",
                          accept: "image/*",
                          "display-size": 1000,
                          counter: ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "selection",
                            fn: function(ref) {
                              var index = ref.index
                              var text = ref.text
                              return [
                                index < 2
                                  ? _c(
                                      "v-chip",
                                      {
                                        attrs: {
                                          color: "primary accent-4",
                                          dark: "",
                                          label: "",
                                          small: ""
                                        }
                                      },
                                      [_vm._v(_vm._s(text))]
                                    )
                                  : index === 2
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "overline grey--text text--darken-3 mx-2"
                                      },
                                      [
                                        _vm._v(
                                          "+" +
                                            _vm._s(_vm.files.length - 2) +
                                            " Imagens(s)"
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.form.images,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "images", $$v)
                          },
                          expression: "form.images"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-switch", {
                        attrs: { label: "Produto Kit?", color: "primary" },
                        model: {
                          value: _vm.form.kit,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "kit", $$v)
                          },
                          expression: "form.kit"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expand-transition",
                        [
                          _vm.form.kit
                            ? _c("v-autocomplete", {
                                attrs: { label: "Produtos filhos", items: [] }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Create.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Create.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_234fd476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=234fd476&scoped=true& */ "./resources/js/pages/Create.vue?vue&type=template&id=234fd476&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_234fd476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_234fd476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "234fd476",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Create.vue?vue&type=template&id=234fd476&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Create.vue?vue&type=template&id=234fd476&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_234fd476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=234fd476&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=template&id=234fd476&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_234fd476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_234fd476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);