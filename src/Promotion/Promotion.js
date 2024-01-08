import products from "../TempData/ProductData";
import promotion from "../TempData/PromotionData";
const Promotion = () => {
    const getPromoLvl = () => {
        return (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
    }
    
    const getRandomPromoItemId = () => {
        return products[Math.floor(Math.random() * products.length)]
    }
    
    const getProductById = (id) => {
        return products.filter((product) => product.id === parseInt(id));
    }

    const createPromotion = () => {
        let today = new Date();
        let newPromotion = {
            id: promotion.id + 1,
            promotedItemId : getRandomPromoItemId(),
            startDate : today, //DateTime.Now
            expiryDate : new Date(today.setDate(today.getDate() +7)), // DateTime.Now.AddDays(7)
            discountLvl :  getPromoLvl() // 0.05 - 0.2
        }
        return newPromotion;
    }

    let currentPromotion = promotion.expiryDate > Date() ? promotion : createPromotion()

    if(currentPromotion > Date()) {
        return (
            <div>
                Tu bedzie zajebista promka 😊
            </div>
        )
    } else {
        createPromotion()
        return (
            <div>
                <div>{currentPromotion.id}</div>
                <div>{currentPromotion.expiryDate.toDateString()}</div>
                <div>{getProductById(currentPromotion.promotedItemId).name}</div>
            </div>
       )
    }
}
export default Promotion;