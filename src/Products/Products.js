import { useParams } from "react-router";
import products from "../TempData/ProductData";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import papers from "../TempData/PaperData";
import crops from "../TempData/CropData";
import "./Products.css";


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
  const getCropsByCategory = (id) => {
    return crops.filter((crop) => {
      const categoryIdString = crop.categoryId.toString();
      const idString = id.toString();
      return categoryIdString.includes(idString);
    })
  }
  // symulacja fetcha
  const filteredProducts = getProductByCategory(categoryId);
  const filteredPapers = getPapersByCategory(categoryId);
  const filteredCrops = getCropsByCategory(categoryId);

  const [selectedSize, setSelectedSize]=useState(filteredProducts.find(product=>product.isDefault));
  const [selectedPaper, setSelectedPaper]=useState(filteredPapers.find(paper=>paper.isDefault));
  const [selectedCrop, setSelectedCrop]=useState(filteredCrops.find(crop=>crop.isDefault));
  console.log(selectedCrop)

  const handleSizeChange = (event) => {setSelectedSize(filteredProducts[event.target.value -1 ])}
  const handlePaperChange = (event) => {setSelectedPaper(filteredPapers[event.target.value -1])}
  const handleCropChange = (event) => {setSelectedCrop(filteredCrops[event.target.value -1])}
  return (
    <div className="text-center">
      <Link to="/" className="btn btn-sn btn-info p-1">
        HomePage
      </Link>
      <h1>Products</h1>
    <form className="form-product">
      <label htmlFor="odbitki">Wybierz produkt:</label>
      <select className="form-select select-color" id="produkt" name="size" value={selectedSize.id} onChange={handleSizeChange}>
        {filteredProducts.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="papier">Wybierz papier:</label>
      <select className="form-select select-color" id="papier" name="papier" value={selectedPaper.id} onChange={handlePaperChange}>
        {filteredPapers.map((paper) => (
          <option key={paper.id} value={paper.id}>
            {paper.name}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="crop">Wybierz kadrowanie:</label>
      <select className="form-select select-color" id="crop" name="crop" value={selectedCrop.id} onChange={handleCropChange}>
        {filteredCrops.map((crop) => (
          <option key={crop.id} value={crop.id}>
            {crop.name}
          </option>
        ))}
      </select>
      </form>
    </div>
  );
};

export default Products;
