import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate,Link } from "react-router-dom";
import Swal from 'sweetalert2'

import Datatablecomponent from '../../include/datatablecomponent';
import axios from 'axios';
export default function Specialty() {
const navigate = useNavigate();
  
const http = axios.create({
    baseURL: 'https://server.livewellbd.com/api/v1.0',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token'),
    },
  });  



const clickEdit = (e, id) => {
  e.preventDefault();
  
};

const clickDelete = (e, id) => {
    e.preventDefault();
    const isConfirm = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

    if(!isConfirm){
            return;
      }else{

            http.delete('/specialties/'+id).then((response) => {
             if (response.data) {
                swal("Delete Successfully!", "error");
              } 
              else {
                swal(response.message);
              }
          })
          .catch((error) => {
            console.log(error);
        })

    }
    
};


  const columns = [
  {
    name: 'SL',
    cell: (row, index) => index + 1,  //RDT provides index by default
    width: '60px'
  },
  {
      name: 'Specialty',
      selector: row => row.name,
      width: '150px'
  },
  {
      name: 'Image',
      selector: row => row.imageUrl,
      cell:row =><div><img src={row.imageUrl} alt="nothing" height="40px;" width="40px;"/></div>,
      width: '150px'
  },
  {
      name: 'Action',
      cell:row =><div>
                  <Link to={`/admin/specialty/edit/${row.id}`} className='btn'>
                     <i className="material-icons text-warning">edit</i>
                  </Link>
                  <button type="button" className="btn" onClick={(e) => clickDelete(e, row.id)} >
                    <i className="material-icons text-danger">Delete</i>
                  </button></div>,
      selector: row => row.id,
      width: '200px'
  }
];


	return (
    <div className="container">
      <div className="card">
        <div className="card-header"> Specialty List <Link to="/admin/create">
      <button type="button" className="btn btn-primary" style={{float: "right"}}>
        <i class="fas fa-plus" aria-hidden="true"> ADD</i>
      </button>
    </Link></div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/specialties`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}