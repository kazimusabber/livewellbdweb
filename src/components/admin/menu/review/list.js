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
                    http.delete('/doctors/reviews/'+id).then((response) => {
                     if (response.data) {
                        swal("Delete Successfully!", "info");
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
      name: 'Review User',
      selector: row => row.user.name,
      width: '150px'
  },
  {
      name: 'User Contact',
      selector: row => row.user.phone,
      width: '150px'
  },
  {
      name: 'Comments',
      selector: row => row.comment,
      width: '300px'
  },
  {
      name: 'Rating',
      selector: row => row.rating,
      width: '150px'
  },
  {
      name: 'Action',
      cell:row =><div>
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
        <div className="card-header"> Review List</div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/reviews`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}