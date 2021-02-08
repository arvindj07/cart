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

  getCount= ()=>{
    const {products} = this.state;

    let count=0;

    //Loop over Each element in Products Array
    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;   //We dont need to use setState to re-render, coz while adding/deleting a product, the Inc-prod or 
                    //Dec-prod func will re-render this App Component and This func(i.e,getCount) will be called again while passing Props(i.e,count) in NAVBAR Component
  }

  render(){
    const {products}=this.state;      // Object De-structuring 
    return (
      <div className="App">
        <Navbar 
          count={this.getCount()} //We r not passing the func here,instead, we r calling the func and returning the result
        />  
        <Cart
          products= {products}                              //Array of products
          onIncreaseQuantity={this.handleIncreaseQuantity}  //Increase Qty func
          onDecreaseQuantity={this.handleDecreaseQuantity}  //Decrease Qty func
          onDeleteProduct={this.handleDeleteProduct}        //Delete Product
        />
      </div>
    );
  }
  
}

export default App;
