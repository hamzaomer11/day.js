document.getElementById("time-area").innerHTML = dayjs().format('HH:mm:ss');
document.getElementById("day-area").innerHTML = dayjs().format('DD-MM-YYYY');
document.getElementById("timezone").innerHTML = dayjs.tz.guess();


