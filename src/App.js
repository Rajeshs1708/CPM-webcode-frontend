import './App.css';
import EmployeeList from './EmployeeComponents/EmployeeList';
import CreateEmployee from './EmployeeComponents/CreateEmployee';
import UpdateEmployee from './EmployeeComponents/UpdateEmployee';
import NavBar from './EmployeeComponents/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './LandingPages/Signup';
import Signin from './LandingPages/Signin';
import ForgetPassword from './LandingPages/ForgetPassword';
import NewPassword from './LandingPages/NewPassword';
import { useState } from 'react';
import UserHomePage from './UserRequest/UserHomePage';
import Pricing from './Pricing';
import CreateLeads from './Leads/CreateLeads';
import LeadsList from './Leads/LeadsList';
import UpdateLead from './Leads/UpdateLead';

function App() {

  const [user, setLoginUser] = useState({})
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgetPassword" element={<ForgetPassword />} />
          <Route exact path="/newPassword" element={<NewPassword />} />
          <Route exact path="/signin" element={<Signin setLoginUser={setLoginUser} />} />
        </Routes>
        <div className='MainComponent'>
          <Routes>
            {/* admin route */}
            <Route path="/employee/navbar" element={user.role == 1 ? <NavBar setLoginUser={setLoginUser} /> :<UserHomePage setLoginUser={setLoginUser}/>} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/lead/create" element={<CreateLeads />} />
            <Route exact path="/lead/list" element={<LeadsList />} />
            <Route exact path="/update/lead/:id" element={<UpdateLead />} />

            <Route exact path="/employee/list" element={<EmployeeList />} />
            <Route path="/employee/create" element={<CreateEmployee />} />
            <Route path="/employee/update/:id" element={<UpdateEmployee />} />
          </Routes>
          {/* User route */}
        </div>
      </div>
    </Router>
  );
}

export default App;
