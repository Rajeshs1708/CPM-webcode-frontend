import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateLeads = () => {

    const notify = () => toast.success(' request sent successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;


    const [employeeDetails, setEmployeeDetails] = useState({
        name: "",
        email: "",
        queryType: "",
        query: ""
    });




    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmployee = { ...employeeDetails };
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/create-lead`, newEmployee);
            console.log();
            if (response) {
                setEmployeeDetails({
                    name: "",
                    email: "",
                    queryType: "",
                    query: ""
                });
                notify();

            }
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    const handleForm = (value) => {
        return setEmployeeDetails(employee => {
            return { ...employee, ...value }
        })
    }


    return (

        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">CPM.COM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">
                                <NavLink className="navbar-brand" to="/">Home</NavLink>
                            </a>
                            <a className="nav-link" href="#">
                                <NavLink className="navbar-brand" to="/pricing">Pricing</NavLink>
                            </a>
                            <a className="nav-link" href="#">
                                <NavLink className="navbar-brand" to="/contactus">ContactUs</NavLink>
                            </a>
                            <a className="nav-link">
                                <NavLink className="navbar-brand" to="/signin">Signin</NavLink>
                            </a>

                        </div>
                    </div>
                </div>
            </nav>


            <div className="formStepsContact">
                <h3>Contact Us</h3>
                <form style={{ width: "20rem" }} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" id="name" type="text" value={employeeDetails.name} onChange={e => handleForm({ name: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" id="email" type="text" value={employeeDetails.email} onChange={e => handleForm({ email: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Query Type</label>
                        <input className="form-control" id="queryType" type="text" value={employeeDetails.queryType} onChange={e => handleForm({ queryType: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Query</label>
                        <input className="form-control" id="query" type="text" value={employeeDetails.query} onChange={e => handleForm({ query: e.target.value })} required />
                    </div>


                    <br />
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Request"
                            className="btn btn-primary"
                            style={{ width: "20rem" }}
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
                    </div>
                </form>
            </div>

        </>

    )
}

export default CreateLeads;