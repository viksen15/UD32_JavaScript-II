
function tirar(){
    body = document.getElementById("nums");
    nums = document.createElement("table");

    for (var i=0; i<1; i++) {
        filas = document.createElement("tr");
        
        for (var a=0; a<100; a++) {
            Tnums = [];
            x = Math.floor(Math.random()*6)+1;
            y = Math.floor(Math.random()*6)+1;
            resultado = x+y
            Tnums.push(resultado);
         
    
        celda = document.createElement("td");
        celdaText = document.createTextNode(Tnums);
        celda.appendChild(celdaText);
        filas.appendChild(celda);
        }
    
    nums.appendChild(filas);
    }

    document.getElementById("num1").innerHTML = x;
    document.getElementById("num2").innerHTML = y;
    document.getElementById("resultado").innerHTML = resultado;

    body.appendChild(nums);
    nums.setAttribute("border", "2");
}
