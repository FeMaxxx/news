!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},l=e.parcelRequire0124;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in c){var l=c[e];delete c[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){c[e]=t},e.parcelRequire0124=l),l.register("6Qnpn",(function(e,t){const c=document.querySelector("body"),l=(document.querySelector(".theme-icon__sun"),document.querySelector("theme-icon__moon"),document.querySelector(".checkbox")),o=document.querySelector(".slider"),s=document.querySelector(".mob-checkbox"),a=document.querySelector(".mob-slider");function r(){c.classList.toggle("dark-theme"),c.classList.toggle("light-theme"),c.classList.contains("dark-theme")?(localStorage.setItem("theme","dark-theme"),localStorage.setItem("slider","slideractive"),localStorage.setItem("checkbox","checkbox-active")):(localStorage.setItem("theme","light-theme"),localStorage.setItem("slider","slider"),localStorage.setItem("checkbox","checkbox")),c.className=localStorage.getItem("theme")}function i(){o.classList.toggle("slideractive"),l.classList.toggle("checkbox-active"),s.classList.toggle("checkbox-active"),a.classList.toggle("slideractive")}l.addEventListener("click",r),o.addEventListener("click",r),a.addEventListener("click",r),s.addEventListener("click",r),l.addEventListener("click",i),o.addEventListener("click",i),s.addEventListener("click",i),a.addEventListener("click",i),c.className=localStorage.getItem("theme"),null!=localStorage.getItem("slider")&&(o.classList.add(localStorage.getItem("slider")),l.classList.add(localStorage.getItem("checkbox")),s.classList.add(localStorage.getItem("checkbox")),a.classList.add(localStorage.getItem("slider")))}))}();
//# sourceMappingURL=favorite.9788e061.js.map
