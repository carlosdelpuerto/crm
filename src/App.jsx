import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../src/layout/Layout.jsx'
import Inicio from './paginas/Inicio.jsx'
import NuevoCliente from './paginas/NuevoCliente.jsx'
import EditarCliente from './paginas/EditarCliente.jsx'
import VerCliente from './paginas/VerCliente.jsx'


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio/>} />
          <Route path='nuevo' element={<NuevoCliente/>}  />
          <Route path='editar/:id' element={<EditarCliente/>}  />
          <Route path=':id' element={<VerCliente/>}  />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
