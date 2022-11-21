const css = getComputedStyle(document.documentElement);
const cssVariables = {
    scale: css.getPropertyValue("--scale"),
    colors: {
        screen: {
            dark: css.getPropertyValue("--color-screen-bg-dark"),
            light: css.getPropertyValue("--color-screen-bg-light"),
        },
        cannon: {
            background: css.getPropertyValue("--color-cannon-bg"),
        }
    },
    positions: {
        cannon: {
            top: css.getPropertyValue("--position-cannon-top"),
            left: css.getPropertyValue("--position-cannon-left"),
        },
        wheel: {
            top: css.getPropertyValue("--position-wheel-full-top"),
            left: css.getPropertyValue("--position-wheel-full-left"),
            svg_top: css.getPropertyValue("--position-wheel-body-top"),
            svg_left: css.getPropertyValue("--position-wheel-body-left"),
            bg_top: css.getPropertyValue("--position-wheel-bg-top"),
        }
    }
}
function crearPruevas(x, y) {
    var prueva = document.getElementById("pruevas");
    prueva.style.position = "absolute";
    prueva.style.top = y;
    prueva.style.left = x;
    prueva.style.width = "10px";
    prueva.style.height = "10px";
    prueva.style.backgroundColor = "#ff0000"
}