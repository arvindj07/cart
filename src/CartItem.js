import React from 'react';

//Creating a component called - Cartitem
//Creating Class-Based component
class CartItem extends React.Component{
  //Constructor
  constructor(){
    //Calling constructor of react.Component class
    super();
//State: its a way to store local data, for that particular component, its a js object
//Setup defailt state
    this.state={
      price:9999,
      title:'Mobile Phone',
      qty:1,
      img:'',
    }

  }

  //for a class component to be a react component we have to use render() method
  // and render() returns JSX which describes the UI for the user
  render(){
    // const {price,title,qty,img} this is called Object re-structuring
    const {price,title,qty,img}= this.state;
    
    return (
      <div className="cart-item">
        <div className="left-block">
    {/* image tag in jsx is like this- <img /> */}
    {/* In-line Styling of elements using Object ie, {styles} */}
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize:25 }}>{this.state.title}</div>
          <div style={{ color: '#777' }}>Rs {price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* {Buttons} */}
            {/* getting icon imge-address from Flaticons Site  */}
            <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1612545050~hmac=47108d1b2af15f5c08db3abdb5033d69" />
            <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612545014~hmac=e39a3964cd463671c148273783e2b528" />
            <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/446/446046.svg?token=exp=1612545077~hmac=d290e6508831824f405e1a657e31f55a" />
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