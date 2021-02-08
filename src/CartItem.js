import React from 'react';

const CartItem= (props)=>{
  

  //for a class component to be converted into a react component we have to use render() method
  // and render() returns JSX which describes the UI for the user
  
  // const {price,title,qty,img} this is called Object re-structuring
  const {price,title,qty,img}= props.product;  //NOTE:Props cant be changed inside the component
                                    
  const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    } = props;    //as CartItem is now a functional component, so we dont need to write this.props
  
  return (
    <div className="cart-item">
      <div className="left-block">
        {/* image tag in jsx is like this-  <img /> */}
        {/* In-line Styling of elements using Object ie, {styles} */}
        <img style={styles.image} src={product.img}/>
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
            //here , the callback func is calling the func in Cart Component ,passed via Props
            onClick={() => onIncreaseQuantity(product)} />  
          <img 
            alt="decrease" 
            className="action-icons" 
            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612630231~hmac=c33b25645db86852b7be52406ccf0b5b" 
            onClick={() => onDecreaseQuantity(product)} />
          <img 
            alt="delete" 
            className="action-icons" 
            src="https://www.flaticon.com/svg/vstatic/svg/446/446046.svg?token=exp=1612630253~hmac=d00d4f290bd57f4696bb3af19ee957b1" 
            onClick={()=>onDeleteProduct(product.id)}/>  
        </div>
      </div>
    </div>

  );  

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