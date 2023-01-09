import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = ({setLoginUser}) => {
    
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { ...user };
        try {
            if(newUser){
                axios.post(`http://localhost:5000/api/signin`, newUser)
                .then(res => {
                    if (res) {
                        console.log(res.data.user);
                        const notify = () => toast.success(`Welcome Mrs/Mr.${res.data.user.firstName}`, {autoClose: 3000,theme: "colored",});
                        notify()
                        localStorage.setItem('TOKEN', res.data.token)
                        localStorage.setItem('NAME', res.data.user.firstName)
                        localStorage.setItem('EMAIL', res.data.user.email)
                        setLoginUser(res.data.user)
                        setTimeout(() => {
                            navigate('/employee/navbar');
                        }, 3000)
                    }
                })
                .catch(err => {
                    const notify = () => toast.error(`*${err.response.data.message}*`, { theme: 'colored' });
                    notify()
                })
            } else {
                const notify = () => toast.error("Invalid input", { theme: 'colored' });
                notify()
            }

        } catch (err) {
            const notify = () => toast.error(" Input Error", { theme: 'colored' });
            notify()
            console.log("Error...", err);
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
                        <div className="col">
                            <NavLink to="/forgetPassword">Forgot password?</NavLink>
                        </div>
                    </div>

                    <div className="form-group text-center">
                        <input
                            type="submit"
                            value="Signin"
                            className="btn btn-primary"
                            style={{width:"20rem"}}
                        />
                    <ToastContainer autoClose={3000} theme="colored" />

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