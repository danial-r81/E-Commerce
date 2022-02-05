import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowForwardIos } from '@material-ui/icons';

import useStyles from './styles';

const Checkout = ({ cart, handleEmptyCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.productsSubtotal}>
        your subtotal is: {cart?.subtotal?.formatted_with_symbol}
      </div>
      <div className={classes.checkoutText}>Thank You for yout time!</div>
      <Link
        to='/'
        className={classes.buyMoreProducts}
        onClick={handleEmptyCart}>
        Buy more products <ArrowForwardIos />
      </Link>
    </div>
  );
};

export default Checkout;
