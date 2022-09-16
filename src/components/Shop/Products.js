import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
    {
        title: 'Test',
        price: 6,
        quantity: 1,
        description: 'This is a first product - amazing!',
    },
    {
        title: 'Test2',
        price: 10,
        quantity: 1,
        description: 'This is a second product - amazing!',
    },
    {
        title: 'Test3',
        price: 20.11,
        quantity: 1,
        description: 'This is a third product - amazing!',
    },
];

const Products = (props) => {
    const productItemList = DUMMY_DATA.map((product) => (
        <ProductItem
            key={product.title}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            description={product.description}
        />
    ));

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>

            <ul>{productItemList}</ul>
        </section>
    );
};

export default Products;
