(()=>{"use strict";function e(e){console.error(e)}function t(){return{date:[(new Date).getMonth()+1,(new Date).getDate(),(new Date).getFullYear()]}}function n(t){return t[0]>12?e(`${t[0]} is not a valid month`):t[1]<(new Date).getDate()&&t[0]==(new Date).getMonth()+1?e("date is less than current date"):t[0]<(new Date).getMonth()+1&&t[2]==(new Date).getFullYear()?e(`${t[0]} is less than the current month`):t[2]<(new Date).getFullYear()?e(`${t[2]} is less than the current year`):{dueDate:t}}function r(e,t,n){let r=[],a=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let l=0;l<n+1;l++){const u={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31};if((o=e[2]+l)%4!=0||o%100==0&&o%400!=0||(u.February=29),r.push(u),e[1]+l===e[1]){const t=e[l]-1;for(let n=0;n<t;n++){delete u[a[n]];let t=u[a[n+1]];t-=e[1],u[a[n+1]]=t}}if(l==n)if(12===t[0])u[a[11]]=t[1];else{t[1],a.reverse();for(let e=0;e<a.length-t[0];e++){delete u[a[e]];let n=u[a[e+1]];n=t[1],u[a[e+1]]=n}}}var o;return r}function a(e){let a=0,o=new t,l=new n(e);const u=r(o.date,l.dueDate,l.dueDate[2]-o.date[2]);for(let t=0;t<u.length;t++){let n=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let r=0;r<n.length;r++)void 0===u[t][n[r]]?a+=0:e[0]==(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?a=e[1]-(new Date).getDate():a+=u[t][n[r]]}return a}function o(e){e.classList.add("active"),overlay.classList.add("active")}function l(e,t){t.reset(),e.classList.remove("active"),overlay.classList.remove("active")}let u=[4,18,2023];console.log(`Days Left: ${function(e){return a(e)}(u)}`),console.log(`Weeks Left: ${function(e){let t=a(e)/7,n=0;return t%1!=0&&(n=(t%1*7).toFixed(),t-=t%1),n>0&&(t=`${t} and ${n} days`),t}(u)}`),console.log("Full Format:",function(e){let a=new t,o=new n(e);return r(a.date,o.dueDate,o.dueDate[2]-a.date[2])}(u)),function e(){const t=document.querySelector(".clock");let n="",r=(new Date).getHours(),a=(new Date).getMinutes(),o=(new Date).getSeconds();return o<10&&(o=`0${o}`),r<10&&(r=`0${r}`),a<10&&(a=`0${a}`),n=`${r}:${a}:${o}`,t.textContent=n,setTimeout(e,1e3),t}(),function(){const e=document.getElementById("new-task-button"),t=document.getElementById("close-button"),n=document.getElementById("task-modal"),r=document.getElementById("modal"),a=document.getElementById("overlay");e.addEventListener("click",(()=>{o(r)})),a.addEventListener("click",(()=>{l(r,n)})),t.addEventListener("click",(()=>{l(r,n)}))}()})();