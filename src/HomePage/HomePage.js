import Categories from "../Data/Categories";
import Carousel from "./Carousel";
import Newsletter from "./Newsletter";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <Newsletter />
    </div>
  );
};

export default HomePage;
