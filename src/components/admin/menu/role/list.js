import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate,Link } from "react-router-dom";
import Swal from 'sweetalert2'

import Datatablecomponent from '../../include/datatablecomponent';
import http from '../../include/http';
export default function Specialty() {
const navigate = useNavigate();
  
const clickEdit = (e, id) => {
  e.preventDefault();
  
};

  const columns = [
  {
    name: 'SL',
    cell: (row, index) => index + 1,  //RDT provides index by default
    width: '60px'
  },
  {
      name: 'Role As',
      selector: row => row.name,
      width: '150px'
  },
  
  {
      name: 'Permission',
      selector: row => <button type="button" className="btn">
                    <i className="material-icons text-warning">Permission</i>
                  </button>,
      width: '200px'
  }
];


	return (
    <div className="container">
      <div className="card">
        <div className="card-header"> Role List <Link to="/admin/role/create">
      <button type="button" className="btn btn-primary" style={{float: "right"}}>
        <i class="fas fa-plus" aria-hidden="true"> ADD</i>
      </button>
    </Link></div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/roles`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}