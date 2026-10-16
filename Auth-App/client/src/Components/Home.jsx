import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1 style = {{color:"red"}}>Home Page</h1>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home
