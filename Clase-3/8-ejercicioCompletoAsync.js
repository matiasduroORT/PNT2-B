async function obtenerUsuariosAleatorios() {
    const usuarios = [];
  
    for (let i = 0; i < 3; i++) {
        const response = await fetch("https://randomuser.me/api/");
    
        // Convertimos la respuesta a JSON
        const data = await response.json();
  
        // Obtenemos los datos del usuario
        const usuario = data.results[0].name.first + " " + data.results[0].name.last;
  
        // Agregamos el usuario al array
        usuarios.push(usuario);

    }
  
    return usuarios;
  }
  
  // Obtenemos 3 usuarios aleatorios

  const func = async () => {
      const usuarios = await obtenerUsuariosAleatorios();
      console.log(usuarios);
  }

  func();