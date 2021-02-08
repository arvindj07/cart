import React from 'react';
import CartItem from './CartItem'; //Importing CartItem component

// Functional Component
const Cart =(props)=>{   
  
    const {products} = props;       // Geting Product Array via Props
    return (
      <div className="cart">
        
        {products.map( (product)=>{ //Looping through all the objects in products array and Displaying it as Component
          return (
            <CartItem               //We can pass data from Parent(i.e, Cart) to Child(i.e,CartItem) using PROPS
              product={product}     //'product' is a Passed as a Prop
              key={product.id}      // specifying 'key' to differntiate bw each CartItem component passed
              onIncreaseQuantity={props.onIncreaseQuantity}  //Increase Qty func via Props
              onDecreaseQuantity={props.onDecreaseQuantity}  //Decrease Qty func via Props
              onDeleteProduct={props.onDeleteProduct}        //Delete Product via Props
            />
          )
        } )}
      </div>
    );
  

}



export default Cart;