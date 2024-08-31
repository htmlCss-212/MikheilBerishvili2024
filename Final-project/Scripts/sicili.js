const dawera = document.getElementById("dawera");
const salaparako = document.getElementById("salaparako");
const shexeba = document.getElementById("shexeba");
const eva = document.getElementById("eva");
const evaicinis = document.getElementById("evaicinis");
const sto= document.getElementById("sto");
const dabruneba = document.getElementById("dabruneba");
const Next = document.getElementById("Next");
const knopka = document.getElementById("knopka");



salaparako.style.visibility = "visible";
sto.style.visibility = "hidden";
evaicinis.style.visibility = "hidden";










shexeba.addEventListener("click", event => {
    if(salaparako.style.visibility === "visible" ){
        salaparako.style.visibility = "hidden";
        eva.style.visibility = "hidden";
        evaicinis.style.visibility = "visible";
        sto.style.visibility = "visible";
        

}
else if(salaparako.style.visibility === "hidden"){
    salaparako.style.visibility = "visible";
    eva.style.visibility = "visible";
}

});

dabruneba.addEventListener("click", event => {
    if(salaparako.style.visibility === "hidden" ){

        
        salaparako.style.visibility = "visible";
        eva.style.visibility = "visible";
        sto.style.visibility = "hidden";
        evaicinis.style.visibility = "hidden";

}
else if(salaparako.style.visibility === "visible" ){
    salaparako.style.visibility = "hidden";
    eva.style.visibility = "hidden";



}

});
 
Next.addEventListener("click", event => {
    if(salaparako.style.visibility === "visible" ){
        salaparako.style.visibility = "hidden";
        eva.style.visibility = "hidden";
        evaicinis.style.visibility = "hidden";
        sto.style.visibility = "hidden";
        knopka.textContent = "";

}
else if(salaparako.style.visibility === "hidden"){
    salaparako.style.visibility = "hidden";
    eva.style.visibility = "hidden";
    knopka.textContent = "";
    evaicinis.style.visibility = "hidden";
    sto.style.visibility = "hidden";
}

});




/*
function clear()
{
    var img = document.getElementById('platabude');
    img.src = 'platisbude.png';
}


function Motherboard()
{
    var img = document.getElementById('platabude');
    img.src = 'platadzveli.png';
}







    
var div = document.getElementById('')
var display = 0;
function hideshow()
{
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else{
        div.style.display = 'none';
        display = 1;
    }
}

function Motherboard(d){
    d.onclick = function(){
        this.style.visibility = "hidden";
    }
}
var myArray = document.getElementsByTagName("img");
for(var d of myArray){
    Motherboard(d);}
    */