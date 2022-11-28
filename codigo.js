function mostrar()
{
    let sumaDias;
    let edad;
    let edadEnDias;
    let ndia;
    let nmes;
    let diferenciaAnoPasado;
    let fdia;
    let fmes;
    let diferenciaAnoActual;

    sumaDias = 0;
    edad     = 0;
    edadEnDias = 0;
    ndia  = 0;
    nmes  = 0;
    diferenciaAnoPasado = 0;
    fdia  = 0;
    fmes  = 0;
    diferenciaAnoActual = 0;

    do{
        ndia = parseInt(prompt("Ingrese el dia de su nacimiento."));
    }while(isNaN(ndia) || ndia < 1 || ndia > 31)
    
    do{
        nmes = parseInt(prompt("Ingrese el mes de su nacimiento."));
    }while(isNaN(nmes) || nmes < 1 || nmes > 12)
    
    do{
        edad = parseInt(prompt("Ingrese su edad."));
    }while(isNaN(edad) || edad < 0 || edad > 100)

    do{
        bandera = prompt("Los ha cumplido este año?");
        bandera = bandera.toLowerCase();
    }while(bandera != "si" || bandera != "no")

    do{
        fmes = parseInt(prompt("Ingrese el mes actual."));
    }while(isNaN(fmes) || fmes < 1 || fmes > 12)

    do{
        fdia = parseInt(prompt("Ingrese el dia actual."));
    }while(isNaN(fdia) || fdia < 1 || fdia > 31)

    if(bandera == "si"){
        diferenciaAnoActual = (30- ndia) + ((fmes - nmes - 1) * 30) + fdia;
    }else{
        diferenciaAnoPasado = (30 - ndia) + ((12 - nmes) * 30);
        diferenciaAnoActual = fdia + ((fmes - 1) * 30); 
    }

    edadEnDias = edad * 365.256;
    edadEnDias = parseInt(edadEnDias);
    sumaDias = edadEnDias + diferenciaAnoActual + diferenciaAnoPasado;

    alert("Felicidades! Usted lleva " + sumaDias + " días en la tierra.");
}