var teRadenGetal

function Random() {
    teRadenGetal = Math.floor((Math.random() * 100) + 1);
}

function Raden() {

    var ingevoerdeGetal = parseInt(document.getElementById("hl").value);

    if (ingevoerdeGetal == teRadenGetal) {
        document.getElementById("antwoord").innerHTML = "Geraden!";
    } else if (ingevoerdeGetal > teRadenGetal) {
        document.getElementById("antwoord").innerHTML = "Te hoog!";
    } else {
        document.getElementById("antwoord").innerHTML = "Te laag!";
    }
}

var klik = 0;

function Optellen() {
    klik += 1;
    document.getElementById("counter").innerHTML = klik;
    if (klik != 100) {
        document.getElementById("countertext").innerHTML = "Nog een paar keer!";
    } else {
        document.getElementById("countertext").innerHTML = "dit duurt wel erg lang!";
    }

    if (klik == 20 || klik == 21 || klik == 22) {
        document.getElementById("countertext").innerHTML = "rond de 20 vragen al !";
    }

}

function Full() {
    Optellen();
    Raden();
}