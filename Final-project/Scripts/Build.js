const Motherboard = document.getElementById("Motherboard");
const myImg = document.getElementById("myImg");

const Axaliplata = document.getElementById("Axaliplata");
const Uaxlesiplata = document.getElementById("Uaxlesiplata");

const isami = document.getElementById("isami");
const ixuti = document.getElementById("ixuti");
const ishvidi = document.getElementById("ishvidi");
const uaxlesiixuti = document.getElementById("uaxlesiixuti");

const axaliisami = document.getElementById("axaliisami");
const axaliixuti = document.getElementById("axaliixuti");

const uaxlesiaishvidi= document.getElementById("uaxlesiaishvidi");
const chartva = document.getElementById("chartva");

const axaliishvidi= document.getElementById("axaliishvidi");
const rx580 = document.getElementById("rx580");
const rxfoto = document.getElementById("rxfoto");
const rtx2060 = document.getElementById("rtx2060");

const aP = document.getElementById("aP");
const uP = document.getElementById("uP");
const dzveliaisami = document.getElementById("dzveliaisami");
const dzvelixuti = document.getElementById("dzvelixuti");
const dzveliishvidi = document.getElementById("dzveliishvidi");
const videokarta = document.getElementById("videokarta");

const karta = document.getElementById("karta");

const rtx2060super = document.getElementById("rtx2060super");
const kuleri = document.getElementById("kuleri");

const uaxlesiisami = document.getElementById("uaxlesiisami");

const apisami = document.getElementById("apisami");

const apixuti = document.getElementById("apixuti");
kuleri.style.visibility = "hidden";

karta.style.visibility = "hidden";
rxfoto.style.visibility = "hidden";
rtx2060.style.visibility = "hidden";
uaxlesiixuti.style.visibility = "hidden";

uaxlesiaishvidi.style.visibility = "hidden";

uaxlesiisami.style.visibility = "hidden";

axaliishvidi.style.visibility = "hidden";

apisami.style.visibility = "hidden";

apixuti.style.visibility = "hidden";


myImg.style.visibility = "hidden";

aP.style.visibility = "hidden";

uP.style.visibility = "hidden";

dzveliaisami.style.visibility = "hidden";
dzvelixuti.style.visibility = "hidden";
dzveliishvidi.style.visibility = "hidden";


