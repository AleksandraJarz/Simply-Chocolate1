(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector("body"),n=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),e=document.querySelectorAll(".js-menu-item"),t=()=>{const o=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!o),n.classList.toggle("is-open"),o?r.style.overflow="visible":r.style.overflow="hidden"};s.addEventListener("click",t),c.addEventListener("click",t),window.matchMedia("(min-width: 1200px)").addEventListener("change",o=>{o.matches&&(n.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))}),e.forEach(o=>{o.addEventListener("click",t)})})();(()=>{const r={openModalBtn:document.querySelector("[data-modal-open-2]"),closeModalBtn:document.querySelector("[data-modal-close-2]"),modal:document.querySelector("[data-modal-2]")};r.openModalBtn.addEventListener("click",n),r.closeModalBtn.addEventListener("click",n);function n(){r.modal.classList.toggle("is-hidden-rev")}})();
//# sourceMappingURL=index.js.map
