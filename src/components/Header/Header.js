import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className=" text-center">
                {/* <div class="card-header">s

                 </div> */}
                <div className="container d-flex justify-content-center card-title text-center b-2 shadow p-3 mb-5  rounded w-100  bg-info">

                    <div>
                        <h2 className="" >Memorable Place</h2>
                        <div>
                            <p className="card-text">The city is flying and we are fighting an army of robots ,and I have a bow and arrow.</p>
                            <h1>Total Budget: 100 Million</h1>
                        </div>
                    </div>
                </div>

            </div>


        </div >
    );
};

export default Header;