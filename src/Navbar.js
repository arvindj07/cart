import React from 'react';

// As Navbar Component Doesnt have any 'state', so we can use Functional Component, So it doesnt require render() func

const Navbar = (props)=> { 
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1612809612~hmac=cb0a779439966a51adf3a19bca3757d7" alt="cart-icon" />
        <span style={styles.cartCount}>3</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};



export default Navbar;