(this.webpackJsonpsentinel=this.webpackJsonpsentinel||[]).push([[0],{144:function(n){n.exports=JSON.parse('{"title":"welcome","someThing":"default value","SignInPage":{"Footer":{"legalNotice":"Legal Notice","disclaimer":"Upon successful sign in to the Quessly Web Interface, your usage will be governed under End User License Agreement and Terms of Conditions, which are linked below. Quessly uses cookies to store information in your browser local, who are used for personalize your experience, and analyze our traffic. You consent to those cookies, if you continue to use this website.","copyright":"Copyright \xa9 2019, The Werkzeug Ltd., or its subsidiaries. All rights reserved.","privacyPolicy":"Privacy Policy","termsOfConditions":"Terms of Conditions","endUserLicenseAgreement":"End User License Agreement"},"Header":{"title":"Quessly"},"title":"Sign in to Quessly services"}}')},147:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return r}));var a={},r=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2?arguments[2]:void 0;Object.keys(e).forEach((function(a){var i=r?"".concat(r,".").concat(a):a;"object"===typeof e[a]?(t[a]={},n(e[a],t[a],i)):t[a]=i}))}},476:function(n,e,t){"use strict";t.r(e);t(237),t(247);var a=t(0),r=t.n(a),i=t(105),o=t(62),l=(t(442),t(443),t(87)),c=t(212),d=t(15),u=t(477),s=t(210),b=t(146);function p(){var n=Object(s.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-size: inherit;\n  }\n\n  h1 {\n    padding-top: 32px;\n  }\n\n  h2 {\n    padding-top: 28px;\n  }\n\n  h3 {\n    padding-top: 24px;\n  }\n\n  h4 {\n    padding-top: 20px;\n  }\n\n  h5 {\n    padding-top: 16px;\n  }\n\n  h6 {\n    padding-top: 12px;\n  }\n  \n  div.btn-toolbar {\n    margin-top: 32px;\n    margin-bottom: 32px;\n  }\n\n  div.btn-toolbar > * {\n    margin-left: 8px;\n    margin-right: 8px;\n    min-width: 100px;\n  }\n\n  div.btn-toolbar button.btn:first-child {\n    margin-left: 0;\n  }\n\n  div.btn-toolbar button.btn:last-child {\n    margin-right: 0;\n  }\n\n  input.form-control, select.form-control {\n    max-width: 500px;\n  }\n\n  button {\n    cursor: pointer;\n\n    &:focus {\n      outline: none !important;\n    }\n  }\n  \n  small.form-text {\n    max-width: 387px;\n  }\n  \n  div.sketch-picker {\n    box-shadow: none !important;\n    border: 1px solid #ced4da !important;\n  }\n  \n  table td {\n    border: none !important;\n    vertical-align: middle !important;\n  }\n  \n  .rtl {\n    direction: rtl;\n    text-align: start !important;\n  }\n"]);return p=function(){return n},n}var m=Object(b.a)(p()),g=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},i=n;e&&(i=function(){return n().then((function(n){return{default:e(n)}}))});var o=Object(a.lazy)(i);return function(n){return r.a.createElement(a.Suspense,{fallback:t.fallback},r.a.createElement(o,n))}},f=g((function(){return t.e(5).then(t.bind(null,480))}),(function(n){return n.HomePage})),h=g((function(){return t.e(3).then(t.bind(null,482))}),(function(n){return n.SignInPage})),v=g((function(){return t.e(4).then(t.bind(null,483))}),(function(n){return n.NotFoundPage}));function x(){var n=Object(u.a)().i18n;return a.createElement(c.a,null,a.createElement(l.a,{titleTemplate:"%s - React Boilerplate",defaultTitle:"React Boilerplate",htmlAttributes:{lang:n.language}},a.createElement("meta",{name:"description",content:"A React Boilerplate application"})),a.createElement(d.c,null,a.createElement(d.a,{exact:!0,path:"/",component:f}),a.createElement(d.a,{exact:!0,path:"/sign-in",component:h}),a.createElement(d.a,{component:v})),a.createElement(m,null))}var y=t(148),E=t(108),j=t(231),w=t(234),O=t(235),k=t(30);function L(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(n).length?function(n){return n}:Object(k.c)(Object(O.a)({},n))}var P=function(n){n&&n instanceof Function&&t.e(6).then(t.bind(null,481)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),i(n),o(n)}))},T=t(16),S=t(17);var A=t(233),C=t(86),F=t(232),z=t(144),B=t(147),I={en:{translation:z}};Object(B.a)(z);A.a.use(C.e).use(F.a).init({resources:I,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});var N=function(){var n=Object(w.a)({}),e=n.run,t=[n],a=[Object(j.a)({createReducer:L,runSaga:e})];return Object(E.a)({reducer:L(),middleware:[].concat(Object(y.a)(Object(E.b)()),t),devTools:!1,enhancers:a})}(),H=document.getElementById("root");i.render(a.createElement(o.a,{store:N},a.createElement(l.b,null,a.createElement(a.StrictMode,null,a.createElement(x,null)))),H),P(),T.b.add(S.f),T.b.add(S.k),T.b.add(S.d),T.b.add(S.a),T.b.add(S.b),T.b.add(S.c),T.b.add(S.g),T.b.add(S.h),T.b.add(S.l),T.b.add(S.e),T.b.add(S.n),T.b.add(S.o),T.b.add(S.i),T.b.add(S.j),T.b.add(S.p),T.b.add(S.m),T.b.add(S.q)}},[[476,1,2]]]);