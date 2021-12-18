var isFading = { name: false, happy: false}
function fadeIn(ele, speed, key) {
    if (!isFading[key]) {
        isFading[key] = true
        var opacitynum = ele.style.opacity || 0;
        var speed = (speed / 100) || 10;
        function opacityAdd() {
            if (opacitynum < 1) {
                ele.style.opacity = opacitynum = (parseFloat(opacitynum) + 0.01).toFixed(2);
            } else {
                clearInterval(opacityt);
                isFading[key] = false
            }
        }
        var opacityt = setInterval(opacityAdd, speed);
    }

}

// handle (re-)sizing of the canvas
function onResize() {
    let canvas = document.getElementById('pinkboard')
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let yangqilin = document.getElementById('yangqilin')
    yangqilin.style.opacity = 0
    fadeIn(yangqilin, 3000, "name")

    let happy = document.getElementById('happy')
    happy.style.opacity = 0
    fadeIn(happy, 3000, "happy")


}
window.onresize = onResize;