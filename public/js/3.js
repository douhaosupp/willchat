webpackJsonp([3],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(283)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(233),
  /* template */
  __webpack_require__(265),
  /* scopeId */
  "data-v-59f6fd45",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\user\\profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59f6fd45", Component.options)
  } else {
    hotAPI.reload("data-v-59f6fd45", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      user: {}
    };
  },
  mounted: function mounted() {},


  methods: {
    toManage: function toManage(id) {
      window.localStorage.setItem('willchat_account_id', id);

      this.$router.push('manage/' + id);
    }
  }
};

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
exports.push([module.i, "\n.avatar[data-v-59f6fd45] {\n  display: block;\n  width: 80%;\n  height: 200px;\n  overflow: hidden;\n  background-color: red;\n}\n", ""]);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main main-with-padding"
  }, [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/avatar"
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "",
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "user-profile"
  }, [_c('div', {
    staticClass: "header"
  })])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-59f6fd45", module.exports)
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("1a14e4e2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59f6fd45&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59f6fd45&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});