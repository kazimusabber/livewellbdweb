import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 
import Datatablecomponent from '../../include/datatablecomponent';
import http from '../../include/http';
import Search from '../search';
import Swal from 'sweetalert2'
export default function Urgentdoctorschedulelist() {
const [delrow, setDelrow] = useState(0);
const [searchurl,setSearchurl]= useState("/doctors/urgent/specialties");
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
        if(result.isConfirmed == false){
            return false;
          }else{
            http.delete('/doctors/urgent/'+id).then((response) => {
             if (response.data) {
                swal("Delete Successfully!", "Success");
                const min = 1;
                const max = 100;
                const rand = min + Math.random() * (max - min);

                setDelrow(rand);
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


  const search = (searchval) => {
     setSearchurl("search/medicine?q="+searchval);
      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max - min);
      setDelrow(rand);
  }

  const columns = [
  {
    name: 'SL',
    cell: (row, index) => index + 1,  //RDT provides index by default
    width: '60px'
  },
  {
      name: 'Doctor Name',
      selector: row => row.doctor,
      width: '150px'
  },
  {
      name: 'Specialty',
      selector: row => row.specialization.name,
      width: '150px'
  },
  {
      name: 'Date',
      selector: row => row.date,
      width: '150px'
  },
  {
      name: 'Start Time',
      selector: row => row.from,
      width: '200px'
  },
  {
      name: 'End Time',
      selector: row => row.to,
      width: '150px'

  },
  {
      name: 'Action',
      cell:row =><div>
                  <Link to={`/admin/doctors/urgent/specialization/${row.specialization.id}`} className='btn'>
                     <i className="material-icons text-warning">edit</i>
                  </Link>
                  <button type="button" className="btn" onClick={(e) => clickDelete(e, row.id)} >
                    <i className="material-icons text-danger">Delete</i>
                  </button></div>,
      selector: row => row.id,
      width: '200px'
  },
];

const renderDatatable = () => {
  return (
      <Datatablecomponent columns = {columns} url={searchurl} delrow = {delrow}></Datatablecomponent>
    )
}


	return (
    <div className="container">
      <div className="card">
     
        <div className="card-header"> Urgent Doctor List  
           {/* <Search search={search}></Search> */}
          <Link to="/admin/Addurgentdoctorschedule">
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