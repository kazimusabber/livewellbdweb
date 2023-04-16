
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import http from './http';
export default function Datatablecomponent({columns,url,delrow}) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage,delrow])

  const fetchData = (page, per_page) => {
    http.get(url+`?page=${page}&limit=${per_page}`).then((response) => {

      console.log(response.data.data);
        setIsLoaded(true);
        setItems(response.data.data);
      if(response.data.metadata){
        setTotalRows(response.data.metadata.total);
      }else{
        setTotalRows(50);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  const handlePageChange = page => {
    fetchData(page, perPage);
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
    );
  }
}
