import { useState } from "react";
import userData from "../TempData/UserData";

const UserDiscount = () => {
    const loggedUser = false
    const[actualDiscount, getActualDiscount] = useState();
    const [userName, setUserName] = useState()
    

    getUserPromo = () => {
        useEffect(() => { 
            fetch('https://localhost:7162/api/client/{id}', {
              method: 'GET'
            })
              .then(response => {
              if (response.ok) {
              return response.json();
              } 
              else {
              throw new Error('Couldnt load any data');
              }
              })
              .then(
                data => setUserName(data.userName), 
                data => getActualDiscount(data.Discount) )
                
              .catch(error => {
                  console.error('Wystąpił błąd:', error);
              });
            })};

    return(
    <div>

    </div>)
}
export default UserDiscount;