import { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from "react";

const UserDiscount = ({userId, userName, isUserLogged}) => {
    const [myUserName, setUserName] = useState()
    const [actualDiscount, setActualDiscount] = useState()

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
          setUserName(data.name),
          setActualDiscount(data.discount) 
        ))
        .catch(error => {
              console.error('Wystąpił błąd:', error);
          }, []);
      })
    };

    
    return (
        <div className="Register border rounded shadow bg-success text-white mt-4 p-3">
          {GetUserPromo()}
          {myUserName && (
            <p>Witaj {myUserName} <br/>
            Twój aktualny upust: {actualDiscount}
            <ProgressBar striped animated variant="warning" now={50} />
            </p>
          )}
        </div>
      )
  }
  export default UserDiscount;