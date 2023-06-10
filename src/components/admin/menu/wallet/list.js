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

export default function Wallet() {
const navigate = useNavigate();


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
      name: 'Payment Date',
      selector: row => "",
      width: '150px'
  },
  {
      name: 'Payment Amount',
      selector: row => "",
      width: '150px'
  },
  {
      name: 'Action',
      cell:row =><div>
                    <Link to={`/admin/payment`} className='btn'>
                       <i className="material-icons text-warning">Details</i>
                    </Link>
                  </div>,
      selector: row => "",
      width: '200px'
  }
];

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Wallet</div>
        <div className="card-body">
            <Datatablecomponent columns = {columns} url={`/payment`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}