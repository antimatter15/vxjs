/* vX Super Lightweight Ajax Library */
var _=_?_:{}
_.X=function(u,f,p,x){x=new(this.ActiveXObject?ActiveXObject:XMLHttpRequest)('Microsoft.XMLHTTP');x.open(p?'POST':'GET',u,!0);p?x.setRequestHeader('Content-type','application/x-www-form-urlencoded'):0;x.onreadystatechange=function(){x.readyState==4?f?f(x.responseText,x):f:0};x.send(p)}
_.Ac=function(v,n,c,u,y){u=0;return y=setInterval(function(){c(u/v);u++>=v?clearInterval(y):0},n)}
_.A=function(h,p,s,e,r,x,f,i,b){return _.Ac(f,i,function(a){(a==1&&b)?b():0;h.style[p]=r+(s+(e-s)*a)+x})}
_.C=function(j,c){if(c)return _.S(_.S(j),!0);function p(){};p.prototype=j;return new p()}
_.E=function(e,t,f,r){if(e.attachEvent){r?e.detachEvent('on'+t,e[t+f]):r;if(!r){e['e'+t+f]=f;e[t+f]=function(){e['e'+t+f](window.event)};e.attachEvent('on'+t,e[t+f])}}else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1)}
_.F=function(d,h,f,i){d=d=='in';_.A(h,'opacity',d?0:1,d?1:0,'','',15,50);_.A(h,'filter',d?0:100,d?100:0,'alpha(opacity=',')',f?f:15,i?i:50)}
_.G=function(e){return e.style?e:document.getElementById(e)}
_.H=function(s,d){var t=document.createElement('textarea');t.innerHTML=s;return d?t.value:t.innerHTML}
_.I=function(v,a){for(var i=a.length;i--&&a[i]!=v;);return i}
_.N=function(n){var r=window,p=n.split('.');for(var i=0;i<p.length&&p[i];i++){if(!this.r[p[i]])r[p[i]]={};r=r[p[i]]}return r}
_.Q=function(j,y,x){y='';for(x in j){y+='&'+x+'='+j[x]};return y.substr(1)}
_.R=function(f){if(/(?!.*?ati|.*?kit)^moz|ope/i.test(navigator.userAgent)){_.E(document,'DOMContentLoaded',f)}else{setTimeout(f,0)}}
_.S=function(j,d){if(d)return eval('('+j+')');if(!j)return j+'';var c=j.constructor+'',t=[];if(c.match(/arr/i)){for(x in j)t.push(_.S(j[x]));return'['+t.join(',')+']'}if(c.match(/obj/i)){for(x in j)t.push(x+':'+_.S(j[x]));return'{'+t.join(',')+'}'}if(c.match(/str/i))return"'"+j.replace(/\'/g,"\\'")+"'";return j}