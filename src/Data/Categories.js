import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => { 
fetch('https://localhost:7162/api/category', {
  method: 'GET'
})
  .then(response => {
  if (response.ok) {
  return response.json();
  } 
  else {
  throw new Error('Couldnt get any data');
  }
  })
  .then(
    data => setCategories(data) )

  .catch(error => {
      console.error('Wystąpił błąd:', error);
  });
},[]);

return ( 
<div>
  {categories.map((category) => (
  <div className="btn m-3 highlight" key={category.id}>
    <Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
      <img src={`/images/categories/${category.id}.jpg`} alt=" " /> 
    </Link>
  </div>
  ))}
</div>
);
}

export default Categories;