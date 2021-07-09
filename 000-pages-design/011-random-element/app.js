let myArray = ["one", "two","three","four"]

//display in the console
console.log(myArray.length);
console.log(Math.random() * myArray.length);
console.log(Math.floor(Math.random() * myArray.length));
console.log(Math.trunc(Math.random() * myArray.length));
console.log(myArray[Math.trunc(Math.random() * myArray.length)]);

//display on the page
function numberDisplay(prams){
    let num = prams
    document.getElementById('number').innerHTML = num;
}

numberDisplay(myArray[Math.trunc(Math.random() * myArray.length)]);