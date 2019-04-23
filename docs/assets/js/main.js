"use strict";const input=document.querySelector(".input"),button=document.querySelector(".btn"),tvShows=document.querySelector(".tv__shows"),imgDefault="https://via.placeholder.com/210x295/ffffff/666666/?text=TV";function getList(){tvShows.innerHTML="",fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`).then(t=>t.json()).then(t=>{for(const s of t)null===s.show.image?tvShows.innerHTML+=`<h2 class="show__title">${s.show.name}</h2><li class="tv__shows-list"><br><img class="img__show" src="${imgDefault}"<br></li>`:tvShows.innerHTML+=`<h2 class="show__title">${s.show.name}</h2><li class="tv__shows-list"><br><img class="img__show" src="${s.show.image.medium}"<br></li>`})}button.addEventListener("click",getList);