
/*
//Declarar la funcion por declaracion 
function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`El lanzamiento de la moneda${moneda}`);
}

//Invocar la funcion
lanzarmoneda();
*/

//Funcion con valor de retorno
let lanzar= function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

/*
//Invocar la funcion con valor de retorno 
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);
*/



//funcion con parametros-Funcion anonima
let ganar=function(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}
//funcion con flecha(ARROW)
let perder=(saldo, apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}
/*
//Invocar la funcion y enviar argumentos segun corresponda
ganar(saldo,apuesta);
perder(saldo,apuesta);
*/

let lanzarmoneda=lanzar();
let seguir=true;
let saldo=0;
let jugador=prompt("Ingrese el nombre del jugador");
saldo=parseInt(prompt("Cuanto deseas recargar para jogar"));


while(seguir==true){
    let eleccion=prompt(`${jugador} Elige 1. cara 2. Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deseas apostar?`));
    let lanzamiento=lanzarmoneda;

    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento de cara escogiste cara Tu ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento Fue Sello que escogiste Sello Tu ganas!!! , tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento Fue Cara escogiste Sello Perdiste!!! , tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento Fue Sello escogiste Cara Perdiste!!! , tu nuevo saldo es ${saldo}`);
    }

    seguir= confirm("deseo continuar");
}





//objetos en js 
const nomObjeto={
    propiedad1:valor1,
    propiedad2:valor2,
    //....
    nombremetodo(){
    }
}

//Creacion del objeto animal con tres propiedades y un metodo 
const mascota={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
        //Acceder a las propiedades de un objeto
        console.log(`${mascota.nombre} esta comiendo`);
        //Usando la palabra reservada this
        console.log(`${this.nombre} esta comiendo`)
    }
}

//mostrar objeto completo
console.log(mascota);

//invocar metodos de un objeto 
mascota.comer();




