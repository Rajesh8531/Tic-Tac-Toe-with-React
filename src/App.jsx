import { useState } from 'react'
import Multiplayer from './components/Multiplayer'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Computer from './components/Computer'
import Header from './components/Header'
import Index from './components/Index'
import Difficult from './components/Difficult'



function App() {
  
  let router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Header />} >
      <Route index element={<Index />} />
      <Route path='multiplayer' element={<Multiplayer />} />
      <Route path='computer' element={<Computer />} />
      <Route path='difficult' element={<Difficult />} />
    </Route>
    </>
  ))
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
