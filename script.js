const container = document.getElementById("container");

function createGrid(size) {
    container.innerHTML = ""; // Clear the container
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

createGrid(16);