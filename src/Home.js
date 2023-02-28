import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  const token = localStorage.getItem('TOKEN')
  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav
          className='navbar navbar-expand-lg'
          style={{ backgroundColor: ' #e3f2fd' }}
        >
          <div className='container'>
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
              <div className='navbar-nav ms-auto'>
                <a className='nav-link'>
                  <NavLink className='navbar-brand' to='/signin'>
                    Login
                  </NavLink>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className='row align-items-center'>
        <div className='col-md-6'>
          <h1 className='page-header-ui-title'>
            SUPERFAST WORK. STEADFAST GROWTH.
          </h1>
          <p className='page-header-ui-text mb-5'>
            Bring the very best out of your customer-facing teams with robust
            automation, comprehensive analytics, personalized solutions, and
            more. Sign up and get started in no time—the fastest implementation
            in the enterprise CRM market.
          </p>
          <div className='d-flex flex-column flex-sm-row'>
            <a
              className='btn btn-lg btn-primary fw-500 me-sm-3 mb-3 mb-sm-0'
              href='#explore'
            >
              Explore Pages
            </a>
            <a
              className='btn btn-lg btn-primary-soft text-primary fw-500'
              href='#'
            >
              Documentation
            </a>
          </div>
        </div>

        <div className='col-md-6'>
          <img
            src='https://media.istockphoto.com/vectors/isometric-vector-illustration-customer-relationship-management-and-vector-id1156629606'
            style={{ width: '100%', height: '85vh' }}
          ></img>
        </div>
      </div>
    </div>
  )
}
export default Home
