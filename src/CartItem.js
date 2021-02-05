import React from 'react';

//Creating a component called - Cartitem
//Creating Class-Based component
class CartItem extends React.Component{
  //for a class component to be a react component we have to use render() method
  // and render() returns JSX which describes the UI for the user
  render(){
    return (
      <div className="cart-item">
        <div className="left-block">
    {/* In-line Styling of elements using Object ie, {styles} */}
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize:25 }}>Phone</div>
          <div style={{ color: '#777' }}>Rs 999</div>
          <div style={{ color: '#777' }}>Qty: 1</div>
          <div className="cart-item-actions">
            {/* {Buttons} */}
          </div>
        </div>
      </div>
    );
  }

}

const styles= {
  image:{
    height: 110,
    width: 110,
    borderRadius: 4, //cant write border-radius in jsx, have to use camel-casing ie, borderRadius
    background:'#ccc',
  }
};

export default CartItem;