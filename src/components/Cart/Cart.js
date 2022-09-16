import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartItem = useSelector((state) => state.cartItem);
    const { items } = cartItem;

    const cartItemList = items.map((item) => (
        <CartItem
            key={item.title}
            item={{
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
            }}
        />
    ));

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{cartItemList}</ul>
        </Card>
    );
};

export default Cart;
