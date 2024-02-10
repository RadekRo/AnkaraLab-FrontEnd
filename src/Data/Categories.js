import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
return( 
<div>
  {categories.map((category) => (
  <div className="btn m-1" key={category.id}>
    <Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
      <img src={`/images/categories/${category.id}.jpg`} alt=" " /> 
    </Link>
  </div>
  ))}
</div>
);
}

export default Categories;