import { useParams } from "react-router";
import products from "../TempData/ProductData";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import papers from "../TempData/PaperData";
import crops from "../TempData/CropData";
import frames from "../TempData/FrameData";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
 
  const { categoryId } = useParams();

  let selectAnnoucement = "Wybierz rozmiar:";
  if (categoryId === '3' || categoryId === '5' || categoryId === '6') 
  {
    selectAnnoucement = "Wybierz rodzaj:";
  }  

  
  const [filteredProducts, setProductByCategory]= useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationInDOM, setConfirmationInDOM] = useState(false);
  const [categories, setCategories] = useState([]);
  const [basketItem, setBasketItem] = useState({
    description: "",
      size: "",
      paper: "",
      crop: "",
      frame: ""
  });

  const handleSizeChange = (event) => {
    // const selectedOption = event.target;
    // console.log(selectedOption);
    setBasketItem(prevState => ({...prevState, size: event.target.value}));
    setBasketItem(prevState =>({...prevState, description: event.target.selectedOptions[0].getAttribute("data-nazwa")}));
    console.log(basketItem);
  };

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
      setBasketItem(prevState => ({ ...prevState, description: product.description, size: product.size}));
    })
      
    .catch(error => {
        console.error('Wystąpił błąd:', error);
    });
  },[categoryId]);

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
 
  const AddToBasket = () => {
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
      <h5 className="bg-dark shadow p-2 rounded text-white">Konfiguruj produkt:</h5>
      <ButtonGroup aria-label="Basic example" className='mt-2 mb-2'>
        {categories.map((category) => 
          (
            <Button key={category.id} variant={category.id === Number(categoryId) ? "dark" : "secondary"}>
              <Link to={`/category/${category.id}`} className='text-decoration-none text-white'>
                {category.name}
              </Link>
            </Button>
            )
        )}
      </ButtonGroup>
      {confirmationInDOM && <p className={`confirmation ${showConfirmation ? '' : 'hide'} bg-success p-2 text-white rounded annoucement`}>
        Produkt dodany do koszyka!</p>}
      <form className="form-product">
        <label htmlFor="odbitki"><strong>{selectAnnoucement}</strong></label>
        <select
          className="form-select select-color text-center mt-1"
          onChange={handleSizeChange}
        >
          {filteredProducts.map((product, index) => (
            <option key={index} value={product.size} data-nazwa={product.description} >
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
        )} */}
        <div className="btn btn-success p-2 mt-2" onClick={AddToBasket}>
          Dodaj do koszyka
        </div>
      </form>
    </div>
    
  );
  
};

export default Products;

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
