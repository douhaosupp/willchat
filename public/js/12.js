webpackJsonp([12],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(286)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(268),
  /* scopeId */
  "data-v-6842daca",
  /* cssModules */
  null
)
Component.options.__file = "D:\\UPUPW_NG7.0\\vhosts\\willchat\\resources\\assets\\js\\user\\components\\material\\image-lists.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] image-lists.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6842daca", Component.options)
  } else {
    hotAPI.reload("data-v-6842daca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      searchForm: {
        keyword: ''
      },
      materials: [],
      dialogFormVisible: false,
      uploadFormData: {
        description: ''
      }
    };
  },
  mounted: function mounted() {
    this.loadData();
  },


  methods: {
    loadData: function loadData() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.axios.get('material/lists?type=image', {
        params: {
          keyword: this.searchForm.keyword,
          page: page
        }
      }).then(function (response) {
        _this.materials = response.data.materials;
      }).catch(function (error) {
        _this.$message({
          message: error.response.data,
          type: 'error'
        });
      });
    },
    uploadImage: function uploadImage() {
      var _this2 = this;

      var imageFile = this.$refs.imageFileInput.$el.children[0].files[0];

      if (typeof imageFile === 'undefined') {
        this.$message({
          message: '未选择上传的图片',
          type: 'error'
        });
        return;
      }

      var myForm = new FormData();
      myForm.append('file', imageFile);
      myForm.append('description', this.uploadFormData.description);

      this.axios.post('material/upload?type=image', myForm, { timeout: 20000 }).then(function (response) {
        _this2.dialogFormVisible = false;
        _this2.uploadFormData.description = '';

        _this2.$message({
          message: '上传成功',
          type: 'success'
        });

        setTimeout(function () {
          _this2.loadData(_this2.materials.current_page);
        }, 1000);
      }).catch(function (error) {
        _this2.$message({
          message: error.response.data,
          type: 'error'
        });
      });
    },
    syncImage: function syncImage() {
      var _this3 = this;

      this.axios.get('material/sync?type=image', { timeout: 200000 }).then(function (response) {
        _this3.loadData(1);
      });
    },
    deleteMaterial: function deleteMaterial(material) {
      var _this4 = this;

      this.$confirm('删除素材后将不可恢复, 是否继续?', '操作确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(function () {
        _this4.axios.post('material/delete', material, { timeout: 20000 }).then(function (response) {
          _this4.$message({
            message: '删除成功',
            type: 'success'
          });

          setTimeout(function () {
            _this4.loadData(_this4.materials.current_page);
          }, 1000);
        }).catch(function (error) {
          _this4.$message({
            message: error.response.data,
            type: 'error'
          });
        });
      }).catch(function () {
        console.log('canceled');
      });
    },
    search: function search() {
      this.loadData(1);
    },
    handleCurrentChange: function handleCurrentChange(page) {
      this.loadData(page);
    }
  }
};

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
exports.push([module.i, "\n.main .material-img[data-v-6842daca] {\n  display: inline-block;\n  width: 200px;\n}\n", ""]);

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right-main"
  }, [_c('div', {
    staticClass: "table-tools"
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true,
      "model": _vm.searchForm
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "按昵称搜索"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.loadData($event)
      }
    },
    model: {
      value: (_vm.searchForm.keyword),
      callback: function($$v) {
        _vm.searchForm.keyword = $$v
      },
      expression: "searchForm.keyword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "plus"
    },
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = true
      }
    }
  }, [_vm._v("上传视频素材")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "upload"
    },
    on: {
      "click": _vm.syncImage
    }
  }, [_vm._v("同步视频素材")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.materials.data,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "media_id",
      "label": "MEDIA_ID",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "图片"
    },
    inlineTemplate: {
      render: function() {
        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
          return _c('img', {
            staticClass: "material-img",
            attrs: {
              "src": _vm.row.url + '?type=fuck',
              "alt": ""
            }
          })
        
      },
      staticRenderFns: []
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "标题"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "label": "描述"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "创建时间",
      "align": "center",
      "width": "170"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "updated_at",
      "label": "更新时间",
      "align": "center",
      "width": "170"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center",
      "width": "120"
    },
    inlineTemplate: {
      render: function() {
        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
          return _c('div', [_c('el-button', {
            attrs: {
              "size": "small",
              "type": "danger"
            },
            nativeOn: {
              "click": function($event) {
                _vm.deleteMaterial(_vm.row)
              }
            }
          }, [_vm._v("删除")])], 1)
        
      },
      staticRenderFns: []
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "paginator"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.materials.current_page,
      "page-sizes": [20, 30, 40, 50],
      "page-size": _vm.materials.per_page,
      "layout": "total, prev, pager, next, jumper",
      "total": _vm.materials.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "上传素材",
      "modal": false
    },
    model: {
      value: (_vm.dialogFormVisible),
      callback: function($$v) {
        _vm.dialogFormVisible = $$v
      },
      expression: "dialogFormVisible"
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.uploadFormData
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "图片文件",
      "label-width": "120"
    }
  }, [_c('el-input', {
    ref: "imageFileInput",
    attrs: {
      "type": "file",
      "auto-complete": "off"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片说明",
      "label-width": "120"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.uploadFormData.description),
      callback: function($$v) {
        _vm.uploadFormData.description = $$v
      },
      expression: "uploadFormData.description"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("支持 bmp/jpg/jpeg/png/gif 格式，大小在 2MB 以内")]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.uploadImage
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6842daca", module.exports)
  }
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("05eaf786", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6842daca&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./image-lists.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6842daca&scoped=true!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./image-lists.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});