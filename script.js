const container = document.getElementById("container");

// Create the grid
function createGrid(size) {
  container.innerHTML = ""; // Clear the container
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Add an event listener for the "hover" effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor(); // Change the color
    });

    container.appendChild(square);
  }
}

// Function to generate random colors (optional, for fun)
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Initialize the grid
createGrid(16);