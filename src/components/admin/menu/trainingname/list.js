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
export default function List() {
const navigate = useNavigate();
  
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
            
            if(result.isConfirmed == false){
              return false;
              }else{
                    http.delete('/training/'+id).then((response) => {
                     if (response.data) {
                        swal("Delete Successfully!", "info");
                        datatablecomponent();
                      } 
                      else {
                        swal(response.message);
                      }
                  })
                  .catch((error) => {
                    console.log(error);
                })
              }
          });
    };


  

  function datatablecomponent(){

    const columns = [
  {
      name: 'Training Name',
      selector: row => row.name,
      width: '150px'
  },
  {
      name: 'Training Field',
      selector: row => row.fields,
      width: '150px'
  },
  {
      name: 'Institute Name',
      selector: row => "",
      width: '150px'
  },
  {
      name: 'Year of Completion',
      selector: row => "",
      width: '150px'
  },
  
  {
      name: 'Action',
      cell:row =><div>
                  <Link to={`/admin/training/edit/${row.id}`} className='btn'>
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

      <Datatablecomponent columns = {columns} url={`/training`}></Datatablecomponent>
    )
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"> Training Name List <Link to="/admin/trainingname/create">
      <button type="button" className="btn btn-primary" style={{float: "right"}}>
        <i class="fas fa-plus" aria-hidden="true"> ADD</i>
      </button>
    </Link></div>
        <div className="card-body">
          {datatablecomponent()} 
        </div>
      </div>
    </div>
  );
}