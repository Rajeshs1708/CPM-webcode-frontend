import { NavLink } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  const handleSubmitBasic = e => {
    try {
      e.preventDefault()
      var options = {
        key: `${process.env.REACT_APP_KEY}`,
        key_secret: `${process.env.REACT_APP_KEY_SECRET}`,
        amout: 799 * 100,
        currency: 'INR',
        name: 'CRM_GROUP',
        description: 'for Basic user',
        handler: function (response) {
          alert(response.razorpay_payment_id)
        },
        prefill: {
          name: 'Rajesh',
          email: `${process.env.REACT_APP_KEY_EMAIL}`,
          contact: `${process.env.REACT_APP_KEY_CONTACT}`
        },
        notes: {
          address: 'Razorpay Corporate office'
        },
        theme: {
          color: '#3399cc'
        }
      }
      var pay = new window.Razorpay(options)
      pay.open()
    } catch (error) {
      alert(error)
    }
  }
  const handleSubmitStandard = e => {
    try {
      e.preventDefault()
      var options = {
        key: `${process.env.REACT_APP_KEY}`,
        key_secret: `${process.env.REACT_APP_KEY_SECRET}`,
        amout: 1649 * 100,
        currency: 'INR',
        name: 'CRM_GROUP',
        description: 'for Basic user',
        handler: function (response) {
          alert(response.razorpay_payment_id)
        },
        prefill: {
          name: 'Rajesh',
          email: `${process.env.REACT_APP_KEY_EMAIL}`,
          contact: `${process.env.REACT_APP_KEY_CONTACT}`
        },
        notes: {
          address: 'Razorpay Corporate office'
        },
        theme: {
          color: '#3399cc'
        }
      }
      var pay = new window.Razorpay(options)
      pay.open()
    } catch (error) {
      alert(error)
    }
  }
  const handleSubmitPremium = e => {
    try {
      e.preventDefault()
      var options = {
        key: `${process.env.REACT_APP_KEY}`,
        key_secret: `${process.env.REACT_APP_KEY_SECRET}`,
        amout: 3299 * 100,
        currency: 'INR',
        name: 'CRM_GROUP',
        description: 'for Basic user',
        handler: function (response) {
          alert(response.razorpay_payment_id)
        },
        prefill: {
          name: 'Rajesh',
          email: `${process.env.REACT_APP_KEY_EMAIL}`,
          contact: `${process.env.REACT_APP_KEY_CONTACT}`
        },
        notes: {
          address: 'Razorpay Corporate office'
        },
        theme: {
          color: '#3399cc'
        }
      }
      var pay = new window.Razorpay(options)
      pay.open()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: '#B9D9EB' }}>
        <div className='p-5'>
          <div className='row'>
            <h1 className='text-center text-primary p-4'>Pricing</h1>
            <p
              className='lead text-center'
              style={{
                color: 'darkblue',
                fontSize: '35px',
                fontWeight: 'bold'
              }}
            >
              Razorpay Integration
            </p>
            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card card1 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Basic</h5>
                  <small className='text-muted'>Individual</small>
                  <br />
                  <span className='h2'>₹ 799</span>/month
                  <br />
                  <div>
                    <div className='d-grid my-3'>
                      <button
                        type='submit'
                        className='btn btn-outline-dark btn-block'
                        onClick={handleSubmitBasic}
                      >
                        Pay with Razorpay
                      </button>
                    </div>
                    <ul>
                      <li>Automate and optimize your sales cycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card card1 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Standard</h5>
                  <small className='text-muted'>Small Business</small>
                  <br />
                  <span className='h2'>₹ 1649</span>/month
                  <br />
                  <div>
                    <div className='d-grid my-3'>
                      <button
                        className='btn btn-outline-dark btn-block'
                        onClick={handleSubmitStandard}
                      >
                        Pay with Razorpay
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

            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card card1 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Premium</h5>
                  <small className='text-muted'>Large Company</small>
                  <br />
                  <span className='h2'>₹ 3299</span>/month
                  <br />
                  <div>
                    <div className='d-grid my-3'>
                      <button
                        className='btn btn-outline-dark btn-block'
                        onClick={handleSubmitPremium}
                      >
                        Pay with Razorpay
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
          <div className='text-center'>
            <NavLink to={'/employee/navbar'}>
              <button className='btn btn-secondary'>Back to Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
