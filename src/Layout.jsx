import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './Context/UserContext'
import Data from './UserData.json'

function Layout() {
  return (
    <UserProvider>
        <Outlet/>
    </UserProvider>
  )
}

export default Layout