import { useEffect, useState } from "react"
import { Producto } from "./Producto"

export const ProductList = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
     
      setTimeout(() => {
        setProductos([
            {id: 1, nombre: 'Producto 1', precio: 500},
            {id: 2, nombre: 'Producto 2', precio: 1500}
        ])
      }, 1500);
            
        
    }, [])
    
    
  return (
    <div>
        {
          productos.map(producto => (
              <Producto key={producto.id} producto={producto} />
          ))
        }
    </div>
  )
}
