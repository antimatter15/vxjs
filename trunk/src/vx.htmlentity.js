/*[name|HTML Entity]*/
/*[desc|encodes and decodes HTML entities]*/
_.H=function(s,d) {
	var e = document.createElement(d?'textarea':'div');
	e.innerHTML = s;
	return d?e.value:e.innerHTML;
}