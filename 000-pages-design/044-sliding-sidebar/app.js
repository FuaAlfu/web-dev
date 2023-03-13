const sidebar = document.querySelector(".sidebar");
const toggleButton = document.querySelector(".btn-toggle");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});