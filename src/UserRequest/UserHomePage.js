import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { NavLink,useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const UserHomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('TOKEN');
      if (!token) {
        navigate('/')
      }
    }, [navigate])
    return (
        <div>
            <NavigationBar />
            <main>
                <h1 className="text-center pt-4">Welcome ! User</h1>
                <p className="lead text-center">Hi ! {localStorage.getItem("NAME")}</p>
                <div className="container pt-5 px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                        <h1 className="page-header-ui-title">SUPERFAST WORK. STEADFAST GROWTH.</h1>
                        <p className="page-header-ui-text mb-5">Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.</p>
                        
                    </div>

                    <div className="col-lg-6"><img src="https://media.istockphoto.com/vectors/isometric-vector-illustration-customer-relationship-management-and-vector-id1156629606" style={{width:"28rem",height:"15rem"}}></img></div>
                </div>
                
            </div>
            </main>
           
        </div>
    )
}

export default UserHomePage;