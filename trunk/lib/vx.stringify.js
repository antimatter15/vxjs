_.S=function(j,d,t){if(d)return eval('('+j+')');if(!j)return j+'';if(!j||d){return}
t=[];if(j.pop){for(x in j)t.push(_.S(j[x]));j='['+t.join(',')+']'}else
if(typeof j=='object'){for(x in j)t.push(x+':'+_.S(j[x]));j='{'+t.join(',')+'}'}else
if(j.split)j="'"+j.replace(/\'/g,"\\'")+"'";return j}