Motherboard.addEventListener("click", event => 
    {
if(myImg.style.visibility === "hidden" && kuleri.style.visibility === "hidden" 
){
    myImg.style.visibility = "visible";
    Motherboard.textContent = "Remove Lga1156";

    Axaliplata.textContent = "Lga1151";
    Uaxlesiplata.textContent = "ga1700";

    apisami.style.visibility = "hidden";
    apixuti.style.visibility = "hidden";

    axaliishvidi.style.visibility = "hidden";
    uaxlesiaishvidi.style.visibility = "hidden";

    aP.style.visibility = "hidden";
uP.style.visibility = "hidden";

isami.textContent = "i3-4130";
ixuti.textContent = "i5-4690k";
ishvidi.textContent = "i7-4790k";
dzvelixuti.style.visibility = "hidden";
uaxlesiisami.style.visibility = "hidden";
uaxlesiixuti.style.visibility = "hidden";


ishvidi.addEventListener("click", event => {
    if(dzvelixuti.style.visibility === "hidden" && ishvidi.textContent === "i7-4790k" && aP.style.visibility === "hidden" && uP.style.visibility === "hidden" && myImg.style.visibility === "visible" && kuleri.style.visibility === "hidden" ){
        dzvelixuti.style.visibility = "hidden";
        ishvidi.textContent = "i7-4790k";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "visible";


}
else if(myImg.style.visibility === "visible"){
    dzvelixuti.style.visibility = "hidden";
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "visible";

}

});






ixuti.addEventListener("click", event => {
    if(dzvelixuti.style.visibility === "hidden" && ixuti.textContent === "i5-4690k" && aP.style.visibility === "hidden" && uP.style.visibility === "hidden" && myImg.style.visibility === "visible" && kuleri.style.visibility === "hidden" ){
        dzvelixuti.style.visibility = "visible";
        ixuti.textContent = "i5-4690k";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";


}
else if(myImg.style.visibility === "visible"){
    dzvelixuti.style.visibility = "visible";
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";


}

});



isami.addEventListener("click", event => {
    if(dzveliaisami.style.visibility === "hidden" && isami.textContent === "i3-4130" && myImg.style.visibility === "visible" && aP.style.visibility === "hidden" && uP.style.visibility === "hidden" && kuleri.style.visibility === "hidden" ){
        dzveliaisami.style.visibility = "visible";
        isami.textContent = "i3-4130";
        dzvelixuti.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";
        axaliishvidi.style.visibility = "hidden";


}
else if(myImg.style.visibility === "visible"){
    dzvelixuti.style.visibility = "hidden";
    dzveliaisami.style.visibility = "visible";
    dzveliishvidi.style.visibility = "hidden";

}
});



}
else{
    myImg.style.visibility = "hidden";
    Motherboard.textContent = "Lga1156";
    aP.style.visibility = "hidden";
    uP.style.visibility = "hidden";
    axaliishvidi.style.visibility = "hidden";


    apixuti.style.visibility = "hidden";


    dzveliaisami.style.visibility = "hidden";
    Axaliplata.textContent = "Lga1151";
    Uaxlesiplata.textContent = "ga1700";

    dzvelixuti.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";

isami.textContent = "I3";
ixuti.textContent = "I5";
ishvidi.textContent = "I7";

rxfoto.style.visibility = "hidden";
karta.style.visibility = "hidden"
rtx2060.style.visibility = "hidden"; 


}

});




Axaliplata.addEventListener("click", event => 
    {
if(aP.style.visibility === "hidden" && kuleri.style.visibility === "hidden" ){
    aP.style.visibility = "visible";
    Axaliplata.textContent = "Remove Lga1151";
    myImg.style.visibility = "hidden";
uP.style.visibility = "hidden";

uaxlesiaishvidi.style.visibility = "hidden";

isami.textContent = "i3-9100F";
ixuti.textContent = "i5-9600K";
ishvidi.textContent = "i7-9700K";


uaxlesiisami.style.visibility = "hidden";
uaxlesiixuti.style.visibility = "hidden";



dzveliaisami.style.visibility = "hidden";

Motherboard.textContent = "Lga1156";
Uaxlesiplata.textContent = "Lga1700";



dzvelixuti.style.visibility = "hidden";
dzveliishvidi.style.visibility = "hidden";





isami.addEventListener("click", event => {
    if(aP.style.visibility ==="visible" && kuleri.style.visibility === "hidden" ){
        apisami.style.visibility = "visible";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";
        apixuti.style.visibility = "hidden";
        axaliishvidi.style.visibility = "hidden";


}
else if(aP.style.visibility === "visible"){
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";
apisami.style.visibility = "visible";
apixuti.style.visibility = "hidden";
axaliishvidi.style.visibility = "hidden";

}

});





ixuti.addEventListener("click", event => {
    if(aP.style.visibility ==="visible" && kuleri.style.visibility === "hidden" ){
        apixuti.style.visibility = "visible";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";
        axaliishvidi.style.visibility = "hidden";


}
else if(aP.style.visibility === "visible"){
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";
    apixuti.style.visibility = "visible";
    axaliishvidi.style.visibility = "hidden";

}

});




ishvidi.addEventListener("click", event => {
    if(aP.style.visibility ==="visible" && kuleri.style.visibility === "hidden" ){
        axaliishvidi.style.visibility = "visible";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";


}
else if(aP.style.visibility === "visible"){
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";
    axaliishvidi.style.visibility = "visible";

}

});


















}
else{
    aP.style.visibility = "hidden";
    Axaliplata.textContent = "Lga1151";
    myImg.style.visibility = "hidden";
uP.style.visibility = "hidden";

uaxlesiisami.style.visibility = "hidden";



dzvelixuti.style.visibility = "hidden";
dzveliishvidi.style.visibility = "hidden";
dzveliaisami.style.visibility = "hidden";
apisami.style.visibility = "hidden";
apixuti.style.visibility = "hidden";


isami.textContent = "I3";
ixuti.textContent = "I5";
ishvidi.textContent = "I7";

rxfoto.style.visibility = "hidden";
karta.style.visibility = "hidden"
rtx2060.style.visibility = "hidden"; 

}

});



