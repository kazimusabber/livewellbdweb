import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Layout from "./components/include/mainlayout";
import Adminlayout from "./components/admin/include/adminlayout";
import Login from "./components/authentication/login";
import Logout from "./components/authentication/logout";
import Registration from "./components/authentication/registration";
import Allappointment from "./components/admin/menu/allappointment";
import Appointmentdetails from "./components/admin/menu/appointmentdetails";


import Urgentdoctorschedulelist from "./components/admin/menu/urgentdoctor/urgentdoctorschedulelist";
import Addurgentdoctorschedule from "./components/admin/menu/urgentdoctor/addurgentdoctorschedule";
import Editurgentdoctorschedule from "./components/admin/menu/urgentdoctor/editurgentdoctorschedule";
import Doctors from "./components/admin/menu/doctor";
import Patients from "./components/admin/menu/patient";
import Patientdetails from "./components/admin/menu/patientdetails";


import Specialty from "./components/admin/menu/specialty/list";
import Createspecialty from "./components/admin/menu/specialty/create";
import Editspecialty from "./components/admin/menu/specialty/edit";

import Doctor from "./components/doctor/home";
import Patient from "./components/patient/home";
import Patientdashboard from "./components/patient/patientdashboard";
import Notificationchat from "./components/patient/notificationandchat";
import Favouritedoctor from "./components/patient/favouritedoctor";
import Patientaccount from "./components/patient/patientaccount";
import Patientwallet from "./components/patient/wallet";
import Patientdoctorprofile from "./components/patient/doctorprofile";
import Selectpatient from "./components/patient/selectpatient";
import Healthcondition from "./components/patient/currenthealthcondition";
import Otherprofile from "./components/patient/otherprofile";
import Patientdocument from "./components/patient/patientdocument";
import Paymentgateway from "./components/patient/paymentgateway";


import Role from "./components/admin/menu/role/list";
import Editrole from "./components/admin/menu/role/edit";
import Createrole from "./components/admin/menu/role/create";
import Emailsetting from "./components/admin/menu/settings/email";
import Smsgatewaysetting from "./components/admin/menu/settings/smsgateway";
import Servicechargesetting from "./components/admin/menu/settings/servicecharge";
import Commissionsetting from "./components/admin/menu/settings/commission";

import Prescription from "./components/admin/menu/prescription/list";
import Prescriptiondetails from "./components/admin/menu/prescription/details";

import Filecreate from "./components/admin/menu/files/create";
import Filelist from "./components/admin/menu/files/list";


import Review from "./components/admin/menu/review/list";
import Trainingnamelist from "./components/admin/menu/trainingname/list";
import Trainingnameadd from "./components/admin/menu/trainingname/create";
import  Trainingedit from "./components/admin/menu/trainingname/edit";
import  Accountheadlist from "./components/admin/menu/accounthead/list";
import  Messagelist from "./components/admin/menu/message/list";


import  Medicinelist from "./components/admin/menu/medicine/list";
import  Addmedicine from "./components/admin/menu/medicine/create";
import  Medicineedit from "./components/admin/menu/medicine/edit";

import  Diagnosislist from "./components/admin/menu/diagnosis/list";
import  Adddiagnosis from "./components/admin/menu/diagnosis/create";

import  Notificationlist from "./components/admin/menu/notification/list";
import  Notificationsend from "./components/admin/menu/notification/create";

