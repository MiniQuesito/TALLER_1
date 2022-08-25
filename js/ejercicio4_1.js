let opciones = document.getElementById('opciones');
let resp = document.getElementById('respuesta');


opciones.addEventListener('click',(e)=>{
  
    e.preventDefault();
   if(e.target.id=='opcion1'){

    resp.innerHTML= `Opcion incorrecta, try again`;
    /*Permite acceder a las clases de las hojas de estilos*/
    resp.classList.add('incorrecto');
   }
   else if(e.target.id=='opcion2'){
   resp.innerHTML=`Opcion incorrecta, try again`;
   resp.classList.add('incorrecto');
   }
   else if(e.target.id=='opcion3'){
   resp.innerHTML=`Opcion Correcta, Good Luck`
   resp.classList.add('correcto');
   resp.classList.remove('incorrecto');
   }
   else if(e.target.id=='opcion4'){
   resp.innerHTML=`Opcion incorrecta, try again`;
   resp.classList.add('incorrecto');
   } 

});