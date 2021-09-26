import React from 'react';

import './Character.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faLongArrowAltDown, faLowVision, faPlaceOfWorship, faPlaneArrival, faPlaneDeparture, faSearchLocation, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Character = (props) => {

    const { name, img, dialCode, cost, countryCode, country } = props.poet
    const element = <FontAwesomeIcon icon={faLocationArrow} />
    return (
        <div>
            <div className="col">
                <div className="card  w-100" >
                    <div className="card-body border border-primary ">
                        {/* <div className="align-items-center p-2 text-center"> */}
                        <div>
                            <img className="w-100 card-img-top" src={img} alt="" />
                        </div>
                        <h2 className="card-title">Name:{name}</h2>
                        <p className="card-text "><small>Country-Code:{countryCode}</small></p>
                        <p className="card-text ">Country:{country}</p>
                        <p className="card-text "><small>DialCode:{dialCode}</small></p>

                        <p className="card-text"><small>Cost:$ {cost}</small></p>
                        <button onClick={() => props.handleAddToCart(props.poet)} type="button" className="btn btn-success text-light ">{element} Add to Cart</button>
                    </div>
                </div>

            </div>


        </div>
        // </div>


    );
};

export default Character;