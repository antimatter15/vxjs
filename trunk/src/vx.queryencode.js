/*[name|Query Encode]*/

_.Q=function(j,y,x){
  y='';
  for(x in j)
    y+='&'+x+'='+j[x];
  return y.substr(1)
}
