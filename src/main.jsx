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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<LoginPage/>}/>      
      <Route path='/Home' element={<Home/>} />
      <Route path='/Academics' element={<Academics/>} />
      <Route path='/Exams' element={<Exams/>} />
      <Route path="/Fees" element={<Fees/>} />
      <Route path='*' element={<Home/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
