(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-415a478b"],{"14ee":function(t,e,n){"use strict";var a=n("b5da"),o=n.n(a);o.a},"1f27":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return i}));var a=n("b775");function o(t){return Object(a["a"])({url:"/type/addParent",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/wares/getSecondList",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/wares/selectParentNameNUll",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/wares/selectParentNotNull",method:"post",data:t})}},8755:function(t,e,n){"use strict";n.r(e);var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"productType"},[n("el-card",{staticStyle:{margin:"20px 0"},attrs:{shadow:"never"}},[t._v(" 数据列表 "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"mini"},on:{click:t.addParentName}},[t._v("添加")])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[n("el-table-column",{attrs:{label:"编号",prop:"id",align:"center"}}),n("el-table-column",{attrs:{label:"分类名称",prop:"name",align:"center"}}),n("el-table-column",{attrs:{label:"设置",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.getMenu(e.$index,e.row)}}},[t._v("查看下级")])]}}])}),n("el-table-column",{attrs:{prop:"action",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.deleteProductType(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"add"},[n("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",[n("el-form-item",[n("el-select",{attrs:{placeholder:"请选择一级分类"},model:{value:t.category_id,callback:function(e){t.category_id=e},expression:"category_id"}},t._l(t.addParentNameArr,(function(e,a){return n("el-option",{key:a,attrs:{value:e.id,label:e.name}},[t._v(t._s(e.name))])})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.addOk}},[t._v("确 定")])],1)],1)],1)],1)},r=[],c=(n("b0c0"),n("5530")),i=n("ade3"),u=n("c4c8"),d=n("1f27"),l=n("2f62"),s={data:function(){var t;return t={tableData:[{id:"",name:"",action:""}],store_id:"",updateName:"",dialogVisible:!1,form:{name:""},productId:"",addParentNameArr:[],newaddParentNameArr:[]},Object(i["a"])(t,"dialogVisible",!1),Object(i["a"])(t,"category_id",""),t},created:function(){this.selectProduceList(),console.log(this.id)},computed:Object(c["a"])({},Object(l["c"])(["storeInfo"])),mounted:function(){this.isRouterActive=!0},methods:(a={addOk:function(){var t=this;Object(d["a"])({store_id:this.storeInfo.id,category_id:this.category_id}).then((function(e){console.log(t.category_id),200==e.data.code&&(console.log(e,"插入成功"),t.dialogVisible=!1,t.$message({type:"success",message:"插入成功"})),t.dialogVisible=!1,location.reload()})).catch((function(e){t.$message({type:"error",message:"插入失败"}),console.log(e,"插入失败")}))},addParentName:function(){var t=this;this.dialogVisible=!0,Object(d["c"])({parent_name:""}).then((function(e){if(200==e.data.code){console.log(e.data.data),t.addParentNameArr=e.data.data,console.log(e,"获取一级分类成功");for(var n=0;n<t.addParentNameArr.length;n++)t.category_id=t.addParentNameArr[n].id}})).catch((function(t){console.log(t,"获取失败")}))},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},selectProduceList:function(){var t=this;Object(u["j"])({store_id:this.storeInfo.id}).then((function(e){console.log(e,"商品分类获取成功"),t.tableData=e.data.data,console.log(t.tableData)})).catch((function(t){console.log(t,"商品分类获取失败")}))}},Object(i["a"])(a,"handleClose",(function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))})),Object(i["a"])(a,"deleteProductType",(function(t,e){var n=this;this.$confirm("是否要删除该品牌","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["d"])({id:e.id}).then((function(t){n.$message({message:"删除成功",type:"success"}),console.log(e.id,t),location.reload()}))}))})),Object(i["a"])(a,"getMenu",(function(t,e){console.log(e.name,t),this.$router.push({path:"/product/productSecondMenu",query:{parent_name:e.name,id:e.id}})})),a)},f=s,b=(n("14ee"),n("2877")),m=Object(b["a"])(f,o,r,!1,null,null,null);e["default"]=m.exports},b5da:function(t,e,n){},c4c8:function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"i",(function(){return i})),n.d(e,"o",(function(){return u})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"n",(function(){return f})),n.d(e,"a",(function(){return b})),n.d(e,"k",(function(){return m})),n.d(e,"e",(function(){return p})),n.d(e,"p",(function(){return h})),n.d(e,"h",(function(){return g})),n.d(e,"g",(function(){return j})),n.d(e,"c",(function(){return O}));var a=n("b775");function o(t){return Object(a["a"])({url:"/wares/getMenu",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/wares/deleteMenu",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/wares/deleteSubmenu",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/wares/getSubmenu",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/wares/getStorBrands",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/store/getSpecParam",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/classification/class",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/store/addSpu",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/store/getSpu",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/store/addMoreSku",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/store/getSku",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/store/checkDelete",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/store/updataShop",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/store/getCatName",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/store/getBrandName",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/store/deleteSpu",method:"post",data:t})}}}]);