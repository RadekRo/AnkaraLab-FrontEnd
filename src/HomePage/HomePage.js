import Categories from "../Data/Categories";
import { Link } from "react-router-dom";
import Promotion from "../Promotion/Promotion";

const HomePage = () => {
  return (
    <div>
      <Promotion />
      <Categories />
    </div>
  );
};

export default HomePage;
