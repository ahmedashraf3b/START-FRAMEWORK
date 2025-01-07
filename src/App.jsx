import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/layout/layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Protfolio from './Components/Protfolio/Protfolio';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

let x = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'protfolio',element:<Protfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>},
    ]
  }
])

function App() {


  return (
    <>
    <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
