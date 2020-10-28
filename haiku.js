// pick a haiku

let line1;
let line2;
let line3;
let author;
let life;

switch (Math.floor(Math.random() * 5)) {
    case 0:
        line1 = "An old silent pond...";
        line2 = "A frog jumps into the pond,";
        line3 = "splash! Silence again.";
        author = "Matsuo Basho";
        life = "(1644-1694)";
        break;
    case 1:
        line1 = "In the twilight rain";
        line2 = "these brilliant-hued hibiscus -";
        line3 = "A lovely sunset.";
        author = "Matsuo Basho";
        life = "(1644-1694)";
        break;
    case 2:
        line1 = "A summer river being crossed";
        line2 = "how pleasing";
        line3 = "with sandals in my hands!";
        author = "Yosa Buson";
        life = "(1716-1784)";
        break;
    case 3:
        line1 = "In the moonlight,";
        line2 = "The colour and scent of the wisteria";
        line3 = "Seems far away.";
        author = "Yosa Buson";
        life = "(1716-1784)";
        break;
    case 4:
        line1 = "O snail";
        line2 = "Climb Mount Fuji,";
        line3 = "But slowly, slowly!";
        author = "Kobayashi Issa";
        life = "(1763-1828)";
}


// display haiku

document.getElementById("line1").innerHTML = line1;
document.getElementById("line2").innerHTML = line2;
document.getElementById("line3").innerHTML = line3;
document.getElementById("author").innerHTML = author;
document.getElementById("life").innerHTML = life;


