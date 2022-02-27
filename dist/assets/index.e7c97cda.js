import{j as m,M as y,b as x,r as d,a as P,R as k,c as w}from"./vendor.a9d96bf2.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};j();const e=m.exports.jsx,c=m.exports.jsxs,v=()=>c("header",{children:[e("h1",{children:"BW Photos"}),c("p",{children:["Free black and white images from ",e("a",{href:"https://unsplash.com/",children:"Unsplash"})]})]}),C=({setKeyword:a,searchPhoto:s})=>c("form",{className:"search-form",children:[e("input",{type:"text",name:"keyword",placeholder:"e.g. cat",onChange:t=>a(t.target.value)}),e("button",{type:"submit",onClick:s,children:"Search"})]});const N=({photo:a})=>e(y,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"photo-list",children:a.map(t=>c("div",{className:"photo-item",children:[e("a",{href:t.links.html,children:e(x.LazyLoadImage,{alt:t.alt_description,src:t.urls.regular,effect:"blur"})}),c("p",{className:"photo-footer",children:["Photo by ",e("a",{href:t.user.links.html,children:t.user.name})]})]},t.id))}),L=({pageIncrement:a,pageDecrement:s,pageCount:t,totalPage:i})=>c("div",{className:"pagination",children:[c("p",{children:[t," / ",i]}),t>1&&e("button",{onClick:s,children:"Prev"}),t<i&&e("button",{onClick:a,children:"Next"})]}),M=()=>e("footer",{children:e("p",{children:c("small",{children:["\xA9 2022 ",e("a",{href:"https://webcreatorbox.com",children:"Web Creator Box"})]})})});function O(){const a=["flower","animal","photo","house","restaurant","food"],s=a[Math.floor(Math.random()*a.length)],[t,i]=d.exports.useState(s),[r,o]=d.exports.useState([]),[l,u]=d.exports.useState(1),[f,g]=d.exports.useState(""),b="https://api.unsplash.com/search/photos",h={headers:{Authorization:"Client-ID 5O_GK7FKnF863Xt6_5RWMnaDmpBdkdWJ1-ULA3jZjhw"},params:{query:t,page:l,color:"black_and_white",per_page:30}},p=()=>{P.get(b,h).then(n=>{o(n.data.results),g(n.data.total_pages)}).catch(n=>alert("Error!"))};return d.exports.useEffect(()=>{p()},[]),c("div",{className:"App",children:[e(v,{}),e(C,{setKeyword:i,searchPhoto:n=>{n.preventDefault(),u(1),h.params.page=1,p()},keyword:t}),e(N,{photo:r}),e(L,{pageIncrement:()=>{const n=l+1;u(n),h.params.page=n,p()},pageDecrement:()=>{const n=l-1;u(n),h.params.page=n,p()},pageCount:l,totalPage:f}),e(M,{})]})}k.render(e(w.StrictMode,{children:e(O,{})}),document.getElementById("root"));