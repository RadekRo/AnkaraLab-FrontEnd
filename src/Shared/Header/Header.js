import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="d-flex justify-content-between">
      {/* <div> 
      <Link to = {`/faq`}>Faq</Link><br/>
      </div> */}
    <div><Link to = {`/`}><img src="/images/logo.jpg" alt="logo" /></Link></div>
    <div><Link to = {`/faq`}>FAQs</Link></div>
    <div><Link to = {`/basket`}>Koszyk</Link></div>
    <div><Link to = {`/contact`}>O nas</Link></div>

    
  </div>
);

export default Header;
