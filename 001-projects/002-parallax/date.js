function date(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    //document.getElementById('d').innerHTML = Date().toString(); //showing all date including the time
    document.getElementById('d').innerHTML = currentYear.toString();
}

date();