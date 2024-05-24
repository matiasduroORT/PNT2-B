import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterProvider } from './context/CounterContext'
import { Counter } from './components/Counter'

function App() { 

  return (
  <CounterProvider>
    <Counter />
  </CounterProvider>
  )
}

export default App
