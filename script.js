const container = document.querySelector("#container");
const controlPanel = document.createElement("div");
const drawBtn = document.createElement("button");
const eraseBtn = document.createElement("button");
const resetBtn = document.createElement("button");

drawBtn.classList.add("button");
eraseBtn.classList.add("button");
resetBtn.classList.add("button");
controlPanel.classList.add("controlPanel");

drawBtn.textContent = "Draw";
eraseBtn.textContent = "Erase";
resetBtn.textContent = "Clear";

controlPanel.appendChild(drawBtn);
controlPanel.appendChild(eraseBtn);
controlPanel.appendChild(resetBtn);

document.body.appendChild(controlPanel);

function createGrid(num) {
    const width = 500/(num);
    const height = 500/(num);
    const w = width.toString() + "px";
    const h = height.toString() + "px"
    for (r=0;r<num;r++) {
        for (c=0; c<num; c++) {
            const cell = document.createElement("div");
            cell.style.width = w;
            cell.style.height = h;
            container.appendChild(cell);
            cell.classList.add("cell");
        }
    }
}

createGrid(16);

function randomNumber(x, y) {
    const rgb = Math.random() * (y-x) + x;
    return rgb.toString();
}

function draw() {
    container.addEventListener('mouseover', function(e) {
        e.target.style.background = `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`;
    }); 
}

function erase() {
    container.addEventListener('mouseover', function(e) {
        e.target.style.background = "rgb(246, 255, 246)";
    }); 
}

function reset() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {cell.style.backgroundColor = "rgb(246, 255, 246)"});
    resize()
}

function resize() {
    const container = document.querySelector("#container");
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {container.removeChild(cell)});
    const size = prompt("How many rows do you want?");
    if (size < 100) {
        createGrid(size);
    } else if (size >= 100) {
        alert("Sorry, it has to be less than 100.")
        resize();
    } else {
        resize();
    }
}

resetBtn.addEventListener('click', reset);
eraseBtn.addEventListener('click', erase);
drawBtn.addEventListener('click', draw);

