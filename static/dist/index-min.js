console.log("Lazyloader running"),document.addEventListener("DOMContentLoaded",function(){let e=[].slice.call(document.querySelectorAll("img.lazy")),n=!1;const t=function(){!1===n&&(n=!0,setTimeout(function(){e.forEach(function(n){n.getBoundingClientRect().top<=window.innerHeight&&n.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(n).display&&(n.src=n.dataset.src,n.srcset=n.dataset.srcset,n.classList.remove("lazy"),0===(e=e.filter(function(e){return e!==n})).length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)))}),n=!1},200))};document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationchange",t)});