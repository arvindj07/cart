import React from 'react';

//Creating a component called - Cartitem
//Creating Class-Based component
class CartItem extends React.Component{
  
  //To show that setState() is synchornous in Api calls
  // testing () {
  //   //We r using promise to simulate an Api call
  //   const promise=new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(()=>{
  //     //setState acts like synchronous call here
  //     this.setState({
  //       qty:this.state.qty+10,
  //     });

  //     this.setState({
  //       qty:this.state.qty+10,
  //     });

  //     this.setState({
  //       qty:this.state.qty+10,
  //     });

  //     console.log('state',this.state);
  //   });

  // }

  //ARROW FUNC To Increase quantity
  increaseQuantity= () => {
    // console.log('this.state',this.state);

    //setState() is a func inherited from React.Component
    //setState() is asynchronous
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
    },()=>{  //as setState() is asynchronous,we can call a func like this to execute it after a prevState func is executed
      console.log("this.state",this.state);
    });
    
    // BATCHING
    //In the Form-1 of setState() func, Batching takes place
    //Batching- In this, even if we make multiple setState calls, React will combine all these calls to one setState() call, so that our App is efficient by re-rendering the component only once
    // i.e, While making multiple setState() calls, React only takes the last call into consideration

    //In the Form-2 of setState() func, Batching takes place,i.e, component is only re-rendered once, but
    //the each of the callback funnctions will get executed bcoz it get queued up and gets executed one-by-one, and due to the prevState the state will also get updated each time

    //DRWABACK OF BATCHING: 
    //outside  of eventHandlers ,React doesnt perform Batching, and here setState() call is synchronous call

  }

  // Arrow func to Decrease Qty
  decreaseQuantity= () => {
    const {qty} = this.state;
      
    if(qty==0){
      return;
    }

    this.setState((prevState)=>{
      return {
        qty:prevState.qty-1,
      }
    })
  };

  //for a class component to be converted into a react component we have to use render() method
  // and render() returns JSX which describes the UI for the user
  render(){
    // const {price,title,qty,img} this is called Object re-structuring
    const {price,title,qty,img}= this.props.product;

    // console.log(this.props);
    return (
      <div className="cart-item">
        <div className="left-block">
          {/* image tag in jsx is like this-  <img /> */}
          {/* In-line Styling of elements using Object ie, {styles} */}
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize:25 }}>{title}</div>
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