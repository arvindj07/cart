import React from 'react';
import CartItem from './CartItem'; //Importing CartItem component

class Cart extends React.Component{ 

  //Constructor
  constructor(){
    //Calling constructor of react.Component class
    super();
    //State: its a way to store local data, for that particular component, its a js object
    //Setup default state
    this.state={   
      products:[    // array of products in this.state
        {
          price:99,
          title:'Watch',
          qty:4,
          img:'',
          id:1,
        },
        {
          price:999,
          title:'Mobile Phone',
          qty:10,
          img:'',
          id:2,
        },
        {
          price:2399,
          title:'Laptop',
          qty:1,
          img:'',
          id:3,
        }
      ]
    }

  }

  render(){
    const {products} = this.state;
    return (
      <div className="cart">
        
        {products.map( (product)=>{
          return (
            <CartItem 
              product={product} 
              key={product.id} 
            />
          )
        } )}
      </div>
    );
  }

}



export default Cart;