let section = document.querySelector(".second");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop + 100){ //or - 100  as you like
        console.log("reaached the second section");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

const date = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    document.getElementById('d').innerHTML = currentYear.toString(); 
}

// startCount(document.querySelectorAll(".nums .num")[0]); //for one num
date();