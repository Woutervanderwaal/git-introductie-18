//shit to do:
//GIFS maken die beter zijn en terug gaan
//hoe moet je verliezen (time)
//whatsapp groep
//doe is was c++ php mysql pyhton

var woonkamer_foto = "images/woonkamer_foto.jpg";
var links_foto = "images/kijklinks.jpg";
var rechts_foto = "images/kijkrechts.jpg";
var foto_boven ="images/boven.jpg"

var levels = 
{

    intro:
    {
        gif:"images/intro.jpg",
        time:0,
        jpg:"images/intro.jpg"
    },

    woonkamer_begin: 
    {
        gif: "images/woonkamer.gif",
        time: 6650,
        jpg: "images/woonkamer.jpg"
        
    },

    kijklinks:
    {
        gif:"images/kijklinks.gif",
        time: 3300,
        jpg:"images/kijklinks.jpg"
    },

    kijklinks_terug:
    {
        gif:"images/kijklinksnaarwoonkamer.gif",
        time: 3300,
        jpg: woonkamer_foto
    },

    kijkrechts:
    {
        gif:"images/kijkrechts.gif",
        time: 3000,
        jpg:"images/kijkrechts.jpg"
    },

    kijkrechts_terug:
    {
        gif:"images/kijkrechts_terug.gif",
        time: 3000,
        jpg: woonkamer_foto
    },

    stoel_1:
    {
        gif: "images/stoel_1.gif",
        time: 1820,
        jpg: "images/stoel_1.jpg"
    },

    stoel_1_t:
    {
        gif: "images/stoel_1_t.gif",
        time: 3400,
        jpg: woonkamer_foto
    },

    tafel:
    {
        gif: "images/tafel.gif",
        time: 1700,
        jpg: "images/tafel.jpg"
    },

    tafel_t:
    {
        gif: "images/tafel_terug.gif",
        time: 3100,
        jpg: woonkamer_foto
    },

    stoel_2:
    {
        gif: "images/stoel_2.gif",
        time: 1860,
        jpg: "images/stoel_2.jpg"
    },

    stoel_2_t:
    {
        gif: "images/stoel_2_t.gif",
        time: 3900,
        jpg: woonkamer_foto
    },

    openhaard:
    {
        gif: "images/openhaard.gif",
        time: 3200,
        jpg: "images/openhaard.jpg"

    },

    openhaard_t:
    {
        gif: "images/openhaard_t.gif",
        time: 4400,
        jpg: woonkamer_foto
    },

    bank:
    {
        gif: "images/bank.gif",
        time: 3550,
        jpg: "images/bank.jpg"
    },

    bank_t:
    {
        gif: "images/bank_t.gif",
        time: 4700,
        jpg: woonkamer_foto
    },

    naar_auto:
    {
        gif: "images/naar_auto.gif",
        time: 4250,
        jpg: "images/naar_auto.jpg",
    },

    kast_1:
    {
        gif: "images/kast_1.gif",
        time: 2200,
        jpg: "images/kast_1.jpg",
    },

    kast_1_t:
    {
        gif: "images/kast_1_t.gif",
        time: 4000,
        jpg: links_foto
    },

    kast_2:
    {
        gif: "images/kast_2.gif",
        time: 2200,
        jpg: "images/kast_2.jpg",
    },

    kast_2_t:
    {
        gif: "images/kast_2_t.gif",
        time: 3900,
        jpg: links_foto,
    },
    
    kast_3:
    {
        gif: "images/kast_3.gif",
        time: 2430,
        jpg: "images/kast_3.jpg",
    },

    kast_3_t:
    {
        gif: "images/kast_3_t.gif",
        time: 4230,
        jpg: links_foto,
    },

    kapstok:
    {
        gif: "images/kapstok.gif",
        time: 2360,
        jpg: "images/kapstok.jpg",
    },

    kapstok_t:
    {
        gif: "images/kapstok_t.gif",
        time: 3200,
        jpg: links_foto,
    },

    dozen:
    {
        gif: "images/dozen.gif",
        time: 3020,
        jpg: "images/dozen.jpg",
    },

    dozen_t:
    {
        gif: "images/dozen_t.gif",
        time: 4300,
        jpg: links_foto,
    },

    links_achter_kijken:
    {
        gif: "images/links_achter.gif",
        time: 4700,
        jpg: "images/links_achter.jpg",
    },

    links_achter_kijken_t:
    {
        gif: "images/links_back.gif",
        time: 5700,
        jpg: links_foto,
    },

    keuken_1:
    {
        gif: "images/keuken_1.gif",
        time: 2600,
        jpg: "images/keuken_1.jpg",
    },

    keuken_1_t:
    {
        gif: "images/keuken_1_t.gif",
        time: 3740,
        jpg: rechts_foto,
    },

    keuken_2:
    {
        gif: "images/keuken_2.gif",
        time: 1920,
        jpg: "images/keuken_2.jpg",
    },

    keuken_2_t:
    {
        gif: "images/keuken_2_t.gif",
        time: 3630,
        jpg: rechts_foto,
    },

    rechts_achter_kijken:
    {
        gif: "images/rechts_achter.gif",
        time: 4400,
        jpg: "images/rechts_achter.jpg",
    },

    rechts_achter_kijken_t:
    {
        gif: "images/rechts_achter_t.gif",
        time: 5900,
        jpg: rechts_foto,
    },

    naar_boven:
    {
        gif: "images/naar_boven.gif",
        time: 4300,
        jpg: foto_boven,
    },

    naar_boven_t:
    {
        gif: "images/naar_boven_t.gif",
        time: 5760,
        jpg: "images/links_achter.jpg",
    },

    boven_kast_1:
    {
        gif: "images/boven_kast_1.gif",
        time: 1500,
        jpg: "images/boven_kast_1.jpg",
    },

    boven_kast_1_t:
    {
        gif: "images/boven_kast_1_t.gif",
        time: 2500,
        jpg: foto_boven,
    },

    kamer_1:
    {
        gif: "images/kamer_1.gif",
        time: 3680,
        jpg: "images/kamer_1.jpg",
    },

    kamer_1_t:
    {
        gif: "images/kamer_1_t.gif",
        time: 6650,
        jpg: foto_boven,
    },

    kamer_1_op:
    {
        gif: "images/kamer_1_op.gif",
        time: 1840,
        jpg: "images/kamer_1_op.jpg",
    },

    kamer_1_op_t:
    {
        gif: "images/kamer_1_op_t.gif",
        time: 3840,
        jpg: foto_boven,
    },

    kamer_2:
    {
        gif: "images/kamer_2.gif",
        time: 3790,
        jpg: "images/kamer_2.jpg",
    },

    kamer_2_t:
    {
        gif: "images/kamer_2_t.gif",
        time: 3740,
        jpg: foto_boven,
    },

    kamer_2_kast:
    {
        gif: "images/kamer_2_kast.gif",
        time: 3170,
        jpg: "images/kamer_2_kast.jpg",
    },

    kamer_2_kast_t:
    {
        gif: "images/kamer_2_kast_t.gif",
        time: 4100,
        jpg: "images/kamer_2_kast_t.jpg",
    },

    kamer_2_kastje:
    {
        gif: "images/kamer_2_kastje.gif",
        time: 3870,
        jpg: "images/kamer_2_kastje.jpg",
    },

    kamer_2_kastje_t:
    {
        gif: "images/kamer_2_kastje_t.gif",
        time: 4740,
        jpg: "images/kamer_2_kast_t.jpg",
    },

    boven_kast_2:
    {
        gif: "images/boven_kast_2.gif",
        time: 3120,
        jpg: "images/boven_kast_2.jpg",
    },

    boven_kast_2_t:
    {
        gif: "images/boven_kast_2_t.gif",
        time: 4740,
        jpg: foto_boven,
    },

    kamer_3:
    {
        gif: "images/kamer_3.gif",
        time: 4910,
        jpg: "images/kamer_3.jpg",
    },

    kamer_3_t:
    {
        gif: "images/kamer_3_t.gif",
        time: 4700,
        jpg: foto_boven,
    },

    kamer_3_op:
    {
        gif: "images/kamer_3_op.gif",
        time: 3470,
        jpg: "images/kamer_3_op.jpg",
    },

    kamer_3_op_t:
    {
        gif: "images/kamer_3_op_t.gif",
        time: 4600,
        jpg: foto_boven,
    },

    kamer_3_bed:
    {
        gif: "images/kamer_3_bed.gif",
        time: 1870,
        jpg: "images/kamer_3_bed.jpg",
    },

    kamer_3_bed_t:
    {
        gif: "images/kamer_3_bed_t.gif",
        time: 3820,
        jpg: "images/kamer_3_bed_t.jpg",
    },

    kamer_3_bed_t:
    {
        gif: "images/kamer_3_bed_t.gif",
        time: 3820,
        jpg: "images/kamer_3_bed_t.jpg",
    },

    achtertuin:
    {
        gif: "images/achtertuin.gif",
        time: 4560,
        jpg: "images/achtertuin.jpg",
    },

    achtertuin_t:
    {
        gif: "images/achtertuin_t.gif",
        time: 4560,
        jpg: "images/links_achter.jpg",
    },

    achtertuin_dozen:
    {
        gif: "images/achtertuin_dozen.gif",
        time: 2030,
        jpg: "images/achtertuin_dozen.jpg",
    },

    achtertuin_dozen_t:
    {
        gif: "images/achtertuin_dozen_t.gif",
        time: 5080,
        jpg: "images/achtertuin.jpg",
    },

    achtertuin_smallroom:
    {
        gif: "images/achtertuin_smallroom.gif",
        time: 4190,
        jpg: "images/achtertuin_smallroom.jpg",
    },

    achtertuin_smallroom_t:
    {
        gif: "images/achtertuin_smallroom_t.gif",
        time: 5600,
        jpg: "images/achtertuin.jpg",
    },

    achtertuin_barrol:
    {
        gif: "images/achtertuin_barrol.gif",
        time: 3280,
        jpg: "images/achtertuin_barrol.jpg",
    },

    achtertuin_barrol_t:
    {
        gif: "images/achtertuin_barrol_t.gif",
        time: 5200,
        jpg: "images/achtertuin.jpg",
    },

    kelder:
    {
        gif: "images/kelder.gif",
        time: 4180,
        jpg: "images/kelder.jpg",
    },

    kelder_t:
    {
        gif: "images/kelder_t.gif",
        time: 5040,
        jpg: "images/kelder_t.jpg",
    },

}

