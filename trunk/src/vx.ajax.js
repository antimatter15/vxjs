/*[name|Ajax]*/

_.X=function(u,f,p,x){
//x=this.ActiveXObject?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();
  x=new(this.ActiveXObject?ActiveXObject:XMLHttpRequest)('Microsoft.XMLHTTP');
  x.open(p?'POST':'GET',u,!0);
  p?x.setRequestHeader('Content-type','application/x-www-form-urlencoded'):0;
  x.onreadystatechange = function(){
  //x.readyState==4?f?f(x.responseText,x):f:0
    x.readyState==4&&f?f(x.responseText,x):f
  };
  x.send(p)
}
