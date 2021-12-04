var btn = document.getElementById('btn');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mousex, mousey;
var state = false;
var color = 0;

canvas.width = window.innerWidth - 2 ;
canvas.height = window.innerHeight - 2;

ctx.lineCap = 'round';

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
btn.addEventListener('click', clearBtn);

function clearBtn() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}  

function mouseDown(e) {
	mousex = e.clientX;
	mousey = e.clientY;
	state = true;
}
function mouseUp() {
	state = false;
}

function mouseMove(e) {
	if(!state) return;
	
	var w = Math.random() * 31;
	
	ctx.lineWidth = w;
	color++;
	ctx.strokeStyle = 'hsl('+color+', 100%, 50%)';
	//console.log(e.clientX);
	ctx.beginPath();
	ctx.moveTo(mousex, mousey);
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();

	mousex = e.clientX;
	mousey = e.clientY;	
}