var prijs = 0
var singleprijs = 0

function enkele_bestelling(){
    var snack_or_drink = prompt("Wilt u snack of drinken bestellen")

    while(snack_or_drink != "snack" && snack_or_drink != "drinken"){
        window.alert("U heeft een ongeldige invoer gedaan!")
        snack_or_drink = prompt("Wilt u snack of drinken bestellen")
    }
    
    if(snack_or_drink == "drinken"){
        var drinken = prompt("fris, bier, wijn")
        while(drinken != "fris" && drinken != "bier" && drinken != "wijn"){
            window.alert("U heeft een ongeldige invoer gedaan!")
            drinken = prompt("fris, bier, wijn")
        }
    }
    if(drinken == "fris"){
        aantal = prompt("Hoeveel wilt u hier van?")
        prijs = prijs + 2 * aantal
        singleprijs = singleprijs + 2 * aantal
    }
    if(drinken == "bier"){
        aantal = prompt("Hoeveel wilt u hier van?")
        prijs = prijs + 1 * aantal
        singleprijs = singleprijs + 1 * aantal
    }
    if(drinken == "wijn"){
        aantal = prompt("Hoeveel wilt u hier van?")
        prijs = prijs + 3 * aantal
        singleprijs = singleprijs + 3 * aantal
    }

    if(snack_or_drink == "snack"){
        var snack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")
        while(snack != "8" && snack != "16"){
            window.alert("U heeft een ongeldige invoer gedaan!")
            snack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")
        }
    }

    if(snack == "8"){
        aantal = prompt("Hoeveel wilt u hier van?")
        prijs = prijs + 3 * aantal
        singleprijs = singleprijs + 3 * aantal
    }

    if(snack == "16"){
        aantal = prompt("Hoeveel wilt u hier van?")
        prijs = prijs + 5 * aantal
        singleprijs = singleprijs + 5 * aantal
    }
    
    if (drinken == null){
        eten = snack
        eten = eten + " bitterballen"
        
    }
    else{
        eten = drinken
    }
    
    singleprijs = "$ " + singleprijs
    //return van soorten die in de table moeten komen in een list/array
    return [snack_or_drink, eten, aantal, singleprijs]
    
}

//functie voor het toevoegen van een row en cells met de return van de list/array
function add(bestelling){
    var table = document.getElementById("overzicht");
    var row = table.insertRow(-1);
    var citem = row.insertCell(0);
    var cformitem = row.insertCell(1);
    var caantal = row.insertCell(2);
    var cprijs = row.insertCell(3);
    citem.innerHTML = bestelling[0];
    cformitem.innerHTML = bestelling[1];
    caantal.innerHTML = bestelling[2];
    cprijs.innerHTML = bestelling[3];
    singleprijs = 0


    
}
// met 1 knop 2 functies laten doen
function Superfunction(){
    var bestelling = enkele_bestelling()
    add(bestelling)
}

function pay(){
    window.alert("u moet betalen: $" + prijs);
}
//reset met while loop
function reset(){
    var tb = document.getElementById("overzicht");
    while(tb.rows.length > 1){
        tb.deleteRow(1)

    prijs = 0
    }
}