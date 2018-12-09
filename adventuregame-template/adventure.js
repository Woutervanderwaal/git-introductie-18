//shit to do:
//GIFS maken die beter zijn en terug gaan
//appendchild voor buttons
//kapstok toevoegen
//lists maken (backpack, car parts, map)
//random function maken voor map parts
//onclick bestaad gwn niet
//hoe moet je verliezen (time)
//kijken hoeveel tijd voor de grote villa (gwn nee)
//kijken voor map extention (dit word hem niet)
//whatsapp groep
//doe is was c++ 

var woonkamer_foto = "images/woonkamer_foto.jpg";
var links_foto = "images/kijklinks.jpg";
var rechts_foto = "images/kijkrechts.jpg";

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


}

//lists
var btn = [];
var inventory = [];
var kast_1_contains = ['sleutel1']

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
    "De GIF zijn maar 800x450 dat is niet zo erg, zoom in met in je browser om het spel wat groter te krijgen",
    "Het was de nacht voor dat je op kamp ging met je vrieden.",
    "Je kwam met je eigen auto, hij had wat probleemen maar je overkeek dat voor de avontuur die je te wachten stond",
    "Je was goed opweg het ging allemaal wel erg goed. Misschien iets te goed.",
    "je ging steeds verder het bos in en verder en verder... op zoek naar de kamping plek en het avontuur.",
    "maar dit avontuur werd snel een nacht merrie toen alle problemen in 1 keer begonnen in te slaan",
    "daar stond je. Je doom te verwachten er was niks meer dat je kon doen",
    "Je hoorde een zacht stemmetje",
    "'Word ik gek !', dacht je",
    "Het vertelde je over een kans",
    "'Ik heb een deal voor je, ik heb de auto delen voor je die je nodig hebt om alles te maken maar dan moet jij wel mijn spel spelen.' zij het stemmetje",
    "'wat is je spel dan' zij je.",
    "'geloof jij in je geluk' zij het stemmetje.",
    "'waarom ?' zij je",
    "'Wil je hier weg komen of niet!', zij het stemmetje een beetje aggresief",
    "'ja... ik geloof in mijn geluk', zij je",
    "'Oke loop op dit pad door tot het huis, en ik adviseer je auto ook er naartoe te krijgen' zij het stemmetje",
    "je stond voor een klein oud huis midden in het bos, 'waarom zou iemand hier een huis willen ?' dacht je",
    "je stond voor het huis, het stemmetje klonk weer",
    "'Je moet hier je geluk testen op het beste als jij voor 12 uur s'nachts er uit ben met alle onderdelen kan je gaan. Anders zullen de gevolgen vallen",
    "'Wat zijn de gevolgen dan?' zij je",
    "'Dat zie je dan wel' zij het stemmetje",
    "'lees goed wat op deze pagina staat' zij het stemmetje",
    "1. je hebt maar 30 min(zette) om alle onderdelen te vinden",
    "2. niet alle deuren/kasten zijn open, om deze open te maken moet je sleutels hebben",
    "3. elk spel is random dus je kan geen informatie krijgen van anderen",
    "4. om in de achtertuin tekomen moet je een jas hebben", 
    "5. je mag maar (één) auto deel bij je hebben als je de volgende wilt pakken moet je dat deel eerst in je auto doen",
    "toen klonk het stemmetje voor het laatst 'ik zie jou na 30 minuten'", 
    "in je zelf dacht je 'dit.. dit ga ik winnen'",
    ""]

    if(number_story == 31)
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
    }, levels.naar_auto.time);
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

        if(kast_1_contains.includes('sleutel1')){
            btn[2].style.visibility = "visible";
            btn[2].disabled = false;
            btn[2].innerHTML = "Pak sleutel";
            btn[2].onclick = take_key_1;
            btn[2].style.left = "39%";
            btn[2].style.top = "38%";
            btn[2].style.height = "100px";

            text.innerHTML = "Hey een sleutel!"
        }

        else if(kast_1_contains.includes('key1_picked_up'))
        {
            text.innerHTML = "je hebt de sleutel al"
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
        canvas.setAttribute("src", levels.links_achter_kijken.jpg);
        btn[1].style.visibility = "visible";
        btn[1].disabled = false;
        btn[1].innerHTML = "terug";
        btn[1].onclick = links_achter_kijken_t;
        btn[1].style.left = "41%";
        btn[1].style.top = "81%";

        btn[2].style.visibility = "visible";
        btn[2].disabled = false;
        btn[2].innerHTML = "Naar buiten";
        btn[2].onclick = deze_veranderen;
        btn[2].style.left = "4%";
        btn[2].style.top = "50%";
        btn[2].style.height = "100px";

        btn[3].style.visibility = "visible";
        btn[3].disabled = false;
        btn[3].innerHTML = "Naar boven";
        btn[3].onclick = deze_veranderen;
        btn[3].style.left = "38%";
        btn[3].style.top = "4%";
    }, levels.links_achter_kijken.time);
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
        btn[2].onclick = deze_veranderen;
        btn[2].style.left = "77%";
        btn[2].style.top = "40%";
    }, levels.rechts_achter_kijken.time);
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

function deze_veranderen()
{
    window.alert("verander deze function")
}

function take_key_1()
{
    if(inventory.includes("sleutel1"))
    {
        btn[2].style.visibility = "hidden"
        
    }

    else
    {
        inventory.push("sleutel1")
    }

    if(inventory.includes('sleutel1'))
    {
        document.getElementById("key1").style.opacity = "1";
        kast_1_contains.splice(0)
        kast_1_contains.push("key1_picked_up")
    }
}