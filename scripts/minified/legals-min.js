!function(){"use strict";var e=[,function(e,n,o){function r(){const e=document.querySelector(".cookie-warning-wrapper"),n=document.querySelector(".cookie-warning-button");"shown"!==localStorage.getItem("cookieSeen")?e.classList.add("show-cookie-warning"):e.style.display="none",n.addEventListener("click",(()=>{localStorage.setItem("cookieSeen","shown"),e.classList.remove("show-cookie-warning"),e.addEventListener("transitionend",(()=>{e.style.display="none"}))}),{once:!0})}function t(e){if(console.log("💫 Cleaned 💫"),"string"==typeof e)return t(document.querySelectorAll(e));if(e[0]&&e[0].innerHTML)for(let n=0;n<e.length;n+=1)t(e[n]);else e.innerHTML=e.innerHTML.replace(/\-/g,"‑").replace(/V/g,"‌V‌").replace(/\./g,"‌.‌").replace(/,/g,"‌,‌").replace(/A/g,"‌A‌").replace(/fi/g,"f‌i")}o.r(n),o.d(n,{cookieWarning:function(){return r},cleanText:function(){return t}})}],n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=function(e,n){for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};o.r(r),(0,o(1).cookieWarning)()}();
//# sourceMappingURL=legals-min.js.map