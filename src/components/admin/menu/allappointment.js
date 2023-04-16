import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate,Link } from "react-router-dom";


import Datatablecomponent from '../include/datatablecomponent';
import axios from 'axios';

export default function Allappointment() {

  const columns = [
  {
    name: 'SL',
    cell: (row, index) => index + 1,  //RDT provides index by default
    width: '60px'
  },
  {
      name: 'Doctor Name',
      selector: row => row.doctor.name,
      width: '150px'
  },
  {
      name: 'Specialty',
      selector: row => row.doctor.specialization,
      width: '150px'
  },
  {
      name: 'Contact No',
      selector: row => row.doctor.phone,
      width: '150px'
  },
  {
      name: 'Patient Name',
      selector: row => row.user.name,
      width: '200px'
  },
  {
      name: 'Contact No',
      selector: row => row.user.phone,
      width: '150px'

  },
  {
      name: 'App . Date',
      selector: row => row.date,
      width: '200px'
  },
  {
      name: 'App . Time',
      selector: row => row.time,
      width: '200px'
  },
  {
      name: 'App . Type',
      selector: row => "",
      width: '200px'
  },
  {
      name: 'Status',
      cell: row => row.status == 'accepted' || row.status == 'Accepted'? <span className="badge bg-success">{row.status}</span> : null || row.status == 'pending' ? <span className="badge bg-info">{row.status}</span> : null || row.status == 'declined'? <span className="badge bg-danger">{row.status}</span> : null || row.status == 'booking-incomplete'? <span className="badge bg-secondary">{row.status}</span> : null,
      selector: row => row.status,
      width: '100px'
  },

  {
      name: 'Details',
      cell: row => <div>
                  <Link to={`/admin/appointmentdetails/${row.id}`} className='btn'>
                     <i className="material-icons text-info">Details</i>
                  </Link></div>,
      selector: row => row.id,
      width: '120px'
  },


  
];

  const navigate = useNavigate();

	return (
    <div className="container">
      <div className="card">
        <div className="card-header"> All Appointment List </div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/appointments`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}