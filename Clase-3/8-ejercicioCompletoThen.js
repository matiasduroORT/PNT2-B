function obtenerUsuariosAleatorios() {

    let arrayUsuarios = []
    for (let i = 0; i < 3; i++) {
        
    
    const user = fetch('https://randomuser.me/api')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((datos) => {
        // console.log(datos.results)
        const usuarios = datos.results[0].name.first + " " + datos.results[0].name.last 
        // console.log(usuarios)
        return usuarios;
    });

    arrayUsuarios.push(user)
}

// Lo que sucedia aqui es que, el fetch son promesas que se ejecutan al mismo tiempo, 
// independientemente de una de la otra. eso provoca que como cada solicitud se hace en paralelo, 
// habria que esperara que todas se completen para retornar algo
// El promise.ALL es algo que vamos a ver en las proximas clases, pero se ejecuta cuando
// queremos esperar a que varias promesas se ejecuten antes de continuar con el resto
// del codigo.
    return Promise.all(arrayUsuarios)
}

// Consiga:
// Obtener 3 usuarios Aleatorios
// Devolver un array con los nombres completos de los 3 usuarios
// EJEMPLO DEL LOG: ['Matias Duro', 'Juan Garcia', 'Pedro Martinez']

const usuarios = obtenerUsuariosAleatorios()
.then((usuarios) => {
    console.log(usuarios);
})
