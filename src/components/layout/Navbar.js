import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link class="navbar-brand" to="/">Redux Todo</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
