!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),a=null;r.setAttribute("disabled","disablet");e.addEventListener("click",(function(){a=setInterval(d,1e3),e.setAttribute("disabled","disablet"),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(a),e.removeAttribute("disabled"),r.setAttribute("disabled","disablet")}));var d=function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.4969d2fe.js.map