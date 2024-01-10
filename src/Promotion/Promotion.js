import products from "../TempData/ProductData";
import promotion from "../TempData/PromotionData";
import "./Promotion.css";

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
        <div class="promotion-details">
    <div class="bg">
        <div class="info-row">
            <span class="label">Promotion Id:</span>
            <span class="value">{currentPromotion.id}</span>
        </div>
        <div class="info-row">
            <span class="label">Data stworzenia promki:</span>
            <span class="value">{currentPromotion.startDate.toDateString()}</span>
        </div>
        <div class="info-row">
            <span class="label">Data wygaśnięcia promki:</span>
            <span class="value">{currentPromotion.expiryDate.toDateString()}</span>
        </div>
        <div class="info-row">
            <span class="label">Id produktu na promce:</span>
            <span class="value">{currentPromotion.promotedItemId}</span>
        </div>
        <div class="info-row">
            <span class="label">Nazwa produktu na promce:</span>
            <span class="value">{getProductById(currentPromotion.promotedItemId).name}</span>
        </div>
    </div>
</div>

    )
}
export default Promotion;