Uaxlesiplata.addEventListener("click", event => 
    {
if(uP.style.visibility === "hidden" && kuleri.style.visibility === "hidden" ){
    uP.style.visibility = "visible";
    Uaxlesiplata.textContent = "Remove Lga1700";
    myImg.style.visibility = "hidden";
aP.style.visibility = "hidden";

apisami.style.visibility = "hidden";



dzveliaisami.style.visibility = "hidden";
dzvelixuti.style.visibility = "hidden";
dzveliishvidi.style.visibility = "hidden";

Motherboard.textContent = "Lga1156";
Axaliplata.textContent = "Lga1151";

apixuti.style.visibility = "hidden";
axaliishvidi.style.visibility = "hidden";

isami.textContent = "i3-1300";
ixuti.textContent = "i5-13400";
ishvidi.textContent = "i7-13700K";



isami.addEventListener("click", event => {
    if(uP.style.visibility ==="visible" && kuleri.style.visibility === "hidden" ){
        apisami.style.visibility = "hidden";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";
        apixuti.style.visibility = "hidden";
        axaliishvidi.style.visibility = "hidden";
        uaxlesiisami.style.visibility = "visible";
        uaxlesiixuti.style.visibility = "hidden";
        uaxlesiaishvidi.style.visibility = "hidden";


}
else if(uP.style.visibility === "visible"){
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";
apisami.style.visibility = "hidden";
apixuti.style.visibility = "hidden";
axaliishvidi.style.visibility = "hidden";
uaxlesiisami.style.visibility = "visible";
uaxlesiixuti.style.visibility = "hidden";
uaxlesiaishvidi.style.visibility = "hidden";

}

});







ixuti.addEventListener("click", event => {
    if(uP.style.visibility ==="visible" && kuleri.style.visibility === "hidden" ){
        apisami.style.visibility = "hidden";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";
        apixuti.style.visibility = "hidden";
        axaliishvidi.style.visibility = "hidden";
        uaxlesiisami.style.visibility = "hidden";
        uaxlesiixuti.style.visibility = "visible";

        uaxlesiaishvidi.style.visibility = "hidden";


}
else if(uP.style.visibility === "visible"){
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";
apisami.style.visibility = "hidden";
apixuti.style.visibility = "hidden";
axaliishvidi.style.visibility = "hidden";
uaxlesiisami.style.visibility = "hidden";
uaxlesiixuti.style.visibility = "visible";
uaxlesiaishvidi.style.visibility = "hidden";

}

});

ishvidi.addEventListener("click", event => {
    if(uP.style.visibility ==="visible" && kuleri.style.visibility === "hidden" ){
        apisami.style.visibility = "hidden";
        dzveliaisami.style.visibility = "hidden";
        dzveliishvidi.style.visibility = "hidden";
        apixuti.style.visibility = "hidden";
        axaliishvidi.style.visibility = "hidden";
        uaxlesiisami.style.visibility = "hidden";
        uaxlesiixuti.style.visibility = "hidden";
        uaxlesiaishvidi.style.visibility = "visible";


}
else if(uP.style.visibility === "visible"){
    dzveliaisami.style.visibility = "hidden";
    dzveliishvidi.style.visibility = "hidden";
apisami.style.visibility = "hidden";
apixuti.style.visibility = "hidden";
axaliishvidi.style.visibility = "hidden";
uaxlesiisami.style.visibility = "hidden";
uaxlesiixuti.style.visibility = "hidden";
uaxlesiaishvidi.style.visibility = "visible";

}

});







}
else{
    uP.style.visibility = "hidden";
    Uaxlesiplata.textContent = "Lga1700";
    myImg.style.visibility = "hidden";
aP.style.visibility = "hidden";

dzvelixuti.style.visibility = "hidden";
dzveliishvidi.style.visibility = "hidden";
dzveliaisami.style.visibility = "hidden";

apixuti.style.visibility = "hidden";
axaliishvidi.style.visibility = "hidden";
uaxlesiixuti.style.visibility = "hidden";
uaxlesiaishvidi.style.visibility = "hidden";


rxfoto.style.visibility = "hidden";
karta.style.visibility = "hidden"
rtx2060.style.visibility = "hidden"; 
isami.textContent = "I3";
ixuti.textContent = "I5";
ishvidi.textContent = "I7";


}

});






