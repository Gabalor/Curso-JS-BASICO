
//Asi se declara un objetom en este caso el obejo "miAuto"
var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,

    //asi se crea un metodo dentro de un objeto
    //en este caso el metodo "detalleDelAuto"
    //los metodos llaman a una funcion
    //detalle: el "this" dentro del sig codigo, hace referencia
    //al objeto padre, en este caso a "miAuto"
    //seria como decir this.modelo = miAuto.modelo
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio} `);
    }
}

//Asi especificamos si queremos ver solo un atributo del objeto
miAuto.marca

//Asi se llama a un metodo:
miAuto.detalleDelAuto();