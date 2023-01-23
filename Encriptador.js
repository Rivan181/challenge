
function encriptar() {
    var texto = document.getElementById("ingrese-texto").value.toLowerCase();
    //i es para m}inusculas y mayusculas
    //g es para toda la linea
    //m es para todo el parrafo
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun").style.display = "none";
    document.getElementById("texto-des").innerHTML = txtcifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function desencriptar() {
    var texto = document.getElementById("ingrese-texto").value.toLowerCase();
    //i es para m}inusculas y mayusculas
    //g es para toda la linea
    //m es para todo el parrafo
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun").style.display = "none";
    document.getElementById("texto-des").innerHTML = txtcifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

document.querySelector("#copy").addEventListener("click",function(){
    let copiado = document.querySelector("#texto-des").value;
    navigator.clipboard.writeText(copiado).then(()=>(alert("Copiado")
    ))
})










/*
function copy() {
    let copyText = document.querySelector("#texto-des");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#texto-des").addEventListener("click", copy);
  
function {
    var contenido = navigator.clipboard.readText(texto-des);
    alert ("Mensaje copiado")
}


function recuperoTexto(){
    var contenido = document.querySelector("texto-des");
    return contenido.value;
    alert (contenido)
}


function recuperartexto() {
    var contenido = document.querySelector("texto-des");
    return contenido; 
    
    alert("Se copio");

}
*/