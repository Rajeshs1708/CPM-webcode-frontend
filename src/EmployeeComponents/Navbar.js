import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
    

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"style={{fontWeight:"bold",color:"darkBlue"}}><span style={{fontSize:"1.9rem"}}>C</span>PM.COM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">
                                <NavLink className="nav-link" to="/employee/create">Create Employee</NavLink>
                            </a>
                            <a className="nav-link active" aria-current="page" href="#">
                                <NavLink className="nav-link" to="/employee/list">View Employee List</NavLink>
                            </a>
                            <a className="nav-link active" aria-current="page" href="#">
                                <NavLink className="nav-link" to="/lead/list">View All Request</NavLink>
                            </a>

                            <a className="nav-link btn" href="#">
                                <NavLink className="nav-link" style={{color:"blue"}} to="/">Logout</NavLink>
                            </a>
                          
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <h1 className="text-center pt-4">Admin Home Page</h1>
                <div className="container pt-5 px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                            <h1 className="page-header-ui-title">SUPERFAST WORK. STEADFAST GROWTH.</h1>
                            <p className="page-header-ui-text mb-5">Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.</p>

                        </div>

                        <div className="col-lg-6"><img src="https://media.istockphoto.com/vectors/isometric-vector-illustration-customer-relationship-management-and-vector-id1156629606" style={{ width: "28rem", height: "15rem" }}></img></div>
                    </div>

                </div>
            </main>
            <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />

        </div>
    )
}

export default NavBar;