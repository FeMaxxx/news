!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire0124;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire0124=a),a.register("4253W",(function(e,t){var n=a("vq5Dr"),r=a("6RKBQ"),o=a("gAn2u");const l=document.querySelector(".undefined"),i=document.querySelector(".search-input");document.querySelector(".search-form").addEventListener("submit",(e=>{e.preventDefault();let t=i.value.toLowerCase().trim(),n=JSON.parse(localStorage.getItem("favoriteCards"));if(null===n)return;let r=function(e,t){return e.reduce(((e,n)=>((n.headline.toLowerCase().includes(t)||n.abstract.toLowerCase().includes(t)||n.category.toLowerCase().includes(t))&&e.push(n),e)),[])}(n,t);if(0===r.length)return s.innerHTML="",void(l.style.display="block");""!==t&&null!==t||(l.style.display="none");let a=d(r);s.innerHTML=a,l.style.display="none"}));const s=document.querySelector(".card-news");s.addEventListener("click",(function(e){const t=e.target.closest(".card-news__add-to-favorite-btn");if(!t)return;if(!c)return;let n=t.parentNode.nextElementSibling.firstElementChild.textContent;for(let e=0;e<c.length;e+=1)c[e].headline===n&&c.splice(e,1);localStorage.setItem("favoriteCards",JSON.stringify(c)),t.parentNode.parentNode.remove()}));const c=JSON.parse(localStorage.getItem("favoriteCards"));function d(e){const t=e.map((e=>{let t="",r="hidden",a=JSON.parse(localStorage.getItem("readCards"));!0===(0,n.checkLokalStorage)(e,a)&&(t="opacity",r="");let o="",l="",i=JSON.parse(localStorage.getItem("favoriteCards"));return!0===(0,n.checkLokalStorage)(e,i)?(l="favorite",o="Remove from favorite"):o="Add to favorite",`<li class="card-news__item ">\n        <img class="card-news__img ${t}" src="${e.photo}" alt="" loading="lazy" />\n        <span class="card-news__categories">${e.category}</span>\n        <span class="card-news__read ${r} ">Already read \n      <svg\n              class="icon-read"\n              width="15"\n              height="15"\n              viewBox="0 0 43 32"\n            >\n            <path fill="#00dd73" style="fill: var(--color1, #00dd73)" d="M40.502 1.584c-0.415 0.012-0.81 0.186-1.1 0.484l-24.469 24.469-10.069-10.069c-0.147-0.154-0.324-0.276-0.519-0.361s-0.406-0.129-0.619-0.131c-0.213-0.002-0.424 0.038-0.621 0.119s-0.376 0.199-0.527 0.35c-0.151 0.151-0.269 0.33-0.35 0.527s-0.121 0.408-0.119 0.621c0.002 0.213 0.047 0.423 0.131 0.619s0.207 0.372 0.361 0.519l11.2 11.2c0.3 0.3 0.707 0.469 1.131 0.469s0.831-0.169 1.131-0.469l25.6-25.6c0.231-0.225 0.389-0.514 0.453-0.83s0.031-0.644-0.095-0.941c-0.126-0.297-0.338-0.549-0.609-0.723s-0.589-0.262-0.911-0.253z"></path>\n            </svg></span>\n        <button class="card-news__btn-like ${l}">\n          <span class="card-news__add-to-favorite-btn"\n            >${o}\n          </span>\n          <svg\n              class="card-news__icon-like"\n              width="16"\n              height="16"\n              viewBox="0 0 37 32"\n            >\n              <path\n                style="stroke: var(--color1, #4440f7)"\n                stroke-linejoin="round"\n                stroke-linecap="round"\n                stroke-miterlimit="4"\n                stroke-width="2.2857"\n                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n              ></path>\n            </svg>\n        </button>\n        <div class="card-news__wrapper">\n          <h3 class="card-news__caption">${e.headline}</h3>\n          <p class="card-news__text">${e.abstract}</p>\n        </div>\n        <div class="card-news__box">\n          <span class="card-news__time">${e.pub_date}</span>\n          <a class="card-news__link" target="_blank" href="${e.url}">Read more</a>\n        </div>\n        </li>`})).join("");return(0,r.btnLike)(t),(0,o.btnRead)(t),t}null!==c?function(){if(null===localStorage.getItem("favoriteCards"))return;if(0===JSON.parse(localStorage.getItem("favoriteCards")).length)return console.log("error"),void(l.style.display="block");const e=d(JSON.parse(localStorage.getItem("favoriteCards")));s.insertAdjacentHTML("beforeend",e)}():l.style.display="block"})),a.register("vq5Dr",(function(t,n){function r(e,t){if(null!==t)for(let n=0;n<t.length;n+=1)if(t[n].url===e.url)return!0}e(t.exports,"checkLokalStorage",(function(){return r}))})),a.register("6RKBQ",(function(t,n){e(t.exports,"btnLike",(function(){return o})),a("vq5Dr");const r=[];function o(e){const t=document.querySelectorAll(".card-news__btn-like"),n=document.querySelectorAll(".card-news__add-to-favorite-btn"),a=document.querySelectorAll(".card-news__icon-like");t.forEach(((e,t)=>{let r=!1;e.addEventListener("click",(()=>{r?(n[t].textContent="Add to favorite",a[t].style.fill="",e.classList.remove("favorite"),r=!1):(n[t].textContent="Remove from favorite",a[t].style.fill="var(--color1, #4440f7)",e.classList.add("favorite"),r=!0)}))})),t.forEach(((t,n)=>{let a=!1;t.addEventListener("click",(()=>{if(a){const t=r.findIndex((t=>t.headline===e[n].headline));-1!==t&&(r.splice(t,1),localStorage.setItem("favoriteCards",JSON.stringify(r))),a=!1}else r.push({headline:e[n].headline,abstract:e[n].abstract,category:e[n].category,pub_date:e[n].pub_date,photo:e[n].photo,url:e[n].url}),localStorage.setItem("favoriteCards",JSON.stringify(r)),a=!0}))}))}})),a.register("gAn2u",(function(t,n){function r(e){const t=[],n=document.querySelectorAll(".card-news__link"),r=document.querySelectorAll(".card-news__read"),a=document.querySelectorAll(".card-news__img");return n.forEach(((e,t)=>{let n=!1;e.addEventListener("click",(()=>{n?(a[t].classList.remove("opacity"),n=!1):(r[t].classList.remove("hidden"),a[t].classList.add("opacity"),n=!0)}))})),n.forEach(((n,r)=>{let a=!1;n.addEventListener("click",(()=>{a||(t.push(o(e[r])),localStorage.setItem("readCards",JSON.stringify(t)),a=!0)}))})),t}e(t.exports,"btnRead",(function(){return r}));document.querySelector(".card-news").addEventListener("click",(function(e){const t=e.target.closest(".card-news__link");if(!t)return;o(t)}));let a=[];function o(e){const t=(new Date).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"}).replaceAll(".","/"),n={headline:e.parentNode.previousElementSibling.firstElementChild.innerText,abstract:e.parentNode.previousElementSibling.lastElementChild.innerText,category:e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,pub_date:e.previousElementSibling.innerText,photo:e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.currentSrc,url:e.href,dayRead:t};for(let e=0;e<a.length;e+=1)if(a[e].url===n.url)return;a.push(n),localStorage.setItem("readCards",JSON.stringify(a))}!function(){if(null===JSON.parse(localStorage.getItem("readCards")))return;a=JSON.parse(localStorage.getItem("readCards"))}()})),a("4253W")}();
//# sourceMappingURL=favorite.7e651035.js.map
