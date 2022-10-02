const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.querySelector('.btn');
const code = document.querySelector('.pad');

button.addEventListner('click', () => {
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        hexColor += hex[codeGeneration()];
    }
    code.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log("test");
});

function codeGeneration(){
    return Math.floor(Math.random() * hex.length);
}