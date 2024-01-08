let startDate = new Date(2024, 0, 9);
let expiryDate = new Date(startDate);
expiryDate.setDate(startDate.getDate() + 7);

let promotion = {
        id: 1, 
        promotedItemId: 1, 
        startDate: startDate, //DateTime.Now
        expiryDate: expiryDate, // DateTime.Now.AddDays(7)
        discountLvl: 0.2 // 0.05 - 0.2
};
export default promotion