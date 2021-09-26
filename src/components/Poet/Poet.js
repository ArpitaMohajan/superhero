import React, { useEffect, useState } from 'react';
import Cart from '../Cart';
import Character from '../Character/Character';
import './Poet.css'

const Poet = () => {


    const [poet, setPoet] = useState([]);
    // const [quarry, setQuarry] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setPoet(data));
    }, []);

    const handleAddToCart = (poet) => {
        const newCart = [...cart, poet]
        setCart(newCart)

    }

    return (
        <div>

            <div className="container-fluid mb-5 row">
                <div className="row row-cols-1 row-cols-md-3 g-4 col-lg-9">
                    {
                        poet.map(poets => <Character
                            key={poets.key}
                            poet={poets}
                            handleAddToCart={handleAddToCart}></Character>)

                    }
                </div>
                <div className="cart-container">
                    {/* <h3>total Places</h3>
                    <h4>total:</h4> */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>


        </div>

    );
};

export default Poet;