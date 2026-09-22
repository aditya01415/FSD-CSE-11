import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserLayout from './components/UserLayout'
import './App.css'
import ItemStore from './components/ItemStore'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
        <Route index element={<ItemStore/>} />
        </Route>
      
        <Route path="/myCart" element={<h1>My Cart</h1>} />
        <Route path="/myOrders" element={<h1>My Orders</h1>} />
        <Route path="/settings" element={<h1>My Settings</h1>} />
        <Route path="/profile" element={<h1>My Profile</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

