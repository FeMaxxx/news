!function(){const e=[];function t(e){return e.map((e=>`<li class="card-news__item">\n <img class="card-news__img" src="${e.photo}" alt="" loading="lazy" />\n <span class="card-news__categories">${e.category}</span>\n <button class="card-news__btn-like">\n   <span class="card-news__add-to-favorite-btn"\n     >Add to favorite\n   </span>\n   <svg\n       class="card-news__icon-like"\n       width="16"\n       height="16"\n       viewBox="0 0 37 32"\n     >\n       <path\n         style="stroke: var(--color1, #4440f7)"\n         stroke-linejoin="round"\n         stroke-linecap="round"\n         stroke-miterlimit="4"\n         stroke-width="2.2857"\n         d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n       ></path>\n     </svg>\n </button>\n <div class="card-news__wrapper">\n   <h3 class="card-news__caption">${e.headline}</h3>\n   <p class="card-news__text">${e.abstract}</p>\n </div>\n <div class="card-news__box">\n   <span class="card-news__time">${e.pub_date}</span>\n   <a class="card-news__link" target="_blank" href="${e.url}">Read more</a>\n </div>\n </li>`)).join("")}const n=document.querySelector(".date-list-search"),s=document.querySelector(".date-list-search"),a=document.querySelector(".search-form"),r=document.querySelector(".search-input"),i=JSON.parse(localStorage.getItem("readCards"));!function(e){const n=Object.keys(e).map((n=>`<li class="date-list__item">\n  <button class="date-list__btn"><span class="date-list__btn-text">${n}</span><span class="date-list__btn-block">\n  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n</symbol>\n</svg></span>\n  </button>\n  <ul class="list-news hidden">${t(e[n])}</ul>\n</li>`)).join("");d(n)}(function(e=[],t){const n={};for(const s of e){const e=t(s);n[e]?n[e].push(s):n[e]=[s]}return n}(function(){if(null!==i)return i}(),(e=>e.dayRead)));document.querySelectorAll(".date-list__item")[0].classList.add("hidden"),function(t){const n=document.querySelectorAll(".card-news__btn-like"),s=document.querySelectorAll(".card-news__add-to-favorite-btn"),a=document.querySelectorAll(".card-news__icon-like");n.forEach(((e,t)=>{let n=!1;e.addEventListener("click",(()=>{n?(s[t].textContent="Add to favorite",a[t].style.fill="",e.classList.remove("favorite"),n=!1):(s[t].textContent="Remove from favorite",a[t].style.fill="var(--color1, #4440f7)",e.classList.add("favorite"),n=!0)}))})),n.forEach(((n,s)=>{let a=!1;n.addEventListener("click",(()=>{if(a){const n=e.findIndex((e=>e.headline===t[s].headline));-1!==n&&(e.splice(n,1),localStorage.setItem("favoriteCards",JSON.stringify(e))),a=!1}else e.push({headline:t[s].headline,abstract:t[s].abstract,category:t[s].category,pub_date:t[s].pub_date,photo:t[s].photo,url:t[s].url}),localStorage.setItem("favoriteCards",JSON.stringify(e)),a=!0}))}))}(i);let o="",l="",c=JSON.parse(localStorage.getItem("favoriteCards"));function d(e){n.innerHTML=e}function d(e){s.innerHTML=e,newArrForMarkupSearch=[]}(function(e,t){if(null!==t)for(let n=0;n<t.length;n+=1)if(t[n].url===e.url)return!0})(card,c)?(l="favorite",o="Remove from favorite"):o="Add to favorite",n.addEventListener("click",(e=>{const t=e.target.closest(".date-list__btn");if(!t)return;const n=t.querySelector(".date-list__btn-block"),s=document.querySelector(".list-news");s.classList.contains("hidden")?(s.classList.remove("hidden"),n.classList.add("turn")):(s.classList.add("hidden"),n.classList.remove("turn")),t.nextElementSibling.classList.toggle("hidden")})),a.addEventListener("submit",(function(e){let a=[];if(e.preventDefault(),""===r.value.trim())return n.classList.remove("hidden"),s.classList.add("hidden"),void(a=[]);const o=r.value.toLowerCase();for(let e=0;e<i.length;e+=1){let t=i[e];(t.abstract.toLowerCase().includes(o)||t.headline.toLowerCase().includes(o)||t.category.toLowerCase().includes(o)||t.category.toLowerCase()===o)&&a.push(t)}if(0===a.length)return n.classList.add("hidden"),s.classList.add("hidden"),void(a=[]);n.classList.add("hidden"),s.classList.remove("hidden");const l=t(a);d(l)}))}();
//# sourceMappingURL=read.81d808fe.js.map
