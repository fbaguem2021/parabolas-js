// CONSTANTES
const btn = document.getElementById("btn");
const fillbar = document.getElementById("fill");
const fill = $('.progress-bar-fill');
const line = $('.line');
// BOOLEANO PARA PARAR LA ANIMACION
let stopAnimation = false;
// EVENTO DE CLIC PARA EL BOTÓN
btn.onclick = function() {
    fill.stop();
    stopAnimation = true;
    console.log(fillbar.style.width);
}
// EVENTO PARA DETECTAR LA PULSACIÓN DEL ESPACIO
window.addEventListener("keydown", (key) => {
    if (key.code == "Space") {
        fill.stop();
        line.stop();
        stopAnimation = true;
        console.log(fillbar.style.width);
        console.log(document.getElementById("line").style.left);
    }
})

// ejecuta la función de la animación
startAnimation();
/**
 * Funcion asincrona que inicia la animación de la barra
 */
async function startAnimation() {
    console.log("Starting animation");
    await animateBar("increase", 0);
    await animateLine("increase", 0);
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
/**
 * Función con la animación de la barra
 * @param action Variable con la acción que se hará. Puede ser: "increase" para aumentar el valor o "decrease" para disminuir el valor
 * @param width Valor de ancho que se le dara al relleno de la progress bar
 */
function animateBar(action, width) {
    if (action == "increase") {
        width++;
    } else if (action == "decrease") {
        width--;
    }
    setTimeout(() => {
        fill.animate({
    	    'width': `${width}%`,
        }, {
    	    duration: 1,
            complete: function() {
                if (width == 100) {
                    action = "decrease";
                } else if (width == 0) {
                    action = "increase";
                }
                if (stopAnimation == false) {
                    animateBar(action, width);
                } else {
                    console.log("Ending animation")
                }
            }
        });
    }, 50);
}