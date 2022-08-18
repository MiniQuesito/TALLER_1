
console.log(document.getElementById('features'));

console.log(document.querySelector('h1'));

console.log(document.querySelectorAll("p"));


document.querySelector("a").setAttribute("href","https://youtube.com");



const mi=document.querySelector("#features");
mi.style.setProperty("color","GREEN");
mi.style.setProperty("width","-200000px");


const $mic=document.querySelector(".miclase");

let text= `<p>EL DOMMMMMM ES BLAAAA BLAAAA PUMMM!!!!!</p>
<p>Se puede acceder y mofificar el texto</p>`

//$mic.textContent=text;
$mic.innerHTML=text;


const img = document.createElement("img");
img.src ="https://www.akibastation.es/2020/11/figura-irelia-escala-1.html";

const $caja=document.createElement("div")
$caja.innerHTML="<img src='img/irelia.jfif'>"

$mic.appendChild($caja);

//$caja.remove();