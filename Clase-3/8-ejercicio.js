async function obtenerUsuariosAleatorios(){
    const usuario1 = await obtenerUsuario()
    const usuario2 = await obtenerUsuario()
    const usuario3 = await obtenerUsuario()

    let usuarios = []

    usuarios.push(usuario1);
    usuarios.push(usuario2);
    usuarios.push(usuario3);   
    
    return usuarios
}

async function obtenerUsuario() {
    const api = await fetch('https://randomuser.me/api');
    const data = await api.json();
    const usuario = data.results[0];
    return `${usuario.name.first} ${usuario.name.last}`;
}

// Consiga:
// Obtener 3 usuarios Aleatorios
// Devolver un array con los nombres completos de los 3 usuarios
// EJEMPLO DEL LOG: ['Matias Duro', 'Juan Garcia', 'Pedro Martinez']

const usuarios = obtenerUsuariosAleatorios();

obtenerUsuariosAleatorios().then(usuarios => {
    console.log(usuarios);
});
