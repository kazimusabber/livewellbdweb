import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate,Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Search from '../search';
import Datatablecomponent from '../../include/datatablecomponent';
import http from '../../include/http';
export default function List() {
const navigate = useNavigate();
const [delrow, setDelrow] = useState(0);
const [searchurl,setSearchurl]= useState("/search/diagnosis/all");  
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
            http.delete('/diagnosis/'+id).then((response) => {
             if (response.data) {
                swal("Delete Successfully!", "Success");
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
  const search = (searchval) => {
     setSearchurl("search/diagnosis?q="+searchval);
      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max - min);
      setDelrow(rand);
  }

  const columns = [
  {
      name: 'Name',
      selector: row => row.title,
      width: '150px'
  },
  
  {
      name: 'Action',
      cell:row =><div>
                  <Link to={`/admin/diagnosis/edit/${row.id}`} className='btn'>
                     <i className="material-icons text-warning">edit</i>
                  </Link>
                  <button type="button" className="btn" onClick={(e) => clickDelete(e, row.id)} >
                    <i className="material-icons text-danger">Delete</i>
                  </button></div>,
      selector: row => row.id,
      width: '200px'
  }
];
  
  const renderDatatable = () => {
    return (
         <Datatablecomponent columns = {columns} url={searchurl} delrow = {delrow}></Datatablecomponent>
      )
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"> Diagnosis List 
          <Search search={search}></Search>
          <Link to="/admin/diagnosis/create">
            <button type="button" className="btn btn-primary" style={{float: "right"}}>
              <i class="fas fa-plus" aria-hidden="true"> ADD</i>
            </button>
          </Link>
        </div>
        <div className="card-body">
         {renderDatatable()}
        </div>
      </div>
    </div>
  );
}