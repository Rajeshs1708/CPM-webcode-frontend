import React from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

function NavigationBar () {
  const navigate = useNavigate()
  const token = localStorage.getItem('TOKEN')
  const role = localStorage.getItem('ROLE')

  const handleLogout = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/signout`)
        .then(res => {
          if (res) {
            localStorage.removeItem('TOKEN')
            localStorage.removeItem('NAME')
            localStorage.removeItem('EMAIL')
            localStorage.removeItem('ROLE')
            navigate('/')
          }
        })
        .catch(err => {
          const notify = () =>
            toast.error(`${err.response.data.message}`, { theme: 'colored' })
          notify()
        })
    } catch (err) {
      console.log('Error...', err)
    }
  }
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          href='#'
          style={{ fontWeight: 'bold', color: 'darkBlue' }}
        >
          <span style={{ fontSize: '1.9rem' }}>C</span>RM.COM
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
         {role == 1 ? (
            <div className='navbar-nav'>
              <a className='nav-link' href='#'>
                <NavLink className='nav-link' to='/employee/create'>
                  Create Employee
                </NavLink>
              </a>
              <a className='nav-link active' aria-current='page' href='#'>
                <NavLink className='nav-link' to='/employee/list'>
                  View Employee List
                </NavLink>
              </a>
              <a className='nav-link active' aria-current='page' href='#'>
                <NavLink className='nav-link' to='/lead/list'>
                  View All Request
                </NavLink>
              </a>

              <a className='nav-link btn' href='#'>
                <NavLink
                  onClick={handleLogout}
                  className='nav-link'
                  style={{ color: 'blue' }}
                  to='/'
                >
                  Logout
                </NavLink>
                <ToastContainer hideProgressBar={true} />
              </a>
            </div>
          ) : (
            <div className='navbar-nav'>
              <a className='nav-link' aria-current='page' href='#'>
                <a className='nav-link'>Customer Info</a>
              </a>
              <a className='nav-link' href='#'>
                <a className='nav-link'>Create Leads</a>
              </a>
              <a className='nav-link btn'>
                <NavLink
                  onClick={handleLogout}
                  className='nav-link'
                  to='/'
                  style={{ color: 'blue' }}
                >
                  Logout
                </NavLink>
                <ToastContainer hideProgressBar={true} />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
