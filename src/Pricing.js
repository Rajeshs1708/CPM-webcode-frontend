import { NavLink } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <a
            className='navbar-brand'
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
            <div className='navbar-nav'>
              <a className='nav-link' aria-current='page' href='#'>
                <NavLink className='navbar-brand' to='/'>
                  Home
                </NavLink>
              </a>
              <a className='nav-link' href='#'>
                <NavLink className='navbar-brand' to='/pricing'>
                  Pricing
                </NavLink>
              </a>
              <a className='nav-link'>
                <NavLink className='navbar-brand' to='/lead/create'>
                  ContactUs
                </NavLink>
              </a>
              <a className='nav-link'>
                <NavLink
                  className='navbar-brand'
                  style={{ color: 'blue' }}
                  to='/signin'
                >
                  Signin
                </NavLink>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class='container-fluid'>
        <div class='container p-5'>
          <div class='row'>
            <div class='col-lg-4 col-md-12 mb-4'>
              <div class='card card1 h-100'>
                <div class='card-body'>
                  <h5 class='card-title'>Basic</h5>
                  <small class='text-muted'>Individual</small>
                  <br />
                  <br />
                  <span class='h2'>$8</span>/month
                  <br />
                  <br />
                  <div>
                    <div class='d-grid my-3'>
                      <button class='btn btn-outline-dark btn-block'>
                        Select
                      </button>
                    </div>
                    <ul>
                      <li>Automate and optimize your sales cycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-12 mb-4'>
              <div class='card card1 h-100'>
                <div class='card-body'>
                  <h5 class='card-title'>Standard</h5>
                  <small class='text-muted'>Small Business</small>
                  <br />
                  <br />
                  <span class='h2'>$20</span>/month
                  <br />
                  <br />
                  <div>
                    <div class='d-grid my-3'>
                      <button class='btn btn-outline-dark btn-block'>
                        Select
                      </button>
                    </div>
                    <ul>
                      <li>
                        Improve customer acquisition and accelerate growth
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-12 mb-4'>
              <div class='card card1 h-100'>
                <div class='card-body'>
                  <h5 class='card-title'>Premium</h5>
                  <small class='text-muted'>Large Company</small>
                  <br />
                  <br />
                  <span class='h2'>$40</span>/month
                  <br />
                  <br />
                  <div>
                    <div class='d-grid my-3'>
                      <button class='btn btn-outline-dark btn-block'>
                        Select
                      </button>
                    </div>
                    <ul>
                      <li>
                        Scale exponentially with dedicated BI capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
