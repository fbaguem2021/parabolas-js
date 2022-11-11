/*
$('.progress-bar-fill').delay(1000).queue(function () {
        $(this).css('width', '75%')
});
$('.progress-bar-fill').delay(1000).queue(function () {
        $(this).css('width', getPercentage(percentage))
});
*/
let increasing = true;
let stopAnimation = false;
var percentage = 0;

const btn = document.getElementById("btn");
const fill = document.getElementById("fill");
btn.onclick = function() {
        if (stopAnimation == true) {
        stopAnimation = false;
    } else if (stopAnimation == false) {
        stopAnimation = true;
    }
}

while (stopAnimation == false) {
    if (increasing) {
        percentage++;
    } else {
        percentage--;
    }
    console.log(percentage);
    //$('.progress-bar-fill').delay(1000).css('width', getPercentage(percentage));
    //console.log(fill.style.width);

	$('.progress-bar-fill').animate({
    	    'width': getPercentage(percentage),
        }, {
    	    duration: 1,
            complete: function() {
                console.log("finished");
            }
        }
    )
  
  
  if (percentage == 10) {
  	    stopAnimation = true;
  }

  
    if (percentage == 100) {
        increasing = false;
    } else if (percentage == 0) {
        increasing = true;
    }
}

function getPercentage(percent) {
	return `${percent}%`;
}