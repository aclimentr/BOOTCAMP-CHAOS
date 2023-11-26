// En base al siguiente javascript, modifícalo para crear una función para que podamos enviarle 
// como parametro el precio y la función nos calcule y retorne el precio con iva + los gastos 
// de envio (4.95). De esta forma estaremos optimizando el codigo y reutilizandolo.

const price1 = 8;
const ivaPrice1 = price1 * 1.21
const totalPrice1 = ivaPrice1 + 4.95

function funcionSumar(price) {
    if(typeof price === 'number'){
        var sum = price * 1.21;
        var env = sum + 4.95;
        return env;
    }else{
        console.log('ERROR');
    }
};

var resultado1 = funcionSumar(10); 
console.log(resultado1);


const price2 = 20;
const ivaPrice2 = price2 * 1.21
const totalPrice2 = ivaPrice2 + 4.95

function sumaIvayEnvio(number){
    if(typeof number === 'number'){
        var iva = number * 1.21;
        var env = iva + 4.95;
        return env;
    }else{
        return NaN;
    }
}

var resultado2 = sumaIvayEnvio(234);
console.log(resultado2);