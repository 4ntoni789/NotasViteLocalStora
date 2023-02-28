import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AgregarTarea from './componentes/AgregarTarea'
import BtnNuevo from './componentes/BtnNuevo'
import Header from './componentes/Header'
import Inicio from './paginas/Inicio'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/recordatorio' element={<h1>Recordatorio</h1>} />
          <Route path='/options' element={<h1>Options</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
