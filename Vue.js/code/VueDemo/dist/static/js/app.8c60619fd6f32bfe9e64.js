webpackJsonp([0],{"0pqs":function(t,e){},"5RqZ":function(t,e){},EGUp:function(t,e){},Kpeo:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{to:"/about"}},[this._v("About")]),this._v(" "),e("router-link",{staticClass:"list-group-item",attrs:{to:"/home"}},[this._v("Home")])],1)]),this._v(" "),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("keep-alive",[e("router-view",{attrs:{msg:"abc"}})],1)],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[this._v("Router Test")])])])])}]};var r=s("VU/8")({},i,!1,function(t){s("q4qz")},null,null).exports,o=s("/ocq"),a={props:{msg:String}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("About")]),this._v(" "),e("p",[this._v(this._s(this.msg))]),this._v(" "),e("input",{attrs:{type:"text"}})])},staticRenderFns:[]};var c=s("VU/8")(a,l,!1,function(t){s("wL1Y")},null,null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("Home")]),this._v(" "),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{attrs:{to:"/home/news"}},[this._v("News")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/home/message"}},[this._v("Message")])],1)]),this._v(" "),e("router-view")],1)])},staticRenderFns:[]};var h=s("VU/8")({},u,!1,function(t){s("Kpeo")},null,null).exports,v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._l(t.newsArr,function(e,n){return s("li",{key:n},[t._v(t._s(e))])}))},staticRenderFns:[]};var d=s("VU/8")({data:function(){return{newsArr:["News001","News002","News003"]}}},v,!1,function(t){s("EGUp")},null,null).exports,p={data:function(){return{messages:[]}},mounted:function(){var t=this;setTimeout(function(){t.messages=[{id:1,title:"Message001"},{id:3,title:"Message003"},{id:5,title:"Message005"}]},1e3)},methods:{pushShow:function(t){this.$router.push("/home/message/detail/"+t)},replaceShow:function(t){this.$router.replace("/home/message/detail/"+t)}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",t._l(t.messages,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/home/message/detail/"+e.id}},[t._v(t._s(e.title))]),t._v(" "),s("button",{on:{click:function(s){t.pushShow(e.id)}}},[t._v("push查看")]),t._v(" "),s("button",{on:{click:function(s){t.replaceShow(e.id)}}},[t._v("replace查看")])],1)})),t._v(" "),s("button",{on:{click:function(e){t.$router.back()}}},[t._v("回退")]),t._v(" "),s("hr"),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var f=s("VU/8")(p,_,!1,function(t){s("5RqZ")},null,null).exports,m=[{id:1,title:"Message001",content:"message content00111...."},{id:3,title:"Message003",content:"message content00222...."},{id:5,title:"Message005",content:"message content00333...."}],g={data:function(){return{detail:{}}},mounted:function(){var t=this.$route.params.id;this.detail=m.find(function(e){return e.id===1*t})},watch:{$route:function(){console.log("$route()");var t=this.$route.params.id;this.detail=m.find(function(e){return e.id===1*t})}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("id: "+t._s(t.$route.params.id))]),t._v(" "),s("li",[t._v("title: "+t._s(t.detail.title))]),t._v(" "),s("li",[t._v("content: "+t._s(t.detail.content))])])},staticRenderFns:[]};var $=s("VU/8")(g,w,!1,function(t){s("0pqs")},null,null).exports;n.a.use(o.a);var b=new o.a({routes:[{path:"/about",component:c},{path:"/home",component:h,children:[{path:"/home/news",component:d},{path:"message",component:f,children:[{path:"detail/:id",component:$}]},{path:"",redirect:"/home/news"}]},{path:"/",redirect:"/about"}]});new n.a({el:"#app",components:{App:r},template:"<App/>",router:b})},q4qz:function(t,e){},wL1Y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8c60619fd6f32bfe9e64.js.map