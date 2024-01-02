import { useParams } from "react-router";
import products from "../TempData/ProductData";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import papers from "../TempData/PaperData";

const Products = () => {
  // pobranie parametrów z adresu w przegladarce
  const { categoryId } = useParams();
  // symulacja endpointu na backendzie
  const getProductByCategory = (id) => {
    return products.filter((product) => product.categoryId === parseInt(id));
  };
  const getPapersByCategory = (id) => {
    return papers.filter((paper) => paper.categoryId === parseInt(id));
  };
  // symulacja fetcha
  const filteredProducts = getProductByCategory(categoryId);
  const filteredPapers = getPapersByCategory(categoryId);

  const [selectedSize, setSelectedSize]=useState(filteredProducts.find(product=>product.isDefault));
  const [selectedPaper, setSelectedPaper]=useState(filteredPapers.find(paper=>paper.isDefault));
  console.log(selectedSize)

  const handleSizeChange = (event) => {setSelectedSize(filteredProducts[event.target.value -1 ])}
  const handlePaperChange = (event) => {setSelectedSizePaper(filteredPapers[event.target.value -1])}
  return (
    <div>
      <Link to="/" className="btn btn-sn btn-info p-1">
        {" "}
        HomePage{" "}
      </Link>
      <h1>Products</h1>

      <label htmlFor="odbitki">Wybierz produkt:</label>
      <select id="produkt" name="size" value={selectedSize.id} onChange={handleSizeChange}>
        {filteredProducts.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>

      <label htmlFor="papier">Wybierz papier:</label>
      <select id="papier" name="papier" value={selectedPaper.id} onChange={handlePaperChange}>
        {filteredPapers.map((paper) => (
          <option key={paper.id} value={paper.id}>
            {paper.name}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Products;
