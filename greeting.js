// what hour of the day is it

let date = new Date();

let time = date.getHours();


// randomise morning greeting

let decideMorning = Math.floor(Math.random() * 3);

if (decideMorning === 0) {
    morning = "Good morning";
}
else if (decideMorning === 1) {
    morning = "Have a good morning";
}
else {
    morning = "Welcome in the day";
}


// randomise afternoon greeting

let decideAfternoon = Math.floor(Math.random() * 3);

if (decideAfternoon === 0) {
    afternoon = "Good afternoon";
}
else if (decideAfternoon === 1) {
    afternoon = "Enjoy your afternoon";
}
else {
    afternoon = "Good day";
}


// randomise evening greeting

let decideEvening = Math.floor(Math.random() * 3);

if (decideEvening === 0) {
    evening = "Good evening";
}
else if (decideEvening === 1) {
    evening = "Have a good evening";
}
else {
    evening = "Have a lovely evening";
}


// choose appropriate greeting for time of day

if (time < 12) {
    greeting = morning;
}
else if (time < 17) {
    greeting = afternoon;
}
else {
    greeting = evening;
}


// display greeting

document.getElementById("greeting").innerHTML = greeting;

