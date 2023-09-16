
// Funcion para el boton JUGAR
document.getElementById('btnNomJugador').addEventListener('click', function(){
    var nomJugador = document.getElementById('NomJugador').value;
    document.getElementById('idJugador').innerHTML= nomJugador;
    document.getElementById('saludo').style.display='block';
    document.getElementById('inicio').style.display='none';

    console.log("nombre" + nomJugador);
    
    function nombreJugador(nomJugador){
        return nomJugador;
    }

});

var selecOpcion = document.getElementById('btnSeleccionar')

selecOpcion.addEventListener('click', seleccionarOpcion)

var opcionJugador = "";
function seleccionarOpcion(){

    
    document.getElementById('opcionElegida').style.display='block';
    document.getElementById('imgPrincipal').style.display='none';
    document.getElementById('saludo').style.display='none';

if (document.getElementById('btnPiedra').checked){
        opcionJugador = "Piedra";  
        document.getElementById('opElegida').innerHTML="Piedra";
        document.getElementById('imgPiedra2').style.display='block';
    }else if 
        (document.getElementById('btnPapel').checked){
            opcionJugador = "Papel";
            document.getElementById('opElegida').innerHTML="Papel";
            document.getElementById('imgPapel2').style.display='block';
        }else if
            (document.getElementById('btnTijera')){
                opcionJugador = "Tijera";
                document.getElementById('opElegida').innerHTML="Tijera";
                document.getElementById('imgTijera2').style.display='block';
        }

        console.log(opcionJugador);
    }

// Crear eleccion de la maquina
    
        var max = 3
        var min = 1

    /* function aleatorio(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
}*/
        
        var pc = min + Math.floor(Math.random() * max);
        var opcionPC = "";

        console.log(pc);

    //function pcElige(){

        if(pc == 1){
            opcionPC = "Piedra";
            document.getElementById('opcionPC').innerHTML="Piedra";
            document.getElementById('imgPiedra3').style.display='block';
        }else if(pc == 2){
            opcionPC = "Papel";
            document.getElementById('opcionPC').innerHTML="Papel";
            document.getElementById('imgPapel3').style.display='block';
        }else if(pc == 3){
            opcionPC = "Tijera";
            document.getElementById('opcionPC').innerHTML="Tijera";
            document.getElementById('imgTijera3').style.display='block';
        }
            console.log(opcionPC);
        





// para boton RESULTADO

document.getElementById('btnResultado').addEventListener('click', function(){
    document.getElementById('elUsuario').style.display='none';
    document.getElementById('elPc').style.display='none';
    document.getElementById('btnResultado').style.display='none';
    document.getElementById('reiniciar').style.display='block';

    /*var resultadoFinal = "";

    function resultado (){
        return resultadoFinal;
        console.log(resultadoFinal);
    }*/

    
});
/*let resultadoFinal = opcionJugador + opcionPC;
console.log(resultadoFinal);*/


/************************************************************** */

//prueba


if (opcionJugador == "Tijera" & opcionPC == "Tijera"){
    resultadoFinal = "empate1";
    console.log("empate1");
}else if(opcionJugador == "Piedra" & opcionPC == "Piedra"){
    resultadoFinal = "empate2";
    console.log("empate2");
}else if(opcionJugador == "Papel" & opcionPC == "Papel"){
    resultadoFinal = "empate3";
    console.log("empate3");
}else{
    console.log("error");
}    


//************************************************************************************************* */
//function resultado (){

/*if (opcionJugador == opcionPC){
    console.log("empate");

    document.getElementById('videoEmpate').style.display='block';
    document.getElementById('videoEmpate').style.zIndex='500';

}else if (opcionJugador == "Tijera" & opcionPC == "Piedra"){
    document.getElementById('videoPerder').style.display='block';
}else if (opcionJugador == "Tijera" & opcionPC == "Papel"){
    document.getElementById('videoGanar').style.display='block';
}else if (opcionJugador == "Papel" & opcionPC == "Tijera"){
    document.getElementById('videoPerder').style.display='block';
}else if (opcionJugador == "Papel" & opcionPC == "Piedra"){
    document.getElementById('videoGanar').style.display='block';
}else if (opcionJugador == "Piedra" & opcionPC == "Tijera"){
    document.getElementById('videoGanar').style.display='block';
}else if (opcionJugador == "Piedra" & opcionPC == "Papel"){
    document.getElementById('videoPerder').style.display='block';
}

}*/