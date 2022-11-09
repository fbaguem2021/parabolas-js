var btn1 = document.getElementById("btn1");
var bar = document.getElementById("bar");
var barChild = bar.getElementsByTagName("span")[0];

btn1.onclick = function () {
  parabola(this, barChild);
};

var parabola = (function () {
  var carNum = 0;
  return function (self, target) {
    var circle = document.createElement("div");
    circle.id = "circle";
    circle.style.display = "none";
    document.body.appendChild(circle);

    //formula parabolica
    var a, b, c, x1, y1, x2, y2, y, sum, t, x2l, x2r, x2b, x2t;
    x1 = self.offsetLeft + self.clientWidth / 2;
    y1 = self.offsetTop;
    x2 = bar.offsetLeft + self.clientWidth / 2;
    //x2 = 500;
    
    x2l= bar.offsetLeft;
    x2r= bar.offsetLeft + bar.clientWidth;
    x2t= bar.offsetTop;
    x2b= bar.offsetTop + bar.offsetHeight;
    //x2b= document.documentElement.scrollHeight;
    
    y2 = bar.offsetTop;
    //console.log(`x1: ${x1}`);
    //console.log(`y1: ${y1}`);
    //console.log(`x2: ${x2}`);
    //console.log(`y2: ${y2}`);

    a = 0.0009;
    b = (y1 - y2 - a * (x1 * x1 - x2 * x2)) / (x1 - x2);
    c = y1 - a * x1 * x1 - b * x1;
    //c = y1 - a * x1 * x1 - b * x1;
    //226.0714457831325
    //console.log(`a: ${a}`);
    //console.log(`b: ${b}`);
    //console.log(`c: ${c}`);
    
    
    sum = x1;

    t = setInterval(function () {
      circle.style.display = "block";
      y = a * sum * sum + b * sum + c;
      circle.style.top = y + "px";
      circle.style.left = sum + "px";

			// +=1 -> Velocitat de moviment de la bola
			sum+=8;
      //sum++;

      // comprueva si la bala choca con el objetivo
      if (sum >= x2l && sum <= x2r && y >= x2t) {
        clearInterval(t);
        document.body.removeChild(circle);
        carNum++;
        target.innerHTML = carNum;
        // si detecta que la bala toca el suelo, la elimina
      } else if (y > x2b) {
      	clearInterval(t);
        document.body.removeChild(circle);
      }
    }, 1);
  };
})();