import Home from "./components/frontend/home";
import Speciality from "./components/frontend/specialized";
import Generalsearch from "./components/frontend/generalsearch";
import Specializeddoctorlist from "./components/frontend/specializeddoctorlist";
import Searchdoctor from "./components/frontend/searchdoctor";
import Advancesearch from "./components/frontend/advancesearch";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(
  fas
);
function App() {

  const [token, setToken] = useState();

  if(!localStorage.getItem("islogin")) {
    return <Login setToken={setToken} />
  }
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/patient" element={<Patient/>}>
            <Route path='/patient' element={<Patientdashboard/>} />
            <Route path='/patient/chat' element={<Notificationchat/>} />
            <Route path='/patient/fovourite-doctor' element={<Favouritedoctor/>} />
            <Route path='/patient/my-account' element={<Patientaccount/>} />
            <Route path='/patient/wallet' element={<Patientwallet/>} />
            <Route path='/patient/doctor-profile/:id' element={<Patientdoctorprofile/>} />
            <Route path='/patient/selectpatient/:id' element={<Selectpatient/>} />
            <Route path='/patient/currenthealthcondition/:id' element={<Healthcondition/>} />
            <Route path='/patient/otherprofile/:id' element={<Otherprofile/>} />
            <Route path='/patient/patientdocument/:id' element={<Patientdocument/>} />
            <Route path='/patient/paymentgateway/:id' element={<Paymentgateway/>} />
          </Route>
          
          <Route path="/" element={<Home/>} />
          <Route path="/specialty" element={<Speciality/>} />
          <Route path="/specializeddoctorlist/:id" element={<Specializeddoctorlist/>} />
          <Route path="/generalsearch" element={<Generalsearch/>} />
          <Route path="/searchdoctor" element={<Searchdoctor/>} />
          <Route path="/advancesearch" element={<Advancesearch/>} />

        </Route>
        
        <Route path="/admin" element={<Adminlayout/>}>
            <Route path="/admin/allappointments" element={<Allappointment/>} />
            <Route path="/admin/appointmentdetails/:id" element={<Appointmentdetails/>} />
            <Route path="/admin/urgentdoctorschedule" element={<Urgentdoctorschedulelist/>} />
            <Route path="/admin/addurgentdoctorschedule" element={<Addurgentdoctorschedule/>} />
            <Route path="/admin/doctors/urgent/specialization/:id" element={<Editurgentdoctorschedule/>} />
            <Route path="/admin/doctors" element={<Doctors/>} />
            <Route path="/admin/patients" element={<Patients/>} />
            <Route path="/admin/patientdetails/:id" element={<Patientdetails/>} />


            <Route path="/admin/specialty" element={<Specialty/>} />
            <Route path="/admin/create" element={<Createspecialty/>} />
            <Route path="/admin/specialty/edit/:id" element={<Editspecialty/>} />
            <Route path="/admin/role" element={<Role/>} />
            <Route path="/admin/role/create" element={<Createrole/>} />
            <Route path="/admin/role/edit/:id" element={<Editrole/>} />

            <Route path="/admin/email" element={<Emailsetting/>} />
            <Route path="/admin/smsgateway" element={<Smsgatewaysetting/>} />
            <Route path="/admin/servicecharge" element={<Servicechargesetting/>} /> 
            <Route path="/admin/commission" element={<Commissionsetting/>} />

            <Route path="/admin/files/create" element={<Filecreate/>} />
            <Route path="/admin/files" element={<Filelist/>} />

            <Route path="/admin/prescriptions" element={<Prescription/>} />
            <Route path="/admin/prescriptions/:id" element={<Prescriptiondetails/>} />
            
            <Route path="/admin/prescriptiondetails/:id" element={<Prescriptiondetails/>} />
            <Route path="/admin/review" element={<Review/>} />
            <Route path="/admin/trainingname" element={<Trainingnamelist/>} />
            <Route path="/admin/training/edit/:id" element={<Trainingedit/>} />
            <Route path="/admin/trainingname/create" element={<Trainingnameadd/>} />
            
            <Route path="/admin/accounthead" element={<Accountheadlist/>} />
            <Route path="/admin/message" element={<Messagelist/>} />
            <Route path="/admin/diagnosis" element={<Diagnosislist/>} />
            <Route path="/admin/medicine" element={<Medicinelist/>} />
            <Route path="/admin/medicine/create" element={<Addmedicine/>} /> 
            <Route path="/admin/medicine/edit/:id" element={<Medicineedit/>} /> 
            <Route path="/admin/diagnosis/create" element={<Adddiagnosis/>} />
            <Route path="/admin/notification" element={<Notificationlist/>} />
            <Route path="/admin/notification/create/:id" element={<Notificationsend/>} />
            
        </Route>
        
        <Route path="/registration" element={<Registration/>} />
        <Route path ="/logout" element={<Logout/>}/>
      </Routes>
  );
}

export default App;