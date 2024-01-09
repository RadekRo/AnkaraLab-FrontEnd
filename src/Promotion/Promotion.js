import products from "../TempData/ProductData";
import promotion from "../TempData/PromotionData";

const Promotion = () => {
    const getPromoLvl = () => {
        return (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
    }
    
    const getRandomPromoItemId = () => {
        return products[Math.floor(Math.random() * products.length)].id;
    }
    
    const getProductById = (id) => {
        return products.find(product => product.id === id);
    }

    const createPromotion = () => {
        let today = new Date();
        let newPromotion = {
            id: promotion.id + 1,
            promotedItemId : getRandomPromoItemId(),
            startDate : new Date(today),
            expiryDate : new Date(today.setDate(today.getDate() +7)),
            discountLvl :  getPromoLvl()
        }
        return newPromotion;
    }

    let currentPromotion = promotion.expiryDate > Date() ? promotion : createPromotion()
    return (
        <div>
            <div>Promotion Id: {currentPromotion.id}</div>
            <div>Data stworzenia promki; {currentPromotion.startDate.toDateString()}</div>
            <div>Data wygasniecia promki: {currentPromotion.expiryDate.toDateString()}</div>
            <div>Id produktu na promce: {currentPromotion.promotedItemId}</div>
            <div>Nazwa produktu na promce: {getProductById(currentPromotion.promotedItemId).name}</div>
        </div>
    )
}
export default Promotion;