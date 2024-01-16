import { useState, useEffect } from "react";
import React from "react";

const UserDiscount = ({userId, userName, isUserLogged}) => {
    const [myUserName, setUserName] = useState()
    const [actualDiscount, setActualDiscount] = useState()
    console.log(userId, userName, isUserLogged)

   const GetUserPromo = () => {
        useEffect(() => { 
            fetch(`https://localhost:7162/api/client/${userId}`, {
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
            .then(data => (
              console.log(data),
              setUserName(data.name),
              setActualDiscount(data.discount) 
            ))
            .catch(error => {
                  console.error('Wystąpił błąd:', error);
              }, []);
            })};

            GetUserPromo();
    return (
        <div>
          {myUserName && (
            <p>Witaj {myUserName} <br/>
            Twój aktualny upust: {actualDiscount} 
            </p>
          )}
        </div>
      )
  }
  export default UserDiscount;