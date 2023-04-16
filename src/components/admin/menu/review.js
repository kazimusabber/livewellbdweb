import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate,Link } from "react-router-dom";


import Datatablecomponent from '../include/datatablecomponent';
import axios from 'axios';
export default function Doctor() {

const clickEdit = (e, id) => {
    e.preventDefault();
    console.log("Row Id", id);
};

const clickDelete = (e, id) => {
    e.preventDefault();
    console.log("Row Id", id);
};



  const columns = [
  {
      name: 'Doctor Name',
      selector: row => row.name,
      width: '150px'
  },
  {
      name: 'Gender',
      selector: row => row.gender,
      width: '150px'
  },
  {
      name: 'Specialization',
      selector: row => row.specialization,
      width: '150px'
  },
  {
      name: 'Online',
      cell: row => row.isOnline == true ? <span class="badge bg-success">Active</span> : <span class="badge bg-danger">Offline</span>,
      selector: row => row.status,
      width: '100px'
  },
  {
      name: 'Action',
      cell:row =><div><button type="button" className="btn" onClick={(e) => clickEdit(e, row._id)} >
                    <i className="material-icons text-warning">edit</i>
                  </button>
                  <button type="button" className="btn" onClick={(e) => clickDelete(e, row._id)} >
                    <i className="material-icons text-danger">Delete</i>
                  </button></div>,

      selector: row => row._id,
      width: '200px'
  }
];


  const navigate = useNavigate();
  

	return (
    <div className="container">
      <div className="card">
        <div className="card-header">Review</div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/doctors`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}