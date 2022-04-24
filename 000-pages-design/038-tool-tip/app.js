function getMyToolTipFunction () {
    var popup = document.getElementById("displayText");
    popup.classList.toggle("show");
}

function mbar (msg, css) {
    // (A) CREATE BAR
    var bar = document.createElement("div");
    bar.innerHTML = msg;
    bar.classList.add("mbar");
    if (css) { bar.classList.add(css); }
   
    // (B) CLICK TO CLOSE
    bar.onclick = () => { bar.remove(); };
   
    // (C) APPEND TO CONTAINER
    document.getElementById("mbar").appendChild(bar);
  }