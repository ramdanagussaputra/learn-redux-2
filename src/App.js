import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cartItem-action';

let isInitial = true;

function App() {
    const showCart = useSelector((state) => state.UI.showCart);
    const notification = useSelector((state) => state.UI.notification);
    const cartItem = useSelector((state) => state.cartItem);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (!cartItem.isAdd) return;

        dispatch(sendCartData(cartItem));
    }, [cartItem, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    title={notification.title}
                    status={notification.status}
                    message={notification.message}
                />
            )}

            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
