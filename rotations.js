function addRotateListener(cube, id, animationName) {
    const el = document.querySelector(`#${id}`);
    el.addEventListener("click",() => {
        cube.style.animationName = animationName;
    });
}

const cube = document.querySelector("#cube");

addRotateListener(cube, "right", "rotate-right");
addRotateListener(cube, "left", "rotate-left");
addRotateListener(cube, "up", "rotate-up");
addRotateListener(cube, "down", "rotate-down");
addRotateListener(cube, "z-axis-rotation", "rotate-z");
addRotateListener(cube, "stop", "none");