import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Product from './pages/Product'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </Router>
  )
}

export default App
