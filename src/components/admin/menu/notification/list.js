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
            return result.isConfirmed
          });

    if(!isConfirm){
            return;
      }else{

            http.delete('/notification/'+id).then((response) => {
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
      name: 'Title',
      selector: row => row.title,
      width: '150px'
  },
  {
      name: 'Message',
      selector: row => row.body,
      width: '150px'
  },
  
  {
      name: 'Action',
      cell:row =><div>
                  <Link to={`/admin/notification/edit/${row.id}`} className='btn'>
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
        <div className="card-header"> Notification List 
          <Link to="/admin/notification/create/631c9b578db9cf9944ed2f66">
            <button type="button" className="btn btn-primary" style={{float: "right"}}>
              <i class="fas fa-plus" aria-hidden="true"> ADD</i>
            </button>
          </Link>
        </div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/notifications`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}