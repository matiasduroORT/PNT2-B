import React, { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export const Carrito = () => {

    const { carrito } = useCart()

    console.log('El carrito');

    useEffect(() => {
      console.log('Update Carrito');
    }, [carrito])
    


  return (
    <div>
        <h2>Carrito</h2>
        {
            carrito.map(( producto) => (
                <div key={producto.nombre}>
                    <span>{producto.nombre} - ${producto.precio}</span>
                </div>
            ))
        }
    </div>
  )
}
