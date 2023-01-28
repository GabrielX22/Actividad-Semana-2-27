//Ejercicio 1
function convertir() {
    var euros = prompt("Ingrese la cantidad en euros");
    dolares = euros*1.09;
    alert("La cantidad en dolares son: "+dolares);
}
//Ejercicio 2
function convertirCF(){
    var centi = prompt("Ingrese los grados centigrados");
    fahrenheit = (9/5) * centi + 32;
    alert("Los grados en fahrenheit son: "+fahrenheit)
}
//Ejercicio 3
function changecolor(){
    const caja = document.getElementById("cajita");
    caja.style.backgroundColor = "Red";
}
//Ejercicio 4
function envio(){
    var size = prompt("¿De que tamaño desea la caja? S/M/L");
    var sizeUP = size.toUpperCase()
    if(sizeUP=="S" || sizeUP=="M" || sizeUP=="L" ){
        var nombre = prompt("Escriba su nombre");
        var comentario = prompt("Escriba un comentario sobre el envio");
        alert("Nombre: del cliente: "+ nombre +" ,Caja de tamaño: "+ sizeUP + " ,Comentario: "+ comentario)
    }
    else{
        alert("Tamaño de caja no existente, intentelo de nuevo.")
    }
}

