import Categories from "../Data/Categories";
import Promotion from "../Promotion/Promotion";
import UserDiscount from "../UserDiscount/UserDiscount";

const HomePage = () => {
  return (
    <div>
      <Promotion />
      <Categories />
      <UserDiscount />
    </div>
  );
};

export default HomePage;
