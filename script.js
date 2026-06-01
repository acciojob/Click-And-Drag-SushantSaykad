// script.js

const items = document.querySelector(".items");

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

items.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollLeft = items.scrollLeft;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const walk = e.pageX - startX;
    items.scrollLeft = scrollLeft - walk;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mouseleave", () => {
    isDragging = false;
});