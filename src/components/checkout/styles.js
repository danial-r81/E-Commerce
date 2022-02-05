import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  checkoutContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  productsSubtotal: {
    fontSize: '26px',
    color: 'black',
    fontFamily: 'sans-serif',
    padding: '25px 0',
  },
  checkoutText: {
    color: '#10b941',
    fontSize: '28px',
    fontFamily: 'sans-serif',
  },
  buyMoreProducts: {
    color: '#727272',
    width: '20%',
    fontSize: '23px',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    padding: '15px 0',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
}));
