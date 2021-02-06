import React from 'react';

//Creating a component called - Cartitem
//Creating Class-Based component
class CartItem extends React.Component{
  //Constructor
  constructor(){
    //Calling constructor of react.Component class
    super();
    //State: its a way to store local data, for that particular component, its a js object
    //Setup default state
    this.state={
      price:999,
      title:'Mobile Phone',
      qty:1,
      img:'',
    }

    //binding in constructor
    // this.increaseQuantity=this.increaseQuantity.bind(this);
    //Or we can use 'increaseQuantity' as an ARROW FUNCTION
  }

  //ARROW FUNC To Increase quantity
  increaseQuantity= () => {
    // console.log('this.state',this.state);

    //setState() is a func inherited from React.Component
    //setState() helps to re-render our component with the updated value
    //i.e, this.state.qty+=1 will only update the value, but not re-render it,so the updated value wont be visible on the page until its refreshed/re-rendered, so we use setState() func

    //setState Form-1, we use object here
    // this.setState({
    //   qty: this.state.qty+1,
    // });

    //setState Form-2, we use arrow func and return an object using prevState
    // Therefor, if prevState is required the use this Form of setState()
    this.setState((prevState) => {
      return{
        qty:prevState.qty+1,
      }
    });

  }

  decreaseQuantity= () => {
    this.setState((prevState)=>{
      if(prevState.qty>0)
      return {
        qty:prevState.qty-1,
      }
    })
  };

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
            <img 
              alt="increase" 
              className="action-icons" 
              src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1612630193~hmac=24b706a63bd2ee51341d706718729e53" 
              //u can do this to bind-> onClick={this.increaseQuantity.bind(this)} or do the binding in constructor
              onClick={this.increaseQuantity} /> 
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612630231~hmac=c33b25645db86852b7be52406ccf0b5b" 
              onClick={this.decreaseQuantity} />
            <img 
              alt="delete" 
              className="action-icons" 
              src="https://www.flaticon.com/svg/vstatic/svg/446/446046.svg?token=exp=1612630253~hmac=d00d4f290bd57f4696bb3af19ee957b1" />
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