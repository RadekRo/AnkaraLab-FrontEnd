import products from "../TempData/ProductData";
import promotion from "../TempData/PromotionData";

const promotionInterval = 7
const Promotion = () => {
    const getPromoLvl = () => {
        return (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
    }
    
    const getRandomPromoItemId = () => {
        return products[Math.floor(Math.random() * products.length)].id;
    }
    
    const getProductById = (id) => {
        console.log(`${id} ${products.find(product => product.id === id)}`)
        return products.find(product => product.id === id);
    }

    const createPromotion = () => {
        let today = new Date();
        let newPromotion = {
            id: promotion.id + 1,
            promotedItemId : getRandomPromoItemId(),
            startDate : new Date(today), //DateTime.Now
            expiryDate : new Date(today.setDate(today.getDate() +5)), // DateTime.Now.AddDays(7)
            discountLvl :  getPromoLvl() // 0.05 - 0.2
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