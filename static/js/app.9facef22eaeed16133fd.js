webpackJsonp([0],{"8h+F":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW");!function(){const t=()=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)};t(),window.addEventListener("resize",t)}();var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("oUeO")},null,null).exports,a=n("/ocq"),s={name:"Home",methods:{animate:function(){const t=this.$refs.dot;t.classList.contains("animate")||(t.classList.add("animate"),setTimeout(()=>{t.classList.remove("animate")},600))}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"fade"},[n("div",[n("h1",{ref:"title"},[n("span",[t._v("I am")]),t._v(" "),n("span",{attrs:{id:"name"},on:{click:t.animate}},[t._v("Adrien")]),t._v(" "),n("span",{ref:"dot"},[t._v(".")])]),t._v(" "),n("div",{staticClass:"social fade slide down"},[n("a",{attrs:{href:"https://github.com/adrienlucbert",target:"_blank"}},[n("svg-icon",{attrs:{name:"github"}})],1),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/adrien-lucbert/",target:"_blank"}},[n("svg-icon",{attrs:{name:"linkedin"}})],1),t._v(" "),n("a",{attrs:{href:"https://twitter.com/AdrienLucbert",target:"_blank"}},[n("svg-icon",{attrs:{name:"twitter"}})],1),t._v(" "),n("a",{attrs:{href:"mailto:adrien.lucbert.pro@gmail.com"}},[n("svg-icon",{attrs:{name:"email"}})],1)])])])},staticRenderFns:[]};var l=n("VU/8")(s,c,!1,function(t){n("bWRx")},"data-v-2566741a",null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Portfolio")])])}]};var d=n("VU/8")({},u,!1,function(t){n("eNvv")},"data-v-18247516",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("404 Error - Ressource not found")])])}]};var f=n("VU/8")({},m,!1,function(t){n("nZZ2")},"data-v-5cc1c11e",null).exports;r.a.use(a.a);var h=new a.a({routes:[{path:"/",name:"Home",component:l},{path:"/portfolio/",name:"Portfolio",component:d},{path:"/*",name:"404 Error",component:f}]}),v={name:"svg-icon",props:{title:String,name:String},computed:{alt:function(){return this.name.charAt(0).toUpperCase()+this.name.slice(1)}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{class:"icon icon-"+this.name,attrs:{title:this.title||this.alt}},[e("use",{attrs:{"xlink:href":"/static/assets/symbol-defs.svg#icon-"+this.name}})])},staticRenderFns:[]};var _=n("VU/8")(v,p,!1,function(t){n("8h+F")},"data-v-58b68681",null).exports;var g=()=>{document.querySelectorAll('a[href^="#"]').forEach(t=>{t.onclick=function(e){e.preventDefault();const n=t.getAttribute("href");if(!n)return;const r=document.querySelector(n);r&&((t=>{if(!t)return;const{top:e}=t.getBoundingClientRect();window.scrollBy({top:e,behavior:"smooth"})})(r),history.pushState(null,"",n))}})};function b(t=document.documentElement,e=!1){t.querySelectorAll(".fade:not(.done), .slide:not(.done)").forEach(t=>{!function(t=document.documentElement,e=!1){const{height:n,top:r}=t.getBoundingClientRect();(e||r<=75*n/100)&&(t.classList.add("done"),b(t,!0))}(t,e)})}var w=()=>{b(),document.onscroll=(()=>{b()})};r.a.config.productionTip=!1,r.a.component("svg-icon",_),new r.a({el:"#app",router:h,components:{App:o},template:"<App/>",mounted:function(){g(),w()}})},bWRx:function(t,e){},eNvv:function(t,e){},nZZ2:function(t,e){},oUeO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9facef22eaeed16133fd.js.map