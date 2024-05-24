import './App.css'
import { CartProvider } from './context/CartContext'
import { ProductList } from './components/ProductList'
import { Carrito } from './components/Carrito'
import { Usuario } from './components/Usuario'

function App() {

  return (
   <CartProvider>
    <ProductList />
    <Carrito/>
    <Usuario/>
   </CartProvider>
    
  )
}

export default App
