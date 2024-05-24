import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'

const fetchUsuarios = async (setUser) => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    setUser(data.results[0])
}

export const Usuario = () => {

    const [user, setUser] = useState(null)

    const {carrito} = useCart()

    

    console.log('primer intento: ', user);
    // fetchUsuarios(setUser)    

    useEffect(() => {
        fetchUsuarios(setUser)
    }, [carrito])


    console.log('segundo intento', user);
    return (
        <div>
            {user && (
                <div>
                    <h3>Usuario Cargado: </h3>
                    <p>Nombre: ${user.name.first} {user.name.last}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.picture.medium} alt="User" />
                </div>
            )
            }
        </div>
    )
}
