function menuChange(obj, color) {
	obj.style.backgroundColor= color;
}

function menuClicked(text, isImg) {
	let content = document.getElementsByClassName('content-flash')[0];
	if(arguments.length == 1 && content == null) return;

	let childrenTags = content.children;

	childrenTags[0].innerHTML = text; //info tag innerHTML Change
]
	if(arguments.length == 2) {
		let imgSource = arguments[1];
		let imgBoxTag = childrenTags[1];
		
		imgBoxTag.style.display = "block";
		imgBoxTag.children[0].src = imgSource;
	}

}

function refresh(obj){
	location.reload();
}