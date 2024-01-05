import categories from "../TempData/CategoryData";
import { Link } from "react-router-dom";
console.log(categories);

const HomePage = () => {
  return (
    <div>
      <div>
        <img src='/images/alabLogo.jpg' alt='logotyp' />
      </div>
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key = {category.id} className="btn btn-warning btn-lg m-2">
          <div>{category.name}</div>
        </Link>
      ))}
      <Link to="/login" className="btn btn-lg btn-secondary m-2">
        Login
      </Link>
      <Link to="/register" className="btn btn-lg btn-secondary m-2">
        Register
      </Link>
    </div>
  );
};

export default HomePage;
