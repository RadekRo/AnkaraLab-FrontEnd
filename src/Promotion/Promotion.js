import products from "../TempData/ProductData";
import promotion from "../TempData/PromotionData";

const promotionInterval = 7
const Promotion = () => {
    const getPromoLvl = () => {
        return (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
    }
    
    const getRandomPromoItemId = () => {
        return products[Math.floor(Math.random() * products.length)]
    }
    
    const getProductById = (id) => {
        console.log("Produkty" + products.find((product) => product.id === parseInt(id)))
        return products.find((product) => product.id === parseInt(id));
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
            <button onClick={createPromotion}>nowa promka tak o</button>
            <div>Promotion Id: {currentPromotion.id}</div>
            <div>Data stworzenia promki; {currentPromotion.startDate.toDateString()}</div>
            <div>Data wygasniecia promki: {currentPromotion.expiryDate.toDateString()}</div>
            <div>Nazwa produktu na promce: {getProductById(currentPromotion.promotedItemId).name}</div>
        </div>
    )
}
export default Promotion;