//lists
var btn = [];
var inventory = [];
var kast_1_contains = [];
var kast_2_contains = [];
var kast_3_contains = [];
var dozen_contains = [];
var kapstok_contains = [];
var stoel_1_contains = [];
var openhaard_contains = [];
var bank_contains = [];
var tafel_contains = [];
var stoel_2_contains = [];
var keuken_1_contains = [];
var keuken_2_contains = [];
var kast_1_boven_contains = [];
var kast_2_boven_contains = [];
var kamer_2_kast_contains = [];
var kamer_2_kastje_contains = [];
var wc_contains = [];
var achtertuin_dozen_contains = []; 
var achtertuin_barrol_contains = [];

for(i = 4; i <= 8; i++)
{
    var maak_button = document.createElement("button");
    maak_button.setAttribute("id", "button" + i);
    document.getElementById("game-buttons").appendChild(maak_button);
}

for(i = 1; i <= 8; i++){
    btn[i] = document.getElementById("button" + i);
}

var text = document.getElementById("title");

var canvas = document.createElement("img");
canvas.setAttribute("background-color", "black");
document.getElementById("game-container").appendChild(canvas);

var items = document.createElement("div");
items.setAttribute("id", "my_backpack_items");
items.setAttribute("class", "grid-container");
document.getElementById("game-container").appendChild(items);

var score = document.createElement("p");
score.setAttribute("id", "score");
document.getElementById("game-container").appendChild(score);

itemlist = []

for(i = 1; i <=6; i++)
{
    var maak_item = document.createElement("div")
    maak_item.setAttribute("class", "backpack_item" + i);
    maak_item.setAttribute("id", "item" + i)
    document.getElementById("my_backpack_items").appendChild(maak_item)
}

var item_1 = document.createElement("img");
item_1.setAttribute("src", "images/key1.png");
item_1.setAttribute("id", "key1");
document.getElementById("item1").appendChild(item_1)

item_1.style.height = "60px";
item_1.style.width = "60px";

var item_2 = document.createElement("img");
item_2.setAttribute("src", "images/key2.png");
item_2.setAttribute("id", "key2");
document.getElementById("item2").appendChild(item_2)

item_2.style.height = "60px";
item_2.style.width = "60px";

var item_3 = document.createElement("img");
item_3.setAttribute("src", "images/key3.png");
item_3.setAttribute("id", "key3");
document.getElementById("item3").appendChild(item_3)

item_3.style.height = "60px";
item_3.style.width = "60px";

var item_4 = document.createElement("img");
item_4.setAttribute("src", "images/tool.png");
item_4.setAttribute("id", "tool");
document.getElementById("item4").appendChild(item_4)

item_4.style.height = "60px";
item_4.style.width = "60px";

var item_5 = document.createElement("img");
item_5.setAttribute("src", "images/battery.png");
item_5.setAttribute("id", "battery");
document.getElementById("item5").appendChild(item_5)

item_5.style.height = "60px";
item_5.style.width = "60px";

var item_6 = document.createElement("img");
item_6.setAttribute("src", "images/gear.png");
item_6.setAttribute("id", "gear");
document.getElementById("item6").appendChild(item_6)

item_6.style.height = "60px";
item_6.style.width = "60px";




start_story();

