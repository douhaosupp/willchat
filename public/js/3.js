webpackJsonp([3],{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(277)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(219),
  /* template */
  __webpack_require__(259),
  /* scopeId */
  "data-v-25790b38",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25790b38", Component.options)
  } else {
    hotAPI.reload("data-v-25790b38", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(215);

var _stringify2 = _interopRequireDefault(_stringify);

var _config = __webpack_require__(16);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      accounts: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.axios.get('account/lists').then(function (response) {
      _this.accounts = response.data.accounts;
      window.localStorage.setItem(_config2.default.accountsKey, (0, _stringify2.default)(response.data.accounts));
    }).catch(function (error) {
      console.log(error);
    });
  },


  methods: {
    toManage: function toManage(id) {
      window.localStorage.setItem('willchat_account_id', id);

      this.$router.push('manage/' + id);
    },
    toEdit: function toEdit(id) {
      this.$router.push('account/edit/' + id);
    }
  }
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
exports.push([module.i, "\n.setting-icon[data-v-25790b38] {\n  color: #777;\n  cursor: pointer;\n}\n.plus-card[data-v-25790b38] {\n  display: block;\n  overflow: hidden;\n  background-color: #fff;\n  height: 100%;\n  position: relative;\n}\n.plus-card i[data-v-25790b38] {\n    position: absolute;\n    font-size: 3rem;\n    color: lightgray;\n    top: 50%;\n    left: 50%;\n    margin-top: -1.5rem;\n    margin-left: -1.5rem;\n}\n", ""]);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main main-with-padding"
  }, [_c('el-row', {
    attrs: {
      "gutter": 20,
      "type": "flex",
      "justify": "center"
    }
  }, [_vm._l((_vm.accounts), function(account) {
    return (_vm.accounts.length > 0) ? _c('el-col', {
      attrs: {
        "span": 6
      }
    }, [_c('el-card', {
      staticClass: "box-card",
      nativeOn: {
        "click": function($event) {
          _vm.toManage(account.id)
        }
      }
    }, [_c('div', {
      staticClass: "clearfix",
      slot: "header"
    }, [_c('span', {
      staticStyle: {
        "line-height": "36px"
      }
    }, [_vm._v(_vm._s(account.name))]), _vm._v(" "), _c('i', {
      staticClass: "setting-icon el-icon-setting",
      staticStyle: {
        "float": "right"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.toEdit(account.id)
        }
      }
    })]), _vm._v(" "), _c('div', [_vm._v("\n            " + _vm._s(account.name) + "\n            " + _vm._s(account.type) + "\n            " + _vm._s(account.created_at) + "\n          ")])])], 1) : _vm._e()
  }), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('router-link', {
    staticClass: "plus-card el-card",
    attrs: {
      "to": "/account/add"
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })])], 1)], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25790b38", module.exports)
  }
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("32450f59", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25790b38&scoped=true!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25790b38&scoped=true!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});