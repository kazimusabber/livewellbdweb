import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';

export default function Footer() {
    return(
        <div>  
            <footer className="sticky-footer bg-white">  
                <div className="container my-auto">  
                  <div className="copyright text-center my-auto">  
                    <span>Copyright © Your Website 2023</span>  
                  </div>  
                </div>  
            </footer>  
        </div> 
    )
}
