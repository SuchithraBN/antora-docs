!function(){var c={};!function(){"use strict";console.log(c.key);var e,t=new Mark(document.querySelector("article.doc"));for(e in c)c.hasOwnProperty(e)&&t.mark(e,{element:"span",className:"highlighttt",accuracy:{value:"exactly",limiters:[",","."]},exclude:["h1","h2","h3","h4",".toc *"],filter:function(e,t,n,r){return!(1<=r)}});var n=document.getElementsByClassName("highlighttt"),r=n.length;for(let e=0;e<r;e++){var a=document.createElement("p"),o=(a.setAttribute("class","tooltip"),n[e].textContent.toLowerCase());c.hasOwnProperty(o)&&(o=document.createTextNode(c[o]),a.appendChild(o),n[e].appendChild(a))}}()}();