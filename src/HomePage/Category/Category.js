import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = props => {
    return (
    
    <Col sm={12} md={6} lg={4} className="p-5 border">
        <Link to={`../products/1`}>{props.name}</Link>
    </Col>
    );
  };
  export default Category;