document.getElementById('btnNomJugador').addEventListener('click', function(){
    let nomJugador = document.getElementById('NomJugador').value;
    document.getElementById('idJugador').innerHTML= nomJugador;
    document.getElementById('saludo').style.display='block';
    document.getElementById('inicio').style.display='none';


    console.log("nombre" + nomJugador);
    
    function nombreJugador(nomJugador){
        return nomJugador;
    }

});

let selecOpcion = document.getElementById('btnSeleccionar')
selecOpcion.addEventListener('click', seleccionarOpcion)

function seleccionarOpcion(){
    document.getElementById('opcionElegida').style.display='block';
    document.getElementById('imgPrincipal').style.display='none';

    document.getElementById('saludo').style.display='none';
if (document.getElementById('btnPiedra').checked){   
        document.getElementById('opElegida').innerHTML="Piedra";
        document.getElementById('imgPiedra2').style.display='block';
    }else if 
        (document.getElementById('btnPapel').checked){
            document.getElementById('opElegida').innerHTML="Papel";
            document.getElementById('imgPapel2').style.display='block';
        }else if
            (document.getElementById('btnTijera')){
                document.getElementById('opElegida').innerHTML="Tijera";
                document.getElementById('imgTijera2').style.display='block';
        }
    }

// Crear eleccion de la maquina
    
        let max = 3
        let min = 1

    /* function aleatorio(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
}*/
        
        let pc = min + Math.floor(Math.random() * max);
        let opcionPC = "";

        console.log(pc);

    //function pcElige(){

        if(pc == 1){
            //opcionPC = "Piedra";
            document.getElementById('opcionPC').innerHTML="Piedra";
            document.getElementById('imgPiedra3').style.display='block';
        }else if(pc == 2){
           //opcionPC = "Papel";
            document.getElementById('opcionPC').innerHTML="Papel";
            document.getElementById('imgPapel3').style.display='block';
        }else if(pc == 3){
            //opcionPC = "Tijera";
            document.getElementById('opcionPC').innerHTML="Tijera";
            document.getElementById('imgTijera3').style.display='block';
        }else{
            console.log(opcionPC);
        }
    //}

/*if (opcionPC == "Piedra"){   
        document.getElementById('opcionPC').innerHTML="Piedra";
        document.getElementById('imgPiedra3').style.display='block';
    }else if 
        (opcionPC == "Papel"){
            document.getElementById('opcionPC').innerHTML="Papel";
            document.getElementById('imgPapel3').style.display='block';
        }else if
            (opcionPC == "Tijera"){
                document.getElementById('opcionPC').innerHTML="Tijera";
                document.getElementById('imgTijera3').style.display='block';
        }
    */






/*
    // modificar codigo.-
    function aleatorio(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    let jugador = 0

    // 1= piedra  2= papel 3= tiejra
    
    let pc = aleatorio(1,3);
    jugador = prompt("Indica un numero: 1:piedra, 2:papel, 3:tijera");
    
    if(jugador== 1){
        alert("Elegiste 1 = Piedra 🥌");
    }else if(jugador == 2){
        alert("Elegiste 2 = Papel 🧻");
    }else if(jugador == 3){
        alert("Elegiste 3 = Tijera ✂");
    }else{
        alert("Elegiste PERDER!!!!");
    }

    alert("Elejiste:"+ jugador);


*/