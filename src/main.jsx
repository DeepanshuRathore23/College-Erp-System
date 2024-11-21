import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import LoginPage from './Components/LoginPage.jsx'
import Home from './Components/Home.jsx'
import Academics from './Components/Academics.jsx'
import Exams from './Components/Exams.jsx'
import Fees from './Components/Fees.jsx'
import Placements from './Components/Placements.jsx'
import Circulars from './Components/Circulars.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<LoginPage/>}/>      
      <Route path='/Home' element={<Home/>} />
      <Route path='/Academics' element={<Academics/>} />
      <Route path='/Exams' element={<Exams/>} />
      <Route path="/Fees" element={<Fees/>} />
      <Route path='/placements' element={<Placements/>}/>
      <Route path='/circulars' element={<Circulars/>}/>
      <Route path='*' element={<LoginPage/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
