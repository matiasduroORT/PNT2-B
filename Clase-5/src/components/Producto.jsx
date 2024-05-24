import React, { useContext } from 'react'
import {useCart } from '../context/CartContext'

export const Producto = ({ producto }) => {

    
    const { addToCart } = useCart();
    
return (
    <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.precio}</p>
        <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </div>
  )
}
