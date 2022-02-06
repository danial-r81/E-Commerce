import { Link } from 'react-router-dom';
import { ArrowForwardIos } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { handleEmptyCart } from '../../redux/feature/products';

import useStyles from './styles';

const Checkout = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const cart = useSelector((state) => state.productsReducer.cart);
  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.productsSubtotal}>
        your subtotal is: {cart?.subtotal?.formatted_with_symbol}
      </div>
      <div className={classes.checkoutText}>Thank You for yout time!</div>
      <Link
        to='/'
        className={classes.buyMoreProducts}
        onClick={() => dispatch(handleEmptyCart())}>
        Buy more products <ArrowForwardIos />
      </Link>
    </div>
  );
};

export default Checkout;
