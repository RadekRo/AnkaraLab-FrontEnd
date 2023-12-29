import categories from '../TempData/CategoryData';
import { Link } from 'react-router-dom';
console.log(categories)

const HomePage = () => {

return (
  <div>
    <h1>HomePage</h1>
    {categories.map(category =>(
      <Link to = {`/category/${category.id}`} key = {category.id}><div>{category.name}</div></Link>
    ))}
  </div>
)
};

export default HomePage;