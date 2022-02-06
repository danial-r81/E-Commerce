import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import ecommerceLogo from '../../assets/ecommerce.png';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const cart = useSelector((state) => state.productsReducer.cart);

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'>
            <img
              src={ecommerceLogo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='show cart items'
                color='inherit'>
                <Badge badgeContent={cart?.total_items} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
