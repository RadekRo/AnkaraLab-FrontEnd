import { Link } from "react-router-dom";  
import "./Header.css";

const Header = () => (
    <div className="Header">
     <div> 
     <Link to = {`/`}>Home page</Link><br/>
     <Link to = {`/basket`}>Basket</Link><br/>
     <Link to = {`/faq`}>Faq</Link><br/>
   </div>
    </div>
  )
  
  export default Header;