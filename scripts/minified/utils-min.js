!function(){"use strict";var e={d:function(n,o){for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};function o(){const e=document.querySelector(".cookie-warning-wrapper"),n=document.querySelector(".cookie-warning-button");"shown"!==localStorage.getItem("cookieSeen")?e.classList.add("show-cookie-warning"):e.style.display="none",n.addEventListener("click",(()=>{localStorage.setItem("cookieSeen","shown"),e.classList.remove("show-cookie-warning"),e.addEventListener("transitionend",(()=>{e.style.display="none"}))}),{once:!0})}function t(e){if("string"==typeof e)return t(document.querySelectorAll(e));if(e[0]&&e[0].innerHTML)for(let n=0;n<e.length;n+=1)t(e[n]);else e.innerHTML=e.innerHTML.replace(/\-/g,"‑").replace(/V/g,"‌V‌").replace(/\./g,"‌.‌").replace(/,/g,"‌,‌").replace(/A/g,"‌A‌").replace(/fi/g,"f‌i")}e.r(n),e.d(n,{cleanText:function(){return t},cookieWarning:function(){return o}})}();
//# sourceMappingURL=utils-min.js.map