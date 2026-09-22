import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import './App.css'
import ItemStore from './component/ItemStore'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemStore />} />
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
