(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/1.e2780173.jpg"},25:function(e,t,n){e.exports=n.p+"static/media/2.66734bc6.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/3.b95e921c.jpg"},30:function(e,t,n){e.exports=n(48)},35:function(e,t,n){},37:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(17),c=n.n(o),i=(n(35),n(13)),s=n.n(i),l=n(18),u=n(19),m=n(20),f=n(29),v=n(27);n(37),n(38),n(39);function p(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Colums"},r.a.createElement(b,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Colums"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map((function(e,t){return r.a.createElement(d,{genres:e,key:t})}))),r.a.createElement("p",{className:"Movie__Synopsis"},o)))}function b(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{alt:n,title:n,src:t,className:"Movie__Poster"})}function d(e){var t=e.genres;return r.a.createElement("span",{className:"Movie__Genres"},t)}p.defaultProps={title:"\uc601\ud654\uc774\ub984",poster:"https://www.flaticon.com/svg/static/icons/svg/1596/1596476.svg"};var h=p,g=(n(40),function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"NavigationBar"}))}),E=n(28),y=n(7),w=n(8);function j(){var e=Object(y.a)(["\n  z-index: 10;\n  position: absolute;\n  display: inline;\n  width: 100%;  \n  color: #f2f2f2;\n  text-align: center;\n  margin-top: 4em;\n"]);return j=function(){return e},e}function x(){var e=Object(y.a)(["\n  width: 100vw;\n  height: inherit ;\n  object-fit: cover;\n  z-index: 1;\n"]);return x=function(){return e},e}function _(){var e=Object(y.a)(["\n  width: 100%;\n  height: 40vh;\n"]);return _=function(){return e},e}function N(e){var t=e.text,n=e.img;return r.a.createElement(O,null,r.a.createElement(M,null,t),r.a.createElement(k,{src:n}))}var O=w.a.div(_()),k=w.a.img(x()),M=w.a.h1(j()),A=n(24),B=n.n(A),C=n(25),P=n.n(C),S=n(26),W=n.n(S);function z(){var e=Object(y.a)(["\n  width: 100%;\n  display: flex; //\uc774\ubbf8\uc9c0\ub4e4\uc744 \uac00\ub85c\ub85c \ub098\uc5f4\ud569\ub2c8\ub2e4.\n"]);return z=function(){return e},e}function G(){var e=Object(y.a)(["\nheight: 15px;\nwidth: 15px;\nbackground-color: #bbb;\nborder-radius: 50%;\ndisplay: inline;\ntransition: background-color 0.6s ease;\nposition: absolute;\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    background-color: coral;\n    color: #fff;\n  }\n"]);return G=function(){return e},e}function I(){var e=Object(y.a)(["\n  width: 100%;  \n  overflow: hidden; // \uc120\uc744 \ub118\uc5b4\uac04 \uc774\ubbf8\uc9c0\ub4e4\uc740 \ubcf4\uc774\uc9c0 \uc54a\ub3c4\ub85d \ucc98\ub9ac\ud569\ub2c8\ub2e4.\n"]);return I=function(){return e},e}var J=w.a.div(I()),T=(w.a.button(G()),w.a.div(z()));function D(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],o=t[1],c=Object(a.useRef)(null),i=function(){o(n>=2?0:n+1)};return Object(a.useEffect)((function(){c.current.style.transition="all 0.5s ease-in-out",c.current.style.transform="translateX(-".concat(n,"00%)"),setTimeout(i,5e3)}),[n]),r.a.createElement(J,null,r.a.createElement(T,{ref:c},r.a.createElement(N,{img:B.a,text:"\uc774 \uc74c\uc2dd\uc740 \ub9db\uc788\uc5b4\uc694!"}),r.a.createElement(N,{img:P.a,text:"\ub9ac\ubdf0\ub97c \uacf5\uc720\ud574\ubcf4\uc138\uc694!"}),r.a.createElement(N,{img:W.a,text:"\uc81c\ud488 \uccb4\ud5d8\ub2e8 \ubaa8\uc9d1\uc911!"})))}n(42);var R=function(){return r.a.createElement("div",{class:"buttons buttons2"},r.a.createElement("button",{type:"button",class:"button8"},"IT\uae30\uae30"),r.a.createElement("button",{type:"button",class:"button8"},"\uc601\ud654"),r.a.createElement("button",{type:"button",class:"button8"},"\uc74c\uc2dd"),r.a.createElement("button",{type:"button",class:"button8"},"\uac00\uc804"),r.a.createElement("button",{type:"button",class:"button8"},"\uc790\ub3d9\ucc28"))},X=(n(43),function(){return r.a.createElement("div",{className:"box"},r.a.createElement("form",{className:"box2"},r.a.createElement("fieldset",null,r.a.createElement("input",{className:"search",type:"search"}),r.a.createElement("button",{className:"submit",type:"submit"},r.a.createElement("i",{class:"fa fa-search"})))))}),$=n(49),q=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.getMovies=Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.callApi();case 2:n=t.sent,e.setState({movies:n});case 4:case"end":return t.stop()}}),t)}))),e.renderMovies=function(){return e.state.movies.map((function(e,t){return r.a.createElement(h,{title:e.title_english,poster:e.large_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})}))},e.callApi=function(){return console.log($),fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(D,null),r.a.createElement(X,null),r.a.createElement(R,null),r.a.createElement("div",{className:"Posts"},this.state.movies?this.renderMovies():"loding"))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.31d92ec8.chunk.js.map