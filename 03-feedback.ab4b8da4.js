!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=y();if(b(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?g(e):(i=o=void 0,u)}function O(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(j,t),s?g(e):u}(l);if(d)return f=setTimeout(j,t),g(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=h(t)||0,S(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return i;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const j=document.querySelector(".feedback-form"),w=localStorage.getItem("feedback");j.addEventListener("input",e(t)((function(e){const t=JSON.parse(localStorage.getItem("feedback"))??{email:null,message:null};switch(e.target.type){case"email":t.email=e.target.value;break;case"textarea":t.message=e.target.value}localStorage.setItem("feedback",JSON.stringify(t))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),j.querySelector("input[name='email']").value=null,j.querySelector("textarea[name='message']").value=null,console.log(localStorage.getItem("feedback")),localStorage.removeItem("feedback")})),function(){if(!w)return;const e=JSON.parse(w);j.querySelector("input[name='email']").value=e.email,j.querySelector("textarea[name='message']").value=e.message}()}();
//# sourceMappingURL=03-feedback.ab4b8da4.js.map