import React from 'react';
import CartItem from './CartItem'; //Importing CartItem component

//The Root Component- App
//Creating Function-Based component
function App() {
  return (
    <div className="App">
      {/* Calling CartItem Component  */}
      <CartItem />
    </div>
  );
}

export default App;
