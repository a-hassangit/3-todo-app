(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(c){if(c.ep)return;c.ep=!0;const o=s(c);fetch(c.href,o)}})();const L=document.querySelector(".DarkThemeToggle"),r=document.querySelector(".App"),f=document.querySelector(".TaskSearchBar__input"),a=document.querySelector(".TaskList__list"),i=document.querySelector(".TaskList__link"),m=document.querySelector(".TaskSearchBar__button"),_=()=>document.querySelectorAll(".TaskList__deleteIcon"),y=()=>document.querySelectorAll(".TaskList__checkbox"),h=""+new URL("icon-empty-822abd19.svg",import.meta.url).href,v=""+new URL("icon-checkmark-cc9173b8.svg",import.meta.url).href,T=""+new URL("icon-basket-b0b8760a.svg",import.meta.url).href,l=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):!1},p=()=>{r==null||r.classList.toggle("App--isDark"),d("darkModeFlag",r==null?void 0:r.classList.contains("App--isDark"))},b=t=>{let e="";t.forEach(s=>{e+=`<li class="TaskList__taskContent${s.isCompleted?" TaskList__taskContent--isActive":""}">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="${v}" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>
          ${s.value}
        </p>
        <img src="${T}"
             class='TaskList__deleteIcon'
             alt="basket-icon"
        />
      </div>
    </li>`}),a.innerHTML=e,f.value=""},S=(t,e)=>{if(confirm("هل أنت متأكد من حذف المهمة؟")===!1)return;const n=l("tasks");n.splice(e,1),d("tasks",n),k(n)},E=t=>{t.preventDefault();const e=f.value;if(!e)return;const s={value:e,isCompleted:!1},n=l("tasks")||[];n.push(s),d("tasks",n),k(n)},d=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},C=()=>{l("darkModeFlag")&&p(),k(l("tasks"))},I=()=>{a.innerHTML=`<li class='EmptyList'>
      <img class='EmptyList__img' src="${h}" alt="list is empty" />
      <p>قائمة المهام فارغة</p>
    </li>`},k=t=>{t!=null&&t.length?(b(t),q()):I()},g=(t,e)=>{const s=l("tasks");t.currentTarget.parentElement.classList.toggle("TaskList__taskContent--isActive"),s[e].isCompleted=!s[e].isCompleted,d("tasks",s)},q=()=>{_().forEach((t,e)=>{t.addEventListener("click",s=>S(s,e))}),y().forEach((t,e)=>{t.addEventListener("click",s=>g(s,e)),t.addEventListener("keydown",s=>s.key==="Enter"&&g(s,e))})},D=()=>{L.addEventListener("click",p),m==null||m.addEventListener("click",E),i==null||i.addEventListener("click",()=>{a==null||a.classList.toggle("TaskList__list--hideCompleted"),i==null||i.classList.toggle("TaskList__link--isActive")})};C();D();
