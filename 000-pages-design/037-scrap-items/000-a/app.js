/**
 prevent user from saving img/vid - not recomanded
 */

document.addEventListener('contextmenu', (e) => {
    if(e.target.tagName === 'IMG'){
        e.preventDefault()
    }
});

const span = document.querySelector('.up');
window.onscroll = function() {
    this.scrollY >= 10? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function() {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};