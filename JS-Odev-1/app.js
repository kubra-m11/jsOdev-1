let isimYaz = prompt("Lütfen İsminizi Yazınız: ");
let myName = document.querySelector("#Name");
myName.innerHTML = `${isimYaz}`;


function updateTime(){
    var timeDiv = document.getElementById("saat");
    var date = new Date();

    var hour = date.getHours();
    var munite = date.getMinutes();
    var second = date.getSeconds();


    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var day = days[date.getDay()];

    var time = `${hour}:${munite}:${second},${day}`;

    timeDiv.innerHTML = time;

    setTimeout(updateTime, 1000); //Her bir saniyede bir günceller

}

updateTime();