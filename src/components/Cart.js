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
                        <h3>Tourist Place</h3>
                        <p>Tour:{props.cart.length}</p>
                        <h3>Total Cost:{totals.toFixed(2)}</h3>

                        <button type="button" className="btn btn-success text-light ">Buy Now</button>

                        <ul>
                            {
                                cart.map(p => <li>{p.name}</li>)
                            }
                        </ul>
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

