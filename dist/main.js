(()=>{"use strict";function e(){return{date:[(new Date).getUTCMonth()+1,(new Date).getUTCDate(),(new Date).getUTCFullYear()]}}function t(e){var t;return"object"!=typeof e&&(t=`${e} is not a valid entry`,console.log(t)),{dueDate:e}}console.log(function(r){let n=new e,u=new t(r);const a=function(e,t,r){let n=[],u=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let o=0;o<r+1;o++){const l={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31};if((a=e[2]+o)%4!=0||a%100==0&&a%400!=0||(l.February=29),n.push(l),e[1]+o===e[1]){const t=e[o]-1;for(let r=0;r<t;r++){delete l[u[r]];let t=l[u[r+1]];t-=e[1],l[u[r+1]]=t}}if(o==r){const e=t[1];u.reverse();for(let r=0;r<u.length-e;r++){delete l[u[r]];let e=l[u[r+1]];e=t[1],l[u[r+1]]=e}}}var a;return n}(n.date,u.dueDate,u.dueDate[2]-n.date[2]);for(let e=0;e<a.length;e++);return a}([2,2,2025]))})();