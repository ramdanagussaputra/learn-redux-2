import { useSelector, useDispatch } from 'react-redux';
import { UIActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
    const numItem = useSelector((state) => state.cartItem.totalAmount);
    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(UIActions.toggle());
    };

    return (
        <button onClick={toggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{numItem}</span>
        </button>
    );
};

export default CartButton;
