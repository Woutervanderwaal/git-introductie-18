document.getElementById("bClear").onclick = function(){
    clear();
}
speelt = "X"

function wissel(){
    if(speelt == "X"){
        speelt = "O"
    }
    else{
        speelt = "X"
    }
}

var buttons = [];

for(var i = 1; i<=9; i++){
    buttons["b" + i] = document.getElementById("b"+ i);
    buttons["b" + i].onclick = function(){
        button_change(this.id);
    }

    


} 
function button_change(button_id){
    var text = document.getElementById(button_id);
    if(text.value == "    "){
        text.value = speelt;
        wissel();
        winnaar();
    
    }

}
function clear(){
    speelt = "X"
    for(var i = 1; i<=9; i++){
        
        document.getElementById("b"+ i).value = "    ";
        
    } 
}
function winnaar(){

    if(buttons["b1"].value == "X" && buttons["b2"].value == "X" && buttons["b3"].value == "X"){
       setTimeout(function(){
        alert("X heeft gewonnen!");
       },0,01) ;

}
    
    if(buttons["b4"].value == "X" && buttons["b5"].value == "X" && buttons["b6"].value == "X"){
        setTimeout(function(){
            alert("X heeft gewonnen!");
        },0,01) ; 
        
}

    if(buttons["b7"].value == "X" && buttons["b8"].value == "X" && buttons["b9"].value == "X"){
        setTimeout(function(){
            alert("X heeft gewonnen!");
        },0,01) ;
        
}

if(buttons["b1"].value == "X" && buttons["b4"].value == "X" && buttons["b7"].value == "X"){
    setTimeout(function(){
        alert("X heeft gewonnen!");
    },0,01) ;
    
}

if(buttons["b2"].value == "X" && buttons["b5"].value == "X" && buttons["b8"].value == "X"){
    setTimeout(function(){
        alert("X heeft gewonnen!");
    },0,01) ;
    
}

if(buttons["b3"].value == "X" && buttons["b6"].value == "X" && buttons["b9"].value == "X"){
    setTimeout(function(){
        alert("X heeft gewonnen!");
    },0,01) ;
    
}

if(buttons["b1"].value == "X" && buttons["b5"].value == "X" && buttons["b9"].value == "X"){
    setTimeout(function(){
        alert("X heeft gewonnen!");
    },0,01) ;
    
}

if(buttons["b3"].value == "X" && buttons["b5"].value == "X" && buttons["b7"].value == "X"){
    setTimeout(function(){
        alert("X heeft gewonnen!");
    },0,01) ;
    
}

if(buttons["b1"].value == "O" && buttons["b2"].value == "O" && buttons["b3"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b4"].value == "O" && buttons["b5"].value == "O" && buttons["b6"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b7"].value == "O" && buttons["b8"].value == "O" && buttons["b9"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b1"].value == "O" && buttons["b4"].value == "O" && buttons["b7"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b2"].value == "O" && buttons["b5"].value == "O" && buttons["b8"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b3"].value == "O" && buttons["b6"].value == "O" && buttons["b9"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b1"].value == "O" && buttons["b5"].value == "O" && buttons["b9"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

if(buttons["b3"].value == "O" && buttons["b5"].value == "O" && buttons["b7"].value == "O"){
    setTimeout(function(){
     alert("O heeft gewonnen!");
    },0,01) ;

}

}   
    


    
 

