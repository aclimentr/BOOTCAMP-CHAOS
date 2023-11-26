// Al siguiente javascript no funciona como deberia...podrias arreglarlo?

// Deberia de imprimir por consola "Abel".

const user = {name: "Abel", surname: "Cabeza"}

function a(user){
    const name = b(user.name, user.surname);
    // const surname = b(user.surname);
    console.log(name)
}

function b(name, surname){
    return "Que pasa " + name + surname;
}

a(user);
