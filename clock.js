setInterval(setClock, 1000);

function setClock() {

    let time = new Date();
    let sec = time.getSeconds();
    let secdeg = sec * 6;
    let min = time.getMinutes();
    console.log(min);
    let mindeg = min * 6;
    let hour = time.getHours();
    let hourdeg = hour * 30 + min * 0.5;
    // console.log(deg);
    document.getElementById("sec").style.setProperty('--rotation', secdeg);
    document.getElementById("min").style.setProperty('--rotation', mindeg);
    document.getElementById("hour").style.setProperty('--rotation', hourdeg);

}