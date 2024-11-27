const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-button");

// Create the grid
function createGrid(size) {
  container.innerHTML = ""; // Clear the container
  const squareSize = 960 / size; // Calculate size of each square
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = 0; // Initially, the square is invisible

    let interactionCount = 0; // Track the number of interactions

    // Add hover effect
    square.addEventListener("mouseover", () => {
      // Random color on first interaction
      if (interactionCount === 0) {
        square.style.backgroundColor = getRandomColor();
      } else {
        // Gradually darken the square by adjusting opacity
        darkenSquare(square, interactionCount);
      }

      interactionCount++;
    });

    container.appendChild(square);
  }
}

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken the square by 10% opacity per interaction
function darkenSquare(square, interactionCount) {
  if (interactionCount < 10) {
    const currentOpacity = parseFloat(square.style.opacity);
    const newOpacity = Math.min(1, currentOpacity + 0.1); // Increase opacity by 10%
    square.style.opacity = newOpacity;
  } else {
    square.style.opacity = 1; // Fully opaque after 10 interactions
  }
}

// Event listener for the button
resizeButton.addEventListener("click", () => {
  let gridSize = prompt("Enter the number of squares per side (max: 100):", 16);

  if (gridSize === null) return; // Cancel was clicked
  gridSize = parseInt(gridSize);

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(gridSize);
});

// Initialize the grid with default size
createGrid(16);