import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate,Link } from "react-router-dom";
import http from '../../include/http';
import Swal from 'sweetalert2'

import Datatablecomponent from '../../include/datatablecomponent';

export default function List() {
const navigate = useNavigate();

  const columns = [
  {
    name: 'SL',
    cell: (row, index) => index + 1,  //RDT provides index by default
    width: '60px'
  },
  {
      name: 'Patient Name',
      selector: row => row.patientProfile.name,
      width: '150px'
  },
  {
      name: 'Patient Mobile',
      selector: row => row.patientProfile.phone,
      width: '150px'
  },
  {
      name: 'Doctor Name',
      selector: row => row.doctor.name,
      width: '150px'
  },
  {
      name: 'Doctor Mobile',
      selector: row => row.doctor.phone,
      width: '150px'
  },
  {
      name: 'Specialty',
      selector: row => row.doctor.specialization,
      width: '150px'
  },
  {
      name: 'Appointment Date & Time',
      selector: row => row.createdAt,
      width: '200px'
  },
  {
      name: 'Action',
      cell:row =><Link to={`/admin/prescriptiondetails/${row.appointmentId}`} className='btn'>
                     <i className="material-icons text-warning">View</i>
                  </Link>
                  ,
      selector: row => row.id,
      width: '200px'
  }
];


  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/prescriptions/all`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}