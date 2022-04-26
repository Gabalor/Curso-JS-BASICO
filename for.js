var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//FORMA 1
//Se inicializa una variable i y se va incrementando despues
// de cada ejecucion del for hasta que no se cumpla la condicion
// del for
for(var i = 0; i< estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}


//FORMA 2 - for of
//Tenemos que inicarlizar una variable en singular de nuestro
//array en plural, y mientras sigan existiendo elementos en nuestro array
//se seguira ejecutando esta tarea
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}