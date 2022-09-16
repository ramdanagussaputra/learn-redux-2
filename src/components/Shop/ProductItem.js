import { useDispatch } from 'react-redux';
import { cartItemActions } from '../../store/cartItem-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { title, price, description, quantity } = props;

    const item = {
        title,
        price,
        quantity,
    };

    const addItemHandler = () => {
        dispatch(cartItemActions.addItem({ item, isAdd: true }));
    };
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>

                <p>{description}</p>

                <div className={classes.actions}>
                    <button onClick={addItemHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
