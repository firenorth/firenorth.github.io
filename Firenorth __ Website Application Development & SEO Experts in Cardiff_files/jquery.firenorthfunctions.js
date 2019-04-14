// provides the same functionality as htmlEntitiles in PHP only in JS.
// Converts all naughty characters in a striong to their html entity equivalents
function htmlEntities(s) {
	var el = document.createElement("div");
	el.innerText = el.textContent = s;
	s = el.innerHTML;
	delete el;
	s = s.replace(/"/g, '&quot;');
	s = s.replace(/'/g, "&#039;");
	return s;
}