const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let r=null;d.setAttribute("disabled","disablet");e.addEventListener("click",(()=>{r=setInterval(a,1e3),e.setAttribute("disabled","disablet"),d.removeAttribute("disabled")})),d.addEventListener("click",(()=>{clearInterval(r),e.removeAttribute("disabled"),d.setAttribute("disabled","disablet")}));const a=()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};
//# sourceMappingURL=01-color-switcher.9d14777c.js.map
