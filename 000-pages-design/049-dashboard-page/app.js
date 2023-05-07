// Function to toggle light/dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  // Event listener for the toggle button
  var toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", toggleDarkMode);