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
        <Link to={`/category/${category.id}`} key = {category.id}>
          <div>{category.name}</div>
        </Link>
      ))}
      <Link to="/login" className="btn btn-lg btn-secondary">
        Login
      </Link>
    </div>
  );
};

export default HomePage;
