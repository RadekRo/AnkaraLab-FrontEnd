import { useParams } from "react-router";
import products from "../TempData/ProductData";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import papers from "../TempData/PaperData";
import crops from "../TempData/CropData";
import frames from "../TempData/FrameData";
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
    });
  };
  const getFramesByCategory = (id) => {
    return frames.filter((frame) => frame.categoryId === parseInt(id));
  };
  // symulacja fetcha
  const filteredProducts = getProductByCategory(categoryId);
  const filteredPapers = getPapersByCategory(categoryId);
  const filteredCrops = getCropsByCategory(categoryId);
  const filteredFrames = getFramesByCategory(categoryId);
  let showFrames = false;
  if (filteredFrames.length > 0) {
    showFrames = true;
  }
  console.log(filteredFrames);
  console.log(showFrames);

  const [selectedSize, setSelectedSize] = useState(
    filteredProducts.find((product) => product.isDefault)
  );
  const [selectedPaper, setSelectedPaper] = useState(
    filteredPapers.find((paper) => paper.isDefault)
  );
  const [selectedCrop, setSelectedCrop] = useState(
    filteredCrops.find((crop) => crop.isDefault)
  );
  const [selectedFrame, setSelectedFrame] = useState(
    filteredFrames.find((frame) => frame.isDefault)
  );

  const basketItem = {
    size: selectedSize.name,
    paper: selectedPaper.name,
    crop: selectedCrop.name,
    //frame: selectedFrame.name,
  };

  const handleSizeChange = (event) => {
    setSelectedSize(filteredProducts[event.target.value - 1]);
  };
  const handlePaperChange = (event) => {
    setSelectedPaper(filteredPapers[event.target.value - 1]);
  };
  const handleCropChange = (event) => {
    setSelectedCrop(filteredCrops[event.target.value - 1]);
  };
  const handleFrameChange = (event) => {
    setSelectedFrame(filteredFrames[event.target.value - 1]);
  };
  const AddToBasket = () => {
    let storageBasket = JSON.parse(sessionStorage.getItem("Basket"));
    if(!storageBasket){
      storageBasket=[];
    }
    storageBasket.push(basketItem);
    sessionStorage.setItem("Basket", JSON.stringify(storageBasket));
  };
  console.log(JSON.parse(sessionStorage.getItem("Basket")));
  return (
    <div className="text-center">
      <Link to="/" className="btn btn-sn btn-info p-1">
        HomePage
      </Link>
      <h1>Products</h1>
      <form className="form-product">
        <label htmlFor="odbitki">Wybierz produkt:</label>
        <select
          className="form-select select-color"
          id="produkt"
          name="size"
          value={selectedSize.id}
          onChange={handleSizeChange}
        >
          {filteredProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="papier">Wybierz papier:</label>
        <select
          className="form-select select-color"
          id="papier"
          name="papier"
          value={selectedPaper.id}
          onChange={handlePaperChange}
        >
          {filteredPapers.map((paper) => (
            <option key={paper.id} value={paper.id}>
              {paper.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="crop">Wybierz kadrowanie:</label>
        <select
          className="form-select select-color"
          id="crop"
          name="crop"
          value={selectedCrop.id}
          onChange={handleCropChange}
        >
          {filteredCrops.map((crop) => (
            <option key={crop.id} value={crop.id}>
              {crop.name}
            </option>
          ))}
        </select>
        {showFrames && (
          <>
        <label htmlFor="frame">Wybierz ramkę:</label>
        <select
          className="form-select select-color"
          id="frame"
          name="frame"
          value={selectedFrame.id}
          onChange={handleFrameChange}
        >
          {filteredFrames.map((frame) => (
            <option key={frame.id} value={frame.id}>
              {frame.name}
            </option>
          ))}
        </select>
        </>
        )}
        <div className="btn btn-info p-1" onClick={AddToBasket}>
          dawaj baskjet
        </div>
      </form>
    </div>
  );
};

export default Products;
