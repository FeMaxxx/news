function e(e,t){if(null!==t)for(let n=0;n<t.length;n+=1)if(t[n].url===e.url)return!0}const t=[];function n(e){const n=document.querySelectorAll(".card-news__btn-like"),s=document.querySelectorAll(".card-news__add-to-favorite-btn"),a=document.querySelectorAll(".card-news__icon-like");n.forEach(((e,t)=>{let n=!1;e.addEventListener("click",(()=>{n?(s[t].textContent="Add to favorite",a[t].style.fill="",e.classList.remove("favorite"),n=!1):(s[t].textContent="Remove from favorite",a[t].style.fill="var(--color1, #4440f7)",e.classList.add("favorite"),n=!0)}))})),n.forEach(((n,s)=>{let a=!1;n.addEventListener("click",(()=>{if(a){const n=t.findIndex((t=>t.headline===e[s].headline));-1!==n&&(t.splice(n,1),localStorage.setItem("favoriteCards",JSON.stringify(t))),a=!1}else t.push({headline:e[s].headline,abstract:e[s].abstract,category:e[s].category,pub_date:e[s].pub_date,photo:e[s].photo,url:e[s].url}),localStorage.setItem("favoriteCards",JSON.stringify(t)),a=!0}))}))}function s(e){return e.map((e=>`<li class="card-news__item">\n <img class="card-news__img" src="${e.photo}" alt="" loading="lazy" />\n <span class="card-news__categories">${e.category}</span>\n <button class="card-news__btn-like">\n   <span class="card-news__add-to-favorite-btn"\n     >Add to favorite\n   </span>\n   <svg\n       class="card-news__icon-like"\n       width="16"\n       height="16"\n       viewBox="0 0 37 32"\n     >\n       <path\n         style="stroke: var(--color1, #4440f7)"\n         stroke-linejoin="round"\n         stroke-linecap="round"\n         stroke-miterlimit="4"\n         stroke-width="2.2857"\n         d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n       ></path>\n     </svg>\n </button>\n <div class="card-news__wrapper">\n   <h3 class="card-news__caption">${e.headline}</h3>\n   <p class="card-news__text">${e.abstract}</p>\n </div>\n <div class="card-news__box">\n   <span class="card-news__time">${e.pub_date}</span>\n   <a class="card-news__link" target="_blank" href="${e.url}">Read more</a>\n </div>\n </li>`)).join("")}const a=document.querySelector(".date-list-search"),o=document.querySelector(".date-list-search"),r=document.querySelector(".search-form"),i=document.querySelector(".search-input"),l=JSON.parse(localStorage.getItem("readCards"));!function(e){const t=Object.keys(e).map((t=>`<li class="date-list__item">\n  <button class="date-list__btn"><span class="date-list__btn-text">${t}</span><span class="date-list__btn-block">\n  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n</symbol>\n</svg></span>\n  </button>\n  <ul class="list-news hidden">${s(e[t])}</ul>\n</li>`)).join("");d(t)}(function(e=[],t){const n={};for(const s of e){const e=t(s);n[e]?n[e].push(s):n[e]=[s]}return n}(function(){if(null!==l)return l}(),(e=>e.dayRead)));const c=document.querySelectorAll(".date-list__item");function d(e){a.innerHTML=e}function d(e){o.innerHTML=e,newArrForMarkupSearch=[]}c[0].classList.add("hidden"),c.forEach((t=>{n(l);let s="",a="";e(t,JSON.parse(localStorage.getItem("favoriteCards")))?(a="favorite",s="Remove from favorite"):s="Add to favorite"})),a.addEventListener("click",(e=>{const t=e.target.closest(".date-list__btn");if(!t)return;const n=t.querySelector(".date-list__btn-block"),s=document.querySelector(".list-news");s.classList.contains("hidden")?(s.classList.remove("hidden"),n.classList.add("turn")):(s.classList.add("hidden"),n.classList.remove("turn")),t.nextElementSibling.classList.toggle("hidden")})),r.addEventListener("submit",(function(e){let t=[];if(e.preventDefault(),""===i.value.trim())return a.classList.remove("hidden"),o.classList.add("hidden"),void(t=[]);const n=i.value.toLowerCase();for(let e=0;e<l.length;e+=1){let s=l[e];(s.abstract.toLowerCase().includes(n)||s.headline.toLowerCase().includes(n)||s.category.toLowerCase().includes(n)||s.category.toLowerCase()===n)&&t.push(s)}if(0===t.length)return a.classList.add("hidden"),o.classList.add("hidden"),void(t=[]);a.classList.add("hidden"),o.classList.remove("hidden");const r=s(t);d(r)}));
//# sourceMappingURL=read.c0fc0def.js.map
