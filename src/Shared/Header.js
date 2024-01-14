import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom border-1">
      <div>
        <Link to="/">
          <img src="/images/alabLogo.jpg" alt="logotyp" />
        </Link>
      </div>
      <div>
        <Link to="/login" className="btn btn-success m-1">
          Logowanie
        </Link>
        <Link to="/register" className="btn btn-outline-primary m-1">
          Rejestracja
        </Link>
        <Link className="btn btn-secondary m-1" to="/basket">
          Koszyk
        </Link>
      </div>
    </div>
  );
};
export default Header;
