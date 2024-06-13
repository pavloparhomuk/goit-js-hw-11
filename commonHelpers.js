import{S as p,i as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const f=r=>fetch(`https://pixabay.com/api/?key=44369714-aeb99d27cdb76d6e65f8cf0da&q=${r}&image_type=photo`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),g=(r,t)=>{t.insertAdjacentHTML("beforeend",y(r)),c.refresh()},c=new p(".gallery-link",{captionsData:"alt",captionDelay:250});c.on("error.simplelightbox",function(r){console.log(r)});function y(r){return r.reduce((t,{webformatURL:i,largeImageURL:n,tags:e,likes:s,views:a,comments:d,downloads:u})=>t+=`<li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img
          class="gallery-image"
          src="${i}" 
          alt="${e}"
        />
        <div class="picture-describe">
        <span><span class="title">Likes</span>${s}</span>
        <span><span class="title">Views</span>${a}</span>
        <span><span class="title">Comments</span>${d}</span>
        <span><span class="title">Downloads</span>${u}</span>
        </div>
      </a>
    </li>`,"")}const o=document.querySelector(".gallery"),h={position:"topRight",theme:"dark",color:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"};document.querySelector("form").addEventListener("submit",r=>{r.preventDefault(),o.classList.add("loader"),o.innerHTML="",f(r.target.searchrequest.value).then(({hits:t})=>{t.length===0?m.error(h):g(t,o),o.classList.remove("loader")}).catch(t=>{o.classList.remove("loader"),o.innerHTML="Something went wrong. <br/>Please, check your connection and try again.",console.error(t)}),r.target.reset()});const l=document.querySelector(".slide");l&&(l.addEventListener("click",r=>{document.body.classList.toggle("black"),document.body.firstElementChild.classList.toggle("black"),document.getElementById("searchrequest").classList.toggle("black"),r.target.firstElementChild.checked=!r.target.firstElementChild.checked}),setTimeout(()=>{l.style.opacity="0.1"},5e3));
//# sourceMappingURL=commonHelpers.js.map
