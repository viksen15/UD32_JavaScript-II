    function verHora()
{
    var reloj = new Date();
    var hora = reloj.getHours();
    var min = reloj.getMinutes();
    var sec = reloj.getSeconds();

    min = ponCero(min);
    sec = ponCero(sec);

    document.getElementById("reloj").innerHTML = hora + " : " + min + " : " + sec;

    var cuenta = setTimeout(function() {verHora()}, 1000)
}
    function ponCero(i)
{
    if (i<10)
    {   i = "0" + i; }
    return i;
}