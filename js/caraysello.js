    
   let aleatorio=0;
   let jugador="";
   let moneda=0;
   let eleccion=0;
   let opcion=0;
  
  
   eleccion=parseInt(prompt("Seleccione una opcion 1=Cara , 2=Sello"));
  
   window.alert("La moneda se esta lanzando");
  
   function getRandomInt(max) {
      return Math.floor(Math.random() * max)+1;
    }
    
    console.log(getRandomInt(2));
     