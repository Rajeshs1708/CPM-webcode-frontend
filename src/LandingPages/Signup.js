import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {


    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: 0
    })

    const [isChecked, setIsChecked] = useState(false);
    const [role, setRole] = useState(0);

    useEffect(() => {
        if (isChecked) {
            setRole(1);
            console.log("Role 1")
        } else {
            setRole(0);
        }
    }, [isChecked]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        console.log("role  :",role);
        e.preventDefault();
        try {
            const { firstName, lastName, email, password,role} = user;
            console.log(user);
            if (firstName && lastName && email && password || role ) {
                axios.post(`http://localhost:5000/api/signup`, user)
                    .then(res =>{
                        if (res) {
                            const notify = () => toast.success(`*${res.data.message}*`, { theme: 'colored'});
                            notify()
                            setTimeout(() => {
                                navigate('/signin')
                            }, 3000)
                        }
                    })
                    .catch(err => {
                        const notify = () => toast.error(`*${err.response.data.message}*`, { theme: 'colored' });
                        notify()
                    })
            } 
            else {
                const notify = () => toast.error("Invalid input", { theme: 'colored' });
                notify()
            }

        }catch (err) {
            const notify = () => toast.error(" Input Error", { theme: 'colored' });
            notify()
            console.log("Error...", err);
        }
    };
    const toggleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <>
            <div className="formSteps">
                <div className="display-1"> <h1>Signup</h1></div>
                <form className="row g-3 needs-validationd-flex flex-column" style={{ width: "20rem" }} onSubmit={handleSubmit} novalidate>
                    <div className="col-md-12">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" name="firstName" value={user.firstName} onChange={handleChange} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label for="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" name="lastName" value={user.lastName} onChange={handleChange} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="col-md-12">
                        <label for="validationCustom03" className="form-label">E-mail</label>
                        <input type="text" className="form-control" id="validationCustom03" name="email" value={user.email} onChange={handleChange} required />
                        <div className="invalid-feedback">
                            Please provide a valid E-mail.
                        </div>
                    </div>

                    <div className="col-md-12">
                        <label for="validationCustom05" className="form-label">Password</label>
                        <input type="password" className="form-control" id="validationCustom05" name="password" value={user.password} onChange={handleChange} required />
                        <div className="invalid-feedback">
                            Please provide a Password.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <label>
                                <input
                                    type="checkbox"
                                    value={role.role}
                                    checked={isChecked}
                                    onChange={toggleCheckboxChange}
                                />

                                {" Sign up as Admin"}
                            </label>

                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button style={{ width: "20rem" }} className="btn btn-primary" type="submit">Singup</button>
                        <ToastContainer hideProgressBar={true}/>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Signup