var number_story = 0;
text.innerHTML = "Welkom in het SAW spel"
function story_teller()
{

    storys = ["" , "We beginnen met het verhaal, maar eerst wat informatie",
    "De GIF zijn maar 800x450 dat is niet zo erg, zoom in met in je browser om het spel wat groter te krijgen, ook is het mogelijk om 2 of 3 keys te vinden op 1 plek hou je backpack in de gaten!",
    "Het was de nacht voor dat je op kamp ging met je vrieden.",
    "Je kwam met je eigen auto, hij had wat problemen maar je overkeek dat voor de avontuur die je te wachten stond",
    "Je was goed opweg het ging allemaal wel erg goed... Misschien iets te goed.",
    "je ging steeds verder het bos in en verder en verder... op zoek naar de kamping plek en het avontuur.",
    "maar dit avontuur werd snel een nacht merrie toen alle problemen in 1 keer begonnen in te slaan",
    "daar stond je. Je doom te verwachten er was niks meer dat je kon doen",
    "Je hoorde een zacht stemmetje",
    "Je keek rond",
    "Het vertelde je over een kans",
    "'Ik heb een deal voor je, ik heb de auto delen voor je die je nodig hebt om alles te maken maar dan moet jij wel mijn spel spelen.' zij het stemmetje",
    "'wat is je spel dan' zij je.",
    "'geloof jij in je geluk' zij het stemmetje.",
    "'waarom ?...' zij je",
    "'Wil je hier weg komen of niet!', zij het stemmetje een beetje aggresief",
    "'Hhhuuu rustig aan!, maar ja ik denk dat ik in mijn geluk kan geloven', zij je",
    "'Oke loop op dit pad door tot het huis, en ik adviseer je auto ook er naartoe te krijgen' zij het stemmetje",
    "je stond voor een klein oud huis midden in het bos, 'waarom zou iemand hier een huis willen ?' dacht je",
    "je stond voor het huis, het stemmetje klonk weer",
    "'Je moet hier je geluk testen op het beste als jij voor 12 uur s'nachts er uit ben met alle onderdelen kan je gaan. Anders zullen de gevolgen vallen",
    "'Wat zijn de gevolgen dan?' zij je",
    "'Dat zie je dan wel' zij het stemmetje",
    "'lees goed wat op deze pagina staat' zij het stemmetje",
    "1. je hebt maar 45 min(zette) om alle onderdelen te vinden",
    "2. niet alle deuren/kasten zijn open, om deze open te maken moet je sleutels hebben",
    "3. elk spel is random dus je kan geen informatie krijgen van anderen",
    "toen klonk het stemmetje voor het laatst 'ik zie jou na 45 minuten'", 
    "in je zelf dacht je 'het moet altijd mij zijn(zucht)'",
    ""]

    if(number_story == 29)
    {
        intro();
    }


    number_story += 1;
    text.innerHTML = storys[number_story];
}



function start_story()
{
    canvas.setAttribute("background-color", "black");

    for(i = 2; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    }

    btn[1].style.top = "58%";
    btn[1].style.left = "43%";
    btn[1].innerHTML = "next >";
    btn[1].onclick = story_teller;
} 

// intro();

function intro()
{
    canvas.setAttribute("src", levels.intro.jpg);

    btn[1].style.top = "55%";
    btn[1].style.left = "41%"
    btn[1].onclick = woon_kamer;
    btn[1].innerHTML = "Spelen";
    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
   
}

var ia = Math.floor(Math.random() * 19) + 1;

place_items = ["" ,kast_1_contains,
kast_2_contains,
kast_3_contains,
dozen_contains,
kapstok_contains,
stoel_1_contains,
openhaard_contains,
bank_contains,
tafel_contains,
stoel_2_contains,
keuken_1_contains,
keuken_2_contains,
kast_1_boven_contains,
kast_2_boven_contains,
kamer_2_kast_contains,
kamer_2_kastje_contains,
wc_contains,
achtertuin_dozen_contains,
achtertuin_barrol_contains,
]


   
place_items[ia].push("sleutel1");

var ib = Math.floor(Math.random() * 19) + 1;
    
place_items = ["" ,kast_1_contains,
kast_2_contains,
kast_3_contains,
dozen_contains,
kapstok_contains,
stoel_1_contains,
openhaard_contains,
bank_contains,
tafel_contains,
stoel_2_contains,
keuken_1_contains,
keuken_2_contains,
kast_1_boven_contains,
kast_2_boven_contains,
kamer_2_kast_contains,
kamer_2_kastje_contains,
wc_contains,
achtertuin_dozen_contains,
achtertuin_barrol_contains,
]
       
place_items[ib].push("sleutel2");
    
var ic = Math.floor(Math.random() * 19) + 1;
    
place_items = ["" ,kast_1_contains,
kast_2_contains,
kast_3_contains,
dozen_contains,
kapstok_contains,
stoel_1_contains,
openhaard_contains,
bank_contains,
tafel_contains,
stoel_2_contains,
keuken_1_contains,
keuken_2_contains,
kast_1_boven_contains,
kast_2_boven_contains,
kamer_2_kast_contains,
kamer_2_kastje_contains,
wc_contains,
achtertuin_dozen_contains,
achtertuin_barrol_contains,
]
       
place_items[ic].push("sleutel3");


console.log("kast1: "+kast_1_contains)
console.log("kast2: "+kast_2_contains)
console.log("kast3: "+kast_3_contains)
console.log("dozen: "+dozen_contains)
console.log("kapstok: "+kapstok_contains)
console.log("stoel1: "+stoel_1_contains)
console.log("stoel2: "+stoel_2_contains)
console.log("openhaard: "+openhaard_contains)
console.log("bank: "+bank_contains)
console.log("tafel: "+tafel_contains)
console.log("keuken1: "+keuken_1_contains)
console.log("keuken2: "+keuken_2_contains)
console.log("kast1 boven: "+kast_1_boven_contains)
console.log("kast2 boven: "+kast_2_boven_contains)
console.log("kamer_2_kast boven: "+kamer_2_kast_contains)
console.log("kamer_2_kastje boven: "+kamer_2_kastje_contains)
console.log("wc: "+wc_contains)
console.log("achtertuin dozen: "+achtertuin_dozen_contains)
console.log("achtertuin barrol: "+achtertuin_barrol_contains)

score.innerHTML = "45"

var tijd = 46;

function verliezen()
{
    tijd -= 1;

    score.innerHTML = tijd;

    if(tijd == 0)
    {
        for(i = 1; i <= 8; i++)
        {
            btn[i].disabled = true;
            btn[i].style.visibility = "hidden";
        }

        setTimeout(function(){
        for(i = 1; i <= 8; i++)
        {
            btn[i].disabled = true;
            btn[i].style.visibility = "hidden";
        }

        canvas.setAttribute("src", "images/lost.jpg");
        text.innerHTML = "Jammer je hebt verloren";

        btn[1].style.top = "17%";
        btn[1].style.left = "43%";
        btn[1].disabled = false;
        btn[1].style.visibility = "visible";
        btn[1].onclick = refresh;
        btn[1].innerHTML = "Klik voor een nieuw spel!";
        }, 5900)
    }
}

function refresh()
{
    window.location.reload();
}

function woon_kamer()
{
    btn[1].style.visibility='hidden';
    canvas.setAttribute("src", levels.woonkamer_begin.gif);
    text.innerHTML = "Nu moet ik het doen anders... anders? uhm dat heeft ze niet gezegt.";
    setTimeout(function(){
        woon_kamer_terug_style();
    },levels.woonkamer_begin.time);
}

