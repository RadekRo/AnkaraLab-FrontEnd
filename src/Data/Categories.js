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
  <div className="btn btn-warning btn-lg m-2" key={category.id}><Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
    {category.name} </Link>
  </div>
  ))}
  Dziś był zajebisty dzień, <strong>Trudno się nie zgodzić...</strong>
</div>
);
}

export default Categories;
