import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = ({setLoginUser}) => {

    
    const notifyError = () => toast.error('User not Found ! Please Signin', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { ...user };
        try {
                const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, newUser);
                console.log("response:",response.data);
                if (response) {
                    alert(response.data.message)
                    setLoginUser(response.data.user)
                    navigate('/employee/navbar');
                } else {
                    alert("Invalid Input")
                }
            
        } catch (err) {
            notifyError()
        }
    };

    const handleForm = (value) => {
        return setUser(user => {
            return { ...user, ...value }
        })
    }
   
    return (
        <>
            <div className="formSteps">
                <form onSubmit={handleSubmit}>
                    <h1>Signin Page</h1>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" name="email" value={user.email} onChange={e => handleForm({ email: e.target.value })} placeholder="Email address" />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" name="password" value={user.password} onChange={e => handleForm({ password: e.target.value })} placeholder="Password" />
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">

                            <NavLink to="/password-reset" href="#!">Forgot password?</NavLink>
                        </div>
                    </div>


                    <div className="form-group text-center">
                        <input
                            type="submit"
                            value="Signin"
                            className="btn btn-primary"
                            style={{width:"20rem"}}
                        />
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
                    </div><br/>

                    <div className="text-center">
                        <p>Not a member? <NavLink to="/signup"><a href="#!">Register</a></NavLink></p>
                    </div>
                    <footer>
                        <h5>Note: </h5>
                            <p>Admin : raj@gmail.com</p>
                            <p>Password : welcome123</p>

                        </footer>
                </form>
            </div>
        </>
    )
}
export default Signin;