function woon_kamer_terug_style()
{
    for(i = 1; i <= 8; i++)
    {
        btn[i].disabled = false;
        btn[i].style.visibility = "visible";
    }

    canvas.setAttribute("src", levels.woonkamer_begin.jpg);

    btn[1].style.top = "75%";
    btn[1].style.left = "2%";
    btn[1].onclick = kijk_links;
    btn[1].innerHTML = "kijk links";

    btn[2].style.top = "75%";
    btn[2].style.left = "85%";
    btn[2].innerHTML = "kijk rechts" 
    btn[2].onclick = kijk_rechts; 

    btn[3].style.top = "53%";
    btn[3].style.left = "14%";
    btn[3].innerHTML = "stoel 1";
    btn[3].onclick = stoel1;

    btn[4].style.top = "57%";
    btn[4].style.left = "67%";
    btn[4].innerHTML = "stoel 2"; 
    btn[4].onclick = stoel_2;

    btn[5].style.top = "52%";
    btn[5].style.left = "45%";
    btn[5].style.height = "50px";
    btn[5].innerHTML = "bank"; 
    btn[5].onclick = bank;

    btn[6].style.top = "63%";
    btn[6].style.left = "39%";
    btn[6].innerHTML = "tafel"; 
    btn[6].onclick = tafel;

    btn[7].style.top = "47%";
    btn[7].style.left = "31%";
    btn[7].innerHTML = "openhaard"; 
    btn[7].onclick = openhaard;

    btn[8].style.top = "82%";
    btn[8].style.left = "41%";
    btn[8].innerHTML = "Naar auto";
    btn[8].onclick = naar_auto;

    text.innerHTML = "Wat nu ?";

    verliezen();

}

function kijk_links()
{
    for(i = 1; i <= 8; i++)
    {
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    }

    canvas.setAttribute("src", levels.kijklinks.gif);
    setTimeout(function(){
        canvas.setAttribute("src", levels.kijklinks.jpg);
        kijk_links_style();

    }, levels.kijklinks.time);
}

function kijk_links_style()
{
    verliezen();

    for(i = 1; i <= 7; i++)
    {
        btn[i].style.visibility = "visible";
        btn[i].disabled = false;
    }

    canvas.setAttribute("src", levels.kijklinks.jpg)

    btn[1].innerHTML = "Kast 1";
    btn[1].style.left = "13.5%";
    btn[1].style.top = "43%";
    btn[1].onclick = kast_1;

    btn[2].innerHTML = "Kast 2";
    btn[2].style.left = "28%";
    btn[2].style.height = "60px";
    btn[2].style.top = "53%";
    btn[2].onclick = kast_2;

    btn[3].innerHTML = "Kast 3";
    btn[3].style.left = "40%";
    btn[3].style.top = "40%";
    btn[3].onclick = kast_3;

    btn[4].innerHTML = "Dozen";
    btn[4].style.left = "39%";
    btn[4].style.top = "64%";
    btn[4].style.height = "60px";
    btn[4].onclick = dozen;

    btn[5].innerHTML = "Achter kijken";
    btn[5].style.top = "34%";
    btn[5].style.left = "61%";
    btn[5].style.height = "100px";
    btn[5].onclick = links_achter_kijken;

    btn[6].innerHTML = "Vooruit kijken";
    btn[6].style.top = "50%";
    btn[6].style.left = "77%";
    btn[6].onclick = kijklinks_terug;

    btn[7].innerHTML = "Kapstok";
    btn[7].style.top = "53%";
    btn[7].style.left = "0%";
    btn[7].onclick = kapstok;

    text.innerHTML = "Zou ik mijn geluk in de kasten vinden of toch even achter in kijken ?" 

}

function kijklinks_terug()
{
    for(z = 1; z <= 8; z++)
    {
        btn[z].style.visibility = "hidden";
        btn[z].disabled = true;
    }

    for(y = 3; y <= 6; y++)
    {
        btn[y].style.top = "0%";
        btn[y].style.left = "0%";
    }
    
    canvas.setAttribute("src", levels.kijklinks_terug.gif);

    setTimeout(function(){
        woon_kamer_terug_style();
    }, levels.kijklinks_terug.time);

}

function kijk_rechts()
{
    for(i = 1; i <= 8; i++)
    {
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    }

    canvas.setAttribute("src", levels.kijkrechts.gif);

    setTimeout(function(){
        kijk_rechts_style()
    }, levels.kijkrechts.time);
}

function kijk_rechts_style()
{
    canvas.setAttribute("src", levels.kijkrechts.jpg);
    for(i = 1; i <= 4; i++)
    {
        btn[i].style.visibility = "visible";
        btn[i].disabled = false;
    }
    btn[1].style.top = "49%";
    btn[1].style.left = "5%";
    btn[1].innerHTML = "Vooruit kijken";
    btn[1].onclick = kijkrechts_terug;

    btn[2].style.top = "58%";
    btn[2].style.left = "72%";
    btn[2].innerHTML = "Keuken 1";
    btn[2].onclick = keuken_1;

    btn[3].style.top = "39%";
    btn[3].style.left = "50%";
    btn[3].innerHTML = "Keuken 2";
    btn[3].onclick = keuken_2;

    btn[4].style.top = "31%";
    btn[4].style.left = "25%";
    btn[4].innerHTML = "Achterin kijken";
    btn[4].onclick = rechts_achter_kijken;

    text.innerHTML = "Wat zou ik kunnen vinden in een keuken ?, of toch achterin kijken ?";

    verliezen();
}

function kijkrechts_terug()
{
    for(i = 1; i <= 8; i++)
    {
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
        btn[i].style.top = "0%";
        btn[i].style.left = "0%";
    }
    canvas.setAttribute("src", levels.kijkrechts_terug.gif);

    setTimeout(function(){
        woon_kamer_terug_style()
    } ,levels.kijkrechts_terug.time);
}


function stoel1()
{
    canvas.setAttribute("src", levels.stoel_1.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };
    
    setTimeout(function(){
        canvas.setAttribute("src", levels.stoel_1.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "Terug";
        btn[1].onclick = stoel1t;
        btn[1].style.top = "82%";
        btn[1].style.left = "41%";

        text.innerHTML = "toch even snel hier kijken"

        if(stoel_1_contains.includes('sleutel1') || stoel_1_contains.includes('sleutel2') || stoel_1_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_stoel_1;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks tussen deze stoel."
        }

    } ,levels.stoel_1.time)
}

function stoel1t()
{
    canvas.setAttribute("src", levels.stoel_1_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };
    
    setTimeout(function(){
        woon_kamer_terug_style();
    }, levels.stoel_1_t.time);
}

function tafel(){
    canvas.setAttribute("src", levels.tafel.gif);

    text.innerHTML = "misschien hier wat"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.tafel.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = tafel_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(tafel_contains.includes('sleutel1') || tafel_contains.includes('sleutel2') || tafel_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_tafel;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er ligt niks op deze tafel."
        }
    }, levels.tafel.time)
}

function tafel_t()
{
    canvas.setAttribute("src", levels.tafel_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.tafel_t.jpg);
        woon_kamer_terug_style();
    }, levels.tafel_t.time)

}

function stoel_2()
{
    canvas.setAttribute("src", levels.stoel_2.gif);

    text.innerHTML = "Hier dan"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.stoel_2.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = stoel_2_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(stoel_2_contains.includes('sleutel1') || stoel_2_contains.includes('sleutel2') || stoel_2_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_stoel_2;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks tussen de stoel."
        }
    }, levels.stoel_2.time)
}

function stoel_2_t()
{
    canvas.setAttribute("src", levels.stoel_2_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.stoel_2_t.jpg)
        woon_kamer_terug_style();
    }, levels.stoel_2_t.time)
}

function openhaard()
{
    canvas.setAttribute("src", levels.openhaard.gif);

    text.innerHTML = "Rare plek maar kijken waard"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.openhaard.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = openhaard_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(openhaard_contains.includes('sleutel1') || openhaard_contains.includes('sleutel2') || openhaard_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_openhaard;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er ligt niks op de openhaard."
        }
    }, levels.openhaard.time);

}

