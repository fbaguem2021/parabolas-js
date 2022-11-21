const cannon = {
    css : getComputedStyle(document.documentElement),
    fullcannon: document.getElementById("cannon"),
    cannon_svg: document.getElementById("cannon-body"),
    wheel_svg: document.getElementById("wheel"),
    wheel_components: document.getElementsByClassName("wheel"),
    rotateCannon: function(deg) {
        this.cannon_svg.style.transform = `rotate(${deg}deg)`;
    },
    initCannon: function(fullSize, deg) {
        this.cannon_svg.width = fullSize;
        this.cannon_svg.height = fullSize;
        this.wheel_svg.width = (fullSize/2);
        this.wheel_svg.width = (fullSize/2);
        //this.rotateCannon(deg);
    }
};
//cannon.initCannon()
//cannonData.initializeVectors();
//initializeVectors()
function initializeVectors() {
    cannon.wheel_svg.width = 75;
    rotateCannon(-45);
}
function rotateCannon(deg) {
    cannon.cannon_svg.style.transform = `rotate(${deg}deg)`;
    return cannon.cannon_svg.style.transform;
}
/** Funcion para obtenert un array associativo con los valores de las variables css
 * @returns Retorna un array, los valores de este varian dependiendo de las variables css que guardan
 */
function cssVar() {
    return {
        "scale"             : cannon.css.getPropertyValue("--scale"),
        "--wheel-size"      : parseInt(cannon.css.getPropertyValue("--wheel-size").slice(0, -2)),
        "--cannon-size"     : parseInt(cannon.css.getPropertyValue("--cannon-size").slice(0, -2)),
    }
}