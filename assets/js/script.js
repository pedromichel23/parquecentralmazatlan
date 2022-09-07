const arrowDiv = document.getElementById('arrow');
const textContainerDiv = document.getElementById('text-container');
let textContainerSize = textContainerDiv.offsetWidth;

function adjustArrowSize () {
	textContainerSize = textContainerDiv.offsetWidth;
	arrowDiv.style.borderLeft = `${textContainerSize / 2}px solid transparent`;
	arrowDiv.style.borderRight = `${textContainerSize / 2}px solid transparent`;
}

adjustArrowSize();

window.onresize = adjustArrowSize;
