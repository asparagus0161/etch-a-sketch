const container = document.querySelector(".container");
const btn = document.querySelector("button");

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createGrid(size = 16) {
    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let column = 0; column < size; column++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add("col");
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
}

createGrid();

function changeColorOnHover(e) {
    if (e.target.classList.value === "col") {
        e.target.style.background = random_rgba();
    }
}

function changeColorOnMouseLeave(e) {
    if (e.target.classList.value === "col") {
        e.target.style.background = "white";
    }
}

function changeSize() {
    let size = parseInt(prompt("Enter the size"));
    if (size > 100) {
        size = 100
    }
    else if (size < 1) {
        size = 1
    }
    resetGrid();
    createGrid(size);
}

function resetGrid() {
    container.textContent = "";
}

container.addEventListener("mouseover", changeColorOnHover);
container.addEventListener("mouseout", changeColorOnMouseLeave);
btn.onclick = changeSize;