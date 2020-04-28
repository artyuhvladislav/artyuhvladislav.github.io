!function(e){var n={};function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(s,i,function(n){return e[n]}.bind(null,i));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){(function(n){var t=n&&n.pid?n.pid.toString(36):"";function s(){var e=Date.now(),n=s.last||e;return s.last=e>n?e:n+1}e.exports=e.exports.default=function(e,n){return(e||"")+""+t+s().toString(36)+(n||"")},e.exports.process=function(e,n){return(e||"")+t+s().toString(36)+(n||"")},e.exports.time=function(e,n){return(e||"")+s().toString(36)+(n||"")}}).call(this,t(1))},function(e,n){var t,s,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{s="function"==typeof clearTimeout?clearTimeout:c}catch(e){s=c}}();var a,u=[],l=!1,p=-1;function d(){l&&a&&(l=!1,a.length?u=a.concat(u):p=-1,u.length&&h())}function h(){if(!l){var e=o(d);l=!0;for(var n=u.length;n;){for(a=u,u=[];++p<n;)a&&a[p].run();p=-1,n=u.length}a=null,l=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===c||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(n){try{return s.call(null,e)}catch(n){return s.call(this,e)}}}(e)}}function g(e,n){this.fun=e,this.array=n}function f(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new g(e,n)),1!==u.length||l||o(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,n,t){"use strict";t.r(n);const s="8462dabbc9ca45f2ae1b6f492d740c8f",i={searchForm:document.querySelector(".search"),searchInput:document.querySelector(".search__field"),searchList:document.querySelector(".results__list"),searchRes:document.querySelector(".results"),searchPerPage:document.querySelector(".results__pages"),recipe:document.querySelector(".recipe"),shoppingList:document.querySelector(".shopping__list")},r=e=>{e.insertAdjacentHTML("afterbegin",'\n        <div class="loader">\n            <svg>\n                <use href="img/icons.svg#icon-cw"></use>\n            </svg>\n        </div>\n    ')},c=()=>{const e=document.querySelector(".loader");e&&e.parentElement.removeChild(e)};class o{constructor(e){this.query=e}async getResult(){try{const e=await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${s}&query=${this.query}&number=30`),n=await e.json();this.result=n.results}catch(e){console.error(e)}}}const a=()=>{i.searchList.innerHTML="",i.searchPerPage.innerHTML=""},u=(e,n)=>`\n        <button class="btn-inline results__btn--${e}" data-goto=${"prev"===e?n-1:n+1}>\n            <span>Page ${"prev"===e?n-1:n+1}</span>    \n            <svg class="search__icon">\n                <use href="img/icons.svg#icon-triangle-${"prev"===e?"left":"right"}"></use>\n            </svg>\n        </button>\n    `,l=(e,n=1,t=10)=>{const s=(n-1)*t,r=n*t;e.slice(s,r).forEach(e=>{(e=>{const n=`\n        <li>\n            <a class="results__link" href="#${e.id}">\n                <figure class="results__fig">\n                    <img src="https://spoonacular.com/recipeImages/${e.image}" alt="Test">\n                </figure>\n                <div class="results__data">\n                    <h4 class="results__name">${e.title}</h4>\n                </div>\n            </>\n        </li>\n    `;i.searchList.insertAdjacentHTML("beforeend",n)})(e)}),((e,n,t)=>{const s=Math.ceil(n/t);let r;1===e&&s>1?r=u("next",e):e<s?r=`\n            ${u("next",e)}\n            ${u("prev",e)}\n        `:e===s&&s>1&&(r=u("prev",e)),i.searchPerPage.insertAdjacentHTML("afterbegin",r)})(n,e.length,t)},p=e=>{const n=`\n    <figure class="recipe__fig">\n        <img src="${e.img}" alt="${e.title}" class="recipe__img">\n        <h1 class="recipe__title">\n            <span>${e.title}</span>\n        </h1>\n    </figure>\n    <div class="recipe__details">\n        <div class="recipe__info">\n            <svg class="recipe__info-icon">\n                <use href="img/icons.svg#icon-stopwatch"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${e.readyInMinutes}</span>\n            <span class="recipe__info-text"> minutes</span>\n        </div>\n        <div class="recipe__info">\n            <svg class="recipe__info-icon">\n                <use href="img/icons.svg#icon-man"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>\n            <span class="recipe__info-text"> servings</span>\n\n            <div class="recipe__info-buttons">\n                <button class="btn-tiny btn-dec">\n                    <svg>\n                        <use href="img/icons.svg#icon-circle-with-minus"></use>\n                    </svg>\n                </button>\n                <button class="btn-tiny btn-inc">\n                    <svg>\n                        <use href="img/icons.svg#icon-circle-with-plus"></use>\n                    </svg>\n                </button>\n            </div>\n\n        </div>\n        <button class="recipe__love">\n            <svg class="header__likes">\n                <use href="img/icons.svg#icon-heart-outlined"></use>\n            </svg>\n        </button>\n    </div>\n\n\n\n    <div class="recipe__ingredients">\n        <ul class="recipe__ingredient-list">\n            ${e.ingredients.map(e=>{return n=e,`\n    <li class="recipe__item">\n        <svg class="recipe__icon">\n            <use href="img/icons.svg#icon-check"></use>\n        </svg>\n        <div class="recipe__count">${Math.ceil(n.measures.metric.amount)}</div>\n        <div class="recipe__ingredient">\n            <span class="recipe__unit">${n.measures.metric.unitShort}</span>\n            ${n.name}\n        </div>\n    </li>\n`;var n}).join("")}\n            \n        </ul>\n\n        <button class="btn-small recipe__btn--add">\n            <svg class="search__icon">\n                <use href="img/icons.svg#icon-shopping-cart"></use>\n            </svg>\n            <span>Add to shopping list</span>\n        </button>\n    </div>\n\n    <div class="recipe__directions">\n        <h2 class="heading-2">How to cook it</h2>\n        <p class="recipe__directions-text">\n            Please check out directions at their website.\n         </p>\n        <a class="btn-small recipe__btn" href="${e.source}" target="_blank">\n            <span>Directions</span>\n            <svg class="search__icon">\n                <use href="img/icons.svg#icon-triangle-right"></use>\n            </svg>\n\n        </a>\n    </div>\n    `;i.recipe.insertAdjacentHTML("afterbegin",n)};class d{constructor(e){this.id=e}async getRecipe(){try{const e=await fetch(`https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${s}`),n=await e.json();this.title=n.title,this.img=n.image,this.source=n.sourceUrl,this.ingredients=n.extendedIngredients,this.readyInMinutes=n.readyInMinutes,this.servings=n.servings}catch(e){console.error(e)}}updateServings(e){const n="dec"===e?this.servings-1:this.servings+1;this.ingredients.forEach(e=>{e.measures.metric.amount*=n/this.servings}),this.servings=n}}var h=t(0),g=t.n(h);class f{constructor(){this.items=[]}addItem(e,n,t){const s={id:g()(),count:e,unit:n,ingredient:t};return this.items.push(s),s}deleteItem(e){const n=this.items.findIndex(n=>n.id===e);this.items.splice(n,1)}updateCount(e,n){this.items.find(n=>n.id===e).count}}class _{constructor(){this.likes=[]}addLike(e,n,t){const s={id:e,title:n,img:t};this.likes.push(s)}deleteLike(e){const n=this.likes.findIndex(n=>n.id===e);this.likes.splice(n,1)}isLiked(e){return-1!==this.likes.findIndex(n=>n.id===e)}getNumLikes(){return this.likes.length}}const m={},v=async()=>{const e=i.searchInput.value;if(e){m.search=new o(e),i.searchInput.value="",a(),r(i.searchRes);try{await m.search.getResult(),console.log(m.search.result),c(),l(m.search.result)}catch(e){alert("Error in searching"),c()}}};i.searchForm.addEventListener("submit",e=>{e.preventDefault(),v()}),i.searchPerPage.addEventListener("click",e=>{const n=e.target.closest(".btn-inline");if(n){const e=parseInt(n.getAttribute("data-goto"),10);a(),l(m.search.result,e)}});const b=()=>{m.list||(m.list=new f),m.recipe.ingredients.forEach(e=>{(e=>{const n=`\n    <li class="shopping__item" data-itemid=${e.id}>\n        <div class="shopping__count">\n            <input type="number" value="${e.count}" step="${e.count}" class="shopping__count-value">\n            <p>${e.unit}</p>\n        </div>\n        <p class="shopping__description">${e.ingredient}</p>\n        <button class="shopping__delete btn-tiny">\n            <svg>\n                <use href="img/icons.svg#icon-circle-with-cross"></use>\n            </svg>\n        </button>\n    </li>\n    `;i.shoppingList.insertAdjacentHTML("beforeend",n)})(m.list.addItem(e.measures.metric.amount,e.unit,e.name))})};i.shoppingList.addEventListener("click",e=>{const n=e.target.closest(".shopping__item").dataset.itemid;if(e.target.matches(".shopping__delete, .shopping__delete *"))m.list.deleteItem(n),(e=>{const n=document.querySelector(`[data-itemid="${e}"]`);n.parentElement.removeChild(n)})(n);else if(e.target.matches(".shopping__count-value")){const t=parseFloat(e.target.value,10);m.list.updateCount(n,t)}else e.target.matches(".recipe__love .recipe__love *")&&(()=>{m.likes&&(m.likes=new _);const e=m.recipe.id;m.likes.isLiked(e)})()});const y=async()=>{const e=window.location.hash.replace("#","");if(e){i.recipe.innerHTML="",r(i.recipe),m.search&&(e=>{Array.from(document.querySelectorAll(".results__link")).forEach(e=>{e.classList.remove("results__link--active")}),document.querySelector(`a[href="#${e}"]`).classList.add("results__link--active")})(e),m.recipe=new d(e);try{await m.recipe.getRecipe(),c(),p(m.recipe)}catch(e){console.error(e)}}};["hashchange","load"].forEach(e=>window.addEventListener(e,y)),i.recipe.addEventListener("click",e=>{var n;e.target.matches(".btn-dec, .btn-dec *")?m.recipe.servings>1&&m.recipe.updateServings("dec"):e.target.matches(".btn-inc, .btn-inc *")?m.recipe.updateServings("inc"):e.target.matches(".recipe__btn--add, .recipe__btn--add *")&&b(),n=m.recipe,document.querySelector(".recipe__info-data--people").textContent=n.servings,Array.from(document.querySelectorAll(".recipe__count")).forEach((e,t)=>{e.textContent=Math.ceil(n.ingredients[t].measures.metric.amount)})})}]);