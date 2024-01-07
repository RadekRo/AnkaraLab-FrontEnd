import categories from "../TempData/CategoryData";
import { Link } from "react-router-dom";
console.log(categories);

const HomePage = () => {
  return (
    <div>
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key = {category.id} className="btn btn-warning btn-lg m-2">
          <div>{category.name}</div>
        </Link>
      ))}
   
    </div>
  );
};

export default HomePage;
