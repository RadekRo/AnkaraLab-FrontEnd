import { Link } from "react-router-dom";  
import "./Header.css";

const Header = () => (
    <div className="Header">
     This is our header
     <div>
     <Link to = {`/`}>Home page</Link><br/>
     <Link to = {`/basket`}>Basket</Link><br/>
   </div>
    </div>
  )
  
  export default Header;