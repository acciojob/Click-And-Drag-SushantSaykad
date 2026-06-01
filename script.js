// Your code here.
const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach((cube) => {
    cube.addEventListener("mousedown", (e) => {
        activeCube = cube;

        const cubeRect = cube.getBoundingClientRect();

        offsetX = e.clientX - cubeRect.left;
        offsetY = e.clientY - cubeRect.top;

        cube.style.position = "absolute";
        cube.style.zIndex = "1000";
    });
});

document.addEventListener("mousemove", (e) => {
    if (!activeCube) return;

    const containerRect = container.getBoundingClientRect();

    let left = e.clientX - containerRect.left - offsetX;
    let top = e.clientY - containerRect.top - offsetY;

    // Keep cube inside container
    left = Math.max(
        0,
        Math.min(left, containerRect.width - activeCube.offsetWidth)
    );

    top = Math.max(
        0,
        Math.min(top, containerRect.height - activeCube.offsetHeight)
    );

    activeCube.style.left = left + "px";
    activeCube.style.top = top + "px";
});

document.addEventListener("mouseup", () => {
    activeCube = null;
});