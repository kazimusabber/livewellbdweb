import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./header";
import Sidebar from "./sidebar";
import {Outlet} from 'react-router-dom';
import Footer from "./footer";
export default function Adminlayout() {
    return (
        <>
            <div>  
                <div id="wrapper">  
                    <Sidebar></Sidebar>  
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                            <Header />  
                            <Outlet/>  
                        </div>  
                        <Footer />  
                    </div>  
                </div>  
            </div>  
        </>
      )
  }
