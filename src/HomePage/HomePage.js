import { Link, Route, Routes } from "react-router-dom";  
import Basket from "../Router/Basket";
import Products from "../Router/Products";

const HomePage = () => (
    <div>
     Home page<br/>
     <Link to = {`/`}>Home page</Link><br/>
     <Link to = {`/products`}>Products</Link><br/>
     <Link to = {`/basket`}>Basket</Link><br/>

     <Routes>
        <Route path={`/products`} element={<Products/>}/>
        <Route path={`/basket`} element={<Basket/>}/>
     </Routes>
   </div>
  )
  
  export default HomePage;