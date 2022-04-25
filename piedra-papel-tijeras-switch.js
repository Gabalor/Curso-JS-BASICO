function juego(){

    //Aqui pedimos el dato
    valor1 = prompt("¿piedra, papel, o tijeras?");

    //Este coodigo se usa para que la maquina escoja de forma aleatoria
    var maquina = Math.ceil(Math.random()*3);
    switch (maquina){
        case 1:
        maquina = "piedra";
        break;
        case 2:
        maquina = "papel";
        break;
        case 3:
        maquina = "tijeras";
        break;
    }
    ///////////////////////////////////////////
    
    //Mostramos los datos que escogiste y de la maquina
    console.log ("Tu escogiste: " + valor1);
    console.log ("La maquina: " + maquina);
    
    //Realizamos la comparacion para mostrar un resultado
switch (valor1){
    case "piedra":
        switch (maquina){
            case "piedra":
            console.log("EMPATE");
            break;
            case "papel":
            console.log("PERDISTE");
            break;
            case "tijeras":
            console.log("GANASTE");
            break;
        }
    break;
    case "papel":
        switch (maquina){
            case "piedra":
            console.log("GANASTE");
            break;
            case "papel":
            console.log("EMAPATE");
            break;
            case "tijeras":
            console.log("PERDISTE");
            break;   
        }
    break;
    case "tijeras":
        switch (maquina){
            case "piedra":
            console.log("PERDISTE");
            break;
            case "papel":
            console.log("GANASTE");
            break;
            case "tijeras":
            console.log("EMPATE");
            break;   
        }
    break;
    default:
        console.log("DATO INCORRECTO");
        break;
}
}

//Llamamos a la funcion "juego" para comenzar a jugar
juego ();


