// what date is it

let date = new Date();

// pick a random value from an array

function randomise(possible_greetings) {
    return possible_greetings[Math.floor(Math.random() * possible_greetings.length)];
}

// choose appropriate greeting for time of day

if (date.getHours() < 12) {
    let morning = ["Good morning", "Have a good morning", "Have a lovely morning"];
    var greeting = randomise(morning);
}
else if (date.getHours() < 17) {
    let afternoon = ["Good afternoon", "Enjoy your afternoon", "Good day"];
    var greeting = randomise(afternoon);
}
else {
    let evening = ["Good evening", "Have a good evening", "Have a lovely evening"];
    var greeting = randomise(evening);
}

// display greeting

document.getElementById("greeting").innerHTML = greeting;

