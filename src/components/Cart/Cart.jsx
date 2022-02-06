import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { handleEmptyCart } from '../../redux/feature/products';
import CartItem from './CartItem/CartItem';

import useStyle from './styles';

const Cart = () => {
  const classes = useStyle();
  const cart = useSelector((state) => state.productsReducer.cart);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      shopping cart is empty,{' '}
      <Link to='/' className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            variant='contained'
            className={classes.emptyButton}
            size='large'
            type='button'
            color='secondary'
            onClick={() => dispatch(handleEmptyCart())}>
            Empty Cart
          </Button>
          <Button
            component={Link}
            to='/checkout'
            variant='contained'
            className={classes.checkoutButton}
            size='large'
            type='button'
            color='primary'>
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart?.line_items) return 'Loading';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h4' gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
