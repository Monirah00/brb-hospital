import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">BRB HOSPITAL</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Doctors">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="/News" tabindex="-1">News</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Header />
        </div>
    )
}

export default Navbar

