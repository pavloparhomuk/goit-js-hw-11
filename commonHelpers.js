import{S as m,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const y=t=>fetch(`https://pixabay.com/api/?key=44369714-aeb99d27cdb76d6e65f8cf0da&q=${t}&image_type=photo`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),g=(t,r)=>{r.insertAdjacentHTML("beforeend",h(t)),d.refresh()},d=new m(".gallery-link",{captionsData:"alt",captionDelay:250});d.on("error.simplelightbox",function(t){console.log(t)});function h(t){return t.reduce((r,{webformatURL:i,largeImageURL:l,tags:e,likes:s,views:a,comments:p,downloads:u})=>r+=`<li class="gallery-item">
      <a class="gallery-link" href="${l}">
        <img
          class="gallery-image"
          src="${i}" 
          alt="${e}"
        />
        <div class="picture-describe">
        <span><span class="title">Likes</span>${s}</span>
        <span><span class="title">Views</span>${a}</span>
        <span><span class="title">Comments</span>${p}</span>
        <span><span class="title">Downloads</span>${u}</span>
        </div>
      </a>
    </li>`,"")}const n=document.querySelector(".gallery"),o=document.createElement("div");o.className="loader";n.appendChild(o);const b={position:"topRight",theme:"dark",color:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"};document.querySelector("form").addEventListener("submit",t=>{t.preventDefault(),o.style.display="flex",n.innerHTML="",n.appendChild(o),y(t.target.searchrequest.value).then(({hits:r})=>{o.style.display="none",r.length===0?f.error(b):g(r,n),t.target.reset()}).catch(r=>{o.style.display="none",n.innerHTML="Something went wrong. <br/>Please, check your connection and try again.",console.error(r),t.target.reset()})});const c=document.querySelector(".slide");c&&(c.addEventListener("click",t=>{document.body.classList.toggle("black"),document.body.firstElementChild.classList.toggle("black"),document.getElementById("searchrequest").classList.toggle("black"),t.target.firstElementChild.checked=!t.target.firstElementChild.checked}),setTimeout(()=>{c.style.opacity="0.1"},5e3));
//# sourceMappingURL=commonHelpers.js.map
