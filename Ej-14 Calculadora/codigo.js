a = "0";
reiniciar = 1;
coma = 0;
numEsp = 0;
operacion = 0;

window.onload = function()
{ 
    texto = document.getElementById("texto"); 
    document.onkeydown = teclado;
}
function teclado (pulsado)
{
    pulsar = pulsado || window.event;
    p = pulsar.keyCode;
    
    // teclado AlfaNum
    if(p>47 && p<58)
    { 
        k = p-48;
        k = String(k);
        ponNum(k);
    }
    // teclado Numerico
    if(p>95 && p<106)
    {
        k = p-96;
        k = String(k);
        ponNum(k);
    }

    if (p == 110 || p == 190) {ponNum(",")}     // COMA
    if (p == 106) { operar('*')}                // MULTIPLICACION
    if (p == 107) { operar('+')}                // SUMA
    if (p == 109) { operar('-')}                // RESTA
    if (p == 111) { operar('/')}                // DIVISION
    if (p == 32 || p==13) { total()}            // ENTER - INTRO
    if (p == 46) { C()}                         // <- INICIO
    if (p == 8) { Retr()}                       // RETROCESO
    if (p == 36) { CE()}                        // SUPRIMIR
}

    function Retr()
{
    nums = a.length;
    br = a.substr(nums-1, nums);
    a = a.substr(0, nums-1);
    if (a == "") {  a = "0"; }
    if (br == ",") {  coma = 0; }
    texto.innerText = a;
}
    function CE()
{
    texto.innerText = 0;
    a = 0;
    coma = 0;
}
    function C()
{
    texto.innerText= 0;
    a = "0";
    coma = 0;
    numEsp = 0;
    operacion = 0;
}

    function ponNum(i)
{
    if (a == "0" || reiniciar == 1)
    { 
        texto.innerText = i;
        a = i;
            if (i == ",")
            {    
            texto.innerText = "0,";
            a = i;
            coma = 1;
            }
    }
    else 
    {
        if (i == "," && coma == 0)
        {
            texto.innerText += i;
            a += i;
            coma = 1;
        }
        else if (i == "," && coma == 1) {}
        else 
        {
            texto.innerText += i;
            a += i;   
        }
    }
    reiniciar = 0;
}
    function operar(i)
{
    total();
    numEsp = a;
    operacion = i;
    reiniciar = 1;
}
    function total()
{
    if (operacion == 0) 
        texto.innerText = a;
    else 
    {
        solucion = numEsp + operacion + a;
        final = eval(solucion);
        texto.innerText = final;
        a = final;
        operacion = 0;
        reiniciar = 1;
    }
}
    function raiz()
{
    a = Math.sqrt(a);
    texto.innerText = a;
    operacion = 0;
    reiniciar = 1;
}
    function porciento()
{
    a = a/100;
    texto.innerText = a;
    total();
    reiniciar = 1;
}
    function posOneg()
{
    e = Number(a);
    e = -e;
    a = String(e);
    texto.innerText = a;
}
    function inverso()
{
    e = Number(a)
    e = (1/e);
    a = String(e);
    texto.innerText = a;
    reiniciar = 1;
}

