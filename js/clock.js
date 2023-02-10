
var username;

function onLoad(){
    username = prompt("Lütfen isminizi giriniz.","");
    document.getElementById("myName").innerText = username;
}

function showTime(){
    let currentDate = new Date();
    let hh = currentDate.getHours();
    let mm = currentDate.getMinutes();
    let ss = currentDate.getSeconds();

    let time = `${hh} : ${mm} : ${ss}`

    document.getElementById("myClock").innerText = time;

    let t = setTimeout(() => {
        showTime()
    }, 1000);
}

showTime();