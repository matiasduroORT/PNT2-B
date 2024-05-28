import React, { createContext, useEffect, useState } from 'react'


export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [productos, setProductos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const fetchProducts = async () => {
        try {

            const respuesta = await fetch('https://6656578f9f970b3b36c51233.mockapi.io/api/v1/productos')
            const data = await respuesta.json();
            setProductos(data)
        } catch (error) {
            console.error('Error en el fetch de productos: ', error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const addProduct =  async (newProduct) => {
        try {
            const respuesta = await fetch('https://6656578f9f970b3b36c51233.mockapi.io/api/v1/productos', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newProduct)
            })
            console.log('newProduct: ', newProduct);

            if(respuesta.ok){
                const productoCreado = await respuesta.json()
                console.log('ProductoCreado: ', productoCreado);
                setProductos(( prevProducto) => [...prevProducto, productoCreado]) 
            }else{
                alert('Error al agregar Producto')
            }
        } catch (error) {
            console.error('Error en la carga del producto: ', error)

        }
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
        // console.log('items en cart: ', cartItems);
        const itemsEnCart = cartItems.reduce((total, item) => total + item.cantidad, 0)
        // console.log('En el carrito: ', itemsEnCart);

        return itemsEnCart
    }


  
  
 return (
    <ProductContext.Provider value={{addProduct, productos, setProductos, addToCart, RemoveFromCart, totalCarrito, fetchProducts}}>
        { children }
    </ProductContext.Provider>
 )
}
