const e=JSON.parse(localStorage.getItem("readCards"));e.sort(((e,t)=>new Date(t.pub_date)-new Date(e.pub_date)));const t=document.querySelector(".container");e.forEach((e=>{const a=document.createElement("div");a.textContent=e.data,t.appendChild(a)}));
//# sourceMappingURL=read.16bbd21f.js.map
