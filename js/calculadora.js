function calcular(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if(op==1){
        let res=num1+num2;
        alert(`El número 1 es: ${num1}, el número 2 es: ${num2}, y la suma es ${res}`);
    }else if(op==2){
        let res=num1-num2;
        alert(`El número 1 es: ${num1}, el número 2 es: ${num2}, y la resta es ${res}`);
    }else if(op==3){
        let res=num1*num2;
        alert(`El número 1 es: ${num1}, el número 2 es: ${num2}, y la multiplicación es ${res}`);
    }else if(op==4){
        let res=num1+num2;
        alert(`El número 1 es: ${num1}, el número 2 es: ${num2}, y la división es ${res}`);
    }else{
        alert(`Opción inválida`)
    }
}

let texto;
const btn = document.getElementById("button");
btn.addEventListener('click',calcular);

const ops = document.getElementById("ops");
/* Detiene la propagacion de eventos*/
ops.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e)
    console.log(e.target.id);

const rta = document.getElementById('respuesta')

if(e.target.id="sumar"){
      let res=num1+num2;
    console.log(`El número 1 es: ${num1}, el número 2 es: ${num2}, y la suma es ${res}`);
    texto=`<p> <i class="fa-solid fa-square-check"></i> </p>`;
    rta.innerHTML=texto;
}else if(e.target.id="restar"){
    texto=`<p> <i class="fa-solid fa-xmark"></i> </p>`;
    let res=num1-num2;
    console.log(`El número 1 es: ${num1}, el número 2 es: ${num2}, y la resta es ${res}`);
    rta.innerHTML=texto;
    rta.style.setProperty(color,white);
}

});