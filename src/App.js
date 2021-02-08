import React from 'react';
import Cart from './Cart';

//The Root Component- App
//Creating Function-Based component
function App() {
  return (
    <div className="App">
      {/* Calling CartItem Component  */}
      {/* <CartItem /> */}
      <Cart />
    </div>
  );
}

export default App;
