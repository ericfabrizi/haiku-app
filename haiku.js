// haikus

let pondLine1 = "An old silent pond...";
let pondLine2 = "A frog jumps into the pond,";
let pondLine3 = "splash! Silence again.";
let pondAuthor = "Matsuo Basho";
let pondLife = "(1644-1694)";

let rainLine1 = "In the twilight rain";
let rainLine2 = "these brilliant-hued hibiscus -";
let rainLine3 = "A lovely sunset.";
let rainAuthor = "Matsuo Basho";
let rainLife = "(1644-1694)";

let sandalsLine1 = "A summer river being crossed";
let sandalsLine2 = "how pleasing";
let sandalsLine3 = "with sandals in my hands!";
let sandalsAuthor = "Yosa Buson";
let sandalsLife = "(1716-1784)";

let moonlightLine1 = "In the moonlight,";
let moonlightLine2 = "The color and scent of the wisteria";
let moonlightLine3 = "Seems far away.";
let moonlightAuthor = "Yosa Buson";
let moonlightLife = "(1716-1784)";

let snailLine1 = "O snail";
let snailLine2 = "Climb Mount Fuji,";
let snailLine3 = "But slowly, slowly!";
let snailAuthor = "Kobayashi Issa";
let snailLife = "(1763-1828)";


// pick a haiku

let line1;
let line2;
let line3;
let author;
let life;

switch (Math.floor(Math.random() * 5)) {
    case 0:
        line1 = pondLine1;
        line2 = pondLine2;
        line3 = pondLine3;
        author = pondAuthor;
        life = pondLife;
        break;
    case 1:
        line1 = rainLine1;
        line2 = rainLine2;
        line3 = rainLine3;
        author = rainAuthor;
        life = rainLife;
        break;
    case 2:
        line1 = sandalsLine1;
        line2 = sandalsLine2;
        line3 = sandalsLine3;
        author = sandalsAuthor;
        life = sandalsLife;
        break;
    case 3:
        line1 = moonlightLine1;
        line2 = moonlightLine2;
        line3 = moonlightLine3;
        author = moonlightAuthor;
        life = moonlightLife;
        break;
    case 4:
        line1 = snailLine1;
        line2 = snailLine2;
        line3 = snailLine3;
        author = snailAuthor;
        life = snailLife;
}


// display haiku

document.getElementById("line1").innerHTML = line1;
document.getElementById("line2").innerHTML = line2;
document.getElementById("line3").innerHTML = line3;
document.getElementById("author").innerHTML = author;
document.getElementById("life").innerHTML = life;


