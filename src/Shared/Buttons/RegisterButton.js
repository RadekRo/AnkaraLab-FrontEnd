import React from 'react'
import { Link } from "react-router-dom";

const RegisterButton = () => {
   
  return (
    <div>
      <Link to="../../SignIn">
        <button>SignIn</button>
      </Link>
    </div>
  )
}

export default RegisterButton