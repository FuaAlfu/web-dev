var menuItems = document.querySelector('.menu-items');
var burgerIcon = document.querySelector('.burger-icon');

function toggleMenu() {
  menuItems.classList.toggle('active');
}

function showMenu() {
  menuItems.classList.add('active');
}

function hideMenu() {
  menuItems.classList.remove('active');
}

burgerIcon.addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
  var target = event.target;
  var isBurgerIcon = target.classList.contains('burger-icon');
  var isMenuItems = target.classList.contains('menu-items');

  if (!isBurgerIcon && !isMenuItems) {
    hideMenu();
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    showMenu();
  }
});

  
  function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    var timeCounter = document.getElementById('time-counter');
    timeCounter.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  
    setTimeout(updateTime, 1000);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  updateTime();
  toggleMenu();