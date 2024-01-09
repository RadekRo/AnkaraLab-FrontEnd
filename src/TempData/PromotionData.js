let startDate = new Date();
let expiryDate = new Date(startDate);
expiryDate.setDate(expiryDate.getDate() + 5); 

let promotion = {
        id: 1, 
        promotedItemId: 1, 
        startDate: new Date(2023, 0, 1), //DateTime.Now
        expiryDate: expiryDate, // DateTime.Now.AddDays(7)
        discountLvl: 0.2 // 0.05 - 0.2
};
export default promotion