var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		w = window.innerWidth,
		h = window.innerHeight;
canvas.width = w;
canvas.height = h;
document.body.appendChild(canvas);

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var char = {
	x: -100,
	y: 100,
	px: -100,
	w: 20,
	h: 30,
	air: false
};
var key = {
	left: false,
	right: false,
	up: false,
	jump: false
}
document.addEventListener('keydown', function(e){
	if(e.which === 37){
		key.left = true;
	}else if(e.which === 39){
		key.right = true;
	}else if(e.which === 38){
		key.up = true;
		if(!char.air){
			key.jump = true;
		}
	}
});
document.addEventListener('keyup', function(e){
	if(e.which === 37){
		key.left = false;
	}else if(e.which === 39){
		key.right = false;
	}else if(e.which === 38){
		key.up = false;
	}
});

(function loop(){
	requestAnimFrame(loop);
	ctx.clearRect(0,0,w,h);
	if(key.jump){
		char.air = true;
		if(char.y <= 0 && char.x > w / 2 - 100 - char.w){
			char.y = (0.125 * -char.px) * (0.125 * -char.px) - (56.25) - 100;
			char.px += 2;
		}else if(char.y >= 0 && char.y <= 4 && char.x > w / 2 - 100 - char.w){
			char.px *= -1;
		}else if(char.y <= 100){
			char.y = (0.125 * -char.px) * (0.125 * -char.px) - (56.25);
			char.px += 2;
		}else{
			key.jump = false;
			char.air = false;
			char.px = -100;
			char.y = 100;
			if(key.up){
				key.jump = true;
			}
		}
	}
	if(key.left && !key.right && char.x + w / 2 > 0){
		char.x -= 2;
	}else if(!key.left && key.right && char.x + w / 2 + char.w < w){
		char.x += 2;
	}
	ctx.fillStyle = 'brown';
	ctx.fillRect(char.x + w / 2,char.y + h / 2 - char.h,char.w,char.h);
	ctx.fillStyle = 'lightgreen';
	ctx.fillRect(0,h / 2 + 100,w,10);
	ctx.fillRect(w-100,h / 2,100,10);
})();