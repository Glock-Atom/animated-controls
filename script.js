const controls = {
    KeyW: document.querySelector("[data-up]"),
    KeyA: document.querySelector("[data-left]"),
    KeyS: document.querySelector("[data-down]"),
    KeyD: document.querySelector("[data-right]"),
};

document.addEventListener("keydown", ({ code }) =>{
    controls[code]?.classList.add("controls--active");
});

document.addEventListener("keyup", ({ code }) =>{
    controls[code]?.classList.remove("controls--active");
});