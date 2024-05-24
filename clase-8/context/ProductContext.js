import React, { createContext, useState } from 'react'


export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [productos, setProductos] = useState([])
    const [cartItems, setCartItems] = useState([])



    const addProduct = (newProduct) => {
        setProductos((prevProductos) => [...prevProductos, newProduct])
    }

    const addToCart = (producto) => {
        setCartItems((prevItems) => {
            const existeProducto = prevItems.find(item => item.id === producto.id);
            if(existeProducto){
                return prevItems.map( item => 
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
                )
            } else {
                return [...prevItems, producto]
            }
        })
    }


    const RemoveFromCart = (productoId) => {
        setCartItems((prevItems) => prevItems.filter(item =>item.id !== productoId))
    }


    const totalCarrito = () => {
        console.log('items en cart: ', cartItems);
        const itemsEnCart = cartItems.reduce((total, item) => total + item.cantidad, 0)
        console.log('En el carrito: ', itemsEnCart);

        return itemsEnCart
    }


  
  
 return (
    <ProductContext.Provider value={{addProduct, productos, setProductos, addToCart, RemoveFromCart, totalCarrito}}>
        { children }
    </ProductContext.Provider>
 )
}
