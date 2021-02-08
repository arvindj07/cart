import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//The Root Component- App
//Creating Function-Based component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
