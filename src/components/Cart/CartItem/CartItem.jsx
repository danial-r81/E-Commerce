import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  handleRemoveFromCart,
  handleUpdateCartQty,
} from '../../../redux/feature/products';

import useStyles from './styles';

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='h4'>{item.name}</Typography>
        <Typography variant='h5'>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type='button'
            size='small'
            onClick={() =>
              dispatch(
                handleUpdateCartQty({
                  productId: item.id,
                  quantity: item.quantity - 1,
                })
              )
            }>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type='button'
            size='small'
            onClick={() =>
              dispatch(
                handleUpdateCartQty({
                  productId: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }>
            +
          </Button>
        </div>
        <Button
          variant='contained'
          type='button'
          color='secondary'
          onClick={() => dispatch(handleRemoveFromCart(item.id))}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
