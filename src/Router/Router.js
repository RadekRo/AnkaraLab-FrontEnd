import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import NotFound from "./NotFound";
import Basket from "./Basket";
import Products from "./Products";


const RouterReact = () => (
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  </div>
)

export default RouterReact;