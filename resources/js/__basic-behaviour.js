(function(){window.jspackager=window.jspackager||{};jspackager.devmode=false;var tmpList={"__basic-behaviour":["vendor/libs/head.min","vendor/libs/reveal"],"__base-modules":["init/app"]};jspackager.jsList=(window.jQuery)?jQuery.extend(jspackager.jsList||{},tmpList):tmpList;var basicScript=["__basic-behaviour"],srcMatch=/(.*)__basic-behaviour\.js$/,querys=location.search,hash=location.hash,scripts,src,path;function loadModule(path){for(var j=0,leng=basicScript.length;j<leng;j=j+1){if(jspackager.querys['mgnl']){basicScript[j]=basicScript[j].replace(/\./g,'-');}document.write('<script src="'+path+basicScript[j]+'.js"><\/script>');}}
querys=querys.replace(/^\?/,'').split('&');var obj={},tmp;for(var i=querys.length;i--;){if(querys[i]===''){continue;}tmp=querys[i].split('=');obj[tmp[0]]=(tmp[1]===undefined||tmp[1]===null)?true:tmp[1];}jspackager.querys=obj;if(hash==='#devmode'){basicScript=jspackager.jsList[basicScript];jspackager.devmode=true;}else{if(jspackager.querys['devmode']){basicScript=jspackager.jsList[basicScript];jspackager.devmode=true;}}if(jspackager.devmode){scripts=document.getElementsByTagName('script');for(var i=0,len=scripts.length;i<len;i++){src=scripts[i].getAttribute('src');
if(src){path=srcMatch.exec(src);if(path&&path[0]&&path[1]){jspackager.jsPath=path[1];loadModule(path[1]);}}}}})();if(this.jspackager && !jspackager.devmode) {!function(a){function b(){n||(n=!0,i(p,function(a){l(a)}))}function c(b,c){var d=a.createElement("script");d.type="text/"+(b.type||"javascript"),d.src=b.src||b,d.async=!1,d.onreadystatechange=d.onload=function(){var a=d.readyState;!c.done&&(!a||/loaded|complete/.test(a))&&(c.done=!0,c())},(a.body||o).appendChild(d)}function d(a,b){return a.state==z?b&&b():a.state==y?v.ready(a.name,b):a.state==x?a.onpreload.push(function(){d(a,b)}):(a.state=y,c(a.url,function(){a.state=z,b&&b(),i(r[a.name],function(a){l(a)}),g()&&n&&i(r.ALL,function(a){l(a)})}),void 0)}function e(a){void 0===a.state&&(a.state=x,a.onpreload=[],c({src:a.url,type:"cache"},function(){f(a)}))}function f(a){a.state=w,i(a.onpreload,function(a){a.call()})}function g(a){a=a||s;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=z)return!1;b=!0}return b}function h(a){return"[object Function]"==Object.prototype.toString.call(a)}function i(a,b){if(a){"object"==typeof a&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function j(a){var b;if("object"==typeof a)for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:k(a),url:a};var d=s[b.name];return d&&d.url===b.url?d:(s[b.name]=b,b)}function k(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return-1!=d?c.substring(0,d):c}function l(a){a._done||(a(),a._done=1)}var m,n,o=a.documentElement,p=[],q=[],r={},s={},t=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,u=window.head_conf&&head_conf.head||"head",v=window[u]=window[u]||function(){v.ready.apply(null,arguments)},w=1,x=2,y=3,z=4;if(v.js=t?function(){var a=arguments,b=a[a.length-1],c={};return h(b)||(b=null),i(a,function(e,f){e!=b&&(e=j(e),c[e.name]=e,d(e,b&&f==a.length-2?function(){g(c)&&l(b)}:null))}),v}:function(){var a=arguments,b=[].slice.call(a,1),c=b[0];return m?(c?(i(b,function(a){h(a)||e(j(a))}),d(j(a[0]),h(c)?c:function(){v.js.apply(null,b)})):d(j(a[0])),v):(q.push(function(){v.js.apply(null,a)}),v)},v.ready=function(b,c){if(b==a)return n?l(c):p.push(c),v;if(h(b)&&(c=b,b="ALL"),"string"!=typeof b||!h(c))return v;var d=s[b];if(d&&d.state==z||"ALL"==b&&g()&&n)return l(c),v;var e=r[b];return e?e.push(c):e=r[b]=[c],v},v.ready(a,function(){g()&&i(r.ALL,function(a){l(a)}),v.feature&&v.feature("domloaded",!0)}),window.addEventListener)a.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&b()});var A=1;try{A=window.frameElement}catch(B){}!A&&o.doScroll&&function(){try{o.doScroll("left"),b()}catch(a){return setTimeout(arguments.callee,1),void 0}}(),window.attachEvent("onload",b)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){m=!0,i(q,function(a){a()})},300)}(document);var Reveal=function(){"use strict";function a(a){if(b(),!ec.transforms2d&&!ec.transforms3d)return document.body.setAttribute("class","no-transforms"),void 0;window.addEventListener("load",A,!1);var d=Reveal.getQueryHash();"undefined"!=typeof d.dependencies&&delete d.dependencies,k(_b,a),k(_b,d),r(),c()}function b(){ec.transforms3d="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,ec.transforms2d="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,ec.requestAnimationFrameMethod=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,ec.requestAnimationFrame="function"==typeof ec.requestAnimationFrameMethod,ec.canvas=!!document.createElement("canvas").getContext,Vb=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function c(){function a(){e.length&&head.js.apply(null,e),d()}function b(b){head.ready(b.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof b.callback&&b.callback.apply(this),0===--f&&a()})}for(var c=[],e=[],f=0,g=0,h=_b.dependencies.length;h>g;g++){var i=_b.dependencies[g];(!i.condition||i.condition())&&(i.async?e.push(i.src):c.push(i.src),b(i))}c.length?(f=c.length,head.js.apply(null,c)):a()}function d(){e(),Q(),h(),cb(),X(!0),setTimeout(function(){dc.slides.classList.remove("no-transition"),ac=!0,t("ready",{indexh:Qb,indexv:Rb,currentSlide:Tb})},1)}function e(){dc.theme=document.querySelector("#theme"),dc.wrapper=document.querySelector(".reveal"),dc.slides=document.querySelector(".reveal .slides"),dc.slides.classList.add("no-transition"),dc.background=f(dc.wrapper,"div","backgrounds",null),dc.progress=f(dc.wrapper,"div","progress","<span></span>"),dc.progressbar=dc.progress.querySelector("span"),f(dc.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),dc.slideNumber=f(dc.wrapper,"div","slide-number",""),f(dc.wrapper,"div","state-background",null),f(dc.wrapper,"div","pause-overlay",null),dc.controls=document.querySelector(".reveal .controls"),dc.controlsLeft=l(document.querySelectorAll(".navigate-left")),dc.controlsRight=l(document.querySelectorAll(".navigate-right")),dc.controlsUp=l(document.querySelectorAll(".navigate-up")),dc.controlsDown=l(document.querySelectorAll(".navigate-down")),dc.controlsPrev=l(document.querySelectorAll(".navigate-prev")),dc.controlsNext=l(document.querySelectorAll(".navigate-next"))}function f(a,b,c,d){var e=a.querySelector("."+c);return e||(e=document.createElement(b),e.classList.add(c),null!==d&&(e.innerHTML=d),a.appendChild(e)),e}function g(){function a(a,b){var c={background:a.getAttribute("data-background"),backgroundSize:a.getAttribute("data-background-size"),backgroundImage:a.getAttribute("data-background-image"),backgroundColor:a.getAttribute("data-background-color"),backgroundRepeat:a.getAttribute("data-background-repeat"),backgroundPosition:a.getAttribute("data-background-position"),backgroundTransition:a.getAttribute("data-background-transition")},d=document.createElement("div");return d.className="slide-background",c.background&&(/^(http|file|\/\/)/gi.test(c.background)||/\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(c.background)?d.style.backgroundImage="url("+c.background+")":d.style.background=c.background),(c.background||c.backgroundColor||c.backgroundImage)&&d.setAttribute("data-background-hash",c.background+c.backgroundSize+c.backgroundImage+c.backgroundColor+c.backgroundRepeat+c.backgroundPosition+c.backgroundTransition),c.backgroundSize&&(d.style.backgroundSize=c.backgroundSize),c.backgroundImage&&(d.style.backgroundImage='url("'+c.backgroundImage+'")'),c.backgroundColor&&(d.style.backgroundColor=c.backgroundColor),c.backgroundRepeat&&(d.style.backgroundRepeat=c.backgroundRepeat),c.backgroundPosition&&(d.style.backgroundPosition=c.backgroundPosition),c.backgroundTransition&&d.setAttribute("data-background-transition",c.backgroundTransition),b.appendChild(d),d}q()&&document.body.classList.add("print-pdf"),dc.background.innerHTML="",dc.background.classList.add("no-transition"),l(document.querySelectorAll(Yb)).forEach(function(b){var c;c=q()?a(b,b):a(b,dc.background),l(b.querySelectorAll("section")).forEach(function(b){q()?a(b,b):a(b,c)})}),_b.parallaxBackgroundImage?(dc.background.style.backgroundImage='url("'+_b.parallaxBackgroundImage+'")',dc.background.style.backgroundSize=_b.parallaxBackgroundSize,setTimeout(function(){dc.wrapper.classList.add("has-parallax-background")},1)):(dc.background.style.backgroundImage="",dc.wrapper.classList.remove("has-parallax-background"))}function h(a){var b=document.querySelectorAll(Xb).length;if(dc.wrapper.classList.remove(_b.transition),"object"==typeof a&&k(_b,a),ec.transforms3d===!1&&(_b.transition="linear"),dc.wrapper.classList.add(_b.transition),dc.wrapper.setAttribute("data-transition-speed",_b.transitionSpeed),dc.wrapper.setAttribute("data-background-transition",_b.backgroundTransition),dc.controls.style.display=_b.controls?"block":"none",dc.progress.style.display=_b.progress?"block":"none",_b.rtl?dc.wrapper.classList.add("rtl"):dc.wrapper.classList.remove("rtl"),_b.center?dc.wrapper.classList.add("center"):dc.wrapper.classList.remove("center"),_b.mouseWheel?(document.addEventListener("DOMMouseScroll",Bb,!1),document.addEventListener("mousewheel",Bb,!1)):(document.removeEventListener("DOMMouseScroll",Bb,!1),document.removeEventListener("mousewheel",Bb,!1)),_b.rollingLinks?u():v(),_b.previewLinks?w():(x(),w("[data-preview-link]")),b>1&&_b.autoSlide&&_b.autoSlideStoppable&&ec.canvas&&ec.requestAnimationFrame?(Wb=new Pb(dc.wrapper,function(){return Math.min(Math.max((Date.now()-mc)/kc,0),1)}),Wb.on("click",Ob),nc=!1):Wb&&(Wb.destroy(),Wb=null),_b.theme&&dc.theme){var c=dc.theme.getAttribute("href"),d=/[^\/]*?(?=\.css)/,e=c.match(d)[0];_b.theme!==e&&(c=c.replace(d,_b.theme),dc.theme.setAttribute("href",c))}P()}function i(){if(jc=!0,window.addEventListener("hashchange",Jb,!1),window.addEventListener("resize",Kb,!1),_b.touch&&(dc.wrapper.addEventListener("touchstart",vb,!1),dc.wrapper.addEventListener("touchmove",wb,!1),dc.wrapper.addEventListener("touchend",xb,!1),window.navigator.msPointerEnabled&&(dc.wrapper.addEventListener("MSPointerDown",yb,!1),dc.wrapper.addEventListener("MSPointerMove",zb,!1),dc.wrapper.addEventListener("MSPointerUp",Ab,!1))),_b.keyboard&&document.addEventListener("keydown",ub,!1),_b.progress&&dc.progress&&dc.progress.addEventListener("click",Cb,!1),_b.focusBodyOnPageVisiblityChange){var a;"hidden"in document?a="visibilitychange":"msHidden"in document?a="msvisibilitychange":"webkitHidden"in document&&(a="webkitvisibilitychange"),a&&document.addEventListener(a,Lb,!1)}["touchstart","click"].forEach(function(a){dc.controlsLeft.forEach(function(b){b.addEventListener(a,Db,!1)}),dc.controlsRight.forEach(function(b){b.addEventListener(a,Eb,!1)}),dc.controlsUp.forEach(function(b){b.addEventListener(a,Fb,!1)}),dc.controlsDown.forEach(function(b){b.addEventListener(a,Gb,!1)}),dc.controlsPrev.forEach(function(b){b.addEventListener(a,Hb,!1)}),dc.controlsNext.forEach(function(b){b.addEventListener(a,Ib,!1)})})}function j(){jc=!1,document.removeEventListener("keydown",ub,!1),window.removeEventListener("hashchange",Jb,!1),window.removeEventListener("resize",Kb,!1),dc.wrapper.removeEventListener("touchstart",vb,!1),dc.wrapper.removeEventListener("touchmove",wb,!1),dc.wrapper.removeEventListener("touchend",xb,!1),window.navigator.msPointerEnabled&&(dc.wrapper.removeEventListener("MSPointerDown",yb,!1),dc.wrapper.removeEventListener("MSPointerMove",zb,!1),dc.wrapper.removeEventListener("MSPointerUp",Ab,!1)),_b.progress&&dc.progress&&dc.progress.removeEventListener("click",Cb,!1),["touchstart","click"].forEach(function(a){dc.controlsLeft.forEach(function(b){b.removeEventListener(a,Db,!1)}),dc.controlsRight.forEach(function(b){b.removeEventListener(a,Eb,!1)}),dc.controlsUp.forEach(function(b){b.removeEventListener(a,Fb,!1)}),dc.controlsDown.forEach(function(b){b.removeEventListener(a,Gb,!1)}),dc.controlsPrev.forEach(function(b){b.removeEventListener(a,Hb,!1)}),dc.controlsNext.forEach(function(b){b.removeEventListener(a,Ib,!1)})})}function k(a,b){for(var c in b)a[c]=b[c]}function l(a){return Array.prototype.slice.call(a)}function m(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}function n(a,b){a.style.WebkitTransform=b,a.style.MozTransform=b,a.style.msTransform=b,a.style.OTransform=b,a.style.transform=b}function o(a){var b=0;if(a){var c=0;l(a.childNodes).forEach(function(a){"number"==typeof a.offsetTop&&a.style&&("absolute"===a.style.position&&(c+=1),b=Math.max(b,a.offsetTop+a.offsetHeight))}),0===c&&(b=a.offsetHeight)}return b}function p(a,b){if(b=b||0,a){var c=a.parentNode,d=c.childNodes;l(d).forEach(function(c){if("number"==typeof c.offsetHeight&&c!==a){var d=window.getComputedStyle(c),e=parseInt(d.marginTop,10),f=parseInt(d.marginBottom,10);b-=c.offsetHeight+e+f}});var e=window.getComputedStyle(a);b-=parseInt(e.marginTop,10)+parseInt(e.marginBottom,10)}return b}function q(){return/print-pdf/gi.test(window.location.search)}function r(){_b.hideAddressBar&&Vb&&(window.addEventListener("load",s,!1),window.addEventListener("orientationchange",s,!1))}function s(){setTimeout(function(){window.scrollTo(0,1)},10)}function t(a,b){var c=document.createEvent("HTMLEvents",1,2);c.initEvent(a,!0,!0),k(c,b),dc.wrapper.dispatchEvent(c)}function u(){if(ec.transforms3d&&!("msPerspective"in document.body.style))for(var a=document.querySelectorAll(Xb+" a:not(.image)"),b=0,c=a.length;c>b;b++){var d=a[b];if(!(!d.textContent||d.querySelector("*")||d.className&&d.classList.contains(d,"roll"))){var e=document.createElement("span");e.setAttribute("data-title",d.text),e.innerHTML=d.innerHTML,d.classList.add("roll"),d.innerHTML="",d.appendChild(e)}}}function v(){for(var a=document.querySelectorAll(Xb+" a.roll"),b=0,c=a.length;c>b;b++){var d=a[b],e=d.querySelector("span");e&&(d.classList.remove("roll"),d.innerHTML=e.innerHTML)}}function w(a){var b=l(document.querySelectorAll(a?a:"a"));b.forEach(function(a){/^(http|www)/gi.test(a.getAttribute("href"))&&a.addEventListener("click",Nb,!1)})}function x(){var a=l(document.querySelectorAll("a"));a.forEach(function(a){/^(http|www)/gi.test(a.getAttribute("href"))&&a.removeEventListener("click",Nb,!1)})}function y(a){z(),dc.preview=document.createElement("div"),dc.preview.classList.add("preview-link-overlay"),dc.wrapper.appendChild(dc.preview),dc.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+a+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+a+'"></iframe>',"</div>"].join(""),dc.preview.querySelector("iframe").addEventListener("load",function(){dc.preview.classList.add("loaded")},!1),dc.preview.querySelector(".close").addEventListener("click",function(a){z(),a.preventDefault()},!1),dc.preview.querySelector(".external").addEventListener("click",function(){z()},!1),setTimeout(function(){dc.preview.classList.add("visible")},1)}function z(){dc.preview&&(dc.preview.setAttribute("src",""),dc.preview.parentNode.removeChild(dc.preview),dc.preview=null)}function A(){if(dc.wrapper&&!q()){var a=dc.wrapper.offsetWidth,b=dc.wrapper.offsetHeight;a-=b*_b.margin,b-=b*_b.margin;var c=_b.width,d=_b.height,e=20;B(_b.width,_b.height,e),"string"==typeof c&&/%$/.test(c)&&(c=parseInt(c,10)/100*a),"string"==typeof d&&/%$/.test(d)&&(d=parseInt(d,10)/100*b),dc.slides.style.width=c+"px",dc.slides.style.height=d+"px",cc=Math.min(a/c,b/d),cc=Math.max(cc,_b.minScale),cc=Math.min(cc,_b.maxScale),"undefined"==typeof dc.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?n(dc.slides,"translate(-50%, -50%) scale("+cc+") translate(50%, 50%)"):dc.slides.style.zoom=cc;for(var f=l(document.querySelectorAll(Xb)),g=0,h=f.length;h>g;g++){var i=f[g];"none"!==i.style.display&&(i.style.top=_b.center||i.classList.contains("center")?i.classList.contains("stack")?0:Math.max(-(o(i)/2)-e,-d/2)+"px":"")}U(),Y()}}function B(a,b,c){l(dc.slides.querySelectorAll("section > .stretch")).forEach(function(d){var e=p(d,b-2*c);if(/(img|video)/gi.test(d.nodeName)){var f=d.naturalWidth||d.videoWidth,g=d.naturalHeight||d.videoHeight,h=Math.min(a/f,e/g);d.style.width=f*h+"px",d.style.height=g*h+"px"}else d.style.width=a+"px",d.style.height=e+"px"})}function C(a,b){"object"==typeof a&&"function"==typeof a.setAttribute&&a.setAttribute("data-previous-indexv",b||0)}function D(a){if("object"==typeof a&&"function"==typeof a.setAttribute&&a.classList.contains("stack")){var b=a.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(a.getAttribute(b)||0,10)}return 0}function E(){if(_b.overview){kb();var a=dc.wrapper.classList.contains("overview"),b=window.innerWidth<400?1e3:2500;dc.wrapper.classList.add("overview"),dc.wrapper.classList.remove("overview-deactivating"),clearTimeout(hc),clearTimeout(ic),hc=setTimeout(function(){for(var c=document.querySelectorAll(Yb),d=0,e=c.length;e>d;d++){var f=c[d],g=_b.rtl?-105:105;if(f.setAttribute("data-index-h",d),n(f,"translateZ(-"+b+"px) translate("+(d-Qb)*g+"%, 0%)"),f.classList.contains("stack"))for(var h=f.querySelectorAll("section"),i=0,j=h.length;j>i;i++){var k=d===Qb?Rb:D(f),l=h[i];l.setAttribute("data-index-h",d),l.setAttribute("data-index-v",i),n(l,"translate(0%, "+105*(i-k)+"%)"),l.addEventListener("click",Mb,!0)}else f.addEventListener("click",Mb,!0)}T(),A(),a||t("overviewshown",{indexh:Qb,indexv:Rb,currentSlide:Tb})},10)}}function F(){_b.overview&&(clearTimeout(hc),clearTimeout(ic),dc.wrapper.classList.remove("overview"),dc.wrapper.classList.add("overview-deactivating"),ic=setTimeout(function(){dc.wrapper.classList.remove("overview-deactivating")},1),l(document.querySelectorAll(Xb)).forEach(function(a){n(a,""),a.removeEventListener("click",Mb,!0)}),O(Qb,Rb),jb(),t("overviewhidden",{indexh:Qb,indexv:Rb,currentSlide:Tb}))}function G(a){"boolean"==typeof a?a?E():F():H()?F():E()}function H(){return dc.wrapper.classList.contains("overview")}function I(a){return a=a?a:Tb,a&&a.parentNode&&!!a.parentNode.nodeName.match(/section/i)}function J(){var a=document.body,b=a.requestFullScreen||a.webkitRequestFullscreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullScreen;b&&b.apply(a)}function K(){var a=dc.wrapper.classList.contains("paused");kb(),dc.wrapper.classList.add("paused"),a===!1&&t("paused")}function L(){var a=dc.wrapper.classList.contains("paused");dc.wrapper.classList.remove("paused"),jb(),a&&t("resumed")}function M(){N()?L():K()}function N(){return dc.wrapper.classList.contains("paused")}function O(a,b,c,d){Sb=Tb;var e=document.querySelectorAll(Yb);void 0===b&&(b=D(e[a])),Sb&&Sb.parentNode&&Sb.parentNode.classList.contains("stack")&&C(Sb.parentNode,Rb);var f=bc.concat();bc.length=0;var g=Qb||0,h=Rb||0;Qb=S(Yb,void 0===a?Qb:a),Rb=S(Zb,void 0===b?Rb:b),T(),A();a:for(var i=0,j=bc.length;j>i;i++){for(var k=0;k<f.length;k++)if(f[k]===bc[i]){f.splice(k,1);continue a}document.documentElement.classList.add(bc[i]),t(bc[i])}for(;f.length;)document.documentElement.classList.remove(f.pop());H()&&E();var m=e[Qb],n=m.querySelectorAll("section");Tb=n[Rb]||m,"undefined"!=typeof c&&gb(c);var o=Qb!==g||Rb!==h;o?t("slidechanged",{indexh:Qb,indexv:Rb,previousSlide:Sb,currentSlide:Tb,origin:d}):Sb=null,Sb&&(Sb.classList.remove("present"),document.querySelector($b).classList.contains("present")&&setTimeout(function(){var a,b=l(document.querySelectorAll(Yb+".stack"));for(a in b)b[a]&&C(b[a],0)},0)),o&&(ab(Sb),_(Tb)),W(),U(),X(),Y(),V(),db(),jb()}function P(){j(),i(),A(),kc=_b.autoSlide,jb(),g(),R(),W(),U(),X(!0),V()}function Q(){var a=l(document.querySelectorAll(Yb));a.forEach(function(a){var b=l(a.querySelectorAll("section"));b.forEach(function(a,b){b>0&&(a.classList.remove("present"),a.classList.remove("past"),a.classList.add("future"))})})}function R(){var a=l(document.querySelectorAll(Yb));a.forEach(function(a){var b=l(a.querySelectorAll("section"));b.forEach(function(a){fb(a.querySelectorAll(".fragment"))}),0===b.length&&fb(a.querySelectorAll(".fragment"))})}function S(a,b){var c=l(document.querySelectorAll(a)),d=c.length;if(d){_b.loop&&(b%=d,0>b&&(b=d+b)),b=Math.max(Math.min(b,d-1),0);for(var e=0;d>e;e++){var f=c[e],g=_b.rtl&&!I(f);if(f.classList.remove("past"),f.classList.remove("present"),f.classList.remove("future"),f.setAttribute("hidden",""),b>e){f.classList.add(g?"future":"past");for(var h=l(f.querySelectorAll(".fragment"));h.length;){var i=h.pop();i.classList.add("visible"),i.classList.remove("current-fragment")}}else if(e>b){f.classList.add(g?"past":"future");for(var j=l(f.querySelectorAll(".fragment.visible"));j.length;){var k=j.pop();k.classList.remove("visible"),k.classList.remove("current-fragment")}}f.querySelector("section")&&f.classList.add("stack")}c[b].classList.add("present"),c[b].removeAttribute("hidden");var m=c[b].getAttribute("data-state");m&&(bc=bc.concat(m.split(" ")))}else b=0;return b}function T(){var a,b,c=l(document.querySelectorAll(Yb)),d=c.length;if(d){var e=H()?10:_b.viewDistance;Vb&&(e=H()?6:1);for(var f=0;d>f;f++){var g=c[f],h=l(g.querySelectorAll("section")),i=h.length;if(a=Math.abs((Qb-f)%(d-e))||0,g.style.display=a>e?"none":"block",i)for(var j=D(g),k=0;i>k;k++){var m=h[k];b=f===Qb?Math.abs(Rb-k):Math.abs(k-j),m.style.display=a+b>e?"none":"block"}}}}function U(){if(_b.progress&&dc.progress){var a=l(document.querySelectorAll(Yb)),b=document.querySelectorAll(Xb+":not(.stack)").length,c=0;a:for(var d=0;d<a.length;d++){for(var e=a[d],f=l(e.querySelectorAll("section")),g=0;g<f.length;g++){if(f[g].classList.contains("present"))break a;c++}if(e.classList.contains("present"))break;e.classList.contains("stack")===!1&&c++}dc.progressbar.style.width=c/(b-1)*window.innerWidth+"px"}}function V(){if(_b.slideNumber&&dc.slideNumber){var a=Qb;Rb>0&&(a+=" - "+Rb),dc.slideNumber.innerHTML=a}}function W(){var a=Z(),b=$();dc.controlsLeft.concat(dc.controlsRight).concat(dc.controlsUp).concat(dc.controlsDown).concat(dc.controlsPrev).concat(dc.controlsNext).forEach(function(a){a.classList.remove("enabled"),a.classList.remove("fragmented")}),a.left&&dc.controlsLeft.forEach(function(a){a.classList.add("enabled")}),a.right&&dc.controlsRight.forEach(function(a){a.classList.add("enabled")}),a.up&&dc.controlsUp.forEach(function(a){a.classList.add("enabled")}),a.down&&dc.controlsDown.forEach(function(a){a.classList.add("enabled")}),(a.left||a.up)&&dc.controlsPrev.forEach(function(a){a.classList.add("enabled")}),(a.right||a.down)&&dc.controlsNext.forEach(function(a){a.classList.add("enabled")}),Tb&&(b.prev&&dc.controlsPrev.forEach(function(a){a.classList.add("fragmented","enabled")}),b.next&&dc.controlsNext.forEach(function(a){a.classList.add("fragmented","enabled")}),I(Tb)?(b.prev&&dc.controlsUp.forEach(function(a){a.classList.add("fragmented","enabled")}),b.next&&dc.controlsDown.forEach(function(a){a.classList.add("fragmented","enabled")})):(b.prev&&dc.controlsLeft.forEach(function(a){a.classList.add("fragmented","enabled")}),b.next&&dc.controlsRight.forEach(function(a){a.classList.add("fragmented","enabled")})))}function X(a){var b=null,c=_b.rtl?"future":"past",d=_b.rtl?"past":"future";if(l(dc.background.childNodes).forEach(function(e,f){Qb>f?e.className="slide-background "+c:f>Qb?e.className="slide-background "+d:(e.className="slide-background present",b=e),(a||f===Qb)&&l(e.childNodes).forEach(function(a,c){Rb>c?a.className="slide-background past":c>Rb?a.className="slide-background future":(a.className="slide-background present",f===Qb&&(b=a))})}),b){var e=Ub?Ub.getAttribute("data-background-hash"):null,f=b.getAttribute("data-background-hash");f&&f===e&&b!==Ub&&dc.background.classList.add("no-transition"),Ub=b}setTimeout(function(){dc.background.classList.remove("no-transition")},1)}function Y(){if(_b.parallaxBackgroundImage){var a,b,c=document.querySelectorAll(Yb),d=document.querySelectorAll(Zb),e=dc.background.style.backgroundSize.split(" ");1===e.length?a=b=parseInt(e[0],10):(a=parseInt(e[0],10),b=parseInt(e[1],10));var f=dc.background.offsetWidth,g=c.length,h=-(a-f)/(g-1)*Qb,i=dc.background.offsetHeight,j=d.length,k=j>0?-(b-i)/(j-1)*Rb:0;dc.background.style.backgroundPosition=h+"px "+k+"px"}}function Z(){var a=document.querySelectorAll(Yb),b=document.querySelectorAll(Zb),c={left:Qb>0||_b.loop,right:Qb<a.length-1||_b.loop,up:Rb>0,down:Rb<b.length-1};if(_b.rtl){var d=c.left;c.left=c.right,c.right=d}return c}function $(){if(Tb&&_b.fragments){var a=Tb.querySelectorAll(".fragment"),b=Tb.querySelectorAll(".fragment:not(.visible)");return{prev:a.length-b.length>0,next:!!b.length}}return{prev:!1,next:!1}}function _(a){a&&!bb()&&(l(a.querySelectorAll("video, audio")).forEach(function(a){a.hasAttribute("data-autoplay")&&a.play()}),l(a.querySelectorAll("iframe")).forEach(function(a){a.contentWindow.postMessage("slide:start","*")}),l(a.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(a){a.hasAttribute("data-autoplay")&&a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function ab(a){a&&(l(a.querySelectorAll("video, audio")).forEach(function(a){a.hasAttribute("data-ignore")||a.pause()}),l(a.querySelectorAll("iframe")).forEach(function(a){a.contentWindow.postMessage("slide:stop","*")}),l(a.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(a){a.hasAttribute("data-ignore")||"function"!=typeof a.contentWindow.postMessage||a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function bb(){return!!window.location.search.match(/receiver/gi)}function cb(){var a=window.location.hash,b=a.slice(2).split("/"),c=a.replace(/#|\//gi,"");if(isNaN(parseInt(b[0],10))&&c.length){var d=document.querySelector("#"+c);if(d){var e=Reveal.getIndices(d);O(e.h,e.v)}else O(Qb||0,Rb||0)}else{var f=parseInt(b[0],10)||0,g=parseInt(b[1],10)||0;(f!==Qb||g!==Rb)&&O(f,g)}}function db(a){if(_b.history)if(clearTimeout(gc),"number"==typeof a)gc=setTimeout(db,a);else{var b="/";Tb&&"string"==typeof Tb.getAttribute("id")?b="/"+Tb.getAttribute("id"):((Qb>0||Rb>0)&&(b+=Qb),Rb>0&&(b+="/"+Rb)),window.location.hash=b}}function eb(a){var b,c=Qb,d=Rb;if(a){var e=I(a),f=e?a.parentNode:a,g=l(document.querySelectorAll(Yb));c=Math.max(g.indexOf(f),0),e&&(d=Math.max(l(a.parentNode.querySelectorAll("section")).indexOf(a),0))}if(!a&&Tb){var h=Tb.querySelectorAll(".fragment").length>0;if(h){var i=Tb.querySelectorAll(".fragment.visible");b=i.length-1}}return{h:c,v:d,f:b}}function fb(a){a=l(a);var b=[],c=[],d=[];a.forEach(function(a){if(a.hasAttribute("data-fragment-index")){var d=parseInt(a.getAttribute("data-fragment-index"),10);b[d]||(b[d]=[]),b[d].push(a)}else c.push([a])}),b=b.concat(c);var e=0;return b.forEach(function(a){a.forEach(function(a){d.push(a),a.setAttribute("data-fragment-index",e)}),e++}),d}function gb(a,b){if(Tb&&_b.fragments){var c=fb(Tb.querySelectorAll(".fragment"));if(c.length){if("number"!=typeof a){var d=fb(Tb.querySelectorAll(".fragment.visible")).pop();a=d?parseInt(d.getAttribute("data-fragment-index")||0,10):-1}"number"==typeof b&&(a+=b);var e=[],f=[];return l(c).forEach(function(b,c){b.hasAttribute("data-fragment-index")&&(c=parseInt(b.getAttribute("data-fragment-index"),10)),a>=c?(b.classList.contains("visible")||e.push(b),b.classList.add("visible"),b.classList.remove("current-fragment"),c===a&&b.classList.add("current-fragment")):(b.classList.contains("visible")&&f.push(b),b.classList.remove("visible"),b.classList.remove("current-fragment"))}),f.length&&t("fragmenthidden",{fragment:f[0],fragments:f}),e.length&&t("fragmentshown",{fragment:e[0],fragments:e}),W(),!(!e.length&&!f.length)}}return!1}function hb(){return gb(null,1)}function ib(){return gb(null,-1)}function jb(){if(kb(),Tb){var a=Tb.parentNode?Tb.parentNode.getAttribute("data-autoslide"):null,b=Tb.getAttribute("data-autoslide");kc=b?parseInt(b,10):a?parseInt(a,10):_b.autoSlide,l(Tb.querySelectorAll("video, audio")).forEach(function(a){a.hasAttribute("data-autoplay")&&kc&&1e3*a.duration>kc&&(kc=1e3*a.duration+1e3)}),!kc||nc||N()||H()||Reveal.isLastSlide()&&_b.loop!==!0||(lc=setTimeout(sb,kc),mc=Date.now()),Wb&&Wb.setPlaying(-1!==lc)}}function kb(){clearTimeout(lc),lc=-1}function lb(){nc=!0,clearTimeout(lc),Wb&&Wb.setPlaying(!1)}function mb(){nc=!1,jb()}function nb(){_b.rtl?(H()||hb()===!1)&&Z().left&&O(Qb+1):(H()||ib()===!1)&&Z().left&&O(Qb-1)}function ob(){_b.rtl?(H()||ib()===!1)&&Z().right&&O(Qb-1):(H()||hb()===!1)&&Z().right&&O(Qb+1)}function pb(){(H()||ib()===!1)&&Z().up&&O(Qb,Rb-1)}function qb(){(H()||hb()===!1)&&Z().down&&O(Qb,Rb+1)}function rb(){if(ib()===!1)if(Z().up)pb();else{var a=document.querySelector(Yb+".past:nth-child("+Qb+")");if(a){var b=a.querySelectorAll("section").length-1||void 0,c=Qb-1;O(c,b)}}}function sb(){hb()===!1&&(Z().down?qb():ob()),jb()}function tb(){_b.autoSlideStoppable&&lb()}function ub(a){tb(a),document.activeElement;var b=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(b||a.shiftKey&&32!==a.keyCode||a.altKey||a.ctrlKey||a.metaKey)){if(N()&&-1===[66,190,191].indexOf(a.keyCode))return!1;var c=!1;if("object"==typeof _b.keyboard)for(var d in _b.keyboard)if(parseInt(d,10)===a.keyCode){var e=_b.keyboard[d];"function"==typeof e?e.apply(null,[a]):"string"==typeof e&&"function"==typeof Reveal[e]&&Reveal[e].call(),c=!0}if(c===!1)switch(c=!0,a.keyCode){case 80:case 33:rb();break;case 78:case 34:sb();break;case 72:case 37:nb();break;case 76:case 39:ob();break;case 75:case 38:pb();break;case 74:case 40:qb();break;case 36:O(0);break;case 35:O(Number.MAX_VALUE);break;case 32:H()?F():a.shiftKey?rb():sb();break;case 13:H()?F():c=!1;break;case 66:case 190:case 191:M();break;case 70:J();break;default:c=!1}c?a.preventDefault():27!==a.keyCode&&79!==a.keyCode||!ec.transforms3d||(dc.preview?z():G(),a.preventDefault()),jb()}}function vb(a){oc.startX=a.touches[0].clientX,oc.startY=a.touches[0].clientY,oc.startCount=a.touches.length,2===a.touches.length&&_b.overview&&(oc.startSpan=m({x:a.touches[1].clientX,y:a.touches[1].clientY},{x:oc.startX,y:oc.startY}))}function wb(a){if(oc.captured)navigator.userAgent.match(/android/gi)&&a.preventDefault();else{tb(a);var b=a.touches[0].clientX,c=a.touches[0].clientY;if(2===a.touches.length&&2===oc.startCount&&_b.overview){var d=m({x:a.touches[1].clientX,y:a.touches[1].clientY},{x:oc.startX,y:oc.startY});Math.abs(oc.startSpan-d)>oc.threshold&&(oc.captured=!0,d<oc.startSpan?E():F()),a.preventDefault()}else if(1===a.touches.length&&2!==oc.startCount){var e=b-oc.startX,f=c-oc.startY;e>oc.threshold&&Math.abs(e)>Math.abs(f)?(oc.captured=!0,nb()):e<-oc.threshold&&Math.abs(e)>Math.abs(f)?(oc.captured=!0,ob()):f>oc.threshold?(oc.captured=!0,pb()):f<-oc.threshold&&(oc.captured=!0,qb()),_b.embedded?(oc.captured||I(Tb))&&a.preventDefault():a.preventDefault()}}}function xb(){oc.captured=!1}function yb(a){a.pointerType===a.MSPOINTER_TYPE_TOUCH&&(a.touches=[{clientX:a.clientX,clientY:a.clientY}],vb(a))}function zb(a){a.pointerType===a.MSPOINTER_TYPE_TOUCH&&(a.touches=[{clientX:a.clientX,clientY:a.clientY}],wb(a))}function Ab(a){a.pointerType===a.MSPOINTER_TYPE_TOUCH&&(a.touches=[{clientX:a.clientX,clientY:a.clientY}],xb(a))}function Bb(a){if(Date.now()-fc>600){fc=Date.now();var b=a.detail||-a.wheelDelta;b>0?sb():rb()}}function Cb(a){tb(a),a.preventDefault();var b=l(document.querySelectorAll(Yb)).length,c=Math.floor(a.clientX/dc.wrapper.offsetWidth*b);O(c)}function Db(a){a.preventDefault(),tb(),nb()}function Eb(a){a.preventDefault(),tb(),ob()}function Fb(a){a.preventDefault(),tb(),pb()}function Gb(a){a.preventDefault(),tb(),qb()}function Hb(a){a.preventDefault(),tb(),rb()}function Ib(a){a.preventDefault(),tb(),sb()}function Jb(){cb()}function Kb(){A()}function Lb(){var a=document.webkitHidden||document.msHidden||document.hidden;a===!1&&document.activeElement!==document.body&&(document.activeElement.blur(),document.body.focus())}function Mb(a){if(jc&&H()){a.preventDefault();for(var b=a.target;b&&!b.nodeName.match(/section/gi);)b=b.parentNode;if(b&&!b.classList.contains("disabled")&&(F(),b.nodeName.match(/section/gi))){var c=parseInt(b.getAttribute("data-index-h"),10),d=parseInt(b.getAttribute("data-index-v"),10);O(c,d)}}}function Nb(a){var b=a.target.getAttribute("href");b&&(y(b),a.preventDefault())}function Ob(){Reveal.isLastSlide()&&_b.loop===!1?(O(0,0),mb()):nc?mb():lb()}function Pb(a,b){this.diameter=50,this.thickness=3,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=a,this.progressCheck=b,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()
}var Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb=".reveal .slides section",Yb=".reveal .slides>section",Zb=".reveal .slides>section.present>section",$b=".reveal .slides>section:first-of-type",_b={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,slideNumber:!1,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,focusBodyOnPageVisiblityChange:!0,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",parallaxBackgroundImage:"",parallaxBackgroundSize:"",viewDistance:3,dependencies:[]},ac=!1,bc=[],cc=1,dc={},ec={},fc=0,gc=0,hc=0,ic=0,jc=!1,kc=0,lc=0,mc=-1,nc=!1,oc={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return Pb.prototype.setPlaying=function(a){var b=this.playing;this.playing=a,!b&&this.playing?this.animate():this.render()},Pb.prototype.animate=function(){var a=this.progress;this.progress=this.progressCheck(),a>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&ec.requestAnimationFrameMethod.call(window,this.animate.bind(this))},Pb.prototype.render=function(){var a=this.playing?this.progress:0,b=this.diameter/2-this.thickness,c=this.diameter/2,d=this.diameter/2,e=14;this.progressOffset+=.1*(1-this.progressOffset);var f=-Math.PI/2+a*2*Math.PI,g=-Math.PI/2+this.progressOffset*2*Math.PI;this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(c,d,b+2,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(c,d,b,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#666",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(c,d,b,g,f,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(c-e/2,d-e/2),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,e/2-2,e),this.context.fillRect(e/2+2,0,e/2-2,e)):(this.context.beginPath(),this.context.translate(2,0),this.context.moveTo(0,0),this.context.lineTo(e-2,e/2),this.context.lineTo(0,e),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()},Pb.prototype.on=function(a,b){this.canvas.addEventListener(a,b,!1)},Pb.prototype.off=function(a,b){this.canvas.removeEventListener(a,b,!1)},Pb.prototype.destroy=function(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)},{initialize:a,configure:h,sync:P,slide:O,left:nb,right:ob,up:pb,down:qb,prev:rb,next:sb,navigateFragment:gb,prevFragment:ib,nextFragment:hb,navigateTo:O,navigateLeft:nb,navigateRight:ob,navigateUp:pb,navigateDown:qb,navigatePrev:rb,navigateNext:sb,layout:A,availableRoutes:Z,availableFragments:$,toggleOverview:G,togglePause:M,isOverview:H,isPaused:N,addEventListeners:i,removeEventListeners:j,getIndices:eb,getSlide:function(a,b){var c=document.querySelectorAll(Yb)[a],d=c&&c.querySelectorAll("section");return"undefined"!=typeof b?d?d[b]:void 0:c},getPreviousSlide:function(){return Sb},getCurrentSlide:function(){return Tb},getScale:function(){return cc},getConfig:function(){return _b},getQueryHash:function(){var a={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,function(b){a[b.split("=").shift()]=b.split("=").pop()});for(var b in a){var c=a[b];a[b]=unescape(c),"null"===c?a[b]=null:"true"===c?a[b]=!0:"false"===c?a[b]=!1:c.match(/^\d+$/)&&(a[b]=parseFloat(c))}return a},isFirstSlide:function(){return null==document.querySelector(Xb+".past")?!0:!1},isLastSlide:function(){return Tb?Tb.nextElementSibling?!1:I(Tb)&&Tb.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return ac},addEventListener:function(a,b,c){"addEventListener"in window&&(dc.wrapper||document.querySelector(".reveal")).addEventListener(a,b,c)},removeEventListener:function(a,b,c){"addEventListener"in window&&(dc.wrapper||document.querySelector(".reveal")).removeEventListener(a,b,c)}}}();}