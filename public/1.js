(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products */ "./resources/js/services/products.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      loading: false,
      products: [],
      form: {
        name: "",
        price: 0,
        description: "",
        images: [],
        children: [],
        kit: false,
        category_id: "MBL001"
      }
    };
  },
  watch: {
    "form.kit": function () {
      var _formKit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!value) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.readyProducts();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function formKit(_x) {
        return _formKit.apply(this, arguments);
      }

      return formKit;
    }()
  },
  methods: {
    /**
     * Cadastrar produto
     *
     * @param form
     */
    send: function () {
      var _send = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(form) {
        var _this = this;

        var name, price, description, category_id, kit, images, children, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.loading = true; //

                form.kit = form.kit ? 1 : 0;
                name = form.name, price = form.price, description = form.description, category_id = form.category_id, kit = form.kit, images = form.images, children = form.children, formData = new FormData();
                formData.append("name", name);
                formData.append("price", price);
                formData.append("description", description);
                formData.append("category_id", category_id);
                formData.append("kit", kit); // preparar imagens

                images.forEach(function (image) {
                  return formData.append("images[]", image);
                }); // preparar filhos

                children.forEach(function (child) {
                  //
                  var id = child.id,
                      quantity = child.quantity; //

                  formData.append("children[".concat(id, "]"), JSON.stringify({
                    quantity: quantity
                  }));
                }); //

                _context2.next = 12;
                return Object(_services_products__WEBPACK_IMPORTED_MODULE_1__["store"])(formData).then(function () {
                  //
                  alert("Produto cadastrado."); // limpar campos

                  _this.reset();
                })["finally"](function () {
                  return _this.loading = false;
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function send(_x2) {
        return _send.apply(this, arguments);
      }

      return send;
    }(),

    /**
     * Redefinir estado inicial do formulario.
     *
     * @returns void
     */
    reset: function reset() {
      this.form = {
        name: "",
        price: 0,
        description: "",
        images: [],
        children: [],
        kit: false,
        category_id: ""
      };
    },

    /**
     * Carregar produtos para compor o kit.
     */
    readyProducts: function () {
      var _readyProducts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loading = true;
                _context3.next = 3;
                return Object(_services_products__WEBPACK_IMPORTED_MODULE_1__["query"])("orderBy[price]=asc").then(function (_ref) {
                  var data = _ref.data;
                  _this2.products = data.map(function (h) {
                    // anexar novo campo
                    h.quantity = 0; //

                    return h;
                  });
                })["finally"](function () {
                  return _this2.loading = false;
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function readyProducts() {
        return _readyProducts.apply(this, arguments);
      }

      return readyProducts;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.native[data-v-234fd476] {\n  width: 35px;\n  height: 50px;\n}\ninput.native[data-v-234fd476]:focus, input.native[data-v-234fd476]:active {\n  outline: 0;\n  box-shadow: none;\n  border-color: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/lib/loader.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
                {
                  ref: "form",
                  attrs: {
                    tag: "form",
                    enctype: "multipart/form-data",
                    autocomplete: "off"
                  },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.send(_vm.form)
                    }
                  }
                },
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
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                type: "button",
                                disabled: _vm.loading,
                                text: ""
                              },
                              on: { click: _vm.reset }
                            },
                            [_vm._v("Cancelar")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                type: "submit",
                                disabled: _vm.loading,
                                loading: _vm.loading,
                                color: "success",
                                text: ""
                              }
                            },
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
                      _c("v-text-field", {
                        attrs: { label: "Preço", type: "number", min: "0" },
                        model: {
                          value: _vm.form.price,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "price",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "form.price"
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
                                attrs: {
                                  label: "Produtos filhos",
                                  items: _vm.products,
                                  "item-text": "name",
                                  "return-object": "",
                                  multiple: "",
                                  loading: _vm.loading
                                },
                                model: {
                                  value: _vm.form.children,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "children", $$v)
                                  },
                                  expression: "form.children"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.children.length > 0
                        ? _c(
                            "v-list",
                            {
                              attrs: { "two-line": "", color: "grey lighten-4" }
                            },
                            _vm._l(_vm.form.children, function(child, index) {
                              return _c(
                                "v-list-item",
                                { key: index },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", [
                                        _c("span", [
                                          _vm._v(_vm._s(child.name))
                                        ]),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "px-1" }, [
                                          _vm._v("-")
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "R$ " +
                                              _vm._s(child.price) +
                                              " (unidade)"
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", {
                                        domProps: {
                                          textContent: _vm._s(child.description)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c(
                                        "v-input",
                                        {
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "prepend",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            child.quantity > 0
                                                              ? child.quantity--
                                                              : null
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("mdi-minus")]
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              },
                                              {
                                                key: "append",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            child.quantity++
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("mdi-plus")]
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: child.quantity,
                                                expression: "child.quantity"
                                              }
                                            ],
                                            staticClass:
                                              "native text-xs-center",
                                            attrs: { readonly: "" },
                                            domProps: { value: child.quantity },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  child,
                                                  "quantity",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }),
                            1
                          )
                        : _vm._e(),
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
                      })
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
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true& */ "./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/lib/loader.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Create.vue?vue&type=style&index=0&id=234fd476&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_234fd476_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ }),

/***/ "./resources/js/services/products.js":
/*!*******************************************!*\
  !*** ./resources/js/services/products.js ***!
  \*******************************************/
/*! exports provided: findAll, query, store, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Listar produtos
 */
var findAll =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var page,
        perPage,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            perPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 6;
            _context.next = 4;
            return axios.get("api/products/?page=".concat(page, "&perPage=").concat(perPage, "&with[children]=*&orderBy[kit]=desc"));

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function findAll() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Consulta
 *
 * @param {*} query
 */

var query =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_query) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios.get("api/products/?".concat(_query));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function query(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Cadastrar produto
 *
 * @param {*} data
 */

var store =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios.post("api/products", data);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function store(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Remover Produto
 *
 * @param {*} id
 */

var destroy =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios["delete"]("api/products/".concat(id));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function destroy(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ })

}]);