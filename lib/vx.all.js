/* vX Super Lightweight Ajax Library */
window._=function(n){var r=arguments.callee,p=n.split('.');for(var i=0;i<p.length&&p[i];i++){if(r[p[i]]==undefined)r[p[i]]={};r=r[p[i]]}return r}
_.X=function(u,f,p,x){x=(window.ActiveXObject)?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();x.open(p?"POST":"GET",u,true);p?x.setRequestHeader("Content-type","application/x-www-form-urlencoded"):p;x.onreadystatechange=function(){if(x.readyState==4&&x.status==200)f?f(x.responseText,x):f};x.send(p)}
_.Ac=function(v,n,c){var u=0,y=setInterval(function(){c(u/v);if(u++>=v)clearInterval(y)},n);return y}
_.A=function(h,p,s,e,r,x,f,i,b){return _.Ac(f,i,function(a){(a==1&&b)?b():0;h.style[p]=r+(s+(e-s)*a)+x})}
_.C=function(j,c){if(c)return eval('('+_.S(j)+')');function p(){};p.prototype=j;return new p()}
_.E=function(e,t,f,r){if(e.attachEvent){r?e.detachEvent('on'+t,e[t+f]):r;if(!r){e['e'+t+f]=f;e[t+f]=function(){e['e'+t+f](window.event)};e.attachEvent('on'+t,e[t+f])}}else r?e.removeEventListener(t,f,false):e.addEventListener(t,f,false)}
_.F=function(d,h,f,i){d=d=="in";_.A(h,"opacity",d?0:1,d?1:0,"","",15,50);_.A(h,"filter",d?0:100,d?100:0,"alpha(opacity=",")",f?f:15,i?i:50)}
_.S=function(j){if(!j)return j==undefined?'undefined':(j===null?'null':j);var f=arguments.callee,c=j.constructor+"",t=[];if(c.match(/array/i)){for(x in j)t.push(f(j[x]));return'['+t.join(',')+']'}if(c.match(/object/i)){for(x in j)t.push(x+':'+f(j[x]));return'{'+t.join(',')+'}'}if(c.match(/string/i))return"'"+j.replace(/\'/g,"\\'")+"'";return j}
_.U=function(j,y,x){y="";for(x in j){y+="&"+x+"="+j[x]};return y.substr(1)}