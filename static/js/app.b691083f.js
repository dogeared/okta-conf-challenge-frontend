(function(e){function t(t){for(var o,s,c=t[0],i=t[1],u=t[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={app:0},a=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4251:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:e.orgScore>=50?"background-color: #302989;":"background-color: #ca5d75;",attrs:{id:"app"}},[r("router-view")],1)},a=[],s=(r("4160"),r("b0c0"),r("07ac"),r("159b"),{resourceServer:{scoreUri:"https://okta-conf-api-challenge.herokuapp.com/api/org_score"},event:{name:"Developer Challenge"},appBaseDomain:"oktachallenge.dev",tier1Prize:"Keep an eye out for an email with a link & code to claim your swag!"}),c=(r("b64b"),r("96cf"),r("1da1")),i=r("bc3a"),u=r.n(i),l="orgName",f={orgNameSessionKey:l,state:{org:{},scores:{}},reset:function(){delete this.state.org.name,this.resetScores(),localStorage.removeItem(l)},resetScores:function(){for(var e in this.state.scores)delete this.state.scores[e]},setScores:function(e){var t=this;this.resetScores(),Object.keys(e).forEach((function(r){o["default"].set(t.state.scores,r,e[r])}))},setOrgName:function(e){o["default"].set(this.state.org,"name",e),localStorage.setItem(l,e)},init:function(){localStorage.getItem(l)&&this.setOrgName(localStorage.getItem(l)),this.loadScores(),setInterval(function(){this.loadScores()}.bind(this),1e4)},loadScores:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.state.org.name){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u.a.get(s.resourceServer.scoreUri+"/"+this.state.org.name);case 4:t=e.sent,t.data&&t.data.challengeStats&&t.data.challengeStats.scores&&this.setScores(t.data.challengeStats.scores);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},p=(r("de82"),{name:"app",data:function(){return{name:s.event.name,scores:f.state.scores,orgInfo:f.state.org}},methods:{},computed:{orgScore:function(){if(this.scores.READ_ONLY_API_TOKEN){var e=0;return Object.values(this.scores).forEach((function(t){return e+=t})),e}}},mounted:function(){this.$route.params.org&&(f.setOrgName(this.$route.params.org),f.loadScores())}}),d=p,m=(r("5c0b"),r("2877")),h=Object(m["a"])(d,n,a,!1,null,null,null),g=h.exports,v=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.orgInfo.name&&e.scores.READ_ONLY_API_TOKEN?r("div",{staticClass:"my-block"},[r("div",{staticClass:"my-centered"},[e.orgScore>=50?r("b-jumbotron",{attrs:{"bg-variant":"purple","text-variant":"white"}},[r("template",{slot:"header"},[e._v(e._s(e.tier1Prize)+"!")]),r("h2",[e._v(e._s(e.orgInfo.name)),r("br"),e._v("Completed "+e._s(e.orgScore/10)+" of 5 Steps")])],2):e._e(),e.orgScore<50?r("b-jumbotron",{attrs:{"bg-variant":"pink","text-variant":"white"}},[r("template",{slot:"header"},[e._v("So Close!")]),r("h2",[e._v("You need to complete all 5 steps in order to get a "+e._s(e.tier1Prize))]),r("h2",[e._v("Go back to "),r("a",{attrs:{href:e.appUrl}},[e._v(e._s(e.appUrl))]),e._v(" and finish the steps")]),r("br"),r("h2",[e._v(e._s(e.orgInfo.name)),r("br"),e._v("Completed "+e._s(e.orgScore/10)+" of 5 Steps")])],2):e._e()],1)]):e._e(),e.orgInfo.name&&!e.scores.READ_ONLY_API_TOKEN?r("div",{staticClass:"my-block"},[r("div",{staticClass:"my-centered"},[r("b-jumbotron",{attrs:{"bg-variant":"pink","text-variant":"white"}},[r("template",{slot:"header"},[e._v("No Information Found")]),r("h2",[e._v(e._s(e.orgInfo.name))])],2)],1)]):e._e(),e.orgInfo.name?e._e():r("div",{staticClass:"my-block"},[e._m(0)])])},_=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"my-centered"},[o("img",{attrs:{src:r("f0e3")}})])}],S=(r("c975"),{name:"hello",data:function(){return{name:s.event.name,busy:!1,busyMsg:"",scores:f.state.scores,orgInfo:f.state.org,appBaseDomain:s.appBaseDomain,tier1Prize:s.tier1Prize}},computed:{orgScore:function(){if(this.scores.READ_ONLY_API_TOKEN){var e=0;return Object.values(this.scores).forEach((function(t){return e+=t})),e}},appUrl:function(){return"https://"+this.orgInfo.name.substring(0,this.orgInfo.name.indexOf("-"))+"."+this.appBaseDomain}},mounted:function(){}}),y=S,O=(r("dbc2"),Object(m["a"])(y,b,_,!1,null,null,null)),w=O.exports;o["default"].use(v["a"]);var I=new v["a"]({mode:"history",routes:[{path:"/:org",name:"Home",component:w},{path:"/",name:"Home",component:w}]}),j=r("5f5b");r("f9e3"),r("2dd8");o["default"].config.productionTip=!1,o["default"].use(j["a"]),new o["default"]({router:I,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var o=r("9c0c"),n=r.n(o);n.a},"9c0c":function(e,t,r){},dbc2:function(e,t,r){"use strict";var o=r("4251"),n=r.n(o);n.a},de82:function(e,t,r){},f0e3:function(e,t,r){e.exports=r.p+"static/img/ahahah.fc00bc0c.gif"}});
//# sourceMappingURL=app.b691083f.js.map