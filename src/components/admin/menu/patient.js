import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useNavigate,Link } from "react-router-dom";
import Datatablecomponent from '../include/datatablecomponent';

export default function Patient() {


  const defaultActivevalue  = false;
  const [activestatus, setActivestatus] = useState(defaultActivevalue)
  const handleSwitchOnChange = () => {
  const newActivealue = !defaultActivevalue;
      setActivestatus(newActivealue);
  };


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
    name: 'SL',
    cell: (row, index) => index + 1,  //RDT provides index by default
    width: '60px'
  },
  {
      name: 'Patient Name',
      selector: row => row.name,
      width: '150px'
  },
  {
      name: 'Phone',
      selector: row => row.phone,
      width: '150px'
  },
  {
      name: 'Age',
      selector: row => row.dob,
      width: '150px'
  },
  {
      name: 'Gender',
      selector: row => row.gender,
      width: '150px'
  },
  
  {
      name: 'Active',
      cell: row => row.isActive == true ? <span class="badge bg-success">Active</span> : <span class="badge bg-danger">Inactive</span>,
      selector: row => row.isActive,
      width: '100px'
  },
  {
      name: 'Action',
      cell:row =><div>
                  <BootstrapSwitchButton size="sm" checked={defaultActivevalue} onChange={handleSwitchOnChange} />
                  <button type="button" className="btn" onClick={(e) => clickEdit(e, row.id)} >
                    <i className="material-icons text-warning">edit</i>
                  </button>
                  <button type="button" className="btn" onClick={(e) => clickDelete(e, row.id)} >
                    <i className="material-icons text-danger">Delete</i>
                  </button></div>,

      selector: row => row._id,
      width: '250px'
  },
  {
      name: 'Notification',
      cell:row =><div>
                  <Link to={`/admin/notification/create/${row.id}`} className='btn'>
                     <i className="material-icons text-info">Send</i>
                  </Link></div>,

      selector: row => row.id,
      width: '150px'
  }
];


  
  

	return (
    <div className="container">
      <div className="card">
        <div className="card-header"> Patient List </div>
        <div className="card-body">
          <Datatablecomponent columns = {columns} url={`/users/patients`}></Datatablecomponent>
        </div>
      </div>
    </div>
  );
}