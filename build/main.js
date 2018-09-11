!function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var o=class{makeActive(){throw new Error("Method not implemented!")}makeIdle(){throw new Error("Method not implemented!")}killOtherActive(){throw new Error("Method not implemented!")}};var s=class extends o{constructor(e=""){super(),this._id=e}makeActive(){this.hasID(),document.getElementById(this.id).classList.add("radio-item-active")}makeIdle(){this.hasID(),document.getElementById(this.id).classList.remove("radio-item-active")}killOtherActive(){this.hasID(),[...document.getElementsByClassName("radio-item-active")].forEach(e=>e.classList.remove("radio-item-active"))}hasID(){if(""===this.id)throw new Error("Set radioAnim.id equal to target radioItem.id first.")}set id(e){this._id=e}get id(){return this._id}};var a=class{constructor(){if(this.audio=document.querySelector("audio"),null===this.audio)throw new Error("No Audio element found on the DOM.")}play(){return this.audio.play()}pause(){return this.audio.pause()}set source(e){this.audio.src=e}get source(){return this.audio.src}set lastRadio(e){this.audio.dataset.lastRadio=e}get lastRadio(){return this.audio.dataset.lastRadio}get paused(){return this.audio.paused}};var n=class extends o{makeActive(){document.getElementById("play-button").classList.add("play-button-active"),document.getElementById("play-button-wrapper").classList.add("play-button-wrapper-active")}makeIdle(){document.getElementById("play-button").classList.remove("play-button-active"),document.getElementById("play-button-wrapper").classList.remove("play-button-wrapper-active")}loading(){}};var r=class{constructor(e,t,i,o,s){this.setProps(e),this.radioAnim=t,this.audio=i,this.buttonAnim=o,this.type=s,this.render().addEventListeners()}setProps(e){if(!this.isValid(e))throw new Error("A radioProps object must have .id, .name, .source and .img properties!");this.id=e.id,this.name=e.name,this.source=e.source,this.img=e.img}isValid(e){return e.hasOwnProperty("id")&&e.hasOwnProperty("name")&&e.hasOwnProperty("img")&&e.hasOwnProperty("source")}render(){const e=document.createElement("div");e.setAttribute("class","radio-image"),e.style.backgroundImage=`url(${this.img})`;const t=document.createElement("li");return t.setAttribute("class","radio-item"),t.setAttribute("id",this.id),t.setAttribute("data-name",this.name),t.setAttribute("data-content","pause"),t.appendChild(e),document.getElementById(`${this.type}-radios`).appendChild(t),this}addEventListeners(){document.getElementById(this.id).addEventListener("mousedown",()=>{this.handleClick()})}handleClick(){this.updateAudioSource(),this.audio.paused?this.startAudio():this.pauseAudio(),console.log(`Player paused? ${this.audio.paused}`)}updateAudioSource(){this.audio.source!==this.source&&(console.log(`Loading ${this.name}...`),this.audio.source=this.source,this.radioAnim.killOtherActive())}startAudio(){this.radioAnim.makeActive(),this.buttonAnim.makeActive(),this.audio.lastRadio=this.id,this.audio.play().then(()=>{console.log(`Playing ${this.name}...`),this.buttonAnim.makeActive()}).catch(e=>{console.log(`Failed to load radio... ${e}.`),console.log(this),this.radioAnim.makeIdle(),this.buttonAnim.makeIdle()})}pauseAudio(){this.radioAnim.makeIdle(),this.audio.pause(),this.buttonAnim.makeIdle()}};const d=new n,u=new a,l=new s;function c(){u.pause(),d.makeIdle(),l.makeIdle()}var m=function(){document.getElementById("play-button").addEventListener("mousedown",()=>{if(l.id=u.lastRadio,""===u.source)return alert("Select a radio first!");u.paused?(d.makeActive(),l.makeActive(),u.play().catch(e=>{c(),console.log(e),alert(`Can't load ${u.lastRadio}...`)})):c()})};!function(){const e=new XMLHttpRequest;e.open("GET","https://kostaslib.github.io/chillout/src/radios.json"),e.responseType="json",e.send(),e.onload=(()=>(function(e){const t=e.response;for(let e of t.music)new r(e,new s(e.id),new a,new n,"music"),console.log(`Loaded ${e.name}`);for(let e of t.news)new r(e,new s(e.id),new a,new n,"news"),console.log(`Loaded ${e.name}`)})(e))}();setTimeout(()=>{const e=function(e,t){return[...document.getElementsByClassName(e)].map(e=>e.getAttribute(t).toString())}("radio-item","id");console.log(`Radio IDs: ${e}`)},5e3),m()}]);