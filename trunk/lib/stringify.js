function vS(j){if(!j){if(j===undefined)return'undefined';if(j===null)return'null';return(j);}var c=j.constructor.toString();var t=[];if(c.match(/object/i)){for(x in j)t.push(x+':'+arguments.callee(j[x]));return'{'+t.join(',')+'}'}if(c.match(/array/i)){for(x in j)t.push(arguments.callee(j[x]));return'['+t.join(',')+']'}if(c.match(/string/i))return'\''+j.replace(/\'/g,'\\\'')+'\'';return j;}