(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{480:function(t,e,l){var content=l(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(43).default)("2460247f",content,!0,{sourceMap:!1})},495:function(t,e,l){var r=l(80),o=l(81),n=["class","staticClass","style","staticStyle","attrs"];function _(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}l(32),l(19),l(17),l(18),l(9),l(23),l(14),l(24),t.exports={functional:!0,render:function(t,e){var l=e._c,data=(e._v,e.data),c=e.children,h=void 0===c?[]:c,m=data.class,d=data.staticClass,style=data.style,v=data.staticStyle,w=data.attrs,f=void 0===w?{}:w,k=o(data,n);return l("svg",function(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?_(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):_(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}({class:[m,d],style:[style,v],attrs:Object.assign({width:"384",height:"616",viewBox:"0 0 384 616",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f)},k),h.concat([l("rect",{attrs:{width:"384",height:"616",rx:"48",fill:"black"}}),l("rect",{attrs:{x:"19",y:"17",width:"348",height:"583",rx:"40",fill:"white"}}),l("path",{attrs:{d:"M123 0H262V19C262 36.6731 247.673 51 230 51H155C137.327 51 123 36.6731 123 19V0Z",fill:"#020000"}}),l("g",{staticClass:"keypress-scrolldown"},[l("rect",{attrs:{x:"126",y:"325",width:"146",height:"146",rx:"73",fill:"#D9D9D9","fill-opacity":"0.03",stroke:"#060606","stroke-width":"2"}}),l("rect",{staticClass:"keypress-scrolldown-thumb",attrs:{x:"169",y:"408",width:"60",height:"60",rx:"30",stroke:"black","stroke-width":"4"}})])]))}}},496:function(t,e,l){"use strict";l(480)},497:function(t,e,l){var r=l(42)((function(i){return i[1]}));r.push([t.i,'.hello{position:relative;width:100%}.hello,.hello__container{min-height:calc(100vh - 9rem)}.hello__row.--desk{height:30rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.hello__row-title{color:var(--color__white);display:block;font-size:6rem;font-weight:400;letter-spacing:-.2rem;line-height:7rem;text-transform:uppercase}.hello__row.--desk .hello__row-title:first-child{margin-left:6rem}.hello__row.--desk .hello__row-title:last-child{margin-left:11rem}.hello__row-subtitle{font-size:1.25rem;font-weight:400;letter-spacing:0;line-height:1.5rem;margin-right:1.5rem;vertical-align:text-top}.hello__row-subtitle-block{display:inline-block;vertical-align:text-top}.hello__row-subtitle-block .hello__row-subtitle{display:block}.hello__row.--mob{display:none}@keyframes animateWord{0%{opacity:0}5%{opacity:0;-webkit-transform:translateY(-1.5rem)}13%{opacity:1;-webkit-transform:translateY(0)}35%{opacity:1;-webkit-transform:translateY(0)}40%{opacity:0;-webkit-transform:translateY(1.5rem)}to{opacity:0}}.animated-words span{animation:animateWord 6s linear 0s infinite;color:var(--color__white);font-weight:500;opacity:0;overflow:hidden;position:absolute}.animated-words span:nth-child(2){animation-delay:2s}.animated-words span:nth-child(3){animation-delay:4s}.animated-words{display:inline-block;width:100%}.text-wrapper{align-content:center;display:flex!important;height:1.5rem;justify-content:center;text-align:left}.hello__btn{bottom:5rem;height:14rem;right:0;width:14rem}.hello__btn,.hello__btn:after{border-radius:50%;position:absolute}.hello__btn:after{border:1px solid var(--color__white);content:"";height:100%;left:0;top:0;width:100%}.hello__btn:after,.hello__btn:hover:after{transition:all .3s ease;will-change:transform}.hello__btn:hover:after{transform:scale(1.1)}.hello__btn span{color:var(--color__white);display:block;font-size:1.25rem;line-height:1.5rem;text-transform:uppercase;transition:all .3s ease}.hello__btn:hover span{text-shadow:rgba(195,120,62,.965) 0 0 .5rem;transition:all .3s ease;will-change:text-shadow}.hello__row-subtitle-block.--mob{display:none}@keyframes tickerLeft{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0)}}@keyframes tickerRight{0%{transform:translate3d(-100%,0,0)}to{transform:translateZ(0)}}.hello__marquee{display:none}.hello__marquee .ticker__item{font-size:4rem;line-height:4.5rem}.hello__marquee{margin-left:-2rem;margin-right:-2rem;width:calc(100% + 4rem)}.hello__marquee-row.--reverse .ticker__item{animation:tickerRight 10s linear infinite!important}.hello__marquee-row .ticker__item{padding:0 .5rem}@keyframes scrolldownArrow{0%{opacity:0;transform:translateY(0)}15%{opacity:1}50%{opacity:1}95%{opacity:0}to{opacity:0;transform:translateY(40%)}}@keyframes scrolldownKeypress{0%{opacity:0;transform:translateY(0)}15%{opacity:1;transform:translateY(-8%)}50%{opacity:1}95%{opacity:0}to{opacity:0;transform:translateY(-40%)}}@keyframes scrolldownKeypressThumb{0%{fill:transparent}20%{transform:translateY(-8%)}to{fill:transparent}}.keypress-scrolldown-thumb{animation:scrolldownKeypressThumb 1.5s linear infinite}.keypress-scrolldown{animation:scrolldownKeypress 1.5s linear infinite}.hello__scrolldown{display:none;height:10rem;position:absolute;right:2rem;top:0;width:4rem}.hello__marquee-wrap{height:4.5rem;overflow:hidden}.hello__scrolldown svg{height:100%;left:0;position:absolute;top:0;width:100%}@media screen and (max-width:991px){.hello__row.-mob{display:block}.hello__container{display:flex;flex-direction:column;justify-content:space-between}.hello__row.--mob{display:block;height:30rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:80%}.hello__row.--desk{display:none}.hello__btn{bottom:17rem;height:9rem;right:2rem;width:9rem}.hello__btn span{font-size:.875rem;line-height:1rem}.hello__row.--mob .hello__row-title{font-size:2rem;line-height:2.5rem}.hello__row-subtitle-block.--mob{display:block;position:relative;top:4rem}.hello__row-subtitle{font-size:1.5rem;line-height:2rem;margin-right:0;text-transform:uppercase}.hello__row-subtitle.text-wrapper{height:2rem;justify-content:flex-start}.hello__row-subtitle .animated-words{width:5rem}.hello__marquee,.hello__scrolldown{display:block}}@media screen and (max-width:768px){.hello__marquee{margin-left:-1rem;margin-right:-1rem;width:calc(100% + 2rem)}}',""]),r.locals={},t.exports=r},514:function(t,e,l){"use strict";l.r(e);var r=l(495),o={components:{ScrollDownSvg:l.n(r).a},methods:{animationSubtitile:function(t,e){this.$gsap.from(t,{delay:e,duration:2,opacity:0,ease:"power4.out"})},zoomBtn:function(){this.$gsap.from(".hello__btn",{delay:5.5,duration:.85,scale:.65,opacity:0,ease:"back"})},animationFadeScrolldown:function(t,e){this.$gsap.from(t,{delay:e,duration:2,opacity:0,ease:"power4.out"})},animationFadeOutScrolldown:function(t,e){this.$gsap.to(t,{delay:e,duration:.47,opacity:0,ease:"power4.out"})},animationHeight:function(t,e){this.$gsap.from(t,{delay:e,height:0,duration:1.5,ease:"power4.out"})},animationBounce:function(t,e,l){this.$gsap.from(t,{xPercent:l,delay:e,duration:1.5,ease:"power4.out"})}},mounted:function(){this.animationBounce(".js-row-dsk-top",4.6,-5),this.animationBounce(".js-row-dsk-mid",4.6,5),this.animationBounce(".js-row-dsk-bot",4.6,-5),this.zoomBtn(),this.animationFadeScrolldown(".hello__scrolldown",7),this.animationFadeOutScrolldown(".hello__scrolldown",9.7),this.animationHeight(".hello__marquee-wrap.--bot",4.6),this.animationHeight(".hello__marquee-wrap.--mid",4.8),this.animationHeight(".hello__marquee-wrap.--top",5),this.animationSubtitile(".hello__row-subtitle-block.--mob",4.6)}},n=(l(496),l(6)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hello"},[t._m(0),t._v(" "),e("div",{staticClass:"hello__container center-wrap"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("ScrollDownSvg",{staticClass:"hello__scrolldown"}),t._v(" "),t._m(3)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello__row --desk"},[e("span",{staticClass:"h1 hello__row-title js-row-dsk-top"},[e("span",{staticClass:"hello__row-subtitle"},[t._v("только")]),t._v("натуральный")]),t._v(" "),e("span",{staticClass:"h1 hello__row-title js-row-dsk-mid"},[t._v("перманентный")]),t._v(" "),e("span",{staticClass:"h1 hello__row-title js-row-dsk-bot"},[t._v("макияж\n      "),e("span",{staticClass:"hello__row-subtitle-block"},[e("span",{staticClass:"hello__row-subtitle"},[t._v("Красивые")]),t._v(" "),e("span",{staticClass:"hello__row-subtitle text-wrapper"},[e("span",{staticClass:"animated-words"},[e("span",[t._v("брови")]),t._v(" "),e("span",[t._v("губы")]),t._v(" "),e("span",[t._v("веки")])])]),t._v(" "),e("span",{staticClass:"hello__row-subtitle"},[t._v("в Крыму")])])])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"hello__row-subtitle-block --mob"},[e("span",{staticClass:"hello__row-subtitle"},[t._v("Красивые")]),t._v(" "),e("span",{staticClass:"hello__row-subtitle text-wrapper"},[e("span",{staticClass:"animated-words"},[e("span",[t._v("брови")]),t._v(" "),e("span",[t._v("губы")]),t._v(" "),e("span",[t._v("веки")])])]),t._v(" "),e("span",{staticClass:"hello__row-subtitle"},[t._v("в Крыму")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello__marquee ticker"},[e("div",{staticClass:"hello__marquee-wrap --top"},[e("div",{staticClass:"hello__marquee-row ticker__wrapper"},[e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("натуральный -")])])]),t._v(" "),e("div",{staticClass:"hello__marquee-wrap --mid"},[e("div",{staticClass:"hello__marquee-row --reverse ticker__wrapper"},[e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("перманентный -")])])]),t._v(" "),e("div",{staticClass:"hello__marquee-wrap --bot"},[e("div",{staticClass:"hello__marquee-row ticker__wrapper"},[e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")]),t._v(" "),e("div",{staticClass:"ticker__item"},[t._v("макияж -")])])])])},function(){var t=this._self._c;return t("a",{staticClass:"hello__btn flex --align-center --just-center",attrs:{target:"_blank",href:"https://t.me/nataleeroman"}},[t("span",[this._v("Записаться")])])}],!1,null,null,null);e.default=component.exports}}]);