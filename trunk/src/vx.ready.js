_.R=function(f){
  if (/(?!.*?pati|.*?kit)^moz|ope/i.test(navigator.userAgent)){
    _.E(document,"DOMContentLoaded",f)
  }else{
    setTimeout(f,0)
  }
}