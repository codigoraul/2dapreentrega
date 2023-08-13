import CardWidget from '../CardWidget/CardWidget'
import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="container ">
          <div className="row">
          <div className="col-md-4">
            <div className="logo">
                  <h1 text-size="xl-4">Logo</h1>
                  <img src='#' alt="" />
              </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="nav">
                      <li className='nav-item'>
                        <Link to='/' className="nav-link">Inicio</Link>
                        
                      </li>
                      <li className='nav-item'>
                        <a href='#' className="nav-link">Nosotros</a>
                      </li>
                      <li className='nav-item'>
                        <a className="nav-link" href="#">Vestuario</a>
                      </li>
                      <li className='nav-item'>
                        <a className="nav-link" href="#">Tecnología</a>
                      </li>
                </ul>
            </div>
          </div>
          <div className="col-md-2">
          <CardWidget />
          </div>
            
           
            </div>
        </nav>

    </div>
  )
}

export default Navbar