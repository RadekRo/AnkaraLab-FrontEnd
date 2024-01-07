import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Link to="/">
          <img src="/images/alabLogo.jpg" alt="logotyp" />
        </Link>
      </div>
      <div>
        <Link to="/login" className="btn btn-secondary m-1">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary m-1">
          Register
        </Link>
        <Link className="btn btn-info m-1" to="/basket">
          Baskjet
        </Link>
      </div>
    </div>
  );
};
export default Header;
