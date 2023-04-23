(()=>{"use strict";function e(){return document.getElementById("task-entry").value}function t(){const e=document.getElementById("School"),t=document.getElementById("Personal");return e.checked?"School":t.checked?"Personal":void 0}function r(){const e=document.getElementById("date-entry"),t=[];let r=[],o="",n="",a="";for(let r=0;r<10;r++)t.push(e.value[r]);for(let e=5;e<7;e++)n+=t[e];for(let e=8;e<10;e++)a+=t[e];for(let e=0;e<4;e++)o+=t[e];return"undefinedundefinedundefinedundefined"==o||null==n||null==a?r=[]:r.push(parseInt(n),parseInt(a),parseInt(o)),r}function o(e){console.error(e)}function n(){return{date:[(new Date).getMonth()+1,(new Date).getDate(),(new Date).getFullYear()]}}function a(e,t,r){let o=[],n=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let l=0;l<r+1;l++){const c={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31};if((a=e[2]+l)%4!=0||a%100==0&&a%400!=0||(c.February=29),o.push(c),e[1]+l===e[1]){const t=e[l]-1;for(let r=0;r<t;r++){delete c[n[r]];let t=c[n[r+1]];t-=e[1],c[n[r+1]]=t}}if(l==r)if(12===t[0])c[n[11]]=t[1];else{t[1],n.reverse();for(let e=0;e<n.length-t[0];e++){delete c[n[e]];let r=c[n[e+1]];r=t[1],c[n[e+1]]=r}}}var a;return o}function l(e){let t=0,r=n(),l=function(e){return e[0]>12?o(`${e[0]} is not a valid month`):e[1]<(new Date).getDate()&&e[0]==(new Date).getMonth()+1?o("date is less than current date"):e[0]<(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?o(`${e[0]} is less than the current month`):e[2]<(new Date).getFullYear()?o(`${e[2]} is less than the current year`):{dueDate:e}}(e);const c=a(r.date,l.dueDate,l.dueDate[2]-r.date[2]);for(let r=0;r<c.length;r++){let o=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let n=0;n<o.length;n++)void 0===c[r][o[n]]?t+=0:e[0]==(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?t=e[1]-(new Date).getDate():t+=c[r][o[n]]}return t}function c(e){return l(e)}function s(e){let t=l(e)/7,r=0;return t%1!=0&&(r=(t%1*7).toFixed(),t-=t%1),1==t&&0==r?t=`${t} week`:t>1&&0==r&&(t=`${t} weeks`),r>1&&(t>1||t<1)?t=`${t} weeks and ${r} days`:1==r&&(t>1||t<1)?t=`${t} weeks and ${r} day`:r>1&&1==t?t=`${t} week and ${r} days`:1==r&&1==t&&(t=`${t} week and ${r} day`),t}class u{constructor(e,t,r,o,n,a,l){this.title=e,this.note=t,this.dueDate=r,this.priority=o,this.type=n,this.daysLeft=a,this.category=l}}function d(){return e().length<1?(o("Task Name invalid"),!1):null==t()?(o("Category must be filled  out"),!1):null==r()[0]||null==r()[1]||null==r()[2]?(o("Must enter Date"),!1):e().length>1&&null!=r()[0]&&null!=r()[1]&&null!=r()[2]&&null!=t()?new u(e(),document.getElementById("note-entry").value,r(),function(){const e=document.getElementById("Urgent"),t=document.getElementById("Important"),r=document.getElementById("Not-Prioritized");return e.checked?"URGENT":t.checked?"Important":(r.checked,"Not Prioritized")}(),document.getElementById("type").value,s(r()),t()):void 0}function g(e,t){t.reset(),e.classList.remove("active"),overlay.classList.remove("active")}function i(e){if(null==e)return[];{let t=[];for(let r=0;r<e.length;r++)e[r].daysLeft=s(e[r].dueDate),t.push(e[r]);return localStorage.setItem("storage-array",JSON.stringify(t))}}function y(){const e=document.querySelector(".cards");if("Total Tasks: 0"==document.querySelector(".quote").textContent&&null==e.querySelector("img")){const t=["imgs/cat.png","imgs/cat1.png","imgs/cuteDog.png","imgs/dog-watermelon.png","imgs/dog1.png","imgs/dog2.png","imgs/dogYawn.png","imgs/hampster.png"],r=Math.floor(Math.random()*t.length),o=new Image;o.src=t[r],o.style.height="35%",o.style.width="35%",o.style.minHeight="300px",o.style.minWidth="300px",e.appendChild(o)}}function m(){const e=document.querySelector(".cards");return null==e.querySelector("div")?0:e.childElementCount}function f(e,t){const r=document.querySelector(".cards");if((null==localStorage.getItem("storage-array")||localStorage.getItem("storage-array").length<3)&&(null==localStorage.getItem("deleted-array")||localStorage.getItem("deleted-array").length<3))y();else{const o=function(e,t){const r=JSON.parse(localStorage.getItem("storage-array")),o=JSON.parse(localStorage.getItem("deleted-array"));function n(r,o,n){const a=document.createElement("div");a.style.backgroundColor="white",a.style.width="95%",a.style.margin="10px",a.style.borderRadius="15px",a.style.padding="10px","Not Prioritized"==o[r].priority?a.style.borderLeft="8px solid green":"Important"==o[r].priority?a.style.borderLeft="8px solid orange":"URGENT"==o[r].priority&&(a.style.borderLeft="8px solid red"),a.style.justifyContent="space-evenly",a.style.alignItems="center";let l=document.createElement("h4");l.textContent=o[r].title;let c=document.createElement("p");c.textContent=o[r].note;let s=document.createElement("p");s=`Due Date: ${o[r].dueDate} || ${o[r].daysLeft} left`,document.createElement("p").textContent=`Priority: ${o[r].priority}`;let u=document.createElement("p");u.textContent=`Type: ${o[r].type}`;let d=document.createElement("p");d.textContent=o[r].category,"Personal"==d.innerHTML?(d.style.backgroundColor="lightgreen",d.style.padding="5px",d.style.width="fit-content"):(d.style.backgroundColor="lightcoral",d.style.padding="5px",d.style.width="fit-content");const g=document.createElement("button");g.classList.add("delete-button"),g.innerHTML="Delete Task",a.append(l,c,s,u,d,g),document.querySelector(".cards").append(a),g.addEventListener("click",(()=>{const l=o.indexOf(o[r]);o.splice(l,1),a.remove(),localStorage.setItem(n,JSON.stringify(o)),document.querySelector(".cards").textContent="",f(e,t),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,y()}))}if(null!=r){{const a=JSON.parse(localStorage.getItem("deleted-array"));if("Total"==e&&"Total"==t){for(let e=0;e<r.length;e++)n(e,r,"storage-array");return""}if("Today"==e&&"Total"==t){for(let e=0;e<r.length;e++)0!=r[e].daysLeft||n(e,r,"storage-array");return""}if("Weeks"==e&&"Total"==t){for(let e=0;e<r.length;e++)c(r[e].dueDate)>7||n(e,r,"storage-array");return""}if("Overdue"==e&&"Total"==t){for(let e=0;e<a.length;e++)n(e,o,"deleted-array");return""}if("Total"==e&&"Personal"==t){for(let e=0;e<r.length;e++)"Personal"!=r[e].category||n(e,r,"storage-array");return""}if("Today"==e&&"Personal"==t){for(let e=0;e<r.length;e++)"Personal"!=r[e].category||0!=r[e].daysLeft||n(e,r,"storage-array");return""}if("Weeks"==e&&"Personal"==t){for(let e=0;e<r.length;e++)"Personal"!=r[e].category||c(r[e].dueDate)>7||n(e,r,"storage-array");return""}if("Overdue"==e&&"Personal"==t){if(null!=a)for(let e=0;e<a.length;e++)"Personal"!=o[e].category||n(e,o,"deleted-array");return""}}if("Total"==e&&"School"==t){for(let e=0;e<r.length;e++)"School"!=r[e].category||n(e,r,"storage-array");return""}if("Today"==e&&"School"==t){for(let e=0;e<r.length;e++)"School"!=r[e].category||0!=r[e].daysLeft||n(e,r,"storage-array");return""}if("Weeks"==e&&"School"==t){for(let e=0;e<r.length;e++)"School"!=r[e].category||c(r[e].dueDate)>7||n(e,r,"storage-array");return""}if("Overdue"==e&&"School"==t){if(null!=o)for(let e=0;e<o.length;e++)"School"!=o[e].category||n(e,o,"storage-array");return""}}}(e,t);r.append(o)}}!function(e){let t=[],r=[];if(null!=e&&e.length>0){const o=e.length;let l=0;for(let c=0;c<o;c++){let o=n(),s=e[c].dueDate;const u=()=>s[2]-o.date[2],d=a(o.date,s,u());for(let e=0;e<d.length;e++){let t=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let r=0;r<t.length;r++)void 0===d[e][t[r]]?l+=0:s[0]==(new Date).getMonth()+1&&s[2]==(new Date).getFullYear()?l=s[1]-(new Date).getDate():l+=d[e][t[r]]}l<0?(e[c].daysLeft=l,t.push(e[c])):r.push(e[c])}t==[]&&null!=JSON.parse(localStorage.getItem("deleted-array"))?(t=JSON.parse(localStorage.getItem("deleted-array")),localStorage.setItem("deleted-array",JSON.stringify(t))):t.length>0&&localStorage.setItem("deleted-array",JSON.stringify(t)),localStorage.setItem("storage-array",JSON.stringify(r))}}(JSON.parse(localStorage.getItem("storage-array"))),i(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),JSON.parse(localStorage.getItem("deleted-array")),"storageArr || deletedArr"),function e(){const t=document.querySelector(".clock");let r="",o=(new Date).getHours(),n=(new Date).getMinutes(),a=(new Date).getSeconds();return o>12&&(o-=12),a<10&&(a=`0${a}`),o<10&&(o=`0${o}`),n<10&&(n=`0${n}`),r=`${o}:${n}:${a}`,t.textContent=r,setTimeout(e,1e3),t}(),f("Total","Total"),document.getElementById("saveData").addEventListener("click",(()=>{!function(){const e=document.createElement("a"),t=new Blob([localStorage.getItem("storage-array")]);e.href=URL.createObjectURL(t),e.download="Storage.txt",e.click()}()}));const h=document.getElementById("new-task-button"),S=document.getElementById("close-button"),p=document.getElementById("task-modal"),k=document.getElementById("submit-task"),v=document.getElementById("modal"),T=document.getElementById("overlay");h.addEventListener("click",(()=>{!function(e){e.classList.add("active"),overlay.classList.add("active")}(v)})),T.addEventListener("click",(()=>{g(v,p)})),S.addEventListener("click",(()=>{g(v,p)}));let I="Total";const x=document.querySelector(".total-taskEL"),E=document.querySelector(".todays-taskEL"),C=document.querySelector(".weeks-taskEL"),D=document.querySelector(".overdue-taskEL"),q=document.querySelector(".page-location"),b=document.querySelector(".cards");document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,y();const w=document.querySelector(".home-icon"),L=document.querySelector(".personal-button"),$=document.querySelector(".school-button");let J="Total";x.addEventListener("click",(()=>{I="Total",q.textContent=`${I} Tasks`,b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,y()})),E.addEventListener("click",(()=>{I="Today",q.textContent=`${I}'s Tasks`,b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,y()})),C.addEventListener("click",(()=>{I="Weeks",q.textContent="Current Week",b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,y()})),D.addEventListener("click",(()=>{I="Overdue",q.textContent="Overdue Tasks",b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,y()})),w.addEventListener("click",(()=>{J="Total",b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,document.querySelector(".category-title").textContent="All Categories",y()})),L.addEventListener("click",(()=>{J="Personal",b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,document.querySelector(".category-title").textContent="Personal Category",y()})),$.addEventListener("click",(()=>{J="School",b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,document.querySelector(".category-title").textContent="School Category",y()})),k.addEventListener("click",(e=>{e.preventDefault(),d()?(y(),function(e){let t=[];null==e?o("Task not added to storage"):(null!=localStorage.getItem("storage-array")&&(t=JSON.parse(localStorage.getItem("storage-array"))),null!=e&&(t.push(e),localStorage.setItem("storage-array",JSON.stringify(t))))}(d()),i(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"log two"),b.textContent="",f(I,J),document.querySelector(".quote").textContent=`Total Tasks: ${m()}`,g(v,p)):e.preventDefault()}))})();