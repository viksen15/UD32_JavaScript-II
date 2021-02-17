//  1- Fecha
function fecha(){
    var expF = prompt("Introduzca la fecha en formato XX/XX/XXXX");
    
    var expregF = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
    if (expregF.test(expF))
    {
        alert("La fecha es correcta");
        document.getElementById("fecha").innerHTML = expF; 
    }
    else 
    alert("La fecha NO es correcta");
}

//  2- Email
function email(){
    var expE = prompt("Introduzca un email");

    var expregE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if (expregE.test(expE))
    {
        alert("El email es correcto");
        document.getElementById("email").innerHTML = expE; 
    }
    else 
    alert("El email NO es correcto");
}

//  3- Reemplazo
function reemplazo(){
    var expR = prompt("Introduzca un texto con los caracteres &, \\, < o > para reemplazarlos.");

    alert(expR.replace(/&/g, '&amp;')
              .replace(/\\/g, '&quot;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;'));
}

//  4- Orden inverso
function ordenInverso(){
    var expO = prompt("Introduzca su nombre y dos apellidos");

    orden = expO.split(" ");
document.getElementById("ordenInverso").innerHTML = orden[1]+ " "+ orden[2]+", "+orden[0];
}

//  5- Etiquetas peligrosas
function etiquetas(){
    var texto = document.getElementById("texto").textContent;
    var stripped = texto.replaceAll(/<[^>]*>/g, "");
    document.getElementById("texto").innerHTML = stripped;
}