function openhaard_t()
{
    canvas.setAttribute("src", levels.openhaard_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        woon_kamer_terug_style();
    }, levels.openhaard_t.time);
}

function bank()
{
    canvas.setAttribute("src", levels.bank.gif);

    text.innerHTML = "Iedereen verliest hier sleutels"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.bank.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = bank_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(bank_contains.includes('sleutel1') || bank_contains.includes('sleutel2') || bank_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_bank;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks tussen de bank."
        }
    }, levels.bank.time);
}

function bank_t()
{
    canvas.setAttribute("src", levels.bank_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        woon_kamer_terug_style();
    }, levels.bank_t.time);
}

function naar_auto()
{
    canvas.setAttribute("src", levels.naar_auto.gif);

    text.innerHTML = "ik heb nog nier alle onderdelen"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.naar_auto.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = naar_auto_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(inventory.includes("gear") && inventory.includes("tool") && inventory.includes("battery"))
        {
            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Escape!!!";
            btn[2].onclick = win;
            btn[2].style.left = "41%";
            btn[2].style.top = "44%";
        }
    }, levels.naar_auto.time);
}

function win()
{
    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    canvas.setAttribute("src", "images/win.jpg")
    text.innerHTML = "Je hebt gewonnen!!!"

    btn[1].style.left = "41%";
    btn[1].style.top = "44%";
    btn[1].onclick = refresh;
    btn[1].innerHTML = "Klik voor een nieuw spel!"
    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
}

function naar_auto_t()
{
    canvas.setAttribute("src", levels.woonkamer_begin.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        woon_kamer_terug_style();
    }, levels.woonkamer_begin.time);
}

function kast_1()
{
    canvas.setAttribute("src", levels.kast_1.gif);

    text.innerHTML = "Hoe fout kan je gaan met een kast?"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kast_1.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kast_1_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kast_1_contains.includes('sleutel1') || kast_1_contains.includes('sleutel2') || kast_1_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_kast_1;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }

    }, levels.kast_1.time);
}

function kast_1_t()
{
    canvas.setAttribute("src", levels.kast_1_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_links_style();
    }, levels.kast_1_t.time);
}

function kast_2()
{
    canvas.setAttribute("src", levels.kast_2.gif);

    text.innerHTML = "Kasten, veeeel kasten"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kast_2.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kast_2_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kast_2_contains.includes('sleutel1') || kast_2_contains.includes('sleutel2') || kast_2_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_kast_2;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }

        
    }, levels.kast_2.time);
}

function kast_2_t()
{
    canvas.setAttribute("src", levels.kast_2_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_links_style();
    }, levels.kast_2_t.time);
}

function kast_3()
{
    canvas.setAttribute("src", levels.kast_3.gif);

    text.innerHTML = "Doe nog maar een kast"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kast_3.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kast_3_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kast_3_contains.includes('sleutel1') || kast_3_contains.includes('sleutel2') || kast_3_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_kast_3;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }

    }, levels.kast_3.time);
}

function kast_3_t()
{
    canvas.setAttribute("src", levels.kast_3_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_links_style();
    }, levels.kast_3_t.time);
}

function kapstok()
{
    canvas.setAttribute("src", levels.kapstok.gif);

    text.innerHTML = "Misschien sleutels aan een... haak... kapstok?"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kapstok.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kapstok_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kapstok_contains.includes('sleutel1') || kapstok_contains.includes('sleutel2') || kapstok_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_kapstok;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er hangt niks aan de kapstok."
        }
    }, levels.kapstok.time);
}

function kapstok_t()
{
    canvas.setAttribute("src", levels.kapstok_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_links_style();
    }, levels.kapstok_t.time);
}

function dozen()
{
    canvas.setAttribute("src", levels.dozen.gif);

    text.innerHTML = "Dozen mischien hier dan"

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.dozen.jpg)
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = dozen_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(dozen_contains.includes('sleutel1') || dozen_contains.includes('sleutel2') || dozen_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_dozen;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in de dozen."
        }
    }, levels.dozen.time);
}

function dozen_t()
{
    canvas.setAttribute("src", levels.dozen_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_links_style();
    }, levels.dozen_t.time);
}

function links_achter_kijken()
{
    canvas.setAttribute("src", levels.links_achter_kijken.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        links_achter_kijken_style();
    }, levels.links_achter_kijken.time);
}

function links_achter_kijken_style()
{
    canvas.setAttribute("src", levels.links_achter_kijken.jpg);
    verliezen();
    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
    btn[1].innerHTML = "terug";
    btn[1].onclick = links_achter_kijken_t;
    btn[1].style.left = "85%";
    btn[1].style.top = "43%";

    btn[2].style.visibility = "visible";
    btn[2].disabled = false;
    btn[2].innerHTML = "Naar buiten";
    btn[2].onclick = achtertuin;
    btn[2].style.left = "4%";
    btn[2].style.top = "50%";
    btn[2].style.height = "100px";

    btn[3].style.visibility = "visible";
    btn[3].disabled = false;
    btn[3].innerHTML = "Naar boven";
    btn[3].onclick = naar_boven;
    btn[3].style.left = "38%";
    btn[3].style.top = "4%";

    text.innerHTML = "naar buiten of naar boven?"
}

function links_achter_kijken_t()
{
    canvas.setAttribute("src", levels.links_achter_kijken_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_links_style();
    }, levels.links_achter_kijken_t.time);
}

function keuken_1()
{
    canvas.setAttribute("src", levels.keuken_1.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.keuken_1.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = keuken_1_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(keuken_1_contains.includes('sleutel1') || keuken_1_contains.includes('sleutel2') || keuken_1_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_keuken_1;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er ligt niks op de keuken."
        }
    }, levels.keuken_1.time);
}

function keuken_1_t()
{
    canvas.setAttribute("src", levels.keuken_1_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_rechts_style();
    }, levels.keuken_1_t.time);
}

function keuken_2()
{
    canvas.setAttribute("src", levels.keuken_2.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.keuken_2.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = keuken_2_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(keuken_2_contains.includes('sleutel1') || keuken_2_contains.includes('sleutel2') || keuken_2_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_keuken_2;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er ligt niks op de keuken."
        }
    }, levels.keuken_2.time);
}

function keuken_2_t()
{
    canvas.setAttribute("src", levels.keuken_2_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_rechts_style();
    }, levels.keuken_2_t.time);
}

function rechts_achter_kijken()
{
    canvas.setAttribute("src", levels.rechts_achter_kijken.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        rechts_achter_style();
    }, levels.rechts_achter_kijken.time);
}

function rechts_achter_style()
{
    verliezen();

    canvas.setAttribute("src", levels.rechts_achter_kijken.jpg);
    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
    btn[1].innerHTML = "terug";
    btn[1].onclick = rechts_achter_kijken_t;
    btn[1].style.left = "41%";
    btn[1].style.top = "81%";

    btn[2].style.visibility = "visible";
    btn[2].disabled = false;
    btn[2].innerHTML = "Naar kelder";
    btn[2].onclick = kelder;
    btn[2].style.left = "77%";
    btn[2].style.top = "40%";     
}