videokarta.addEventListener("click", event => {
if(uP.style.visibility === "visible" || aP.style.visibility === "visible" || myImg.style.visibility === "visible"  && karta.style.visibility === "hidden" && kuleri.style.visibility === "hidden" ){
        karta.style.visibility = "visible"; 
        rxfoto.style.visibility = "hidden"
        rtx2060.style.visibility = "hidden"

}
else if (uP.style.visibility === "visible" || aP.style.visibility === "visible" || myImg.style.visibility === "visible") {
    karta.style.visibility = "hidden";
    rxfoto.style.visibility = "hidden"
    rtx2060.style.visibility = "hidden"
}
});

rx580.addEventListener("click", event => {
    if(uP.style.visibility === "visible" || aP.style.visibility === "visible" || myImg.style.visibility === "visible" && rxfoto.style.visibility === "hidden" && kuleri.style.visibility === "hidden" ){
        rxfoto.style.visibility = "visible"; 
        karta.style.visibility = "hidden"
        rtx2060.style.visibility = "hidden"
        
    }
    else if (uP.style.visibility === "visible" || aP.style.visibility === "visible" || myImg.style.visibility === "visible") {
        rxfoto.style.visibility = "hidden";
        karta.style.visibility = "hidden"
        rtx2060.style.visibility = "hidden"

    }
    });
    
    rtx2060super.addEventListener("click", event => {
        if(uP.style.visibility === "visible" || aP.style.visibility === "visible" || myImg.style.visibility === "visible" && rtx2060.style.visibility === "hidden" && kuleri.style.visibility === "hidden" ){
            rxfoto.style.visibility = "hidden"; 
            karta.style.visibility = "hidden"
            rtx2060.style.visibility = "visible"; 

        }
        else if (uP.style.visibility === "visible" || aP.style.visibility === "visible" ||  myImg.style.visibility === "visible") {
            rxfoto.style.visibility = "hidden";
            karta.style.visibility = "hidden"
            rtx2060.style.visibility = "hidden"; 

        }
        });




        chartva.addEventListener("click", event => {
            if    (rxfoto.style.visibility === "visible" || karta.style.visibility === "visible" || rtx2060.style.visibility === "visible" )
{
            if(      dzvelixuti.style.visibility === "visible" ||
                dzveliaisami.style.visibility === "visible" ||
                dzveliishvidi.style.visibility === "visible" ||
                apisami.style.visibility === "visible" ||
                apixuti.style.visibility === "visible"||
                axaliishvidi.style.visibility === "visible" || 
                uaxlesiisami.style.visibility === "visible" || 
                uaxlesiixuti.style.visibility === "visible" || 
                uaxlesiaishvidi.style.visibility === "visible"){
            
            
            if( kuleri.style.visibility === "hidden"){
                kuleri.style.visibility = "visible"; 

      }
        else {
            kuleri.style.visibility = "hidden"; 

        };

        
    }} });









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