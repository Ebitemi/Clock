const hourE1 = document.getElementById("Hours");
const minuteE1 = document.getElementById("Minutes");
const secondE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";


if (h > 12) {
    h = h - 12;
    ampm = "PM";
}

hourE1.innerHTML = h;
minuteE1.innerHTML = m;
secondE1.innerHTML = s;
ampmE1.innerHTML = ampm;
setTimeout(() => {
    updateClock();
}, 1000);

}
updateClock();