function rechts_achter_kijken_t()
{
    canvas.setAttribute("src", levels.rechts_achter_kijken_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kijk_rechts_style();
    }, levels.rechts_achter_kijken_t.time);
}

function naar_boven()
{
    canvas.setAttribute("src", levels.naar_boven.gif);



    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        boven_style();
    }, levels.naar_boven.time);
}

function boven_style()
{
        verliezen();

        canvas.setAttribute("src", levels.naar_boven.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = naar_boven_t;
        btn[1].style.left = "79%";
        btn[1].style.top = "53%";  

        btn[2].style.visibility = "visible";
        btn[2].disabled = false;
        btn[2].innerHTML = "kast 1";
        btn[2].onclick = boven_kast_1;
        btn[2].style.left = "4%";
        btn[2].style.top = "47%"; 

        btn[3].style.visibility = "visible";
        btn[3].disabled = false;
        btn[3].innerHTML = "kamer 1";
        btn[3].onclick = kamer_1;
        btn[3].style.left = "30%";
        btn[3].style.top = "33%"; 

        btn[4].style.visibility = "visible";
        btn[4].disabled = false;
        btn[4].innerHTML = "kamer 2";
        btn[4].onclick = kamer_2;
        btn[4].style.left = "49%";
        btn[4].style.top = "32%"; 
        btn[4].style.height = "100px";

        btn[5].style.visibility = "visible";
        btn[5].disabled = false;
        btn[5].innerHTML = "kamer 3";
        btn[5].onclick = kamer_3;
        btn[5].style.left = "62%";
        btn[5].style.top = "30%"; 

        btn[6].style.visibility = "visible";
        btn[6].disabled = false;
        btn[6].innerHTML = "kast 2";
        btn[6].onclick = boven_kast_2;
        btn[6].style.left = "81%";
        btn[6].style.top = "27%"; 

        text.innerHTML = "Veel keuzes"
}

function naar_boven_t()
{
    canvas.setAttribute("src", levels.naar_boven_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.naar_boven_t.jpg);
        links_achter_kijken_style()
    }, levels.naar_boven_t.time);
}


function kamer_1()
{
    if(inventory.includes("sleutel1"))
    {
        canvas.setAttribute("src", levels.kamer_1.gif);

        text.innerHTML = "Misschien wat moois?"

        verliezen();

        for(i = 1; i <= 8; i++){
            btn[i].style.visibility = "hidden";
            btn[i].disabled = true;
        };

        setTimeout(function(){
            canvas.setAttribute("src", levels.kamer_1.jpg);
            btn[1].style.visibility = "visible";
            btn[1].disabled = false;
            btn[1].innerHTML = "terug";
            btn[1].onclick = kamer_1_t;
            btn[1].style.left = "41%";
            btn[1].style.top = "81%";

            btn[2].disabled = false;
            btn[2].innerHTML = "Pak autodeel";
            btn[2].onclick = take_gear;
            btn[2].style.left = "21%";
            btn[2].style.top = "60%";

            if(inventory.includes("gear"))
            {
                btn[2].style.visibility = "hidden";
            }

            else
            {
                btn[2].style.visibility = "visible";
                text.innerHTML = "Een tandwiel, net wat ik nodig moet hebben"
            }

        }, levels.kamer_1.time);
    }

    else
    {
        canvas.setAttribute("src", levels.kamer_1_op.gif);

        text.innerHTML = "Op slot..."

        verliezen();

        for(i = 1; i <= 8; i++){
            btn[i].style.visibility = "hidden";
            btn[i].disabled = true;
        };

        setTimeout(function(){
            canvas.setAttribute("src", levels.kamer_1_op.jpg);
            btn[1].style.visibility = "visible";
            btn[1].disabled = false;
            btn[1].innerHTML = "terug";
            btn[1].onclick = kamer_1_op_t;
            btn[1].style.left = "41%";
            btn[1].style.top = "81%";
        }, levels.kamer_1_op.time);
    }
}

function kamer_1_t()
{
    canvas.setAttribute("src", levels.kamer_1_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_1_t.jpg);
        boven_style()
    }, levels.kamer_1_t.time);
}

function kamer_1_op_t()
{
    canvas.setAttribute("src", levels.kamer_1_op_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_1_op_t.jpg);
        boven_style()
    }, levels.kamer_1_op_t.time);
}

function kamer_3()
{
    if(inventory.includes("sleutel2"))
    {
        canvas.setAttribute("src", levels.kamer_3.gif);

        

        verliezen();

        for(i = 1; i <= 8; i++){
            btn[i].style.visibility = "hidden";
            btn[i].disabled = true;
        };

        setTimeout(function(){
            canvas.setAttribute("src", levels.kamer_3.jpg);
            btn[1].style.visibility = "visible";
            btn[1].disabled = false;
            btn[1].innerHTML = "terug";
            btn[1].onclick = kamer_3_t;
            btn[1].style.left = "41%";
            btn[1].style.top = "81%";

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Bekijk bed";
            btn[2].onclick = kamer_3_bed;
            btn[2].style.left = "85%";
            btn[2].style.top = "59%";

            text.innerHTML = "En de deur is open";
        }, levels.kamer_3.time);
    }

    else
    {
        canvas.setAttribute("src", levels.kamer_3_op.gif);

        text.innerHTML = "Dicht...";

        verliezen();

        for(i = 1; i <= 8; i++){
            btn[i].style.visibility = "hidden";
            btn[i].disabled = true;
        };

        setTimeout(function(){
            canvas.setAttribute("src", levels.kamer_3_op.jpg);
            btn[1].style.visibility = "visible";
            btn[1].disabled = false;
            btn[1].innerHTML = "terug";
            btn[1].onclick = kamer_3_op_t;
            btn[1].style.left = "41%";
            btn[1].style.top = "81%";
        }, levels.kamer_3_op.time);
    }
}

function kamer_3_bed()
{
    canvas.setAttribute("src", levels.kamer_3_bed.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_3_bed.jpg);
        
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kamer_3_bed_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        btn[2].style.visibility = "visible";
        btn[2].disabled = false;
        btn[2].innerHTML = "Pak autodeel";
        btn[2].onclick = take_tool;
        btn[2].style.left = "21%";
        btn[2].style.top = "60%";

        text.innerHTML = "Nice!";

        if(inventory.includes("tool"))
        {
            btn[2].style.visibility = "hidden";
        }
        
        else
        {
            btn[2].style.visibility = "visible";
            text.innerHTML = "Hey, wat gereedschap"
        }

    }, levels.kamer_3_bed.time);
}

function kamer_3_bed_t()
{
    canvas.setAttribute("src", levels.kamer_3_bed_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
    btn[1].innerHTML = "terug";
    btn[1].onclick = kamer_3_t;
    btn[1].style.left = "41%";
    btn[1].style.top = "81%";
}

function kamer_3_t()
{
    canvas.setAttribute("src", levels.kamer_3_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_3_t.jpg);
        boven_style()
    }, levels.kamer_3_t.time);
}

function kamer_3_op_t()
{
    canvas.setAttribute("src", levels.kamer_3_op_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_3_op_t.jpg);
        boven_style()
    }, levels.kamer_3_op_t.time);
}

function kamer_2()
{
    canvas.setAttribute("src", levels.kamer_2.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        kamer_2_style();
        text.innerHTML = "Geen slot?";
    }, levels.kamer_2.time);
}

