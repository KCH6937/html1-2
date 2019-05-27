function menuChange(obj, color) {
	obj.style.backgroundColor=  color;

}

function menuClicked(text) {
	let infoTag = document.getElementById('info');
	console.log(infoTag);

	if(infoTag == null) return;

	infoTag.innerHTML = text;
}