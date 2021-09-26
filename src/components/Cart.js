import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const cartReduce = (previous, poet) => previous + poet.cost;
    const totals = cart.reduce(cartReduce, 0)
    // console.log(props)
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Order:{props.cart.length}</p>
            <h3>Total:{totals.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;

