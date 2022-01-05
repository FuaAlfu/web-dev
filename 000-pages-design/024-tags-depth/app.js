const date = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    document.getElementById('d').innerHTML = currentYear.toString();
}
date();

const btnDOM = getElement('.btn')
btnDOM.addEventListener('click', () => {
    let title = document.getElementById("teto").value;
    document.getElementById("title").innerHTML = "hi " + title;
});