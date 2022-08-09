

let dinero=0; 
let marranito=0; 
let resp=true;
let cont=0;

while(resp=true){

    dinero = parseInt(prompt("Ingrese la cantidad a guardar"));

    marranito = marranito + dinero;
    cont= cont + 1;

    resp= confirm("deseo continuar")
}

console.log(`Se guardo en total ${marranito} y se agrego un total de ${cont}`);