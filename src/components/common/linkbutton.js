import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function Linkbutton({url,buttontext}) {

return(
	<Row>
		<Col md={{ span: 12}}>
			<Link to = {url}>
	        <a class="nav-link" href="javascript:void(0)" style={{borderBottom:"1px solid gray",color:"#000000",borderRadius:"0px 0px 0px 0px"}}>  
	            <span>{buttontext}</span><span ><FontAwesomeIcon icon="fas fa-chevron-right"  style={{float:"right"}}/></span>
	        </a>  
	    </Link>
		</Col>
	</Row>
	)
}