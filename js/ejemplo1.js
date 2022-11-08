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

    // formula parabolica
    var a, b, c, x1, y1, x2, y2, y, sum, t;
    x1 = self.offsetLeft + self.clientWidth / 2;
    y1 = self.offsetTop;
    x2 = bar.offsetLeft + self.clientWidth / 2;
    y2 = bar.offsetTop;

    a = 0.001;
    b = (y1 - y2 - a * (x1 * x1 - x2 * x2)) / (x1 - x2);
    c = y1 - a * x1 * x1 - b * x1;

    //
    sum = x1;

    t = setInterval(function () {
      circle.style.display = "block";
      y = a * sum * sum + b * sum + c;
      circle.style.top = y + "px";
      circle.style.left = sum + "px";

      sum++;

      if (sum > x2) {
        clearInterval(t);
        document.body.removeChild(circle);
        carNum++;
        target.innerHTML = carNum;
      }
    }, 1);
  };
})();
