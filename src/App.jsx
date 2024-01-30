import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home.jsx'
import Card from './Card'
import { CartProvider } from "react-use-cart"

function App() {

  return (
    <>
      <CartProvider>
        <Home />
        <Card />
      </CartProvider>
    </>
  )
}

export default App
