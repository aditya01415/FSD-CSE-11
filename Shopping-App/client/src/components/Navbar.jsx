import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/myCart">My Cart</Link>
      <Link to="/myOrders">My Orders</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </div>
  )
}

export default Navbar
