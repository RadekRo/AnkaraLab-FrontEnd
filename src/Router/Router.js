import Homepage from "./HomePage";import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./NotFound";
import Basket from "./Basket";
import Products from "./Products";
import FetchApi from "../Products/FetchApi/FetchApi";

const RouterReact = () => (
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" component={FetchApi} element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  </div>
)

export default RouterReact;