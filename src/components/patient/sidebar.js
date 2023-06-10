import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Linkbutton from "../common/linkbutton";
import { Link } from 'react-router-dom';
export default function Home() {

    return(
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{marginTop:"10px"}}>
            <Linkbutton url={`/patient/my-account/${localStorage.getItem("patientid")}`} buttontext={"My Account"}></Linkbutton>
            <Linkbutton url={`/patient/allprescription/${localStorage.getItem("patientid")}`} buttontext={"Prescriptions"}></Linkbutton>
            <Linkbutton url={"/patient/wallet"} buttontext={"Wallet"}></Linkbutton>
            <Linkbutton url={`/patient/patient-file/${localStorage.getItem("patientid")}`} buttontext={"All my Documents"}></Linkbutton>
            <Linkbutton url={"/patient/chat"} buttontext={"Chat and Notification"}></Linkbutton>
            <Linkbutton url={"/patient/complaints"} buttontext={"Complaints"}></Linkbutton>
            <Linkbutton url={"/patient/fovourite-doctor"} buttontext={"Favourite Doctors"}></Linkbutton>
            <Linkbutton url={"/patient/logout"} buttontext={"Logout"}></Linkbutton>
        </div>
    )
}
