(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Ujnf:function(e,t,i){"use strict";i.r(t);var a={name:"Product",props:{item:{type:Object,required:!0}},data:function(){return{lazyDefault:i("qCgr"),defaultImage:i("wnJU")}},computed:{images:function(){return this.item.images},image:function(){var e=this;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if(e.images.length<=0)return 10===t?e.lazyDefault:e.defaultImage;var i=e.images[0].breakpoints;return i.hasOwnProperty(t)?i[t]:i.original}},childrenImages:function(){var e=this,t=[];return this.item.images.length>0&&t.push(this.images),this.item.children.forEach(function(i){t=Array.prototype.concat(t,e.childImageRecursive(i))}),t}},methods:{childImageRecursive:function(e){var t=this,i=[];return e.images.length>0&&i.push(e.images),e.kit&&e.children.forEach(function(e){e.images.length>0&&i.push(e.images),e.kit&&(i=Array.prototype.concat(i,t.childImageRecursive(e)))}),i}}},r=i("KHd+"),n=Object(r.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[i("v-card",{staticClass:"mx-auto py-2",staticStyle:{position:"relative"},attrs:{tile:"",elevation:a?12:2}},[e.item.kit?i("v-carousel",{attrs:{height:"256",cycle:"","hide-delimiter-background":""}},e._l(e.item.children,function(t,a){return i("v-carousel-item",{key:a},[t.images[0]?i("v-img",{attrs:{src:t.images[0].breakpoints[256],"lazy-src":t.images[0].breakpoints[10],height:"256",contain:""}}):i("v-img",{attrs:{"lazy-src":e.lazyDefault,src:e.defaultImage}})],1)}),1):i("v-img",{attrs:{src:e.image(256),"lazy-src":e.image(10),height:"256",contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),e._v(" "),i("v-card-text",{staticClass:"pb-0",staticStyle:{position:"relative"}},[i("v-slide-x-reverse-transition",{attrs:{group:""}},[a?i("v-btn",{key:"remove-"+e.item.id,staticClass:"white--text",attrs:{absolute:"",color:"error",fab:"",large:"",right:"",top:""},on:{click:function(t){return e.$emit("remove",e.item.id)}}},[i("v-icon",[e._v("mdi-delete")])],1):e._e()],1)],1),e._v(" "),i("v-card-title",[e._v(e._s(e.item.name))]),e._v(" "),i("v-card-text",[i("div",{staticClass:"my-3 subtitle-1 black--text"},[e._v("R$ "+e._s(e.item.price)+" • "+e._s(e.item.category_details.name))]),e._v(" "),i("div",[e._v(e._s(e.item.description))])])],1)]}}])})},[],!1,null,"2fae38c0",null);t.default=n.exports},qCgr:function(e,t){e.exports="/images/default-lazy.png?ad46c6836f49e29db7e22d76954212e0"},wnJU:function(e,t){e.exports="/images/default.png?4b1287b9af362426b38e37aee4a16015"}}]);