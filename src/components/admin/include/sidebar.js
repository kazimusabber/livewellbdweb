import React from 'react';
import { Link } from 'react-router-dom';  
export default function Sidebar() {
    return(
       <div>  
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">  
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">  
                <div className="sidebar-brand-text mx-3">   <img src="../../livewelllogo.svg" alt="nothing"/></div>  
            </a>  

            <hr className="sidebar-divider my-0" />  

            <li className="nav-item active">  
            <Link to = "/admin" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>  
                    <span> Dashboard </span>
                
                </Link>
            </li>  

            <hr className="sidebar-divider" />  
            <div className="sidebar-heading">  
                Interface  
            </div> 

            <li className="nav-item">  
                <Link className="nav-link" to="/admin/allappointments"><i className="fas fa-file"></i> All Appointments</Link>  
                
            </li> 
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/urgentdoctorschedule"><i className="fas fa-calendar-alt"></i> Urgent Schedule</Link>  
                
            </li>   
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/review"><i className="fas fa-calendar-alt"></i> Reviews</Link>  
                
            </li> 
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/specialty"><i className="fas fa-calendar-alt"></i> Specialties</Link>  
                
            </li> 
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/trainingname"><i className="fas fa-calendar-alt"></i> Training</Link>  
                
            </li> 
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/doctors"><i className="fas fa-calendar-alt"></i> Doctors</Link>  
                
            </li>  
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/patients"><i className="fas fa-calendar-alt"></i> Patients</Link>  
                
            </li>
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/prescriptions"><i className="fas fa-calendar-alt"></i> Prescriptions</Link>  
                
            </li>
             <li className="nav-item">  
                <Link className="nav-link" to="/admin/files"><i className="fas fa-calendar-alt"></i> Files & Documents </Link>  
                
            </li>
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/role"><i className="fas fa-calendar-alt"></i> Role</Link>  
                
            </li>
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/medicine"><i className="fas fa-calendar-alt"></i> Medicine</Link>  
            </li>
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/diagnosis"><i className="fas fa-calendar-alt"></i> Diagnosis</Link>  
            </li>   
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/relation"><i className="fas fa-calendar-alt"></i> Relation</Link> 
            </li> 
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/accounthead"><i className="fas fa-calendar-alt"></i> Account Head</Link>  
            </li>  
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/message"><i className="fas fa-calendar-alt"></i> Messages</Link>  
            </li>   
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/notification"><i className="fas fa-calendar-alt"></i> Notification</Link>  
            </li> 
            <li className="nav-item">  
                <Link className="nav-link" to="/admin/wallet"><i className="fas fa-calendar-alt"></i> Wallet</Link>  
            </li>   
            <li className="nav-item">  
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">  
                    <i className="fas fa-fw fa-cog"></i>  
                    <span>Settings</span>  
                </a>  
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">  
                    <div className="bg-white py-2 collapse-inner rounded">  
                        <h6 className="collapse-header">Custom Components:</h6>  
                        <Link className="collapse-item" to="/admin/email">Email</Link>  
                        <Link className="collapse-item" to="/admin/paymentgateway">Payment Gateway</Link> 
                        <Link className="collapse-item" to="/admin/smsgateway">Sms Gateway</Link> 
                        <Link className="collapse-item" to="/admin/servicecharge">Service Charge</Link>  
                        <Link className="collapse-item" to="/admin/commission">Agent Commission</Link>   
                    </div>  
                </div>  
            </li>  
            <hr className="sidebar-divider d-none d-md-block" />  
            <div className="text-center d-none d-md-inline">  
                <button className="rounded-circle border-0" id="sidebarToggle"></button>  
            </div>  

        </ul>  
    </div>  
    )
}
