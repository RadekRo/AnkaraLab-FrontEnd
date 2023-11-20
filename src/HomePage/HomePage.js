import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const images = [
  {
    id: 1,
    path: "/images/zdjecia.jpg",
    link: "/products/1",
    alt: "Zamów odbitki fotograficzne",
  },
  {
    id: 2,
    path: "/images/wydruki-wielkoformatowe.jpg",
    link: "/products/2",
    alt: "Zamów wydruki wielkoformatowe",
  },
  {
    id: 3,
    path: "/images/plotno.jpg",
    link: "/products/3",
    alt: "Zamów wydruki na płótnie",
  },
  {
    id: 4,
    path: "/images/magnetyczne.jpg",
    link: "/products/4",
    alt: "Zamów wydruki magnetyczne",
  },
  {
    id: 5,
    path: "/images/gadzet.jpg",
    link: "/products/5",
    alt: "Zamów wydruki na fotogażetach",
  },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      {images.map((image) => (
        <Link to={image.link}>
          <img src={image.path} alt={image.alt} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
