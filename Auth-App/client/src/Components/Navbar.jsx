import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/stopwatch">Stopwatch</Link>
        <Link to="/stopwatch">My Stopwatch</Link>
    </div>
  )
}

export default Navbar
