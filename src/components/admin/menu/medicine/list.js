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
const [searchurl,setSearchurl]= useState("/search/medicine/all");  
const clickEdit = (e, id) => {
  e.preventDefault();
  
};


  const search = (searchval) => {
     setSearchurl("search/medicine?q="+searchval);

      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max - min);
      setDelrow(rand);
  }

  const renderDatatable = () => {
  return (
        <Datatablecomponent columns = {columns} url={searchurl} delrow = {delrow} ></Datatablecomponent>
      )
  }

  const columns = [
  {
      name: 'Medicine Name',
      selector: row => row.name,
      width: '150px'
  },
  {
      name: 'Manufacturer',
      selector: row => row.manufacturer,
      width: '150px'
  },
  {
      name: 'Type',
      selector: row => row.type,
      width: '150px'
  },

  {
      name: 'Image',
      cell: row => <img src={row.imageUrl} width={50} alt={"nothing"}/>,
      selector: row => row.link,
      width: '150px'
  },
  
  {
      name: 'Action',
      cell:row =><div>
                  <Link to={`/admin/medicine/edit/${row.name}`} className="btn">
                     <i className="material-icons text-warning">edit</i>
                  </Link>
                  </div>,
      selector: row => row.id,
      width: '200px'
  }
];


  return (
    <div className="container">
      <div className="card">
        <div className="card-header"> Medicine List 
          <Search search={search}></Search>
          <Link to="/admin/medicine/create">
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