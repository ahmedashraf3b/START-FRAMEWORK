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
    path:'START-FRAMEWORK',
    element:<Layout/>,children:[
      {path:'START-FRAMEWORK',element:<Home/>},
      {path:'START-FRAMEWORK/about',element:<About/>},
      {path:'START-FRAMEWORK/protfolio',element:<Protfolio/>},
      {path:'START-FRAMEWORK/contact',element:<Contact/>},
      {path:'START-FRAMEWORK/*',element:<NotFound/>},
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
