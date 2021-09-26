import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const cartReduce = (previous, poet) => previous + poet.cost;
    const totals = cart.reduce(cartReduce, 0)
    // console.log(props)
    return (

        <div>
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        <h3>Order Summary</h3>
                        <p>Items Order:{props.cart.length}</p>
                        <h3>Total:{totals.toFixed(2)}</h3>
                        <a className="btn btn-success">Buy Now</a>
                    </div>
                </div>
            </div>
            {/* <h1>Order Summary</h1>
            <p>Items Order:{props.cart.length}</p>
            <h3>Total:{totals.toFixed(2)}</h3> */}
        </div>
    );
};

export default Cart;

