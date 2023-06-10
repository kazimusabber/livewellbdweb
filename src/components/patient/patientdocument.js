import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Takepicture from "../common/takepicture";
import Agree from "../common/agree";
import swal from 'sweetalert';
import http from '../admin/include/http';
import Modal from 'react-bootstrap/Modal'
import { useNavigate, useParams } from 'react-router-dom'
export default function Patientdocument() {

    const [doctorprofile, setDoctorprofile] = useState([]);
    const navigate = useNavigate();
    const [patientname, setPatientname] = useState('')
    const [dob, setDob] = useState('')
    const [relation, setRelation] = useState('')
    const [gender, setGender] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    
    
    const [selectedfile, SetSelectedFile] = useState([]);
    const [Files, SetFiles] = useState([]);


    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const InputChange = (e) => {
        // --For Multiple File Input
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                SetSelectedFile((preValue) => {
                    return [
                        ...preValue,
                        {
                            
                            filename: e.target.files[i].name,
                            filetype: e.target.files[i].type,
                            fileimage: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }


    const DeleteSelectFile = (id) => {
        if(window.confirm("Are you sure you want to delete this Image?")){
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
        }else{
            // alert('No');
        }
        
    }


     const DeleteFile = async (id) => {
        if(window.confirm("Are you sure you want to delete this Image?")){
            const result = Files.filter((data)=>data.id !== id);
            SetFiles(result);
        }else{
            // alert('No');
        }
    }









    function handleShow() {
      setShow(true)
    }
      



      const { doctorid,id } = useParams()
      let handleSubmit = async (e) => {
        e.preventDefault();

        http.post('/users/patient-profile', {
            name: patientname,
            dob: dob,
            relation:relation,
            gender:gender,
            weight:weight,
            height:height,
            bloodGroup:bloodgroup
        }).then((response) => {
            if (response.data) {
                   swal("Data Added Successfully");
                    navigate(`/patient/selectpatient/${id}`);
                } 
                else {
                    swal(response.message);
                }
            })
            .catch((error) => {
                console.log(error);
        })
    }


  
  useEffect(() => {
    fetchdoctorData();
  },[])

   

  const fetchdoctorData = () => {
    http.get(`doctors/${doctorid}`).then((response) => {
         console.log(response.data.data); 
          setDoctorprofile(response.data.data);
        
    })
    .catch((error) => {
      console.log(error);
    })
  }
    return(
        <>
        <Container>
            <Row>
                <div className='item'>
                    <div style={{padding: '10px 10px 0px 10px',border: "1px solid #F1F0F2",borderRadius: "4px"}}>
                        <div className="row">
                          <div className="col-8 col-md-8 col-lg-8" style={{marginTop: '5%'}}>
                            <h5 className="mt-3"><b>{doctorprofile.name} </b></h5>
                            <h5 className="mt-3"><b>{doctorprofile.designation} </b></h5>
                            <h6  style={{marginBottom: '5%'}}> {doctorprofile.specialization}</h6> 
                        </div>
                        <div className="col-4 col-md-4 col-lg-4" style={{paddingRight: '0px'}}>
                            <img src={doctorprofile.avatar}  className="img-fluid" height="200px" width="200px;" />
                          </div>
                        </div>
                    </div>
                </div>
             
                <Col md={{ span: 12}} style={{marginTop:"5%"}}>
                  <form  onSubmit={handleSubmit}>
                    <Takepicture></Takepicture>  
                    <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px",marginTop:"20px"}}>
                     
                      <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                      
                    </p>
                    {
                          selectedfile.map((data, index) => {
                              const { id, filename, filetype, fileimage, datetime, filesize } = data;
                              return (
                                  
                                <div className="row">
                                  <div className="col-md-4">
                                    {
                                      filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                          <div className="file-image"> 
                                            <img src={fileimage} alt="" style={{height:"150px",width:"150px"}} className="img-thumbnail"/>
                                          </div> :
                                          <div className="file-image"><i className="far fa-file-alt"></i></div>
                                    }
                                  </div>
                                  <div className="col-md-8">
                                  <h6>{filename}</h6>
                                          
                                          <p><span>Size : {filesize}</span><span className="ml-2">Modified Time : {datetime}</span></p>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => DeleteSelectFile(id)}>Delete</button>
                                  </div>
                                </div>
                              )
                          })
                      }
                    {Files.length > 0 ?
                        <div className="kb-attach-box">
                            <hr />
                            {
                                Files.map((data, index) => {
                                    const { id, filename, filetype, fileimage, datetime, filesize } = data;
                                    return (
                                        <div className="file-atc-box" key={index}>
                                            {
                                                filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                    <div className="file-image"> 
                                                      <img src={fileimage} alt=""/>
                                                    </div> :
                                                    <div className="file-image"><i className="far fa-file-alt"></i></div>
                                            }
                                            <div className="file-detail">
                                                <h6>{filename}</h6>
                                                <p><span>Size : {filesize}</span><span className="ml-3">Modified Time : {datetime}</span></p>
                                                <div className="file-actions">
                                                    <button className="file-action-btn" onClick={() => DeleteFile(id)}>Delete</button>
                                                    <a href={fileimage}  className="file-action-btn" download={filename}>Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : ''}
                        <br></br>
                    <a onClick={handleShow} href="javascript:void(0)">
                      <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px"}}>
                          <span>{"I don't want to share anything"}</span>
                      </p>
                    </a>
                    <a onClick={handleShow} href="javascript:void(0)">
                      <p  style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px"}}><span>{"NEXT"}</span></p>
                    </a>
                  </form>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Terms & Condition</Modal.Title>
              </Modal.Header>
              <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Modal.Body>
              <Modal.Footer>
                <button className="btn btn-default" onClick={handleClose}>
                  Close
                </button>
                  <Link to={`/patient/paymentgateway/${doctorid}/${id}`}><span className="text-Danger">{"NEXT"}</span></Link>
              </Modal.Footer>
            </Modal>
        </Container>
          
        </>
    )
}
