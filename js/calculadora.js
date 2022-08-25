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

const btn = document.getElementById("button");

btn.addEventListener('click',calcular())