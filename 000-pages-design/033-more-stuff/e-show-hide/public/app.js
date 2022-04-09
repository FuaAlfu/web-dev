document.getElementById("btn")
        .addEventListener("click", function() {
  document.getElementById("start").hidden = true;
  document.getElementById("content").hidden = false;
}, false);

// 
document.getElementById("btn1")
        .addEventListener("click", function() {
  document.getElementById("start").hidden = false;
  document.getElementById("content").hidden = true;
}, true);