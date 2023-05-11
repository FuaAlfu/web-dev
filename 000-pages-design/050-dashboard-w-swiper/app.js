document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    // using swiper variable to control Swiper instance
    document.getElementById("next-button").addEventListener("click", function() {
      swiper.slideNext();
    });
  
    document.getElementById("prev-button").addEventListener("click", function() {
      swiper.slidePrev();
    });
  });

// Function to toggle light/dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  // Event listener for the toggle button
  var toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", toggleDarkMode);