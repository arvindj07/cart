import React from 'react';
import CartItem from './CartItem'; //Importing CartItem component

class Cart extends React.Component{ 
  render(){
      const arr=[1,2,3,4,5] ;
    return (
      <div className="cart">
        { arr.map( (item)=>{    //arr.map() func is used to render all thes items in an array
          return item+5;
        })}
      </div>
    );
  }

}



export default Cart;