const fillbar = document.getElementById("line");
const fill = $('.progress-bar-fill');
const line = $('.line');
let stopAnimation = false;
startAnimation();
window.addEventListener("keydown", (key) => {
    if (key.code == "Space") {
        fill.stop();
        line.stop();
        stopAnimation = true;

        parabola(btn1, barChild);

        console.log(fillbar.style.left);
        console.log(document.getElementById("line").style.left);
    }
})
async function startAnimation() {
    console.log("Starting animation");
    //await animateBar("increase", 0);
    await animateLine("increase", 0);
}
function getPowerbarWidth(){
    return parseInt((fillbar.style.left).slice(0, -1));
}
function animateLine(action, position) {
    if (action == "increase") {
        position++;
    } else if (action == "decrease") {
        position--;
    }
    setTimeout(() => {
        line.animate({
    	    'left': `${position}%`,
        }, {
    	    duration: 1,
            complete: function() {
                if (position == 100) {
                    action = "decrease";
                } else if (position == 0) {
                    action = "increase";
                }
                if (stopAnimation == false) {
                    animateLine(action, position);
                } else {
                    console.log("Ending animation")
                }
            }
        });
    }, 50);
}