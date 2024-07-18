import React, { useState } from "react";
import SignUp from "./Auth.js";

export default function Popup() {
  
 
  const [showSignUp, setShowSignUp] = useState(false);


  
 
  const openSignIn = () => {
   
    setShowSignUp(false);
  };

  
 
  const closeSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <>
    
          <div className="App">
      
      <SignUp showModal={showSignUp} onClose={closeSignUp} openSignIn={openSignIn} />

    </div>
      
         
      
      
    </>
  );
}