import React, { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css";
import Banner from "./Banner/Banner";
import Promo from "./Promo/Promo";
import Category from "./Category/Category";
import "./Category/Category.css";

const images = [
  {
    id: 1,
    path: "/images/zdjecia.jpg",
    link: "/products/1",
    alt: "Zamów odbitki fotograficzne",
    css: "Category.css"
  },
  {
    id: 2,
    path: "/images/wydruki-wielkoformatowe.jpg",
    link: "/products/2",
    alt: "Zamów wydruki wielkoformatowe",
  },
  {
    id: 5,
    path: "/images/plotno.jpg",
    link: "/products/5",
    alt: "Zamów wydruki na płótnie",
  },
  {
    id: 6,
    path: "/images/magnetyczne.jpg",
    link: "/products/6",
    alt: "Zamów wydruki magnetyczne",
  },
  {
    id: 3,
    path: "/images/gadzet.jpg",
    link: "/products/3",
    alt: "Zamów wydruki na fotogażetach",
  },
];
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Promo />
      {images.map((image) => (
        <Link to={image.link} key={image.id}>
          <img src={image.path} alt={image.alt} className="Category" />
        </Link>
      ))}
      {/* <Container>
        <Row>
          <Category name="Odbitki cyfrowe" />
          <Category name="Gadżety"/>
          <Category />
        </Row>
      </Container> */}
    </div>
  );
};
export default HomePage;

