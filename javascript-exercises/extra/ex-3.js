const animals = ["Salamandra montesa", "Delinicio", 
"Tigre de puntos", "Saltamontañas"];


var contador = 0;

for(var i = 0; i < animals.length; i++) {
    const animales = animals[i];
    for(var j = 0; j < animales.length; j++) {
        if(animales[j] === "a")
        contador++;
    }
    console.log(contador);
}

