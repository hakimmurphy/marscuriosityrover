import{_,r as d,o as t,c as e,F as r,a as n,b as c,t as p}from"./index-6de079ed.js";const u={setup(){return{data:d({})}},async created(){await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&page=1&api_key=7Nbqzile4oilz6vCJTeborTB2h6vE9kXQKpA9HEl").then(async a=>{const s=await a.json();console.log("data",s),this.data=s}).catch(a=>a)}},m={class:"camera-name-color pb-3"},v=["src"];function f(a,s,h,l,g,b){return t(),e("div",null,[(t(!0),e(r,null,n(l.data,i=>(t(),e("div",null,[(t(!0),e(r,null,n(i,o=>(t(),e("div",null,[c("div",m,p(o.camera.full_name),1),c("img",{class:"image pb-7",src:o.img_src,alt:""},null,8,v)]))),256))]))),256))])}const k=_(u,[["render",f],["__scopeId","data-v-2658ba8f"]]);export{k as default};