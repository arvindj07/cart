import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//Class Component
class App extends React.Component {
  //Constructor
  constructor(){
    //Calling constructor of React.Component class
    super();
    //State: its a way to store local data, for that particular component, its a js object
    //Setup default state
    this.state={   
      products:[    // array of products in this.state
        {
          price:99,
          title:'Watch',
          qty:4,
          img:'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id:1,
        },
        {
          price:999,
          title:'Mobile Phone',
          qty:10,
          img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id:2,
        },
        {
          price:2399,
          title:'Laptop',
          qty:1,
          img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id:3,
        }
      ]
    }

  }

  // Func to Increase Qty of an Item
  //This func is passed to CartItem via Props and CartItem will raise a call onClick of increase button/link
  handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index=products.indexOf(product);//to get the idx of product(that has been passed frm CartItem) within 
                                          //'products' array in this.state

    products[index].qty+=1;

    //Used to re-render the Component, So that the increase in Qty is reflected on Browser
    this.setState({
      // products:products,  // this can be also written as below in shorthand as both have same name   
      products
    })
  }

  //Decrease Qty of Item
  handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index=products.indexOf(product);

    if(products[index].qty==0){
      return;
    }
    products[index].qty-=1;

    this.setState({
      products:products,  
    })
  }

  //Deleting a Product Component using Product id 
  handleDeleteProduct= (id)=>{
    const {products}=this.state;

    const items = products.filter((item)=> item.id!=id); //Returns the elements of an array that meet the condition 
                                                          //specified in a callback function.
    this.setState({
      products:items,
    });
  }

  getCartCount= ()=>{
    const {products} = this.state;

    let count=0;

    //Loop over Each element in Products Array
    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;   //We dont need to use setState to re-render, coz while adding/deleting a product, the Inc-prod or 
                    //Dec-prod func will re-render this App Component and This func(i.e,getCount) will be called again while passing Props(i.e,count) in NAVBAR Component
  }

  getCartTotal= ()=>{
    const {products} = this.state;
    let cartTotal=0;

    //Another way of Looping through Products Array
    products.map((product)=>{
      cartTotal+=product.qty*product.price;
    })

    return cartTotal;
  }

  render(){
    const {products}=this.state;      // Object De-structuring 
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()} //We r not passing the func here,instead, we r calling the func and returning the result
        />  
        <Cart
          products= {products}                              //Array of products
          onIncreaseQuantity={this.handleIncreaseQuantity}  //Increase Qty func
          onDecreaseQuantity={this.handleDecreaseQuantity}  //Decrease Qty func
          onDeleteProduct={this.handleDeleteProduct}        //Delete Product
        />
        <div style={{padding:10, fontSize:20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
