parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var t=0,e=document.querySelectorAll(".slider__images--image"),n=function(n){!function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.forEach(function(e){e.style.transition=n?"transform .8s":"none",e.style.transform="translateX(-".concat(100*t,"%)")})}(t=n<0?e.length-1:n>=e.length?0:n)},o=function(){n(t+1),console.log("right")},r=document.querySelector(".slider__buttons--left"),c=document.querySelector(".slider__buttons--right");r?r.addEventListener("click",function(){n(t-1),console.log("left")}):console.error("Left button not found"),c?c.addEventListener("click",o):console.error("Right button not found"),setInterval(o,5e3)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.a04936e0.js.map