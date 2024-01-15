import { useState, useEffect } from "react";
import userData from "../TempData/UserData";


const UserDiscount = () => {
    const loggedUser = false
    const[actualDiscount, getActualDiscount] = useState();
    const [userName, setUserName] = useState()
    

   const GetUserPromo = () => {
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
              }, []);
            })};

            GetUserPromo();
          

    return(
    <div>
        {userName}
        {actualDiscount}
A ciul wie co tu zreturnować...
    </div>)
}
export default UserDiscount;