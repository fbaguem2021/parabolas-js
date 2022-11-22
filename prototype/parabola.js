var cannon = document.getElementById("cannon");
var fire = document.getElementById("fire");

cannon.onclick = function () {
  parabola(this);
};

function calculateX2(percentage) {
    return ( window.innerWidth - (bar.offsetLeft + self.clientWidth / 2) * (percentage / 100) );
}
function calculateY2(percentage) {
    return fire.offsetTop * (percentage / 100);
}

var parabola = (function () {
    var carNum = 0;
    return function (canion) {
        var firedata={};
        var circledata={};
        var circle = document.createElement("div");
        circle.id = "circle";
        circle.style.display = "none";
        document.body.appendChild(circle);

        //formula parabolica
        var a, b, c, x1, y1, x2, y2, y, sum, t, x2l, x2r, x2b, x2t;
        // posicio x inicial
        x1 = canion.offsetLeft + canion.clientWidth;
        // posicio y inicial
        y1 = canion.offsetTop + canion.offsetHeight / 2;
        //x2 = (fire.offsetLeft + canion.clientWidth / 2);
        x2=calculateX2(getPowerbarWidth());

        circledata.originX = canion.offsetLeft + canion.clientWidth;
        
        console.log(`x1: ${x1}, y1: ${y1}, x2: ${x2}`);
        //x2 = 500;

        // informacion sobre la posicion del gif.
        // left y right son respecto el lado izquerdo de la pantalla
        // top y bottom respecto la parte superior de la pantalla
        firedata.left = fire.offsetLeft;
        firedata.right = fire.offsetLeft + fire.clientWidth;
        firedata.top = fire.offsetTop;
        firedata.bottom = fire.offsetTop - fire.offsetHeight
        
        x2l= fire.offsetLeft;
        x2r= fire.offsetLeft + fire.clientWidth;
        x2t= fire.offsetTop;
        x2b= fire.offsetTop + fire.offsetHeight;
        console.log(`x2t: ${x2t}, x2b: ${x2b}`);
        //x2b= document.documentElement.scrollHeight;
        
        //y2 = fire.offsetTop;
        y2=calculateY2(getPowerbarWidth());

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
        circledata.posX = x1;
        console.log(`primara posicion=> x: ${sum}, y: ${a * sum * sum + b * sum + c}`)
        t = setInterval(function () {
            circle.style.display = "block";
            y = a * sum * sum + b * sum + c;

            circledata.posY = a * circledata.posX**2 + b*circledata.posX + c;

            circle.style.top = y + "px";
            circle.style.left = sum + "px";
            
            sum+=8;
            circledata.posX+=8;
            //sum++;

            // comprueva si la bala choca con el objetivo
            if (sum >= x2l && sum <= x2r && y >= x2t) {
                clearInterval(t);
                //document.body.removeChild(circle);
                carNum++;
                // si detecta que la bala toca el suelo, la elimina
            } else if (y > x2b) {
                clearInterval(t);
            }
        }, 1);
    };
})();