function kamer_2_style()
{
    canvas.setAttribute("src", levels.kamer_2.jpg);

    verliezen();

    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
    btn[1].innerHTML = "terug";
    btn[1].onclick = kamer_2_t;
    btn[1].style.left = "41%";
    btn[1].style.top = "81%";

    btn[2].style.visibility = "visible";
    btn[2].disabled = false;
    btn[2].innerHTML = "Kastje";
    btn[2].onclick = kamer_2_kastje;
    btn[2].style.left = "63%";
    btn[2].style.top = "29%";

    btn[3].style.visibility = "visible";
    btn[3].disabled = false;
    btn[3].innerHTML = "Kast";
    btn[3].onclick = kamer_2_kast;
    btn[3].style.left = "0%";
    btn[3].style.top = "38%";

    text.innerHTML = "Dingen te doorzoeken";
}

function kamer_2_t()
{
    canvas.setAttribute("src", levels.kamer_2_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        boven_style();
    }, levels.kamer_2_t.time);
}

function kamer_2_kast()
{
    canvas.setAttribute("src", levels.kamer_2_kast.gif);

    verliezen();

    text.innerHTML = "Mooi nog meer kasten...";

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_2_kast.jpg);

        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kamer_2_kast_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kamer_2_kast_contains.includes('sleutel1') || kamer_2_kast_contains.includes('sleutel2') || kamer_2_kast_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_kamer_2_kast;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.kamer_2_kast.time);
}

