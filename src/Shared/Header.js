import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <Link to="/"><img src='/images/alabLogo.jpg' alt='logotyp' /></Link>
      </div>
      <div>
        <Link to="/basket"> Baskjet</Link>
      </div>
    </div>
  );
};
export default Header;
