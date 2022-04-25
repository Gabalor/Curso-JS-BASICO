function juego(){

    //Aqui pedimos el dato
    valor1 = prompt("¿piedra, papel, o tijeras?");

    //Este coodigo se usa para que la maquina escoja de forma aleatoria
    var maquina = Math.ceil(Math.random()*3);
    if (maquina === 1){
        maquina = "piedra";
    } else if (maquina === 2){
        maquina = "papel";
    } else if (maquina === 3){
        maquina = "tijeras";
    }
    ///////////////////////////////////////////
    
    //Mostramos los datos que escogiste y de la maquina
    console.log ("Tu escogiste: " + valor1);
    console.log ("La maquina: " + maquina);
    
    //Realizamos la comparacion para mostrar un resultado
    if (valor1 === "piedra"){
        if (maquina === "piedra"){
            console.log("EMPATE");
        } else if (maquina === "papel"){
            console.log("PERDISTE");
        } else if (maquina === "tijeras"){
            console.log("GANASTE");
        } 
    }
    else if (valor1 === "papel"){
        if (maquina === "piedra"){
            console.log("GANASTE");
        } else if (maquina === "papel"){
            console.log("EMPATE");
        } else if (maquina === "tijeras"){
            console.log("PERDISTE");
        } 
    }
    else if (valor1 === "tijeras"){
        if (maquina === "piedra"){
            console.log("PERDISTE");
        } else if (maquina === "papel"){
            console.log("GANASTE");
        } else if (maquina === "tijeras"){
            console.log("EMPATE");
        } 
    } 
    else {
        console.log("DATO INCORRECTO");
    }
}

//Llamamos a la funcion "juego" para comenzar a jugar
juego ();


