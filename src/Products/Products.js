import { useParams } from "react-router";
import products from "../TempData/ProductData";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState,useEffect } from "react";
import papers from "../TempData/PaperData";
import crops from "../TempData/CropData";
import frames from "../TempData/FrameData";
import "./Products.css";

const Products = () => {
  // pobranie parametrów z adresu w przegladarce
  const { categoryId } = useParams();

  let selectAnnoucement = "Wybierz rozmiar:";

  if (categoryId === '3' || categoryId === '5' || categoryId === '6') {
    selectAnnoucement = "Wybierz rodzaj:";
  }  

  // symulacja endpointu na backendzie
  // const getProductByCategory = (id) => {
  //   return products.filter((product) => product.categoryId === parseInt(id));
  // };
  // const getPapersByCategory = (id) => {
  //   return papers.filter((paper) => paper.categoryId === parseInt(id));
  // };
  // const getCropsByCategory = (id) => {
  //   return crops.filter((crop) => {
  //     const categoryIdString = crop.categoryId.toString();
  //     const idString = id.toString();
  //     return categoryIdString.includes(idString);
  //   });
  // };
  // const getFramesByCategory = (id) => {
  //   return frames.filter((frame) => {
  //     const categoryIdString = frame.categoryId.toString();
  //     const idString = id.toString();
  //     return categoryIdString.includes(idString);
  //   });
  // };
  // symulacja fetcha
  const [filteredProducts, setProductByCategory]= useState([]);
  const [size, setSize] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationInDOM, setConfirmationInDOM] = useState(false);

  useEffect(() => { 
fetch(`https://localhost:7162/api/products/byCategory/${categoryId}`, {
  method: 'GET'
})
  .then(response => {
  if (response.ok) {
  return response.json();
  } 
  else {
  throw new Error('Błąd sieci!');
  }
  })
  .then(data => {
    setProductByCategory(data);
    const product = data[0];
    setSize(product.description);
  })
    
  .catch(error => {
      console.error('Wystąpił błąd:', error);
  });
},[categoryId]);

  // const filteredPapers = getPapersByCategory(categoryId);
  // const filteredCrops = getCropsByCategory(categoryId);
  // const filteredFrames = getFramesByCategory(categoryId);
  // let showFrames = false;
  // if (filteredFrames.length > 0) {
  //   showFrames = true;
  // }

  // const [size, setSize] = useState(
  //   filteredProducts.find((product) => product.isDefault)
  // );

  // const [selectedPaper, setSelectedPaper] = useState(
  //   filteredPapers.find((paper) => paper.isDefault)
  // );
  // const [selectedCrop, setSelectedCrop] = useState(
  //   filteredCrops.find((crop) => crop.isDefault)
  // );
  // const [selectedFrame, setSelectedFrame] = useState(
  //   filteredFrames.find((frame) => frame.isDefault)
  // );

  // const basketItem = {
  //   size: selectedSize,
  // //   paper: selectedPaper.name,
  // //   crop: selectedCrop.name,
  // //   frame: selectedFrame.name,
  // };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  // const handlePaperChange = (event) => {
  //   setSelectedPaper(filteredPapers[event.target.value - 1]);
  // };
  // const handleCropChange = (event) => {
  //   setSelectedCrop(filteredCrops[event.target.value - 1]);
  // };
  // const handleFrameChange = (event) => {
  //   setSelectedFrame(filteredFrames[event.target.value - 1]);
  // };
  // const AddToBasket = () => {
  //   let storageBasket = JSON.parse(sessionStorage.getItem("Basket"));
  //   if (!storageBasket) {
  //     storageBasket = [];
  //   }
  //   storageBasket.push(basketItem);
  //   sessionStorage.setItem("Basket", JSON.stringify(storageBasket));
  // };
  // console.log(JSON.parse(sessionStorage.getItem("Basket")));

  const AddToBasket = () => {
    let basketItem = {
      size: size,
    };
    let storageBasket = JSON.parse(sessionStorage.getItem("Basket"));
    if (!storageBasket) {
      storageBasket = [];
    }
    storageBasket.push(basketItem);
    console.log(storageBasket);
    sessionStorage.setItem("Basket", JSON.stringify(storageBasket));

    setConfirmationInDOM(true);
    setShowConfirmation(true);
    setTimeout(() => {
    setShowConfirmation(false);
    setTimeout(() => setConfirmationInDOM(false), 3000);
  }, 100);
  };

  return (
    
    <div className="text-center">
      <h4 className="bg-dark p-2 rounded text-white">Konfiguruj produkt:</h4>
      {confirmationInDOM && <p className={`confirmation ${showConfirmation ? '' : 'hide'} bg-success p-2 text-white rounded`}>Produkt dodany do koszyka!</p>}
      <form className="form-product">
        <label htmlFor="odbitki">{selectAnnoucement}</label>
        <select
          className="form-select select-color"
          onChange={handleSizeChange}
          value={size}
        >
          {filteredProducts.map((product, index) => (
            <option key={index} value={product.description}>
              {product.description}
            </option>
          ))}
        </select>
        
        
        <br />
        {/* <label htmlFor="papier">Wybierz papier:</label>
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
        )}*/}
        <div className="btn btn-success p-2 mt-2" onClick={AddToBasket}>
          Dodaj do koszyka
        </div>
      </form>
    </div>
    
  );
  
};

export default Products;
