/* vX Super Lightweight Ajax Library */
function vX(u,f,p,x){x=(window.ActiveXObject)?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();x.open(p?"POST":"GET",u,true);p?x.setRequestHeader("Content-type","application/x-www-form-urlencoded"):p;x.onreadystatechange=function(){if(x.readyState==4&&x.status==200)f?f(x.responseText,x):f};x.send(p)}
function vA(h,p,s,e,r,x,f,i,b){var k=(e-s)/f,u=0,c=setInterval(function(){if(u++<f){h.style[p]=r+(s+k*u)+x}else{clearInterval(c)};b?b(u/f):b},i);return c}
function vE(e,t,f,r){if(r){if(e.detachEvent){e.detachEvent('on'+t,e[t+f]);e[t+f]=null}else{e.removeEventListener(t,f,false)}}else{if(e.attachEvent){e['e'+t+f]=f;e[t+f]=function(){e['e'+t+f](window.event)};e.attachEvent('on'+t,e[t+f])}else{e.addEventListener(t,f,false)}}}
function vF(d,h,f,i){d=d=="in";vA(h,"opacity",d?0:1,d?1:0,"","",15,50);vA(h,"filter",d?0:100,d?100:0,"alpha(opacity=",")",f?f:15,i?i:50)}
function vS(j){if(!j){if(j===undefined)return'undefined';if(j===null)return'null';return(j);}var c=j.constructor.toString();var t=[];if(c.match(/object/i)){for(x in j)t.push(x+':'+arguments.callee(j[x]));return'{'+t.join(',')+'}'}if(c.match(/array/i)){for(x in j)t.push(arguments.callee(j[x]));return'['+t.join(',')+']'}if(c.match(/string/i))return'\''+j.replace(/\'/g,'\\\'')+'\'';return j;}
function vU(j){var y="",x;for(x in j){y+="&"+x+"="+j[x]};return y.substr(1)}