function kamer_2_kast_t()
{
    canvas.setAttribute("src", levels.kamer_2_kast_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  

    setTimeout(function(){
        kamer_2_style();
    }, levels.kamer_2_kast_t.time);
}

function kamer_2_kastje()
{
    canvas.setAttribute("src", levels.kamer_2_kastje.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  

    setTimeout(function(){
        canvas.setAttribute("src", levels.kamer_2_kastje.jpg)

        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kamer_2_kastje_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kamer_2_kastje_contains.includes('sleutel1') || kamer_2_kastje_contains.includes('sleutel2') || kamer_2_kastje_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_kamer_2_kastje;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.kamer_2_kastje.time);
}

function kamer_2_kastje_t()
{
    canvas.setAttribute("src", levels.kamer_2_kastje_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  

    setTimeout(function(){
        kamer_2_style();
    }, levels.kamer_2_kastje.time);
}

function boven_kast_1()
{
    canvas.setAttribute("src", levels.boven_kast_1.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        canvas.setAttribute("src", levels.boven_kast_1.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = boven_kast_1_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kast_1_boven_contains.includes('sleutel1') || kast_1_boven_contains.includes('sleutel2') || kast_1_boven_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_boven_kast_1;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.boven_kast_1.time);
}

function boven_kast_1_t()
{
    canvas.setAttribute("src", levels.boven_kast_1_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        canvas.setAttribute("src", levels.boven_kast_1_t.jpg);
        boven_style();
    }, levels.boven_kast_1_t.time);
}

function boven_kast_2()
{
    canvas.setAttribute("src", levels.boven_kast_2.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        canvas.setAttribute("src", levels.boven_kast_2.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = boven_kast_2_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(kast_2_boven_contains.includes('sleutel1') || kast_2_boven_contains.includes('sleutel2') || kast_2_boven_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_boven_kast_2;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.boven_kast_2.time);
}

function boven_kast_2_t()
{
    canvas.setAttribute("src", levels.boven_kast_2_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };  
    
    setTimeout(function(){
        canvas.setAttribute("src", levels.boven_kast_2_t.jpg);
        boven_style();
    }, levels.boven_kast_2_t.time);
}

function achtertuin()
{
    canvas.setAttribute("src", levels.achtertuin.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        canvas.setAttribute("src", levels.achtertuin.jpg);
        achtertuin_style();
    }, levels.achtertuin.time);
}

function achtertuin_t()
{
    canvas.setAttribute("src", levels.achtertuin_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        canvas.setAttribute("src", levels.achtertuin_t.jpg);
        links_achter_kijken_style();
    }, levels.achtertuin_t.time);
}

function achtertuin_style()
{
    canvas.setAttribute("src", levels.achtertuin.jpg);

    verliezen();

    btn[1].style.visibility = "visible";
    btn[1].disabled = false;
    btn[1].innerHTML = "terug";
    btn[1].onclick = achtertuin_t;
    btn[1].style.left = "41%";
    btn[1].style.top = "81%";
    
    btn[2].style.visibility = "visible";
    btn[2].disabled = false;
    btn[2].innerHTML = "Barrol";
    btn[2].onclick = barrol;
    btn[2].style.left = "86%";
    btn[2].style.top = "39%";    

    btn[3].style.visibility = "visible";
    btn[3].disabled = false;
    btn[3].innerHTML = "Dozen";
    btn[3].onclick = achtertuin_dozen;
    btn[3].style.left = "45%";
    btn[3].style.top = "33%";  
    
    btn[4].style.visibility = "visible";
    btn[4].disabled = false;
    btn[4].innerHTML = "Wc";
    btn[4].onclick = wc;
    btn[4].style.left = "0%";
    btn[4].style.top = "31%"; 
    btn[4].style.height = "100px";
}

function wc()
{
    canvas.setAttribute("src", levels.achtertuin_smallroom.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        canvas.setAttribute("src", levels.achtertuin_smallroom.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = wc_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(wc_contains.includes('sleutel1') || wc_contains.includes('sleutel2') || wc_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_wc;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.achtertuin_smallroom.time);
}

function wc_t()
{
    canvas.setAttribute("src", levels.achtertuin_smallroom_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        achtertuin_style();
    }, levels.achtertuin_smallroom_t.time);
}

function barrol()
{
    canvas.setAttribute("src", levels.achtertuin_barrol.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        canvas.setAttribute("src", levels.achtertuin_barrol.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = barrol_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(achtertuin_barrol_contains.includes('sleutel1') || achtertuin_barrol_contains.includes('sleutel2') || achtertuin_barrol_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_barrol;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.achtertuin_barrol.time);
}

function barrol_t()
{
    canvas.setAttribute("src", levels.achtertuin_barrol_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        achtertuin_style();
    }, levels.achtertuin_barrol_t.time);
}

function achtertuin_dozen()
{
    canvas.setAttribute("src", levels.achtertuin_dozen.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        canvas.setAttribute("src", levels.achtertuin_dozen.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = achtertuin_dozen_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(achtertuin_dozen_contains.includes('sleutel1') || achtertuin_dozen_contains.includes('sleutel2') || achtertuin_dozen_contains.includes('sleutel3')){

            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_dozen;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else
        {
            text.innerHTML = "Er zit niks in deze kast."
        }
    }, levels.achtertuin_dozen.time);
}

function achtertuin_dozen_t()
{
    canvas.setAttribute("src", levels.achtertuin_dozen_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        achtertuin_style();
    }, levels.achtertuin_dozen_t.time);
}

function kelder()
{
    canvas.setAttribute("src", levels.kelder.gif);

    verliezen();

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        canvas.setAttribute("src", levels.kelder.jpg);

        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = kelder_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        if(inventory.includes("sleutel3")){
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak autodeel";
            btn[2].onclick = take_battery;
            btn[2].style.left = "53%";
            btn[2].style.top = "49%";

            if(inventory.includes("battery"))
            {
                btn[2].style.visibility = "hidden";
                text.innerHTML = "hier heb ik al wat gepakt"
            }

            else
            {
                btn[2].style.visibility = "visible";
                text.innerHTML = "een battery, Dit is wat ik moet hebben."
            }
        }

        else
        {
            text.innerHTML = "hmm.. opslot ik heb een sleutel nodig"
        }
    }, levels.kelder.time);
}

function kelder_t()
{
    canvas.setAttribute("src", levels.kelder_t.gif);

    for(i = 1; i <= 8; i++){
        btn[i].style.visibility = "hidden";
        btn[i].disabled = true;
    };   

    setTimeout(function(){
        rechts_achter_style();
    }, levels.kelder_t.time);
}

function deze_veranderen()
{
    window.alert("verander deze function")
}

function take_gear()
{
    var i = 0;

    i += 1;

    inventory.push("gear")

    if(i == 1)
    {
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_battery()
{
    var i = 0;

    i += 1;

    inventory.push("battery")

    if(i == 1)
    {
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_tool()
{
    var i = 0;

    i += 1;

    inventory.push("tool")

    if(i == 1)
    {
        btn[2].style.visibility = "hidden";       
    }

    show_backpack_items();
}

function take_key_wc()
{
    var ai = 0

    ai +=1

    for(var i = 0; i < wc_contains.length; i++) {
        inventory.push(wc_contains[i]);
        wc_contains.splice(i, 1);
        i--; 
    }

    if(ai == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_barrol()
{
    var ai = 0

    ai +=1

    for(var i = 0; i < achtertuin_barrol_contains.length; i++) {
        inventory.push(achtertuin_barrol_contains[i]);
        achtertuin_barrol_contains.splice(i, 1);
        i--; 
    }

    if(ai == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_achtertuin_dozen()
{
    var ai = 0

    ai +=1

    for(var i = 0; i < achtertuin_dozen_contains.length; i++) {
        inventory.push(achtertuin_dozen_contains[i]);
        achtertuin_dozen_contains.splice(i, 1);
        i--; 
    }

    if(ai == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_kamer_2_kast()
{
    var ai = 0

    ai +=1

    for(var i = 0; i < kast_1_contains.length; i++) {
        inventory.push(kast_1_contains[i]);
        kast_1_contains.splice(i, 1);
        i--; 
    }

    if(ai == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_kamer_2_kastje()
{
    var ai = 0

    ai +=1

    for(var i = 0; i < kast_1_contains.length; i++) {
        inventory.push(kast_1_contains[i]);
        kast_1_contains.splice(i, 1);
        i--; 
    }

    if(ai == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_kast_1()
{
    var kast_1_key = 0

    kast_1_key +=1

    for(var i = 0; i < kast_1_contains.length; i++) {
        inventory.push(kast_1_contains[i]);
        kast_1_contains.splice(i, 1);
        i--; 
    }

    if(kast_1_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_kast_2()
{
    var kast_2_key = 0

    kast_2_key +=1

    for(var i = 0; i < kast_2_contains.length; i++) {
        inventory.push(kast_2_contains[i]);
        kast_2_contains.splice(i, 1);
        i--; 
    }

    if(kast_2_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_kast_3()
{
    var kast_3_key = 0

    kast_3_key +=1

    for(var i = 0; i < kast_3_contains.length; i++) {
        inventory.push(kast_3_contains[i]);
        kast_3_contains.splice(i, 1);
        i--; 
    }

    if(kast_3_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_dozen()
{
    var dozen_key = 0

    dozen_key +=1

    for(var i = 0; i < achtertuin_dozen_contains.length; i++) {
        inventory.push(achtertuin_dozen_contains[i]);
        achtertuin_dozen_contains.splice(i, 1);
        i--; 
    }

    if(dozen_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_kapstok()
{
    var kapstok_key = 0

    kapstok_key +=1

    for(var i = 0; i < kapstok_contains.length; i++) {
        inventory.push(kapstok_contains[i]);
        kapstok_contains.splice(i, 1);
        i--; 
    }

    if(kapstok_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_stoel_1()
{
    var stoel_key = 0

    stoel_key +=1

    for(var i = 0; i < stoel_1_contains.length; i++) {
        inventory.push(stoel_1_contains[i]);
        stoel_1_contains.splice(i, 1);
        i--; 
    }

    if(stoel_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_openhaard()
{
    var openhaard_key = 0

    openhaard_key +=1

    for(var i = 0; i < openhaard_contains.length; i++) {
        inventory.push(openhaard_contains[i]);
        openhaard_contains.splice(i, 1);
        i--; 
    }

    if(openhaard_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_bank()
{
    var bank_key = 0

    bank_key +=1

    for(var i = 0; i < bank_contains.length; i++) {
        inventory.push(bank_contains[i]);
        bank_contains.splice(i, 1);
        i--; 
    }

    if(bank_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_tafel()
{
    var tafel_key = 0

    tafel_key +=1

    for(var i = 0; i < tafel_contains.length; i++) {
        inventory.push(tafel_contains[i]);
        tafel_contains.splice(i, 1);
        i--; 
    }

    if(tafel_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_stoel_2()
{
    var stoel_2_key = 0

    stoel_2_key +=1

    for(var i = 0; i < stoel_2_contains.length; i++) {
        inventory.push(stoel_2_contains[i]);
        stoel_2_contains.splice(i, 1);
        i--; 
    }

    if(stoel_2_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_keuken_1()
{
    var keuken_1_key = 0

    keuken_1_key +=1

    for(var i = 0; i < keuken_1_contains.length; i++) {
        inventory.push(keuken_1_contains[i]);
        keuken_1_contains.splice(i, 1);
        i--; 
    }

    if(keuken_1_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_keuken_2()
{
    var keuken_2_key = 0

    keuken_2_key +=1

    for(var i = 0; i < keuken_2_contains.length; i++) {
        inventory.push(keuken_2_contains[i]);
        keuken_2_contains.splice(i, 1);
        i--; 
    }

    if(keuken_2_key == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();
}

function take_key_boven_kast_1()
{
    var ki = 0

    ki +=1

    for(var i = 0; i < kast_1_boven_contains.length; i++) {
        inventory.push(kast_1_boven_contains[i]);
        kast_1_boven_contains.splice(i, 1);
        i--; 
    }

    if(ki == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();    
}

function take_key_boven_kast_2()
{
    var ki = 0

    ki +=1

    for(var i = 0; i < kast_2_boven_contains.length; i++) {
        inventory.push(kast_2_boven_contains[i]);
        kast_2_boven_contains.splice(i, 1);
        i--; 
    }

    if(ki == 1){
        btn[2].style.visibility = "hidden";
    }

    show_backpack_items();    
}

function show_backpack_items()
{
    if(inventory.includes("sleutel1"))
    {
        document.getElementById("key1").style.opacity = "1";
    }

    if(inventory.includes("sleutel2"))
    {
        document.getElementById("key2").style.opacity = "1";
    }

    if(inventory.includes("sleutel3"))
    {
        document.getElementById("key3").style.opacity = "1";
    }

    if(inventory.includes("battery"))
    {
        document.getElementById("battery").style.opacity = "1";
    }

    if(inventory.includes("gear"))
    {
        document.getElementById("gear").style.opacity = "1";
    }

    if(inventory.includes("tool"))
    {
        document.getElementById("tool").style.opacity = "1";
    }
}