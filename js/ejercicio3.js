/*Pruebas de ejerccios

let onces=["arepa", "pan","tinto"];

console.log(onces[1]);
onces.length;

let ultimo = onces.length -1;
console.log(ultimo);

/*onces.push('gaseosa');/*Agrega en la ultima posicion*/
/*onces.pop();/*Elimina en la ultima posicion*/
/*console.log(onces);/*Imprime el arreglo*/
/*onces.unshift('Huevo')/*Agrega en la primera posicion*/
/*onces.shift('Leche')/*Elimina en la primera posicion*/
/*onces.splice(1,1);/*Borra una o mas posiciones en el arreglo*/

/*
onces.forEach(function(elemento,index,array){

    console.log(`posicion ${index} elemento ${elemento}`);
})/*Imprime el arreglo pero mas pro*/

/*
let aprendices=[];
let seguir = true;

while(seguir==true){

    aprendices.push(prompt("Ingrese nombre aprendiz"))

    seguir=confirm("Desea ingresar otro valor");
}

aprendices.forEach(function(elemento,index,array){

    console.log(`posicion ${index} elemento ${elemento}`);
})/*Imprime el arreglo pero mas pro*/
/*
let filtro= aprendices.filter(aprendices=>aprendices == "Jennifer")/* Crea arreglos  con los filtros que le digas de cualquier posicion*/;
/*console.log(filtro);
/*
let busqueda=aprendices.find(aprendices=>aprendices=="andrea")/* Crea arreglos con los filtros que le digas de solo una posicion*/;
/*console.log(busqueda);
/*
let ordenar=aprendices.sort(aprendices=>aprendices=="Felipe")/* Crea arreglos con los filtros que le digas de solo una posicion*/;
/*console.log(ordenar);
/*
aprendices.sort()/*Ordena por orden jerarquico*/;

let aprendices1=[ {Primernombre:"Jennifer", SegundoNombre:"Fajardo"},
{Primernombre:"Sandra", SegundoNombre:"Rueda"}
];

let nombreCompleto= aprendices1.map(function(el,index,ar){
    console.log (`${el.Primernombre} ${el.SegundoNombre}`);
});


/* Ejercicio en clase por jennifer

let carros=['chevrolet','mazda','Renoult','lambergini','Hyundai'];
console.log(carros[3]);
console.log(carros.length);

let ultimo1 = carros[carros.length -1];
console.log(ultimo1);
carros.push('KIA');
console.log(carros);
carros.forEach(function(elemento,index,array){

 console.log(`La marca de carro en la posicion ${index} es ${elemento}`);

})*/